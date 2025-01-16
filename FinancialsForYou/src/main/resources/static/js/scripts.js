/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#altMainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the alt main nav element
    const altMainNav = document.body.querySelector('#altMainNav');
    if (altMainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#altMainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchDropdown = document.getElementById('searchDropdown');
    const searchForm = document.getElementById('searchForm')

    // Articles
    const articles = [
        { title: 'Investments Guide', url: '/investmentsInfo' },
        { title: 'Mortgage Guide', url: '/mortgageInfo' },
        { title: 'Budgeting Tips', url: '/budgetInfo' },
        {title: 'Pensions Guide', url: '/pensionsInfo'}
    ];

    // Filter articles based on search input
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        searchDropdown.innerHTML = '';

        if (query) {
            const filteredArticles = articles.filter(article => article.title.toLowerCase().includes(query));
            filteredArticles.forEach(article => {
                const item = document.createElement('a');
                item.className = 'dropdown-item';
                item.href = article.url;
                item.textContent = article.title;
                searchDropdown.appendChild(item);
            });
            searchDropdown.classList.add('show');
        } else {
            searchDropdown.classList.remove('show');
        }
    });

    // Hide dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!searchForm.contains(event.target) && !searchDropdown.contains(event.target)) {
            searchDropdown.classList.remove('show');
        }
    });
});

