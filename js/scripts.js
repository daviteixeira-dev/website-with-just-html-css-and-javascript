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

const anoAtual = new Date().getFullYear();
const mesatual = new Date().getMonth() + 1;

const elementoAno = document.getElementById('ano-frase');
const elementoMesAnoFrase = document.getElementById('mes-ano-frase');

elementoAno.textContent = `${anoAtual}`;
elementoMesAnoFrase.textContent = `Última atualização: ${mesatual + '/' + anoAtual}!`;
