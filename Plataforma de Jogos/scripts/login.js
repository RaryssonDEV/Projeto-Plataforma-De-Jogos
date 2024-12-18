// Função para verificar se o login é válido
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário

  // Obtendo os valores dos campos
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Buscando usuários no arquivo JSON (simulado como uma variável)
  fetch('usuarios.json')
    .then(response => response.json())
    .then(data => {
      const user = data.users.find(user => user.username === username && user.password === password);

      if (user) {
        // Se o login for bem-sucedido, redireciona para a página principal
        alert('Login bem-sucedido!');
        window.location.href = "index.html";  // Página principal após login bem-sucedido
      } else {
        // Caso contrário, exibe uma mensagem de erro
        alert('Usuário ou senha inválidos.');
      }
    })
    .catch(error => {
      console.error('Erro ao carregar os usuários:', error);
      alert('Erro ao verificar o login. Tente novamente mais tarde.');
    });
});
