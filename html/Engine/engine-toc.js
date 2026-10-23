/* ============================================================
   engine-toc.js : table des matières (burger) des pages EnigmaEngine
   Partagé par engine.html et toutes les sous-pages du moteur.
   - liste générée depuis les sections [data-toc] de la page :
     titre = premier h1/h2 de la section, sous-titre = .engine-section-label
     (régénérée au changement de langue, après annexe.js)
   - ouverture / fermeture au clic, fermeture hors panneau ou avec Échap
   - surlignage du lien correspondant à la section visible
   ============================================================ */
(() => {
    const toc = document.getElementById("engine-toc");
    const toggle = document.getElementById("engine-toc-toggle");
    const list = toc ? toc.querySelector(".engine-toc-list") : null;
    const sections = Array.from(document.querySelectorAll("[data-toc][id]"));
    let links = [];

    const setOpen = (isOpen) => {
        if (!toc || !toggle) {
            return;
        }
        toc.classList.toggle("is-open", isOpen);
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };

    const readText = (section, selector) => {
        const el = section.querySelector(selector);
        return el ? el.textContent.trim() : "";
    };

    const buildList = () => {
        if (!list) {
            return;
        }
        const activeId = (links.find((link) => link.classList.contains("is-active")) || {}).hash;
        list.innerHTML = "";

        links = sections.map((section, index) => {
            const link = document.createElement("a");
            link.className = "engine-toc-link";
            link.href = `#${section.id}`;
            if (link.hash === activeId) {
                link.classList.add("is-active");
            }

            const number = document.createElement("span");
            number.className = "engine-toc-number";
            number.textContent = String(index + 1).padStart(2, "0");

            const copy = document.createElement("span");
            copy.className = "engine-toc-copy";
            const title = document.createElement("strong");
            title.textContent = section.dataset.tocTitle || readText(section, "h1, h2");
            const subtitle = document.createElement("small");
            subtitle.textContent = readText(section, ".engine-section-label");
            copy.append(title, subtitle);

            link.append(number, copy);
            link.addEventListener("click", () => setOpen(false));

            const item = document.createElement("li");
            item.append(link);
            list.append(item);
            return link;
        });
    };

    buildList();

    const langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
        langToggle.addEventListener("click", buildList);
    }

    if (toc && toggle) {
        toggle.addEventListener("click", (event) => {
            event.stopPropagation();
            setOpen(!toc.classList.contains("is-open"));
        });

        document.addEventListener("click", (event) => {
            if (!toc.contains(event.target)) {
                setOpen(false);
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && toc.classList.contains("is-open")) {
                setOpen(false);
                toggle.focus();
            }
        });
    }

    if (!("IntersectionObserver" in window) || !sections.length) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }
                links.forEach((link) => {
                    link.classList.toggle("is-active", link.hash === `#${entry.target.id}`);
                });
            });
        },
        { rootMargin: "-22% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
})();
