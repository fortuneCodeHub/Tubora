if (document.querySelector('.home-page')) {
    // Example JS: Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
    });
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-up');
            }
        });
    }, {
        threshold: 0.4
    });

    document.querySelectorAll('.fade-up-start').forEach(section => {
        observer.observe(section);
    });
}

if (document.querySelector('.dashboard-page')) {
    // Example JS: Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
    });
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
    }, {
        threshold: 0.4
    });

    document.querySelectorAll('.fade-up-start').forEach(section => {
        observer.observe(section);
    });
}