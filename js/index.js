const courseCards = document.querySelectorAll('.courseCard');



window.addEventListener('scroll', function() {

    courseCards.forEach(card => {
        const rect = card.getBoundingClientRect();

        // Проверяем, виден ли элемент в области просмотра
        if (!card.className.includes("visible") && rect.top*1.8 <= window.innerHeight && rect.bottom >= 0) {
            // Добавляем класс для анимации
            // card.scrollIntoView({});
            card.classList.add('visible');
            this.window.scrollTo({
                top: rect.top + window.scrollY - (rect.height/10),
                behavior: "smooth"
            })
            // this.window.scroll(0, rect.top)
        }
    });
});
