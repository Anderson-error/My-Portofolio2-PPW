// Dark Mode
(() => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const activeThemeIcon = document.querySelector('.theme-icon-active')
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
    const iconOfActiveBtn = btnToActive.querySelector('i').dataset.themeIcon

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    btnToActive.classList.add('active')
    btnToActive.setAttribute('aria-pressed', 'true')
    activeThemeIcon.classList.remove(activeThemeIcon.dataset.themeIconActive)
    activeThemeIcon.classList.add(iconOfActiveBtn)
    activeThemeIcon.dataset.themeIconActive = iconOfActiveBtn

    if (focus) {
      activeThemeIcon.focus()
    }
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()


  
  // Skills
  const spans = document.querySelectorAll('.progress-bar span');

  spans.forEach((span) => {
      span.style.width = span.dataset.width;
      span.innerHTML = span.dataset.width;
  });


  function showPopup() {
    document.getElementById('popup').style.display = 'block';
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  

  // Certificate
  window.onload = function() {
    var image = document.getElementById('popup-image');
    var imageLink = document.getElementById('popup-image-link');
    var certificateImage = document.querySelector('.certificate img');
    image.src = certificateImage.src;
    imageLink.href = certificateImage.src;
  };

  document.addEventListener('DOMContentLoaded', function() {
    const certificates = document.querySelectorAll('.card');

    certificates.forEach(function(cert) {
        cert.addEventListener('click', function() {
            const imageUrl = cert.getAttribute('data-src');
            const modal = document.getElementById("certificateModal");
            const img = document.getElementById("certificateImg");

            img.src = imageUrl;
            modal.style.display = "block";
        });
    });
});

function closeModal() {
    const modal = document.getElementById("certificateModal");
    modal.style.display = "none";
}


// alert
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    
    // Show alert
    alert('Your message has been sent!');
    
    // Clear form fields (optional)
    contactForm.reset();
  });
});