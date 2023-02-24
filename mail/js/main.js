// The purpose of the code is to check if a given email is part of a specific list
// The user can submit their email using an `input type email`
const login = document.getElementById('login');

// The code reads the entire list, provided with an `array`, by using a `for` loop
const list = ['abc@gmail.com', 'def@gmail.com', 'ghi@gmail.com', 'jkl@gmail.com', 'mno@gmail.com'];

login.addEventListener('click',
  function () {
    const email = document.getElementById('email').value;
    let permission = false;

    // IF the user email is inside the list, the code produces a successful output
    // ELSE the code produces an error output
    for (let i = 0; i < list.length; i++) {
      if (list[i] === email) {
        permission = true;
      };
    }

    if (permission === true) {
      alert('Login in corso');
    } else {
      alert('Non hai il permesso di accedere');
    }
  });