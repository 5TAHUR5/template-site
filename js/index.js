const courseCards = document.querySelectorAll('.courseCard');



window.addEventListener('scroll', function() {

    courseCards.forEach(card => {
        const rect = card.getBoundingClientRect();

        // Проверяем, виден ли элемент в области просмотра
        if (!card.className.includes("visible") && Math.max((rect.top*1.8), 90) <= window.innerHeight && rect.bottom >= 0) {
            // Добавляем класс для анимации
            card.scrollIntoView({ behavior: 'smooth' });
            card.classList.add('visible');
            

        }
    });
});
