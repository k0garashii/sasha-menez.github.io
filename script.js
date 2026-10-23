// --- DICTIONNAIRE DE TRADUCTION ---
const translations = {
    fr: {
        "nav-projects": "Projets",
        "nav-about": "À propos",
        "nav-contact": "Contact",
        "hero-title": 'Développeur de <span class="highlight">Simulations</span> & <span class="highlight">Jeux Vidéo</span>',
        "hero-desc": "Passionné par les mathématiques appliquées, la physique et le développement bas niveau (C/C++).",
        "hero-btn": "Voir mes travaux",
        "projects-title": "Mes Projets",
        "about-title": "À propos",
        "about-desc": "Je conçois des simulations et des projets techniques en reliant maths, physique, intelligence artificielle et programmation.",
        "about-point-1": "Simulation numérique et modélisation physique.",
        "about-point-2": "Programmation C/C++/C# et outils temps réel.",
        "about-point-3": "Prototypage IA pour comportements et systèmes.",
        "about-cv": "Voir mon CV",
        "domains-title": "Domaines",
        "domain-maths-title": "Maths",
        "domain-maths-desc": "Modélisation, optimisation et simulation pour comprendre les systèmes complexes.",
        "domain-physics-title": "Physique",
        "domain-physics-desc": "Simulation de phénomènes, mécanique et champs, avec validation numérique.",
        "domain-prog-title": "Programmation",
        "domain-prog-desc": "C/C++/C#, shaders, outils, moteurs, Raylib, Python.",
        "domain-motor-title": "Moteur",
        "domain-motor-desc": "Unreal 5.6 / Unity pour la conception de jeux et de simulations.",
        "domain-ai-title": "IA",
        "domain-ai-desc": "Apprentissage supervisé, systèmes adaptatifs et prototypes d'agents.",
        "filter-all": "Tous",
        "filter-game": "Jeux Vidéo",
        "filter-science": "Maths & Physique",
        "filter-ai": "IA",
        "filter-upcoming": "À venir",
        "filter-label": "Filtrer",
        "maths": "Mathématiques",
        "duration-1w": "1 semaine",
        "duration-2w": "2 semaines",
        "duration-3m": "3 mois",
        "side-project": "Projet Perso",
        "group-2": "Groupe de 2",
        "group-3": "Groupe de 3",
        "p1-title": "Action 2.5D",
        "p1-desc": "Jeu inter-cursus (sound design, game programming, game design) développé sur Unity en 2.5D.",
        "p2-title": "Tower Defense",
        "p2-desc": "Création d'un tower defense en 2 semaines avec éditeur de carte personnalisé.",
        "p3-title": "Simulation d'un tir de canon en 2D",
        "p3-desc": "Simulation de trajectoire d'un tir de canon et d'un impact sur un pendule, résultant en un mouvement oscillatoire.",
        "p4-title": "Rubik's Cube",
        "p4-desc": "Reproduction d'un Rubik's Cube et de ses mouvements à l'aide de quaternions entièrement recodés.",
        "p5-title": "Collisions 3D dynamiques",
        "p5-desc": "Recoder les collisions 3D entre une sphère en mouvement et un cube fixe à l'aide des sommes de Minkowski.",
        "p6-title": "Génération procédurale de terrain",
        "p6-desc": "Prototype court de génération procédurale de terrain sous Unity.",
        "p7-title": "Système solaire",
        "p7-desc": "Reproduction du système solaire avec champs gravitationnels et algorithme de Verlet.",
        "p8-title": "Simulation d'une tornade dans un environnement 3D",
        "p8-desc": "Simuler l'impact d'une tornade à l'aide des équations de Burgers-Rott et de champs de vecteurs.",
        "p9-title": "Deep Learning + Simulation AI",
        "p9-desc": "Recréer des comportements réalistes d'ennemis dans un jeu TPS.",
        "p10-title": "Stagiaire",
        "p10-desc": "Projet à développer.",
        "p11-title": "Création d'un moteur de jeu",
        "p11-desc": "Recréer les fonctionnalités d'un moteur de jeu style Unity / Unreal dans le but de créer un jeu de voiture.",
        "duration-10w": "10 semaines",
        "featured-label": "Projet phare",
        "featured-desc": "Un moteur de jeu 3D en C++ développé à trois, avec son éditeur, son rendu, sa physique et son scripting, éprouvé par une démo de course jouable.",
        "featured-point-1": "Physique de véhicule construite sur Jolt",
        "featured-point-2": "Scripts C++ rechargés à chaud depuis l'éditeur",
        "featured-point-3": "Son moteur mixé selon le régime",
        "featured-cta": "Découvrir le moteur"
    },
    en: {
        "nav-projects": "Projects",
        "nav-about": "About",
        "nav-contact": "Contact",
        "hero-title": '<span class="highlight">Simulation</span> & <span class="highlight">Game</span> Developer',
        "hero-desc": "Passionate about applied mathematics, physics, and low-level development (C/C++).",
        "hero-btn": "View my work",
        "projects-title": "My Projects",
        "about-title": "About",
        "about-desc": "I design simulations and technical projects by connecting math, physics, artificial intelligence, and programming.",
        "about-point-1": "Numerical simulation and physical modeling.",
        "about-point-2": "C/C++/C# programming and real-time tools.",
        "about-point-3": "AI prototyping for behaviors and systems.",
        "about-cv": "View my CV",
        "domains-title": "Domains",
        "domain-maths-title": "Math",
        "domain-maths-desc": "Modeling, optimization, and simulation to understand complex systems.",
        "domain-physics-title": "Physics",
        "domain-physics-desc": "Phenomena simulation, mechanics, and fields with numerical validation.",
        "domain-prog-title": "Programming",
        "domain-prog-desc": "C/C++/C#, shaders, tools, engines, Raylib, Python.",
        "domain-motor-title": "Engine",
        "domain-motor-desc": "Unreal 5.6 / Unity for game and simulation design.",
        "domain-ai-title": "AI",
        "domain-ai-desc": "Supervised learning, adaptive systems, and agent prototypes.",
        "filter-all": "All",
        "filter-game": "Video Games",
        "filter-science": "Math & Physics",
        "filter-ai": "AI",
        "filter-upcoming": "Upcoming",
        "filter-label": "Filter",
        "maths": "Mathematics",
        "duration-1w": "1 week",
        "duration-2w": "2 weeks",
        "duration-3m": "3 months",
        "side-project": "Side Project",
        "group-2": "Team of 2",
        "group-3": "Team of 3",
        "p1-title": "2.5D Action",
        "p1-desc": "Cross-curriculum project (sound design, game programming, game design) developed in Unity 2.5D.",
        "p2-title": "Tower Defense",
        "p2-desc": "Built in 2 weeks with a custom map editor using C++ and Raylib.",
        "p3-title": "2D Cannon Simulation",
        "p3-desc": "Trajectory simulation of a cannon shot and impact on a pendulum, resulting in oscillatory motion.",
        "p4-title": "Rubik's Cube",
        "p4-desc": "Reproduction of a Rubik's Cube and its movements using fully re-coded quaternions.",
        "p5-title": "Dynamic 3D Collisions",
        "p5-desc": "Rebuild 3D collisions between a moving sphere and a fixed cube using Minkowski sums.",
        "p6-title": "Procedural Terrain Generation",
        "p6-desc": "Short Unity prototype for procedural terrain generation.",
        "p7-title": "Solar System",
        "p7-desc": "Reproduction of the solar system using gravitational fields and the Verlet algorithm.",
        "p8-title": "3D Tornado Simulation",
        "p8-desc": "Simulating the impact of a tornado using Burgers-Rott equations and vector fields.",
        "p9-title": "Deep Learning + Simulation AI",
        "p9-desc": "Recreating realistic enemy behaviors in a TPS game.",
        "p10-title": "Internship Project",
        "p10-desc": "Project to be developed.",
        "p11-title": "Game Engine Creation",
        "p11-desc": "Rebuilding the features of a Unity / Unreal-style game engine in order to make a car game.",
        "duration-10w": "10 weeks",
        "featured-label": "Featured project",
        "featured-desc": "A 3D game engine in C++ built by a team of three, with its own editor, rendering, physics and scripting, proven by a playable racing demo.",
        "featured-point-1": "Vehicle physics built on Jolt",
        "featured-point-2": "C++ scripts hot-reloaded from the editor",
        "featured-point-3": "Engine sound mixed by RPM",
        "featured-cta": "Explore the engine"
    }
};

// --- LOGIQUE DE TRADUCTION ---
const langBtn = document.getElementById("lang-switch");
const langStorageKey = "siteLang";
let currentLang = localStorage.getItem(langStorageKey) || "fr";
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("primary-nav");

function updateLanguage() {
    document.documentElement.lang = currentLang;

    if (langBtn) {
        langBtn.textContent = currentLang === "fr" ? "EN" : "FR";
        langBtn.setAttribute(
            "aria-label",
            currentLang === "fr" ? "Switch to English" : "Passer en français"
        );
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = translations[currentLang][key];
        if (value) {
            el.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const key = el.getAttribute("data-i18n-html");
        const value = translations[currentLang][key];
        if (value) {
            el.innerHTML = value;
        }
    });
}

if (langBtn) {
    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "fr" ? "en" : "fr";
        localStorage.setItem(langStorageKey, currentLang);
        updateLanguage();
    });
}

if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("is-open");
        navToggle.classList.toggle("is-open", isOpen);
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("is-open");
            navToggle.classList.remove("is-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// --- LOGIQUE DE FILTRAGE ---
const filterButtons = document.querySelectorAll(".filter-btn[data-filter]");
const projectCards = document.querySelectorAll(".project-card");
const filterSelect = document.getElementById("project-filter-select");

const applyFilter = (filterValue) => {
    projectCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        card.style.display = filterValue === "all" || category === filterValue ? "block" : "none";
    });
};

const setActiveButton = (filterValue) => {
    filterButtons.forEach((btn) => {
        const isActive = btn.getAttribute("data-filter") === filterValue;
        btn.classList.toggle("active", isActive);
    });
};

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const filterValue = btn.getAttribute("data-filter");
        setActiveButton(filterValue);
        applyFilter(filterValue);

        if (filterSelect) {
            filterSelect.value = filterValue;
        }
    });
});

if (filterSelect) {
    const activeButton = document.querySelector(".filter-btn.active[data-filter]");
    filterSelect.value = activeButton ? activeButton.getAttribute("data-filter") : "all";

    filterSelect.addEventListener("change", (event) => {
        const filterValue = event.target.value;
        setActiveButton(filterValue);
        applyFilter(filterValue);
    });
}

updateLanguage();
