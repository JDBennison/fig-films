function sendMail(contactForm) {
    emailjs
      .send("gmail", "template_n7siije", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value,
      })
      .then(
        function (response) {
          console.log("SUCCESS", response);
          alert('Your messsage has been sent! Someone will be in touch very soon');
        },
        function (error) {
          console.log(FAILED, error);
          alert('There has been an error in sending your message. Please try again later.')
        }
      );
    return false;
  }