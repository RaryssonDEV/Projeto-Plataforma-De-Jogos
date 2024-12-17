document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    // Obtendo os dados dos campos do formulário
    const username = document.getElementById('newUsername').value;
    const email = document.getElementById('newEmail').value;
    const cpf = document.getElementById('newCpf').value;
    const dateOfBirth = document.getElementById('newDateOfBirth').value;
    const password = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Validando o formato do CPF (apenas um exemplo simples)
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
      alert('O CPF informado não é válido. Use o formato XXX.XXX.XXX-XX');
      return;
    }
  
    // Validando se as senhas são iguais
    if (password !== confirmPassword) {
      alert('As senhas não coincidem. Tente novamente.');
      return;
    }
  
    // Validando o formato de e-mail
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert('E-mail inválido. Insira um e-mail válido.');
      return;
    }
  
    // Recuperando os usuários existentes no localStorage
    const storedUsers = JSON.parse(localStorage.getItem('usuarios')) || { users: [] };
    
    // Verificando se o usuário já existe
    const existingUser = storedUsers.users.find(user => user.username === username);
    if (existingUser) {
      alert('Este usuário já existe. Tente outro nome.');
      return;
    }
  
    // Adicionando novo usuário no localStorage
    storedUsers.users.push({ username, email, cpf, dateOfBirth, password });
    localStorage.setItem('usuarios', JSON.stringify(storedUsers));
  
    alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
    window.location.href = 'login.html'; // Redirecionando para a página de login
  });
  