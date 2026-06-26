// ==========================================
// FORMULÁRIO DE CONTATO
// ==========================================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {

        alert("Por favor, preencha todos os campos.");

        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

        alert("Digite um e-mail válido.");

        return;
    }

    alert("Mensagem enviada com sucesso!");

    form.reset();

});

// ==========================================
// TEMA CLARO / ESCURO
// ==========================================

const themeButton = document.getElementById("themeButton");

let darkMode = true;

themeButton.addEventListener("click", () => {

    if (darkMode) {

        document.documentElement.style.setProperty("--bg", "#f8fafc");
        document.documentElement.style.setProperty("--card", "#ffffff");
        document.documentElement.style.setProperty("--card-hover", "#f1f5f9");

        document.documentElement.style.setProperty("--text", "#0f172a");
        document.documentElement.style.setProperty("--muted", "#475569");

        document.body.style.background = "#f8fafc";
        document.body.style.color = "#0f172a";

        themeButton.innerHTML = "☀️";

    } else {

        document.documentElement.style.setProperty("--bg", "#050816");
        document.documentElement.style.setProperty("--card", "#0f172a");
        document.documentElement.style.setProperty("--card-hover", "#16213d");

        document.documentElement.style.setProperty("--text", "#ffffff");
        document.documentElement.style.setProperty("--muted", "#94a3b8");

        document.body.style.background = "#050816";
        document.body.style.color = "#ffffff";

        themeButton.innerHTML = "🌙";
    }

    darkMode = !darkMode;

});

// ==========================================
// NAVBAR AO ROLAR
// ==========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5, 8, 22, 0.95)";

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.2)";

    } else {

        header.style.background =
            "rgba(5, 8, 22, 0.85)";

        header.style.boxShadow =
            "none";
    }

});

// ==========================================
// MENU ATIVO
// ==========================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${current}`
        ) {

            link.classList.add("active");
        }

    });

});

// ==========================================
// ANIMAÇÃO AO CARREGAR
// ==========================================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});