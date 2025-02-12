const courseCards = document.querySelectorAll('.courseCard');
let cardScrollTimeout;
let cardScroll = false;


window.addEventListener('scroll', function() {

    courseCards.forEach(card => {
        const rect = card.getBoundingClientRect();

        // Проверяем, виден ли элемент в области просмотра
        if (!card.className.includes("visible") && (rect.top + ((this.window.screen.height/100)*20)) <= window.innerHeight && rect.bottom >= 0) {
            card.classList.add('visible');
            cardScrollTimeout = this.setTimeout(() => {
                cardScroll = false
            }, 1500)
            cardScroll = true
            this.window.scrollTo({
                top: rect.top + window.scrollY - ((this.window.screen.height/100)*3),
                behavior: "smooth"
            })
        }
    });
});


let maxScrollAmount = 50; // Максимальное количество пикселей для прокрутки
let isScrolling = false; // Флаг для отслеживания касания

// function limitScroll(event) {
//     event.preventDefault(); // Предотвращаем стандартное поведение прокрутки

//     // Определяем направление прокрутки
//     let delta = event.deltaY || event.touches[0].clientY; // Получаем значение прокрутки
//     let scrollDirection = delta > 0 ? Math.min(delta, maxScrollAmount) : Math.max(delta, -maxScrollAmount); // Ограничиваем прокрутку

//     // Прокручиваем страницу вручную
//     window.scrollBy({
//         top: scrollDirection,
//         behavior: 'smooth' // Добавляем плавность прокрутки
//     });
// }

// Обработчики событий для мыши и сенсорных экранов
// window.addEventListener('wheel', limitScroll, { passive: false });
window.addEventListener('touchstart', function(event) {
    isScrolling = true; // Устанавливаем флаг при начале касания
});

window.addEventListener('touchmove', function(event) {
    console.log("move", event)
    // if (isScrolling) {
    //     limitScroll(event); // Вызываем функцию ограничения прокрутки
    // }
    if (isScrolling && cardScroll) {
        event.preventDefault();
    }
}, { passive: false });

window.addEventListener('touchend', function() {
    isScrolling = false; // Сбрасываем флаг при окончании касания
});

