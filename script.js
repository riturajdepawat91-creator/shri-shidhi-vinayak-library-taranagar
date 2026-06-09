*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

html{
    scroll-behavior:smooth;
}

body{
    font-family:'Poppins',sans-serif;
    background:#050816;
    color:white;
    overflow-x:hidden;
}

a{
    text-decoration:none;
}

li{
    list-style:none;
}

img{
    max-width:100%;
    display:block;
} /* Loader */

/* =========================
   FUTURE LOADER
========================= */

#loader{

    position:fixed;

    inset:0;

    display:flex;

    flex-direction:column;

    justify-content:center;
    align-items:center;

    background:#020617;

    z-index:999999;
}

.loader-ring{

    width:160px;
    height:160px;

    border-radius:50%;

    border:3px solid
    rgba(0,255,255,.15);

    border-top:
    3px solid #00ffff;

    animation:
    spin 2s linear infinite;

    box-shadow:
    0 0 40px rgba(0,255,255,.4);

    margin-bottom:40px;
}

.loader-title{

    font-size:3rem;

    text-align:center;

    line-height:1.1;

    color:white;

    text-shadow:
    0 0 30px #00ffff;
}

.loader-status{

    margin-top:20px;

    color:#9ca3af;

    letter-spacing:2px;
}

.loader-percent{

    margin-top:20px;

    font-size:2rem;

    color:#00ffff;

    font-weight:700;
}

@keyframes spin{

    from{
        transform:rotate(0deg);
    }

    to{
        transform:rotate(360deg);
    }
}
/* Navbar */

.navbar{
    position:fixed;
    top:20px;
    left:50%;

    transform:translateX(-50%);

    width:90%;
    max-width:1300px;

    padding:18px 40px;
    padding:15px 25px;

    display:flex;
    justify-content:space-between;
    align-items:center;

    background:rgba(255,255,255,0.05);

    backdrop-filter:blur(15px);

    border:1px solid rgba(255,255,255,0.1);

    border-radius:20px;

    z-index:1000;
}

.logo{
    font-size:1rem;
    font-weight:700;
    white-space:nowrap;
}

.nav-links{
    display:flex;
    gap:35px;
    gap:20px;
}

.nav-links a{
    color:white;

    transition:0.3s ease;
}

.nav-links a:hover{
    color:#00ffff;

    text-shadow:
        0 0 10px #00ffff;
}
@media(max-width:768px){

    .nav-links{
        display:none;
    }

}
.hero{
    height:100vh;

    display:flex;
    flex-direction:column;
    padding-top:180px;
    justify-content:center;
    align-items:center;

    text-align:center;
}

.hero h1{
    font-size:2rem;
    margin-bottom:15px;
}

.hero h2{
    font-size:4rem;

    text-shadow:
        0 0 20px #00ffff;
}
@media(max-width:768px){

    .hero{
        min-height:85vh;
    }

}
/* Particle Background */

#particles{
    position:fixed;
    top:0;
    left:0;

    width:100%;
    height:100%;

    z-index:-10;
}
.hero h2{
    font-size:4rem;

    background:linear-gradient(
        90deg,
        #00ffff,
        #7b61ff
    );

    background-clip:text;
    -webkit-background-clip:text;

    color:transparent;
    -webkit-text-fill-color:transparent;

    animation:glow 3s infinite alternate;
}

@keyframes glow{

    from{
        filter:drop-shadow(
            0 0 10px #00ffff
        );
    }

    to{
        filter:drop-shadow(
            0 0 25px #7b61ff
        );
    }
}
/* HERO SECTION */

.hero{
    min-height:100vh;

    display:flex;
    flex-direction:column;

    justify-content:center;
    align-items:center;

    text-align:center;

    padding:0 20px;
}

.hero-subtitle{
    color:#00ffff;

    font-size:1rem;

    letter-spacing:3px;

    margin-bottom:15px;
}

.hero-title{
    font-size:5rem;
    font-weight:700;

    max-width:1000px;

    line-height:1.1;

    background:linear-gradient(
        90deg,
        #00ffff,
        #7b61ff
    );

    background-clip:text;
    -webkit-background-clip:text;

    color:transparent;
    -webkit-text-fill-color:transparent;

    position:relative;
    z-index:2;
}

.hero-description{
     position:relative;
     z-index:2;
    max-width:700px;

    margin-top:25px;

    color:rgba(255,255,255,0.8);

    line-height:1.8;

    font-size:1.1rem;
    max-width:500px;
}

.hero-buttons{
    margin-top:40px;

    display:flex;
    gap:20px;
}

.btn-primary,
.btn-secondary{
    padding:15px 35px;

    border-radius:50px;

    transition:.4s;

    font-weight:600;
}

.btn-primary{
    background:linear-gradient(
        90deg,
        #00ffff,
        #7b61ff
    );

    color:white;
}

.btn-primary:hover{
    transform:translateY(-5px);
}

.btn-secondary{
    border:1px solid rgba(255,255,255,0.2);

    color:white;

    backdrop-filter:blur(10px);
}

.btn-secondary:hover{

    transform:
        translateY(-5px)
        scale(1.05);
}

.scroll-indicator{
    position:absolute;

    bottom:30px;

    font-size:2rem;

    animation:bounce 2s infinite;
}

@keyframes bounce{

    0%,100%{
        transform:translateY(0);
    }

    50%{
        transform:translateY(-10px);
    }
}
/* CUSTOM CURSOR */

body{
    cursor:none;
}

.cursor{
    width:25px;
    height:25px;

    border:2px solid #00ffff;

    border-radius:50%;

    position:fixed;

    top:0;
    left:0;

    pointer-events:none;

    transform:translate(-50%,-50%);

    z-index:99999;

    box-shadow:
        0 0 10px #00ffff,
        0 0 20px #00ffff,
        0 0 40px #00ffff;

    transition:
        width .2s ease,
        height .2s ease;
}
@media(max-width:768px){

    body{
        cursor:auto;
    }

    .cursor{
        display:none;
    }

}
/* HERO DEPTH EFFECT */

.hero{
    position:relative;
    overflow:hidden;
}

.orb{
    position:absolute;
    border-radius:50%;
    filter:blur(120px);

    animation:float 8s ease-in-out infinite;

    z-index:-1;
}

.orb1{
    width:300px;
    height:300px;

    background:#00ffff;

    top:10%;
    left:5%;

    opacity:.15;
}

.orb2{
    width:350px;
    height:350px;

    background:#7b61ff;

    bottom:10%;
    right:5%;

    opacity:.15;

    animation-delay:2s;
}

@keyframes float{

    0%{
        transform:translateY(0px);
    }

    50%{
        transform:translateY(-40px);
    }

    100%{
        transform:translateY(0px);
    }

}/* HERO DEPTH EFFECT */

.hero{
    position:relative;
    overflow:hidden;
}

.orb{
    position:absolute;
    border-radius:50%;
    filter:blur(120px);

    animation:float 8s ease-in-out infinite;

    z-index:-1;
}

.orb1{
    width:300px;
    height:300px;

    background:#00ffff;

    top:10%;
    left:5%;

    opacity:.15;
}

.orb2{
    width:350px;
    height:350px;

    background:#7b61ff;

    bottom:10%;
    right:5%;

    opacity:.15;

    animation-delay:2s;
}

@keyframes float{

    0%{
        transform:translateY(0px);
    }

    50%{
        transform:translateY(-40px);
    }

    100%{
        transform:translateY(0px);
    }

}
/* MOUSE LIGHT EFFECT */

.mouse-light{
    position:fixed;

    width:400px;
    height:400px;

    border-radius:50%;

    pointer-events:none;

    z-index:-1;

    background:radial-gradient(
        circle,
        rgba(0,255,255,0.15) 0%,
        rgba(0,255,255,0.08) 30%,
        transparent 70%
    );

    transform:translate(-50%, -50%);

    transition:
        left 0.08s linear,
        top 0.08s linear;
}
@media(max-width:768px){

    .mouse-light{
        display:none;
    }

}
.typing-text{
    margin-top:20px;

    font-size:1.3rem;
    font-weight:600;

    color:#00ffff;

    min-height:40px;

    letter-spacing:1px;
}
/* FACILITIES */

.facilities{
    padding:120px 8%;
}

.section-title{
    text-align:center;
    font-size:3rem;
    margin-bottom:60px;
}

.facility-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:30px;
}

.facility-card{
    background:rgba(255,255,255,0.05);
    border:1px solid rgba(255,255,255,0.08);

    backdrop-filter:blur(10px);

    border-radius:20px;

    padding:30px;

    transition:0.4s ease;

    transform-style:preserve-3d;
}

.facility-card:hover{

    transform:
        translateY(-15px)
        rotateX(5deg)
        rotateY(5deg);

    box-shadow:
        0 0 25px rgba(0,255,255,0.2);

}

.facility-card h3{
    margin-bottom:15px;
}
.stats{
    padding:120px 8%;

    display:grid;

    grid-template-columns:
    repeat(4, 1fr);

    gap:30px;
}

.stat-box{
    text-align:center;

    padding:40px 20px;

    height:220px;

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

    border-radius:20px;

    background:rgba(255,255,255,0.04);

    border:1px solid rgba(255,255,255,0.08);
}

.stat-box h2{

    font-size:3rem;

    color:#00ffff;

    margin-bottom:10px;

}
@media (max-width: 768px){

    .stats{

        display:grid;

        grid-template-columns:
        repeat(2,1fr);

        gap:15px;

        padding:20px;
    }

    .stat-box{

        width:100%;
    }

}
.reveal{

    opacity:0;

    transform:translateY(100px);

    transition:1s;

}

.reveal.active{

    opacity:1;

    transform:translateY(0);

}
/* GALLERY */

.gallery{
    padding:120px 8%;
}

.gallery-grid{

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(280px,1fr));

    gap:30px;
}

.gallery-item{

    overflow:hidden;

    border-radius:20px;

    border:1px solid rgba(255,255,255,0.1);

    transition:.5s;

    cursor:pointer;
}

.gallery-item img{

    width:100%;
    height:300px;

    object-fit:cover;

    transition:.5s;
}

.gallery-item:hover{

    transform:translateY(-10px);

    box-shadow:
    0 0 30px rgba(0,255,255,0.2);

}

.gallery-item:hover img{

    transform:scale(1.1);

}
/* =========================
   GALLERY
========================= */

.gallery{
    padding:120px 8%;
}

.gallery-grid{

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(280px,1fr));

    gap:30px;
}

.gallery-item{

    position:relative;

    height:320px;

    overflow:hidden;

    border-radius:20px;

    cursor:pointer;

    border:1px solid rgba(255,255,255,0.1);

    transition:0.5s ease;
}

.gallery-item img{

    width:100%;
    height:100%;

    object-fit:cover;

    transition:0.8s ease;
}

.gallery-overlay{

    position:absolute;

    inset:0;

    display:flex;
    justify-content:center;
    align-items:center;

    background:rgba(0,0,0,0.45);

    opacity:0;

    transition:0.5s ease;
}

.gallery-overlay h3{

    color:white;

    font-size:1.5rem;

    text-align:center;

    transform:translateY(30px);

    transition:0.5s ease;
}

.gallery-item:hover{

    transform:
    translateY(-10px);

    box-shadow:
    0 0 40px rgba(0,255,255,0.25);
}

.gallery-item:hover img{

    transform:
        scale(1.15)
        rotate(2deg);
}
.gallery-item:hover .gallery-overlay{

    opacity:1;
}

.gallery-item:hover .gallery-overlay h3{

    transform:translateY(0);
}
.gallery-item{

    animation:floatCard 6s ease-in-out infinite;
}

.gallery-item:nth-child(2){
    animation-delay:1s;
}

.gallery-item:nth-child(3){
    animation-delay:2s;
}

.gallery-item:nth-child(4){
    animation-delay:3s;
}

@keyframes floatCard{

    0%,100%{
        transform:translateY(0px);
    }

    50%{
        transform:translateY(-10px);
    }
}
/* =========================
   BENTO GALLERY
========================= */

.gallery{
    padding:120px 8%;
}

.bento-gallery{

    display:grid;

    grid-template-columns:
    repeat(4,1fr);

    grid-auto-rows:220px;

    gap:25px;
}

.bento-card{

    position:relative;

    overflow:hidden;

    border-radius:25px;

    display:flex;
    justify-content:center;
    align-items:center;

    text-align:center;

    backdrop-filter:blur(15px);

    border:1px solid rgba(255,255,255,0.1);

    transition:.5s ease;

    animation:floatCard 6s ease-in-out infinite;
}

.card-1{
    grid-column:span 2;

    background:
    linear-gradient(
        135deg,
        rgba(0,255,255,0.15),
        rgba(123,97,255,0.15)
    );
}

.card-2{
    background:
    linear-gradient(
        135deg,
        rgba(255,255,255,0.05),
        rgba(0,255,255,0.08)
    );
}

.card-3{
    grid-row:span 2;

    background:
    linear-gradient(
        135deg,
        rgba(123,97,255,0.15),
        rgba(0,255,255,0.1)
    );
}

.card-4{
    background:
    linear-gradient(
        135deg,
        rgba(255,255,255,0.05),
        rgba(123,97,255,0.1)
    );
}

.card-5{
    grid-column:span 2;

    background:
    linear-gradient(
        135deg,
        rgba(0,255,255,0.12),
        rgba(123,97,255,0.12)
    );
}

.bento-card h3{

    font-size:1.5rem;

    color:white;

    padding:20px;

    z-index:2;
}

.bento-card:hover{

    transform:
    translateY(-10px)
    scale(1.03);

    box-shadow:
    0 0 40px rgba(0,255,255,0.25);
}

@keyframes floatCard{

    0%,100%{
        transform:translateY(0);
    }

    50%{
        transform:translateY(-10px);
    }
}

@media(max-width:768px){

    .bento-gallery{

        grid-template-columns:1fr;
    }

    .card-1,
    .card-3,
    .card-5{

        grid-column:auto;
        grid-row:auto;
    }

}
/* =========================
   CONTACT
========================= */

.contact{

    padding:120px 8%;

    text-align:center;
}

.contact-text{

    max-width:700px;

    margin:20px auto 60px;

    color:rgba(255,255,255,0.8);
}

.contact-container{

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(250px,1fr));

    gap:30px;
}

.contact-card{

    padding:35px;

    border-radius:20px;

    background:
    rgba(255,255,255,0.05);

    border:
    1px solid rgba(255,255,255,0.08);

    transition:.4s;
}

.contact-card:hover{

    transform:translateY(-10px);

    box-shadow:
    0 0 30px rgba(0,255,255,0.2);
}
.whatsapp-btn{

    position:fixed;

    bottom:25px;
    right:25px;

    width:65px;
    height:65px;

    border-radius:50%;

    display:flex;
    justify-content:center;
    align-items:center;

    font-size:2rem;

    background:#25D366;

    z-index:9999;

    animation:pulse 2s infinite;
}

@keyframes pulse{

    0%{
        transform:scale(1);
    }

    50%{
        transform:scale(1.1);
    }

    100%{
        transform:scale(1);
    }
}#loader{
    z-index:99999;
}

.whatsapp-btn{
    z-index:999;
}
/* =========================
   FOOTER
========================= */

.footer{

    padding:80px 8% 40px;

    text-align:center;

    border-top:
    1px solid rgba(255,255,255,0.08);

    margin-top:100px;
}

.footer-content h2{

    margin-bottom:15px;

    color:#00ffff;
}

.footer-content p{

    color:
    rgba(255,255,255,0.7);
}

.footer-links{

    display:flex;

    justify-content:center;

    gap:25px;

    margin:30px 0;
}

.footer-links a{

    color:white;

    transition:.3s;
}

.footer-links a:hover{

    color:#00ffff;
}

.copyright{

    margin-top:30px;

    font-size:.9rem;
}
#progress-bar{

    position:fixed;

    top:0;
    left:0;

    width:0%;

    height:4px;

    background:
    linear-gradient(
        90deg,
        #00ffff,
        #7b61ff
    );

    z-index:999999;
}
html{
    scroll-behavior:smooth;
}
.nav-links a.active{

    color:#00ffff;

    text-shadow:
    0 0 15px #00ffff;
}
.navbar.scrolled{

    padding:12px 25px;

    background:
    rgba(5,8,22,0.8);

    backdrop-filter:
    blur(20px);
}
/* =========================
   MOBILE MENU
========================= */

.menu-toggle{

    display:none;

    font-size:2rem;

    cursor:pointer;

    color:white;
}

@media(max-width:768px){

    .menu-toggle{
        display:block;
    }

    .nav-links{

        position:absolute;

        top:80px;
        right:20px;

        width:220px;

        background:
        rgba(5,8,22,0.95);

        backdrop-filter:
        blur(15px);

        border:
        1px solid rgba(255,255,255,0.08);

        border-radius:15px;

        flex-direction:column;

        padding:20px;

        display:none;
    }

    .nav-links.active{
        display:flex;
    }
}
section{

    position:relative;
}

section::after{

    content:"";

    position:absolute;

    bottom:0;
    left:50%;

    transform:
    translateX(-50%);

    width:120px;
    height:2px;

    background:
    linear-gradient(
        90deg,
        transparent,
        #00ffff,
        transparent
    );
}/* =========================
   CONTACT
========================= */

.contact{

    padding:120px 8%;

    text-align:center;
}

.contact-text{

    max-width:700px;

    margin:20px auto 60px;

    color:rgba(255,255,255,0.75);
}

.contact-container{

    display:grid;

    grid-template-columns:
    repeat(auto-fit,minmax(250px,1fr));

    gap:30px;
}

.contact-card{

    padding:35px;

    border-radius:20px;

    background:
    rgba(255,255,255,0.05);

    border:
    1px solid rgba(255,255,255,0.08);

    transition:0.4s ease;
}

.contact-card i{

    font-size:2rem;

    color:#00ffff;

    margin-bottom:15px;
}

.contact-card:hover{

    transform:
    translateY(-10px);

    box-shadow:
    0 0 30px rgba(0,255,255,0.2);
}
.contact-card a{

    color:white;

    text-decoration:none;

    transition:0.3s;
}

.contact-card a:hover{

    color:#25D366;
}
.contact-card a{

    color:white;

    text-decoration:none;

    transition:0.3s;
}

.contact-card a:hover{

    color:#00ffff;
}
/* =========================
   CONTACT FORM
========================= */

#contact-form{

    max-width:900px;

    margin:50px auto;

    display:grid;

    gap:20px;
}

#contact-form input,
#contact-form textarea{

    width:100%;

    padding:18px 20px;

    border-radius:15px;

    border:1px solid rgba(255,255,255,0.1);

    background:
    rgba(255,255,255,0.05);

    backdrop-filter:blur(10px);

    color:white;

    font-size:1rem;

    outline:none;
}

#contact-form textarea{

    min-height:180px;

    resize:none;
}

#contact-form input::placeholder,
#contact-form textarea::placeholder{

    color:
    rgba(255,255,255,0.5);
}

#contact-form button{

    width:220px;

    margin:auto;

    padding:16px;

    border:none;

    border-radius:50px;

    cursor:pointer;

    font-size:1rem;

    font-weight:600;

    color:white;

    background:
    linear-gradient(
        135deg,
        #00ffff,
        #7b61ff
    );

    transition:.4s ease;
}

#contact-form button:hover{

    transform:
    translateY(-5px);

    box-shadow:
    0 0 30px rgba(0,255,255,0.3);
}
.mouse-light{

    position:fixed;

    width:220px;
    height:220px;
    opacity:0.6;
    border-radius:50%;

    background:
    rgba(0,255,255,0.15);

    filter:blur(90px);

    pointer-events:none;
    transform:translate(-50%,-50%);
}
.fees{

    padding:120px 8%;

    text-align:center;
}

.fees-card{

    max-width:700px;

    margin:auto;

    padding:50px;

    border-radius:30px;

    background:
    rgba(255,255,255,0.05);

    border:
    1px solid rgba(255,255,255,0.08);

    backdrop-filter:blur(15px);
}

.fees-price{

    font-size:5rem;

    font-weight:700;

    color:#00ffff;

    margin-bottom:20px;
}

.fees-price span{

    font-size:1.2rem;

    color:white;
}

.fees-features{

    display:grid;

    grid-template-columns:
    repeat(2,1fr);

    gap:15px;

    margin:40px 0;
}
.testimonials{
    padding:120px 8%;
}

.testimonial-grid{
    display:grid;
    grid-template-columns:
    repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.testimonial-card{

    padding:30px;

    border-radius:20px;

    background:
    rgba(255,255,255,0.05);

    border:
    1px solid rgba(255,255,255,0.08);

    transition:.4s;
}

.testimonial-card:hover{

    transform:translateY(-10px);

    box-shadow:
    0 0 30px rgba(0,255,255,0.2);
}

.testimonial-card p{

    line-height:1.8;

    color:
    rgba(255,255,255,0.8);
}

.testimonial-card h4{

    margin-top:20px;

    color:#00ffff;
}
.transformation{

    padding:120px 5%;

    overflow:hidden;
}

.transformation-container{

    display:grid;

    grid-template-columns:
    1fr 220px 1fr;

    align-items:center;

    gap:40px;
}

.chaos-side,
.success-side{

    position:relative;

    height:600px;
}

.floating-card{

    position:absolute;

    padding:14px 22px;

    border-radius:18px;

    background:
    rgba(255,255,255,.05);

    border:
    1px solid rgba(255,80,80,.25);

    backdrop-filter:blur(10px);

    color:white;

    animation:
    floatCard 6s ease-in-out infinite;
}

.success{

    border:
    1px solid rgba(0,255,255,.25);
}

.portal{

    width:180px;
    height:180px;

    border-radius:50%;

    display:flex;

    align-items:center;
    justify-content:center;

    text-align:center;

    font-weight:700;

    color:#00ffff;

    border:
    2px solid #00ffff;

    box-shadow:
    0 0 30px #00ffff,
    0 0 60px rgba(0,255,255,.4);

    animation:
    pulsePortal 2s infinite;
}

.center-line{

    display:flex;

    justify-content:center;
}

@keyframes floatCard{

    0%,100%{
        transform:
        translateY(0px);
    }

    50%{
        transform:
        translateY(-20px);
    }
}

@keyframes pulsePortal{

    50%{
        transform:scale(1.08);
    }
}
@media(max-width:768px){

    .transformation-container{

        display:flex !important;

        flex-direction:column !important;

        align-items:center;

        gap:25px;
    }

    .problem-column,
    .success-column{

        width:100%;

        display:flex;

        flex-direction:column;

        align-items:center;
    }

    .portal{

        order:2;

        margin:20px 0;
    }

    .problem-column{

        order:1;
    }

    .success-column{

        order:3;
    }

}
@media(max-width:768px){

    .transformation-title{

        font-size:2.2rem;

        margin-bottom:40px;
    }

}
@media (max-width:768px){

    .transformation-container{

        display:flex;

        flex-direction:column;

        align-items:center;

        gap:30px;
    }

    .chaos-side,
    .success-side{

        width:100%;

        display:flex;

        flex-direction:column;

        align-items:center;

        gap:12px;
    }

    .center-line{

        order:2;
    }

    .chaos-side{

        order:1;
    }

    .success-side{

        order:3;
    }

    .floating-card{

        width:90%;

        max-width:320px;

        margin:0;
    }

}
@media (max-width:768px){

    .chaos-side .floating-card:nth-child(n+5),
    .success-side .floating-card:nth-child(n+5){

        display:none;
    }

}
@media(max-width:768px){

    .portal{

        width:180px;
        height:180px;

        margin:40px 0;
    }

}
@media(max-width:768px){

    .chaos-side,
    .success-side{

        position:static !important;

        height:auto !important;

        display:flex !important;

        flex-direction:column !important;

        align-items:center;

        gap:12px;
    }

    .floating-card{

        position:relative !important;

        top:auto !important;
        left:auto !important;
        right:auto !important;
        bottom:auto !important;

        width:90%;

        max-width:300px;
    }

    .transformation-container{

        display:flex !important;

        flex-direction:column !important;

        align-items:center;

        gap:30px;
    }

    .center-line{

        order:2;
    }

    .chaos-side{

        order:1;
    }

    .success-side{

        order:3;
    }

}
.mobile-menu{
    display:none;
}

@media(max-width:768px){

    .mobile-menu{

        position:fixed;

        bottom:15px;
        left:50%;

        transform:translateX(-50%);

        width:90%;

        display:flex;

        justify-content:space-around;

        align-items:center;

        padding:12px;

        background:rgba(10,15,40,.9);

        backdrop-filter:blur(15px);

        border:1px solid rgba(0,255,255,.2);

        border-radius:20px;

        z-index:9999;

        box-shadow:
        0 0 20px rgba(0,255,255,.2);
    }

    .mobile-menu a{

        display:flex;

        flex-direction:column;

        align-items:center;

        gap:4px;

        text-decoration:none;

        color:white;

        font-size:.75rem;
    }

    .mobile-menu a:hover{

        color:#00ffff;
    }
}
@media(max-width:768px){

    body{
        padding-bottom:90px;
    }

}@media(max-width:768px){

    .whatsapp-btn{

        bottom:100px;

        right:20px;

    }

}
