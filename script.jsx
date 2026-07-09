document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({
                behavior: 'smooth'
            });
    });
});

const hero = document.getElementById('hero');
const heroBackground = document.getElementById('hero-background');

if (hero && heroBackground) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        heroBackground.style.transform = `translateY(${scrollY * 0.2}px) scale(1.08)`;
    });
}


<script type="module">
import * as THREE from 'https://unpkg.com/three@latest/build/three.module.js';
</script>