// ===== HAMBURGER TOGGLE =====
document.addEventListener('DOMContentLoaded', function() {
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');
  
  hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    nav.classList.toggle('open');
  });

  // Close menu on link click
  var navLinks = nav.querySelectorAll('.nav-link');
  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      nav.classList.remove('open');
    });
  });

  // ===== STICKY HEADER SHADOW =====
  var header = document.getElementById('header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ===== ACTIVE NAV LINK ON SCROLL =====
  var sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', function() {
    var scrollY = window.scrollY + 100;
    sections.forEach(function(section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');
      var link = nav.querySelector('a[href="#' + id + '"]');
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          navLinks.forEach(function(l) { l.classList.remove('active'); });
          link.classList.add('active');
        }
      }
    });
  });

  // ===== FORM VALIDATION =====
  var form = document.getElementById('enquiryForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var name = form.querySelector('[name="name"]').value.trim();
    var email = form.querySelector('[name="email"]').value.trim();
    var phone = form.querySelector('[name="phone"]').value.trim();

    if (!name || !email || !phone) {
      alert('Please fill in all required fields.');
      return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    var phoneRegex = /^[0-9+\-\s]{10,}$/;
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }

    alert('Thank you, ' + name + '! We will contact you soon.');
    form.reset();
  });
});
