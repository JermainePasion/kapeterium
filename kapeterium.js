document.addEventListener('DOMContentLoaded', function() {
    const instagramLink = document.getElementById('instagram-link');
    const facebookLink = document.getElementById('facebook-link');

    function handleMouseOver(link) {
        link.style.color = '#f7e7dc'; // Change text color
        link.querySelector('.social-icon').style.transform = 'scale(1.2)'; // Enlarge icon
    }

    function handleMouseOut(link) {
        link.style.color = '#130801'; // Reset text color
        link.querySelector('.social-icon').style.transform = 'scale(1)'; // Reset icon size
    }

    instagramLink.addEventListener('mouseover', () => handleMouseOver(instagramLink));
    instagramLink.addEventListener('mouseout', () => handleMouseOut(instagramLink));
    
    facebookLink.addEventListener('mouseover', () => handleMouseOver(facebookLink));
    facebookLink.addEventListener('mouseout', () => handleMouseOut(facebookLink));
});

document.addEventListener("DOMContentLoaded", function() {
    const historyParagraph = document.querySelector('.history-text');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.1  // Adjust this value if needed
    });

    observer.observe(historyParagraph);
});