const courseCards = document.querySelectorAll('.courseCard');

window.addEventListener('scroll', function() {

    courseCards.forEach(card => {
        const rect = card.getBoundingClientRect();

        if (!card.className.includes("visible") && (rect.top + 20) <= window.innerHeight && rect.bottom >= 0) {
            card.classList.add('visible');
            let toScrollY = 0
            if (rect.height + 10 >= this.window.innerHeight) {
                toScrollY = rect.top + window.scrollY - 10//(rect.height*0.03)
            } else {
                toScrollY = rect.bottom + window.scrollY - window.innerHeight + 10//(rect.height*0.1)
            }

            this.window.scrollTo({
                top: toScrollY,
                behavior: "smooth"
            })
        }
    });
});
