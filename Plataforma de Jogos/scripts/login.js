// Login Script
document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Exemplo simples de verificação
  if (email === "usuario@coresdobrasil.com" && senha === "senha123") {
      alert("Login bem-sucedido!");
      window.location.href = "index.html"; 
  } else {
      alert("E-mail ou senha incorretos. Tente novamente.");
  }
});

// Cadastro Script
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const cpf = document.getElementById("cpf").value;
  const nascimento = document.getElementById("nascimento").value;

  // Salvar dados ou enviar para o servidor
  alert("Cadastro bem-sucedido! Agora você pode fazer login.");
  window.location.href = "login.html";  // Redirecionar para a página de login
});
