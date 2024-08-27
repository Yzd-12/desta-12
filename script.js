document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Terima kasih telah menghubungi kami!');
});
let slides = document.querySelectorAll('#slider .slide');
let currentSlide = 0;

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000); // Ganti slide setiap 3 detik
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    alert('Terima kasih telah berlangganan, ' + email + '!');
    // Di sini Anda bisa menambahkan kode untuk mengirim email ke server Anda
});
// Fungsi untuk menambahkan kelas 'show' pada elemen testimoni
function showTestimonials() {
    let testimonials = document.querySelectorAll('#testimonials .testimonial');
    testimonials.forEach((testimonial, index) => {
        setTimeout(() => {
            testimonial.classList.add('show');
        }, index * 300); // Menambahkan jeda 300ms untuk efek animasi berurutan
    });
}

// Menjalankan fungsi showTestimonials saat halaman dimuat
window.addEventListener('load', showTestimonials);
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
});
// Contoh interaksi dasar untuk tombol "Beli Sekarang"
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Produk ditambahkan ke keranjang!');
    });
});
// Contoh interaksi dasar untuk kartu layanan
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('Detail layanan akan ditampilkan di sini.');
    });
});
// Tampilkan loader selama konten dimuat
document.addEventListener('DOMContentLoaded', () => {
    const servicesSection = document.getElementById('services');
    const loader = document.createElement('div');
    loader.className = 'loader';
    servicesSection.appendChild(loader);
    
    // Simulasi pemuatan konten
    setTimeout(() => {
        servicesSection.classList.remove('loading');
        loader.style.display = 'none';
    }, 2000); // Ganti dengan waktu pemuatan yang sesuai
});
// Slider Testimoni
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(-${index * 100}%)`;
    });
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % totalTestimonials;
    showTestimonial(currentIndex);
}, 5000); // Ganti dengan waktu yang sesuai
// Animasi Fade In untuk Bagian Tentang Kami
document.addEventListener('DOMContentLoaded', () => {
    const aboutUsSection = document.querySelector('#tentang-kami');
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(aboutUsSection);
});

    document.addEventListener('DOMContentLoaded', function () {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                item.classList.toggle('open');
            });
        });
    });
function toggleMenu() {
    var navMenu = document.getElementById("nav-menu");
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
}



