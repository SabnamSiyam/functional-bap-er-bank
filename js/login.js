// console.log('login-js Connected');

//   ***Login section *****
document.getElementById("btn-submit").addEventListener("click", function () {
  const password = getInputFieldValueForLoginById("input-password");
  const email = getInputFieldValueForLoginById("input-email");
  console.log(email, password);
  if (password == "secret" && email == "sontan@bap.com") {

    window.location.href = "/html/Bank_DashBoard.html";
  } else {
    alert("Please enter the correct password provided by your father !!");
  }
});

// login section end------------------**
