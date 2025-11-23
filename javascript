// ===============================
// 🔵 Funções para a tela de Perfil
// ===============================

// Salvar perfil
document.getElementById("btnSalvar")?.addEventListener("click", () => {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const bio = document.getElementById("bio").value;

  const perfil = { nome, email, senha, bio };
  localStorage.setItem("perfilUsuario", JSON.stringify(perfil));

  mostrarMensagem("mensagem", "✅ Perfil salvo com sucesso!", "green");
});

// Limpar dados do perfil
document.getElementById("btnLimpar")?.addEventListener("click", () => {
  ["nome", "email", "senha", "bio", "foto"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });

  const preview = document.getElementById("preview");
  if (preview) preview.style.display = "none";

  localStorage.removeItem("perfilUsuario");

  mostrarMensagem("mensagem", "🗑️ Dados limpos com sucesso!", "red");
});

// Preview da imagem de perfil
document.getElementById("foto")?.addEventListener("change", e => {
  const file = e.target.files[0];
  const preview = document.getElementById("preview");

  if (!preview) return;

  if (file) {
    const reader = new FileReader();
    reader.onload = event => {
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

// Exibir mensagens
function mostrarMensagem(id, texto, cor) {
  const msg = document.getElementById(id);
  if (!msg) return;
  msg.textContent = texto;
  msg.style.color = cor;
}

// ============================================
// 🔵 Funções específicas por página (Login/Cadastro/Esqueci Senha)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const page = window.location.pathname.split('/').pop();

  switch (page) {
    case "login.html":
      setupLoginPage();
      break;
    case "cadastro.html":
      setupCadastroPage();
      break;
    case "esqueci-senha.html":
      setupEsqueciSenhaPage();
      break;
  }
});

// ===============================
// 🔹 Página: Login
// ===============================
function setupLoginPage() {
  console.log("Inicializando scripts para a página de Login.");
  
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    if (!email || !password) {
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

// ===============================
// 🔹 Página: Cadastro
// ===============================
function setupCadastroPage() {
  console.log("Inicializando scripts para a página de Cadastro.");
  
  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', event => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!name || !email || !password || !confirmPassword) {
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

// ===============================
// 🔹 Página: Esqueci a Senha
// ===============================
function setupEsqueciSenhaPage() {
  console.log("Inicializando scripts para a página de Esqueci a Senha.");

  const form = document.querySelector('form');
  if (!form) return;

  form.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();

    if (!email) {
      alert('Por favor, informe seu e-mail.');
      return;
    }

    alert(`Link de redefinição enviado para: ${email}. Verifique sua caixa de entrada.`);
  });
}
