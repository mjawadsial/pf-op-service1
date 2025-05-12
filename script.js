// Smooth scroll for CTA button
document.getElementById('book-cta').addEventListener('click', () => {
    // Replace with actual booking section ID later
    document.querySelector('#booking').scrollIntoView({ 
      behavior: 'smooth' 
    });
  });
  
  // Fallback for video (if unsupported)
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg && heroBg.nodeName === 'VIDEO' && !heroBg.canPlayType('video/mp4')) {
    heroBg.style.display = 'none';
    const fallbackImg = document.createElement('img');
    fallbackImg.src = 'assets/hero-fallback.jpg';
    fallbackImg.alt = 'Clients working out';
    fallbackImg.classList.add('hero-bg');
    document.querySelector('.hero').prepend(fallbackImg);
  }

// Navbar Scroll Effect (Add slight opacity change)
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(0, 0, 0, 0.7)';  // Darker opacity after scroll
  } else {
    navbar.style.background = 'rgba(0, 0, 0, 1)';  // Fully transparent at top
  }
});

  
  // Smooth scroll for all nav links + CTA
  document.querySelectorAll('a[href^="#"], #book-cta').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      document.querySelector(targetId).scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  });

  // Services Toggle Filter
const toggleButtons = document.querySelectorAll('.toggle-btn');
const serviceCards = document.querySelectorAll('.service-card');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    toggleButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filter cards
    const filter = button.dataset.filter;
    serviceCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter || card.dataset.category === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Booking Form Submission
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      document.getElementById('booking-form').style.display = 'none';
      document.getElementById('success-message').style.display = 'block';
      
      // Reset form after display
      this.reset();
    }, 1000);
  });
  
  // For Font Awesome icons (add this to your <head> if not already present)
  document.head.insertAdjacentHTML('beforeend', 
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">');

    document.getElementById('hamburger-menu').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});
