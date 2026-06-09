console.log("Shri Siddhi Vinayak Library Loaded 🚀");

/* =========================
   Loader
========================= */
const percent =
document.querySelector(
".loader-percent"
);

let count = 0;

const loading = setInterval(()=>{

    count++;

    percent.textContent =
    count + "%";

    if(count >= 100){

        clearInterval(loading);

        setTimeout(()=>{

            document
            .getElementById("loader")
            .style.opacity = "0";

            setTimeout(()=>{

                document
                .getElementById("loader")
                .style.display = "none";

                document
                .getElementById("main-content")
                .style.display = "block";

            },500);

        },300);

    }

},25);


/* =========================
   Particle Background
========================= */

const canvas = document.getElementById("particles");

if(canvas){

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let mouse = {
        x: null,
        y: null,
        radius: 180
    };

    const particles = [];

    /* Desktop */

    window.addEventListener("mousemove", (e) => {

        mouse.x = e.clientX;
        mouse.y = e.clientY;

    });

    /* Mobile */

    window.addEventListener("touchstart", (e) => {

        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;

    }, { passive:true });

    window.addEventListener("touchmove", (e) => {

        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;

    }, { passive:true });

    window.addEventListener("touchend", () => {

        mouse.x = null;
        mouse.y = null;

    });

    class Particle{

        constructor(){

            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.size = Math.random() * 2 + 1;

            this.vx = (Math.random() - 0.5) * 1;
            this.vy = (Math.random() - 0.5) * 1;

            this.hue = Math.random() * 360;
        }

        update(){

            this.x += this.vx;
            this.y += this.vy;

            this.hue += 0.15;

            if(this.hue > 360){
                this.hue = 0;
            }
if(this.x < 0 || this.x > canvas.width){
    this.vx *= -1;
}

if(this.y < 0 || this.y > canvas.height){
    this.vy *= -1;
}

if(mouse.x !== null && mouse.y !== null){

    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if(distance < mouse.radius){

        this.x -= dx * 0.01;
        this.y -= dy * 0.01;

    }

}
}

draw(){

    ctx.beginPath();

    ctx.arc(
        this.x,
        this.y,
        this.size,
        0,
        Math.PI * 2
    );

    ctx.fillStyle =
    `hsl(${this.hue},100%,60%)`;

    ctx.fill();
}
}

for(
    let i = 0;
    i < (
        window.innerWidth < 768
        ? 80
        : 140
    );
    i++
){

    particles.push(
        new Particle()
    );

}

function connectParticles(){

    for(let a = 0; a < particles.length; a++){

        for(let b = a + 1; b < particles.length; b++){

            const dx =
            particles[a].x -
            particles[b].x;

            const dy =
            particles[a].y -
            particles[b].y;

            const distance =
            dx * dx + dy * dy;

            if(distance < 10000){

                ctx.beginPath();

                ctx.strokeStyle =
                `hsla(${particles[a].hue},
                100%,60%,0.08)`;

                ctx.lineWidth = 1;

                ctx.moveTo(
                    particles[a].x,
                    particles[a].y
                );

                ctx.lineTo(
                    particles[b].x,
                    particles[b].y
                );

                ctx.stroke();

            }

        }

    }

}

function animate(){

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach((particle) => {

        particle.update();
        particle.draw();

    });

       connectParticles();

requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

}

/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
document.querySelector(".cursor");

/* Desktop Only */

if(cursor){

    document.addEventListener("mousemove",(e)=>{

        cursor.style.left =
        e.clientX + "px";

        cursor.style.top =
        e.clientY + "px";

    });

    const hoverElements =
    document.querySelectorAll(
        "a, button, .btn-primary, .btn-secondary"
    );

    hoverElements.forEach((element)=>{

        element.addEventListener("mouseenter",()=>{

            cursor.style.width = "50px";
            cursor.style.height = "50px";

        });

        element.addEventListener("mouseleave",()=>{

            cursor.style.width = "25px";
            cursor.style.height = "25px";

        });

    });

}

/* =========================
   TYPEWRITER EFFECT
========================= */

const texts = [

    "Focused Environment",
    "24/7 Study Atmosphere",
    "Competitive Exam Preparation",
    "Your Path To Success"

];

let textIndex = 0;
let charIndex = 0;

const typingElement =
document.querySelector(".typing-text");

function typeEffect(){

    if(!typingElement) return;

    if(charIndex < texts[textIndex].length){

        typingElement.textContent +=
        texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,80);

    }else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingElement.textContent =
        texts[textIndex].substring(
            0,
            charIndex - 1
        );

        charIndex--;

        setTimeout(eraseEffect,40);

    }else{

        textIndex++;

        if(textIndex >= texts.length){
            textIndex = 0;
        }

        setTimeout(typeEffect,300);
    }
}

typeEffect();

/* =========================
   SCROLL REVEAL
========================= */

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach((item)=>{

        const top =
        item.getBoundingClientRect().top;

        const trigger =
        window.innerHeight - 100;

        if(top < trigger){

            item.classList.add("active");

        }

    });

});

/* =========================
   STATS COUNTER
========================= */

function animateValue(id, start, end, duration){

    const element =
    document.getElementById(id);

    if(!element) return;

    let startTime = null;

    function update(currentTime){

        if(!startTime){
            startTime = currentTime;
        }

        const progress =
        Math.min(
            (currentTime - startTime) / duration,
            1
        );

        element.textContent =
        Math.floor(
            progress * (end - start) + start
        );

        if(progress < 1){

            requestAnimationFrame(update);

        }

    }

    requestAnimationFrame(update);

}

let statsAnimated = false;

window.addEventListener("scroll", () => {

    const statsSection =
    document.querySelector(".stats");

    if(!statsSection || statsAnimated) return;

    const top =
    statsSection.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){

        animateValue("students",0,500,2000);
        animateValue("seats",0,150,2000);
        animateValue("hours",0,24,2000);
        animateValue("success",0,100,2000);

        statsAnimated = true;

    }

});

/* =========================
   WHATSAPP BUTTON
========================= */

const whatsappBtn =
document.querySelector(".whatsapp-btn");

if(whatsappBtn){

    whatsappBtn.style.opacity = "1";
    whatsappBtn.style.visibility = "visible";

}
/* =========================
   SCROLL PROGRESS
========================= */

window.addEventListener("scroll", () => {

    const scrollTop =
    document.documentElement.scrollTop;

    const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

    const progress =
    (scrollTop / scrollHeight) * 100;

    document.getElementById(
        "progress-bar"
    ).style.width = progress + "%";

});
const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach((section)=>{

        const sectionTop =
        section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current =
            section.getAttribute("id");
        }

    });

    navLinks.forEach((link)=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");
        }

    });

});
window.addEventListener("scroll",()=>{

    const navbar =
    document.querySelector(".navbar");

    if(window.scrollY > 100){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");
    }

});
/* =========================
   MOBILE MENU
========================= */

const menuToggle =
document.querySelector(".menu-toggle");

const navLinksMenu =
document.querySelector(".nav-links");

menuToggle.addEventListener("click",()=>{

    navLinksMenu.classList.toggle("active");

});
emailjs.init("v9PubkPkTrfKit55O");

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "service_idbj0yh",
        "template_4h7bn3w",
        this
    )
    .then(() => {

        alert(
            "Message Sent Successfully!"
        );

        this.reset();

    })
    .catch((error) => {

        alert("Failed to send message");

        console.log(error);

    });

});

/* =========================
   MOUSE LIGHT EFFECT
========================= */

const mouseLight = document.querySelector(".mouse-light");

if(mouseLight){

    const colors = [
        "#00ffff",
        "#7b61ff",
        "#00ff9d",
        "#4facfe",
        "#ff00ff"
    ];

    let colorIndex = 0;

    setInterval(()=>{

        mouseLight.style.background =
        colors[colorIndex];

        mouseLight.style.boxShadow =
        `0 0 120px ${colors[colorIndex]},
         0 0 240px ${colors[colorIndex]}`;

        colorIndex =
        (colorIndex + 1) % colors.length;

    },2000);

    document.addEventListener("mousemove", (e)=>{

        mouseLight.style.left =
        e.clientX + "px";

        mouseLight.style.top =
        e.clientY + "px";

    });

    document.addEventListener("touchmove", (e)=>{

        mouseLight.style.left =
        e.touches[0].clientX + "px";

        mouseLight.style.top =
        e.touches[0].clientY + "px";

    },{passive:true});

}

/* =========================
   FLOATING CARDS RANDOM
========================= */

document
.querySelectorAll(".floating-card")
.forEach(card => {

    card.style.left =
    Math.random() * 70 + "%";

    card.style.top =
    Math.random() * 85 + "%";

    card.style.animationDelay =
    Math.random() * 4 + "s";

});
