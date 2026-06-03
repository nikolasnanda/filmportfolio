document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    const lightbox = document.getElementById("video-lightbox");
    const lightboxIframe = document.getElementById("lightbox-iframe");
    const closeLightbox = document.querySelector(".close-lightbox");
    const thumbnails = document.querySelectorAll(".video-thumbnail-container");

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener("click", () => {
            const videoId = thumbnail.getAttribute("data-video-id");
            lightboxIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
            lightbox.style.display = "flex";
        });
    });
    const deactivateLightbox = () => {
        lightbox.style.display = "none";
        lightboxIframe.src = "";
    };

    closeLightbox.addEventListener("click", deactivateLightbox);
    
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            deactivateLightbox();
        }
    });
});