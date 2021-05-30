let cName;
let cSurname;
let cEmail;
let cPassword;
let cRepeatPassword;

function checkName() {
  if (document.getElementById("name").value.length < 3) {
    cName = false;
    document.getElementById("errName").innerHTML = "Слишком короткое имя пользователя";
   }
  else {
    document.getElementById("errName").innerHTML = "Принято!";
    cName = true;
  }
}

function checkSurname() {
  if (document.getElementById("surname").value.length < 3) {
    cSurname = false; 
    document.getElementById("errSurname").innerHTML = "Слишком короткая фамилия пользователя";
  }
  else {
    document.getElementById("errSurname").innerHTML = "Принято!";
    cSurname = true;
  }
}

function checkEmail() {
  if (document.getElementById("email").value.length < 5 || document.getElementById("email").value.search('@.') == -1) {
    cEmail = false; 
    document.getElementById("errEmail").innerHTML = "Введите корректный Email";
  }
  else {
    document.getElementById("errEmail").innerHTML = "Принято!";
    cEmail = true;
  }
}

function checkPassword() {
  document.getElementById("errRepeatPassword").innerHTML = "";
  document.getElementById("repeatPassword").value = "";
  if (document.getElementById("password").value.length < 5) {
    document.getElementById("errPassword").innerHTML = "Пароль должен содержать не менее 6 символов";
    cPassword = false;
  }
  else {
    document.getElementById("errPassword").innerHTML = "Принято!";
    cPassword = true;
  }
}

function checkRepeatPassword() {
  if (document.getElementById("repeatPassword").value != document.getElementById("password").value) { 
    document.getElementById("errRepeatPassword").innerHTML = "Пароли не совпадают";
    cRepeatPassword = false;
  }
  else {
    document.getElementById("errRepeatPassword").innerHTML = "Принято!";
    cRepeatPassword = true;
  }
}

function checkForm() {
  if (cName&&cSurname&&cEmail&&cPassword&&cRepeatPassword) 
    alert("Добро пожаловать, " + document.getElementById("name").value + "!");
  else
    alert("Проверьте данные еще раз")
  
}

