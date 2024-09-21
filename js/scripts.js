document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebarMenu = document.getElementById('sidebar-menu');
    const menuLinks = sidebarMenu.querySelectorAll('a');

    menuToggle.addEventListener('click', function() {
        sidebarMenu.classList.toggle('open');
        document.body.classList.toggle('menu-open');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            sidebarMenu.classList.remove('open');
            document.body.classList.remove('menu-open');
        });
    });
});
