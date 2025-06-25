
// Get references to the necessary DOM elements
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.getElementById('navbarNav');
const hamburgerIcon = document.getElementById('icon-hamburger');
const closeIcon = document.getElementById('icon-close');

// Toggle icons when navbar is shown
navbarCollapse.addEventListener('show.bs.collapse', () => {
    hamburgerIcon.classList.add('d-none');
    closeIcon.classList.remove('d-none');
});

// Toggle icons when navbar is hidden
navbarCollapse.addEventListener('hide.bs.collapse', () => {
    hamburgerIcon.classList.remove('d-none');
    closeIcon.classList.add('d-none');
});


// Optional: Close the mobile menu when a navigation link is clicked
const navLinksAnchors = navbarCollapse.querySelectorAll('.nav-link');
navLinksAnchors.forEach(anchor => {
    anchor.addEventListener('click', () => {
        // Manually trigger Bootstrap's collapse if the menu is open
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
        }
    });
});

// The window resize handling is largely managed by Bootstrap's responsive classes
// However, we can ensure the icons are correct if a manual resize happens while menu is open
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) { // Bootstrap's 'lg' breakpoint is 992px
        if (navbarCollapse.classList.contains('show')) {
            // Hide the menu and reset icons if resized to desktop view
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: false
            });
            bsCollapse.hide();
            hamburgerIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    }
});