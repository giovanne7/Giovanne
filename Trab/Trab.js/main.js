function validateForm() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("telefone").value;
    
    var nomeRegex = /^[a-zA-ZÀ-ú\s]{1,100}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var telefoneRegex = /^[0-9]{2}\s[0-9]{4,5}-[0-9]{4}$/;
  
    if (!nomeRegex.test(nome)) {
      alert("Por favor, insira um nome válido sem números.");
      return false;
    }
  
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um email válido.");
      return false;
    }
  
    if (!telefoneRegex.test(telefone)) {
      alert("Por favor, insira um número de telefone válido no formato '99 9 1234-5678'.");
      return false;
    }
  
    return true;
  }
  