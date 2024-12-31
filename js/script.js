// Navbar
const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
});
// End Navbar

// slide
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        const navbarHeight = document.querySelector('nav').offsetHeight;
        const offset = 100;
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});
// End Slide

// form
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('https://docs.google.com/forms/d/e/1FAIpQLSemtF3MLyRYtIJNMngYxqKtkiKcLHWscFxVH7nefHkvNKFWTw/formResponse', {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
    })
    .then(response => {
        modal.style.display = "block";
        this.reset();
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// End Form

// Detail
function showDetail(type) {
    const detailContent = document.getElementById('detail-content');
    let content = '';

    switch (type) {
        case 'mockup':
            content = `
                <button onclick="closeDetail()">Tutup</button>
                <div class="judul-detail">
                    <h2 style="color: black;">Mockup T-Shirt</h2>
                </div>
                <div class="isinya">
                    <div class="wrapper">
                        <div class="slideshow">
                            <span id="slide-1"></span>
                            <span id="slide-2"></span>
                            <span id="slide-3"></span>
                            <span id="slide-4"></span>

                            <div class="slider">
                                <img src="assets/img/kaos4.jpg" alt="kaos 1">
                                <img src="assets/img/kaos3.jpg" alt="kaos 2">
                                <img src="assets/img/kaos2.jpg" alt="kaos 3">
                                <img src="assets/img/kaos1.jpg" alt="kaos 4">
                            </div>
                        </div>

                        <div class="navi">
                            <a href="#slide-1">1</a>
                            <a href="#slide-2">2</a>
                            <a href="#slide-3">3</a>
                            <a href="#slide-4">4</a>
                        </div>

                    </div>
                    <div class="text-container">
                        <p>Ini adalah detail dari beberapa desain T-Shirt yang saya buat. Saya menggunakan <b>Adobe Photoshop</b> dan <b>CorelDraw</b> untuk menciptakan desain ini.</p>
                        <a href="#contact" target="_blank">Contact Me</a>
                    </div>
                </div>
            `;
            break;
        case 'logo':
            content = `
                <button onclick="closeDetail()">Tutup</button>
                <div class="judul-detail">
                    <h2 style="color: black;">Logo</h2>
                </div>
                <div class="isinya">
                    <div class="wrapper">
                        <div class="slideshow">
                            <span id="slide-1"></span>
                            <span id="slide-2"></span>
                            <span id="slide-3"></span>
                            <span id="slide-4"></span>

                            <div class="slider">
                                <img src="assets/img/logo1.jpg" alt="logo 1">
                                <img src="assets/img/logo2.jpg" alt="logo 2">
                                <img src="assets/img/logo3.jpg" alt="logo 3">
                                <img src="assets/img/logo4.jpg" alt="logo 4">
                            </div>
                        </div>

                        <div class="navi">
                            <a href="#slide-1">1</a>
                            <a href="#slide-2">2</a>
                            <a href="#slide-3">3</a>
                            <a href="#slide-4">4</a>
                        </div>

                    </div>
                    <div class="text-container">
                        <p>Ini adalah detail dari desain logo yang saya buat. Saya menggunakan <b>Adobe Photoshop</b> dan <b>CorelDraw</b> untuk menciptakan desain ini.</p>
                        <a href="#contact" target="_blank">Contact Me</a>
                    </div>
                </div>
            `;
            break;
        case 'website':
            content = `
                <button onclick="closeDetail()">Tutup</button>
                <div class="judul-detail">
                    <h2 style="color: black;">Website</h2>
                </div>
                <div class="isinya">
                    <div class="wrapper">
                        <div class="slideshow">
                            <span id="slide-1"></span>

                            <div class="slider">
                                <img src="assets/img/screenshot.png" alt="web 1">
                            </div>
                        </div>

                        <div class="navi">
                            <a href="#slide-1">1</a>
                        </div>

                    </div>
                    <div class="text-container">
                        <p>Ini adalah detail dari website yang pernah saya buat. Saya menggunakan <b>Framework Adonis.Js</b> untuk menciptakan website ini.</p>
                        <a href="https://www.eenbeautyskin.com/" target="_blank">Link Website</a>
                    </div>
                </div>
            `;
            break;
    }

    detailContent.innerHTML = content;
    document.getElementById('detail').style.display = 'flex';
}

function closeDetail() {
    document.getElementById('detail').style.display = 'none';
}
// End Detail