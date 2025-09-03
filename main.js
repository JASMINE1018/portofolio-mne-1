// ...existing code...
window.addEventListener('scroll', function() {
    const h1 = document.querySelector('header h1');
    const rect = h1.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        h1.classList.add('header-animate');
    } else {
        h1.classList.remove('header-animate');
    }
});
// ...existing code...

window.addEventListener('scroll', function() {
    const h3 = document.querySelector('header h3');
    const rect = h3.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        h3.classList.add('header-animate');
    } else {
        h3.classList.remove('header-animate');
    }
});

window.addEventListener('scroll', function() {
    const h2 = document.querySelector('#Beranda h2');
    if (!h2) return;
    const rect = h2.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        h2.classList.add('Beranda-animate');
    } else {
        h2.classList.remove('Beranda-animate');
    }
});

window.addEventListener('scroll', function() {
    const h2 = document.querySelector('#Pendidikan h2');
    if (!h2) return;
    const rect = h2.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        h2.classList.add('Pendidikan-animate');
    } else {
        h2.classList.remove('Pendidikan-animate');
    }
});

window.addEventListener('scroll', function() {
    const h2 = document.querySelector('#Keahlian h2');
    if (!h2) return;
    const rect = h2.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        h2.classList.add('Keahlian-animate');
    } else {
        h2.classList.remove('Keahlian-animate');
    }
});

window.addEventListener('scroll', function() {
    const h2 = document.querySelector('#Kontak h2');
    if (!h2) return;
    const rect = h2.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        h2.classList.add('Kontak-animate');
    } else {
        h2.classList.remove('Kontak-animate');
    }
});

