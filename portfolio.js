let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


document.getElementById('scroll-left').addEventListener('click', function() {
    document.querySelector('.experience-row').scrollBy({
        left: -300,
        behavior: 'smooth'
    });
});

document.getElementById('scroll-right').addEventListener('click', function() {
    document.querySelector('.experience-row').scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});
window.onshell = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else{
            sec.classList.remove('show-animate');
        }
      });
      let header = document.querySelector('header');

      header.classList.toogle('sticky', window.scrollY > 100);

      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');

      function sendSMS() {
        const fullName = document.getElementById('full-name').value;
        const emailAddress = document.getElementById('email-address').value;
        const mobileNumber = document.getElementById('mobile-number').value;
        const emailSubject = document.getElementById('email-subject').value;
        const message = document.getElementById('Message').value;
    
        const smsBody = `
        Full Name: ${fullName}
        Email Address: ${emailAddress}
        Email Subject: ${emailSubject}
        Message: ${message}
        `;
    
        const smsLink = `sms:${mobileNumber}?body=${encodeURIComponent(smsBody)}`;
    
        // This will open the SMS app on a mobile device with the message pre-filled
        window.location.href = smsLink;
      }
    
}
