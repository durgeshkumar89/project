var form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    var firstname = document.getElementById('firstname').value
      console.log(firstname)

      var lastname = document.getElementById('lastname').value
      console.log(lastname)

      var number = document.getElementById('number').value
      console.log(number)

      var email = document.getElementById('email').value
      console.log(email)

      var password = document.getElementById('password').value
      console.log(password)

      var cpassword = document.getElementById('cpassword').value
      console.log(cpassword)

});