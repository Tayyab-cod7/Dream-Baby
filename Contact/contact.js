// Nav bar active Start 

// Function to remove 'active' class from all links
function removeActiveClass() {
    const links = document.querySelectorAll('#navbar a');
    links.forEach(link => {
        link.classList.remove('active');
    });
}

// Function to add 'active' class to the current link
function addActiveClass(linkId) {
    const link = document.getElementById(linkId);
    link.classList.add('active');
}

// Get the current page's URL
const currentPage = window.location.pathname;

// Compare the current page with the links and add the 'active' class accordingly
if (currentPage.includes('home.html')) {
    removeActiveClass();
    addActiveClass('homeLink');
} else if (currentPage.includes('shop.html')) {
    removeActiveClass();
    addActiveClass('shopLink');
} else if (currentPage.includes('contact.html')) {
    removeActiveClass();
    addActiveClass('contactLink');
} else if (currentPage.includes('cart.html')) {
    removeActiveClass();
    addActiveClass('cartLink');
}

// Nav bar active End