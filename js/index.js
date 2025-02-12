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


let isScrolling;

window.addEventListener('wheel', function(event) {
    // Останавливаем событие прокрутки
    event.preventDefault();
}, { passive: false });

window.addEventListener('touchstart', function(event) {
    // Очищаем таймер перед началом касания
    clearTimeout(isScrolling);
});

window.addEventListener('touchmove', function(event) {
    // Останавливаем событие прокрутки при движении пальца
    event.preventDefault();
}, { passive: false });

window.addEventListener('touchend', function(event) {
    // Устанавливаем таймер для определения окончания прокрутки
    isScrolling = setTimeout(function() {
        // Здесь можно добавить логику, когда скроллинг завершен
        console.log('Пользователь закончил прокрутку');
    }, 66); // 15 кадров в секунду
});
