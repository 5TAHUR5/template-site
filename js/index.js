const courseCards = document.querySelectorAll('.courseCard');



window.addEventListener('scroll', function() {

    courseCards.forEach(card => {
        const rect = card.getBoundingClientRect();

        // Проверяем, виден ли элемент в области просмотра
        if (!card.className.includes("visible") && (rect.top + ((this.window.screen.height/100)*20)) <= window.innerHeight && rect.bottom >= 0) {
            card.classList.add('visible');
            this.window.scrollTo({
                top: rect.top + window.scrollY - ((this.window.screen.height/100)*3),
                behavior: "smooth"
            })
        }
    });
});