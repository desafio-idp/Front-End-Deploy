// Salvar perfil
document.getElementById("btnSalvar").addEventListener("click", function() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const bio = document.getElementById("bio").value;

  const perfil = { nome, email, senha, bio };
  localStorage.setItem("perfilUsuario", JSON.stringify(perfil));

  const msg = document.getElementById("mensagem");
  msg.textContent = "✅ Perfil salvo com sucesso!";
  msg.style.color = "green";
});

// Limpar dados
document.getElementById("btnLimpar").addEventListener("click", function() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("senha").value = "";
  document.getElementById("bio").value = "";
  document.getElementById("foto").value = "";
  document.getElementById("preview").style.display = "none";
  localStorage.removeItem("perfilUsuario");

  const msg = document.getElementById("mensagem");
  msg.textContent = "🗑️ Dados limpos com sucesso!";
  msg.style.color = "red";
});

// Preview da imagem
document.getElementById("foto").addEventListener("change", function(e) {
  const file = e.target.files[0];
  const preview = document.getElementById("preview");

  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      preview.src = event.target.result;
      preview.style.display = "block";
      preview.style.width = "100px";
      preview.style.height = "100px";
      preview.style.borderRadius = "50%";
      preview.style.marginTop = "10px";
    };
    reader.readAsDataURL(file);
  } else {
    preview.style.display = "none";
  }
});

document.addEventListener('DOMContentLoaded', () => {
    // Pega o nome do arquivo HTML atual (ex: 'login.html', 'cadastro.html')
    const page = window.location.pathname.split('/').pop();

    if (page === 'login.html') {
        setupLoginPage();
    } else if (page === 'cadastro.html') {
        setupCadastroPage();
    } else if (page === 'esqueci-senha.html') {
        setupEsqueciSenhaPage();
    } 
});


function setupLoginPage() {
    console.log("Inicializando scripts para a página de Login.");
    
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;

            if (email === '' || password === '') {
                alert('Por favor, preencha todos os campos.');
                return; 
            }

            if (email === 'teste@devflow.com' && password === '123456') {
                alert('Login bem-sucedido! Redirecionando...');

            } else {
                 alert('Email ou senha incorretos.');
            }
        });
    }
}

function setupCadastroPage() {
    console.log("Inicializando scripts para a página de Cadastro.");
    
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (name === '' || email === '' || password === '' || confirmPassword === '') {
                alert('Todos os campos são obrigatórios.');
                return;
            }

            if (password !== confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }

            if (password.length < 6) {
                alert('A senha deve ter pelo menos 6 caracteres.');
                return;
            }
            alert('Cadastro enviado com sucesso! Aguarde a criação da sua conta.');
        });
    }
}

function setupEsqueciSenhaPage() {
    console.log("Inicializando scripts para a página de Esqueci a Senha.");
    
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value.trim();

            if (email === '') {
                alert('Por favor, informe seu e-mail.');
                return;
            }

            alert(`Link de redefinição enviado para: ${email}. Verifique sua caixa de entrada.`);

        });
    }
}
