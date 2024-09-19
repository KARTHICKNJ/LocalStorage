let log = document.getElementById('login');

    log.onclick = (e) => {
      e.preventDefault();

      let email = document.getElementById('email').value.trim();
      let pass = document.getElementById('password').value.trim();

      let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (email === '' || pass === '') {
        alert("Please enter both a valid email and password!");
      } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
      } else {
        localStorage.setItem('email', email);
        localStorage.setItem('password', pass);

        alert("Data saved successfully!");

        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
      }
    } 