document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário padrão

  // Obtendo os valores dos campos do formulário
  const username = document.getElementById('newUsername').value.trim();
  const email = document.getElementById('newEmail').value.trim();
  const cpf = document.getElementById('newCpf').value.trim();
  const dateOfBirth = document.getElementById('newDateOfBirth').value.trim();
  const password = document.getElementById('newPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Validação do CPF (formato básico)
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!cpfRegex.test(cpf)) {
      alert('O CPF informado não é válido. Use o formato XXX.XXX.XXX-XX');
      return;
  }

  // Verificando se as senhas coincidem
  if (password !== confirmPassword) {
      alert('As senhas não coincidem. Tente novamente.');
      return;
  }

  // Validando o formato do e-mail
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(email)) {
      alert('O e-mail informado não é válido.');
      return;
  }

  // Recuperando usuários existentes no localStorage
  const storedUsers = JSON.parse(localStorage.getItem('usuarios')) || { users: [] };

  // Verificando se o nome de usuário já existe
  const existingUser = storedUsers.users.find(user => user.username === username);
  if (existingUser) {
      alert('Este nome de usuário já está em uso. Escolha outro.');
      return;
  }

  // Verificando se o CPF já está cadastrado
  const existingCpf = storedUsers.users.find(user => user.cpf === cpf);
  if (existingCpf) {
      alert('Este CPF já está cadastrado. Tente outro.');
      return;
  }

  // Adicionando novo usuário ao localStorage
  storedUsers.users.push({ username, email, cpf, dateOfBirth, password });
  localStorage.setItem('usuarios', JSON.stringify(storedUsers));

  alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
  window.location.href = 'login.html'; // Redirecionando para a página de login
});
