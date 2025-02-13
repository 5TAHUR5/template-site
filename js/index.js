const courseCards = document.querySelectorAll('.courseCard');

window.addEventListener('scroll', function() {

    courseCards.forEach(card => {
        const rect = card.getBoundingClientRect();

        if (!card.className.includes("visible") && (rect.top + (rect.height*0.12)) <= window.innerHeight && rect.bottom >= 0) {
            card.classList.add('visible');
            let toScrollY = 0
            if (rect.height >= this.window.innerHeight) {
                toScrollY = rect.top + window.scrollY - (rect.height*0.03)
            } else {
                toScrollY = rect.bottom + window.scrollY - window.innerHeight + (rect.height*0.1)
            }

            this.window.scrollTo({
                top: toScrollY,
                behavior: "smooth"
            })
        }
    });
});
