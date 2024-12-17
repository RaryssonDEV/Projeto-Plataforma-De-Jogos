// Função para verificar se o login é válido
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Buscando usuários no arquivo JSON (simulado como uma variável)
    fetch('usuarios.json')
      .then(response => response.json())
      .then(data => {
        const user = data.users.find(user => user.username === username && user.password === password);
  
        if (user) {
          alert('Login bem-sucedido!');
          window.location.href = "dashboard.html";  // Página após login bem-sucedido
        } else {
          alert('Usuário ou senha inválidos.');
        }
      })
      .catch(error => console.error('Erro ao carregar os usuários:', error));
  });
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    // Obtendo os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Simulação de verificação de login
    const storedUsers = JSON.parse(localStorage.getItem('usuarios')) || { users: [] };
    const user = storedUsers.users.find(user => user.username === username && user.password === password);
  
    if (user) {
      // Se o login for bem-sucedido, redireciona para a página principal
      alert('Login bem-sucedido!');
      window.location.href="index.html"; // Redirecionando para a página inicial
    } else {
      // Caso contrário, exibe uma mensagem de erro
      alert('Usuário ou senha inválidos. Tente novamente.');
    }
  });
  