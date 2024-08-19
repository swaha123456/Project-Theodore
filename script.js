document.addEventListener("DOMContentLoaded", function() {
    
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].classList.add("active");
        setTimeout(showSlides, 4000); 
    }

    const paragraphs = document.querySelectorAll('.text-box p');
    
    function checkInView() {
        paragraphs.forEach(paragraph => {
            const rect = paragraph.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                paragraph.classList.add('animate');
            }
        });
    }

    
    checkInView();
    
 
    window.addEventListener('scroll', checkInView);


    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const summary = button.previousElementSibling.previousElementSibling;
            const fullText = button.previousElementSibling;
            fullText.classList.toggle('full-text-visible');
            summary.classList.toggle('full-text-visible');
            button.textContent = fullText.classList.contains('full-text-visible') ? 'Read Less' : 'Read More';
        });
    });
});