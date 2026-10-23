const translations = {
    fr: {
        common: {
            back: "Retour au portfolio",
            backToEngine: "Retour",
            tocToggle: "Afficher la table des matières",
            objectiveTitle: "Objectif du projet",
            mathChallengesTitle: "Défis mathématiques",
            challengesTitle: "Défis",
            visualTitle: "Représentation visuelle",
            downloadTitle: "Télécharger le projet",
            downloadDesc: "Fichier ZIP contenant la build du projet",
            downloadCta: "Télécharger",
            codeTitle: "Aperçu du code",
            placeholderVideo: "Vidéo du moteur en action",
            architectureBadge: "Architecture logicielle",
            projectOverviewTitle: "Aperçu du projet",
            pageStatusTitle: "État actuel de la page",
            pageStatusText:
                "Cette page a été nettoyée et structurée. Le contenu détaillé sera complété au fur et à mesure avec les informations projet.",
            keyPointsTitle: "Points déjà définis",
            plannedAdditionsTitle: "Ce qui sera ajouté ensuite",
            galleryTitle: "Galerie",
            videoTitle: "Vidéo",
            maths: "Mathématiques",
            physics: "Physique",
            simulation: "Simulation",
            workInProgressBadge: "Fiche en préparation",
            prototypeBadge: "Prototype",
            crossCurriculum: "Inter-cursus",
            "duration-1w": "1 semaine",
            "duration-2w": "2 semaines",
            "duration-3m": "3 mois",
            "duration-4h": "4 h",
            "group-2": "Groupe de 2",
            "group-3": "Groupe de 3",
            "side-project": "Projet Perso"
        },
        canon: {
            pageTitle: "Détails du Projet | Canon",
            title: "Simulation d'un tir de canon en 2D",
            objectiveText:
                "Ce projet visait à simuler un tir de canon en 2D, incluant la trajectoire d'un projectile et sa collision avec un pendule. Il modélise le mouvement d'un projectile tiré par un canon à l'aide des équations de la cinématique, à la fois dans un environnement sans frottements et dans un environnement plus réaliste incluant la résistance de l'air. Il simule également l'interaction lors de la collision du projectile avec un pendule cible. Le projet a été développé en C# avec le moteur Unity.",
            canonChallenges:
                "- Calculer l'équation horaire de l'obus du canon<br>\n- Calculer la force résultante à l'impact sur le pendule<br>\n- Calculer la trajectoire de l'obus en prenant en compte la friction de l'air<br>\n- Simuler la trajectoire de l'obus en fonction de paramètres initiaux particuliers",
            trajectoryTitle: "Trajectoire du projectile",
            frictionOff: "Sans forces de frottement",
            frictionOn: "Avec forces de frottement",
            impactTitle: "Force à l'impact",
            linearVelocity: "Vitesse linéaire de la boîte après impact :",
            angularVelocity: "Vitesse angulaire de la boîte après impact :"
        },
        rubik: {
            pageTitle: "Détails du Projet | Rubik's Cube",
            title: "Rubik's Cube",
            objectiveText:
                "QuaterCube est un projet Unity visant à explorer et maîtriser l'utilisation des quaternions pour gérer les rotations 3D. Il s'agit d'une simulation de Rubik's Cube entièrement implémentée en utilisant uniquement des quaternions, partiellement recodés.",
            rubikChallenges:
                "- Comprendre et appliquer les rotations par quaternions dans Unity.<br>\n- Manipuler les transformations 3D sans gimbal lock.<br>\n- Reproduire les mouvements complexes d'un Rubik's Cube en utilisant la composition de quaternions.",
            actionsTitle: "Actions",
            actionGenerate: "Générer",
            actionGenerateDesc: " : crée un nouveau Rubik's Cube en utilisant la taille sélectionnée, la profondeur de mélange et la sensibilité de la souris.",
            actionInvert: "Inverser",
            actionInvertDesc: " : résout le Rubik's Cube en inversant toutes les rotations qui ont été effectuées précédemment.",
            actionSave: "Sauvegarder",
            actionSaveDesc: " : sauvegarde l'état actuel du cube pour pouvoir quitter le jeu et garder la progression.",
            actionLoad: "Récupérer",
            actionLoadDesc: " : recrée le cube à partir des données sauvegardées et restaure le dernier état connu."
        },
        tornado: {
            pageTitle: "Détails du Projet | Tornade",
            title: "Simulation d'une tornade dans un environnement 3D",
            descriptionTitle: "Description et objectifs du projet",
            descriptionText:
                "L'objectif était de réaliser une simulation de tornade dans un environnement 3D, incluant la modélisation des forces et des mouvements associés. Le projet vise à simuler le comportement dynamique d'une tornade en utilisant les équations de Burgers-Rott dans un environnement réaliste. Le projet a été développé avec Unreal Engine 5.6.",
            tornadoChallenges:
                "- Appliquer les équations de Burgers-Rott sur Unreal Engine<br>\n- Représenter le bruit de la tornade à l'aide d'une force de turbulence<br>\n- Calculer le facteur d'évasement de la tornade pour une représentation plus réaliste<br>\n- Transiter d'un état d'aspiration à un état d'expulsion",
            tornadoHowTitle: "Comment fonctionne la tornade ?",
            tornadoHowText:
                "Concrètement, une tornade possède plusieurs caractéristiques physiques distinctes, telles que la rotation rapide de l'air, une pression atmosphérique basse au centre et des forces de turbulence qui influencent son comportement dynamique.\nDans ce projet, je me suis concentré sur quatre facteurs physiques majeurs.<br><br>",
            noiseTitle: "Le bruit",
            gammaTitle: "Le gamma (force de rotation)",
            flowTitle: "L'écoulement (ou champ de vitesse)",
            flowText:
                "Il est modélisé à l'aide des trois éléments majeurs qui forment une tornade : la vitesse radiale \\( V_r \\), la vitesse tangente \\( V_t \\) et la vitesse verticale \\( V_z \\).<br><br>",
            flowResult:
                "La vitesse finale du flux d'air à une position donnée est obtenue en combinant ces trois composantes vectorielles.<br><br>",
            openingTitle: "Ouverture",
            openingText:
                "Maintenant que la représentation visuelle de la tornade est fonctionnelle et réaliste, il reste à créer les interactions avec les objets environnants. C'est ce qui sera poursuivi dans une future itération du projet."
        },
        chromestesia: {
            pageTitle: "Détails du Projet | Chromestesia",
            title: "Action 2.5D Unity",
            summaryText:
                "Projet inter-cursus réalisé sur Unity autour d'un jeu d'action 2.5D en collaboration avec d'autres spécialités.",
            overviewText:
                "La page détaillée part désormais d'une base propre. Elle servira à présenter le contexte de production, le rôle exact tenu sur le projet, les mécaniques principales et les choix techniques.",
            keyPointsText:
                "- Projet inter-cursus<br>\n- Développé sous Unity<br>\n- Période de 3 mois<br>\n- Logo et captures déjà disponibles",
            plannedAdditionsText:
                "- Présentation du gameplay et de la boucle de jeu<br>\n- Répartition du travail dans l'équipe<br>\n- Contraintes techniques rencontrées<br>\n- Vidéo ou démonstration jouable si disponible"
        },
        collision3d: {
            pageTitle: "Détails du Projet | Collision 3D",
            title: "Collisions 3D dynamiques",
            summaryText:
                "Projet de simulation visant à recoder des collisions 3D entre une sphère en mouvement et un cube fixe avec une approche géométrique basée sur les sommes de Minkowski.",
            overviewText:
                "Cette page est prête à recevoir le détail mathématique et l'implémentation. Les assets présents permettent déjà de documenter le principe et le résultat visuel.",
            keyPointsText:
                "- Projet Unity orienté maths et simulation<br>\n- Collision entre sphère mobile et cube fixe<br>\n- Utilisation des sommes de Minkowski<br>\n- Plusieurs captures déjà disponibles",
            plannedAdditionsText:
                "- Dérivation de l'approche géométrique<br>\n- Étapes de détection et de résolution de collision<br>\n- Comparaison entre représentation visuelle et modèle mathématique<br>\n- Extraits de code si pertinents"
        },
        "procedural-generation": {
            pageTitle: "Détails du Projet | Génération procédurale",
            title: "Génération procédurale de terrain",
            summaryText:
                "Prototype court autour de la génération procédurale de terrain dans Unity.",
            overviewText:
                "La page détaillée est maintenant structurée pour accueillir l'explication du procédé, des paramètres et du rendu obtenu.",
            keyPointsText:
                "- Prototype rapide<br>\n- Développé sous Unity<br>\n- Projet centré sur le terrain procédural<br>\n- Logo et visuel déjà disponibles",
            plannedAdditionsText:
                "- Méthode de génération utilisée<br>\n- Paramètres et contrôles disponibles<br>\n- Limites du prototype<br>\n- Améliorations possibles"
        },
        "solar-system": {
            pageTitle: "Détails du Projet | Système solaire",
            title: "Simulation de système solaire",
            summaryText:
                "Projet réalisé dans le cadre des cours sur Unity en 2 semaines pour reproduire le système solaire à l'aide de champs gravitationnels et de l'algorithme de Verlet.",
            overviewText:
                "L'objectif était de reproduire le comportement global du système solaire dans une simulation temps réel exploitable visuellement. Le projet mêle modélisation physique, intégration numérique, analyse dimensionnelle et habillage visuel du résultat.",
            objectiveText:
                "Le projet consistait à reproduire le système solaire dans Unity en simulant les interactions gravitationnelles entre les corps célestes. Pour cela, nous avons utilisé l'algorithme de Verlet afin d'intégrer les mouvements, tout en adaptant l'échelle des distances et du temps pour rendre la simulation stable et lisible.",
            solarChallenges:
                "- Appliquer des formules physiques dans une simulation exploitable<br>\n- Gérer les ordres de grandeur gigantesques du système solaire dans Unity<br>\n- Régler l'écoulement du temps pour conserver des orbites lisibles<br>\n- Coordonner le travail de groupe dans un délai court<br>\n- Habiller le projet pour obtenir un rendu clair et présentable",
            verletTitle: "Simulation gravitationnelle et algorithme de Verlet",
            verletText:
                "Chaque astre reçoit une accélération issue du champ gravitationnel généré par les autres corps. L'algorithme de Verlet permet ensuite d'actualiser les positions de manière stable, en limitant les dérives numériques et en conservant un comportement orbital crédible sur la durée.",
            scaleTitle: "Gestion des échelles et du temps",
            scaleText:
                "Un des enjeux majeurs du projet était de faire cohabiter dans Unity des masses, distances et vitesses gigantesques. Il a fallu travailler l'analyse dimensionnelle, choisir des facteurs d'échelle cohérents et accélérer le temps de manière contrôlée pour garder une simulation lisible, stable et démonstrative.",
            roleTitle: "Travail réalisé sur le projet",
            roleText:
                "Je me suis particulièrement concentré sur l'application de l'algorithme de Verlet, l'analyse dimensionnelle de la simulation et l'habillage du projet pour rendre le résultat clair et présentable.",
            keyPointsText:
                "- Projet réalisé dans le cadre des cours<br>\n- Développé sous Unity en 2 semaines<br>\n- Reproduction du système solaire<br>\n- Simulation basée sur l'algorithme de Verlet",
            plannedAdditionsText:
                "- Détail complet des hypothèses de modélisation<br>\n- Ajustements de temps et d'échelle selon les besoins<br>\n- Éventuels détails supplémentaires sur le travail d'équipe"
        },
        "tower-defense": {
            pageTitle: "Détails du Projet | Tower Defense",
            title: "Tower Defense",
            summaryText:
                "Projet C++ / Raylib réalisé en 2 semaines avec éditeur de carte personnalisé.",
            overviewText:
                "La page détaillée est maintenant prête à être enrichie avec le fonctionnement du jeu, l'éditeur de carte et l'organisation du projet en petit groupe.",
            keyPointsText:
                "- Développé en C++ avec Raylib<br>\n- Réalisé en 2 semaines<br>\n- Groupe de 2<br>\n- Présence d'un éditeur de carte",
            plannedAdditionsText:
                "- Boucle de jeu et systèmes principaux<br>\n- Fonctionnement de l'éditeur de carte<br>\n- Architecture du projet<br>\n- Captures et démonstration si disponibles"
        }
    },
    en: {
        common: {
            back: "Back to portfolio",
            backToEngine: "Back",
            tocToggle: "Show table of contents",
            objectiveTitle: "Project goal",
            mathChallengesTitle: "Math challenges",
            challengesTitle: "Challenges",
            visualTitle: "Visual preview",
            downloadTitle: "Download the project",
            downloadDesc: "ZIP file containing the project build",
            downloadCta: "Download",
            codeTitle: "Code preview",
            placeholderVideo: "Engine video in action",
            architectureBadge: "Software architecture",
            projectOverviewTitle: "Project overview",
            pageStatusTitle: "Current page status",
            pageStatusText:
                "This page has been cleaned up and structured. Detailed content will be completed gradually as project information is added.",
            keyPointsTitle: "Already-defined points",
            plannedAdditionsTitle: "What will be added next",
            galleryTitle: "Gallery",
            videoTitle: "Video",
            maths: "Mathematics",
            physics: "Physics",
            simulation: "Simulation",
            workInProgressBadge: "Page in progress",
            prototypeBadge: "Prototype",
            crossCurriculum: "Cross-curriculum",
            "duration-1w": "1 week",
            "duration-2w": "2 weeks",
            "duration-3m": "3 months",
            "duration-4h": "4 hours",
            "group-2": "Team of 2",
            "group-3": "Team of 3",
            "side-project": "Side Project"
        },
        canon: {
            pageTitle: "Project Details | Cannon",
            title: "2D Cannon Shot Simulation",
            objectiveText:
                "This project aimed to simulate a 2D cannon shot, including the trajectory of a projectile and its collision with a pendulum. It models the motion of a projectile fired by a cannon using kinematics equations, both in a frictionless environment and in a more realistic one that includes air resistance. It also simulates the interaction when the projectile collides with a target pendulum. The project was developed in C# with the Unity game engine.",
            canonChallenges:
                "- Compute the projectile time equation<br>\n- Compute the resulting force at impact on the pendulum<br>\n- Compute the trajectory while accounting for air friction<br>\n- Simulate the trajectory based on specific initial parameters",
            trajectoryTitle: "Projectile trajectory",
            frictionOff: "Without friction",
            frictionOn: "With friction",
            impactTitle: "Impact force",
            linearVelocity: "Linear velocity of the box after impact:",
            angularVelocity: "Angular velocity of the box after impact:"
        },
        rubik: {
            pageTitle: "Project Details | Rubik's Cube",
            title: "Rubik's Cube",
            objectiveText:
                "QuaterCube is a Unity project aimed at exploring and mastering the use of quaternions to handle 3D rotations. It is a Rubik's Cube simulation implemented entirely by relying on quaternions, some of which were re-coded from scratch.",
            rubikChallenges:
                "- Understand and apply quaternion rotations in Unity.<br>\n- Manipulate 3D transforms without gimbal lock.<br>\n- Reproduce complex Rubik's Cube moves using quaternion composition.",
            actionsTitle: "Actions",
            actionGenerate: "Generate",
            actionGenerateDesc: " : creates a new Rubik's Cube using the selected size, shuffle depth, and mouse sensitivity.",
            actionInvert: "Reverse",
            actionInvertDesc: " : solves the Rubik's Cube by reversing all rotations performed previously.",
            actionSave: "Save",
            actionSaveDesc: " : saves the current cube state so you can leave the game and keep your progress.",
            actionLoad: "Restore",
            actionLoadDesc: " : recreates the cube from saved data and restores the last known state."
        },
        tornado: {
            pageTitle: "Project Details | Tornado",
            title: "Tornado Simulation in a 3D Environment",
            descriptionTitle: "Description and project goals",
            descriptionText:
                "The goal was to build a tornado simulation in a 3D environment, including the modeling of the forces and motions involved. The project simulates the dynamic behavior of a tornado using the Burgers-Rott equations in a realistic environment. It was developed with Unreal Engine 5.6.",
            tornadoChallenges:
                "- Apply the Burgers-Rott equations in Unreal Engine<br>\n- Represent tornado noise with a turbulence force<br>\n- Compute the flare factor for a more realistic representation<br>\n- Transition from an intake state to an outflow state",
            tornadoHowTitle: "How does the tornado work?",
            tornadoHowText:
                "In practice, a tornado has several distinct physical characteristics, such as rapid air rotation, low atmospheric pressure at the core, and turbulence forces that influence its dynamic behavior.\nIn this project, I focused on four major physical factors.<br><br>",
            noiseTitle: "Noise",
            gammaTitle: "Gamma (rotational force)",
            flowTitle: "Flow (or velocity field)",
            flowText:
                "It is modeled using the three major components that form a tornado: radial velocity \\( V_r \\), tangential velocity \\( V_t \\), and vertical velocity \\( V_z \\).<br><br>",
            flowResult:
                "The final airflow velocity at a given position is obtained by combining these three vector components.<br><br>",
            openingTitle: "Next steps",
            openingText:
                "Now that the visual representation of the tornado is functional and realistic, the next step is to create interactions with surrounding objects. That will be the focus of a future iteration of the project."
        },
        chromestesia: {
            pageTitle: "Project Details | Chromestesia",
            title: "2.5D Unity Action",
            summaryText:
                "Cross-curriculum Unity project built around a 2.5D action game in collaboration with other specialties.",
            overviewText:
                "This detailed page now starts from a clean base. It will present the production context, the exact role on the project, the main mechanics, and the technical choices.",
            keyPointsText:
                "- Cross-curriculum project<br>\n- Developed in Unity<br>\n- Three-month production period<br>\n- Logo and screenshots already available",
            plannedAdditionsText:
                "- Gameplay and core loop overview<br>\n- Team work distribution<br>\n- Technical constraints encountered<br>\n- Video or playable demo if available"
        },
        collision3d: {
            pageTitle: "Project Details | 3D Collision",
            title: "Dynamic 3D Collisions",
            summaryText:
                "Simulation project focused on rebuilding 3D collisions between a moving sphere and a fixed cube with a geometric approach based on Minkowski sums.",
            overviewText:
                "This page is ready to receive the mathematical breakdown and the implementation details. The existing assets already help document the principle and the visual result.",
            keyPointsText:
                "- Unity project focused on math and simulation<br>\n- Collision between a moving sphere and a fixed cube<br>\n- Use of Minkowski sums<br>\n- Several screenshots already available",
            plannedAdditionsText:
                "- Derivation of the geometric approach<br>\n- Collision detection and resolution steps<br>\n- Comparison between visual representation and the mathematical model<br>\n- Code excerpts when relevant"
        },
        "procedural-generation": {
            pageTitle: "Project Details | Procedural Generation",
            title: "Procedural Terrain Generation",
            summaryText:
                "Short prototype focused on procedural terrain generation in Unity.",
            overviewText:
                "The detailed page is now structured to host the explanation of the generation method, the parameters, and the resulting visual output.",
            keyPointsText:
                "- Fast prototype<br>\n- Developed in Unity<br>\n- Project centered on procedural terrain<br>\n- Logo and visual already available",
            plannedAdditionsText:
                "- Generation method used<br>\n- Parameters and controls available<br>\n- Prototype limits<br>\n- Possible improvements"
        },
        "solar-system": {
            pageTitle: "Project Details | Solar System",
            title: "Solar System Simulation",
            summaryText:
                "Course project built in Unity over 2 weeks to reproduce the solar system using gravitational fields and the Verlet algorithm.",
            overviewText:
                "The goal was to reproduce the overall behavior of the solar system in a visually usable real-time simulation. The project combines physical modeling, numerical integration, dimensional analysis, and visual polish.",
            objectiveText:
                "The project focused on reproducing the solar system in Unity by simulating gravitational interactions between celestial bodies. To do that, we used the Verlet algorithm to integrate motion while adapting distance and time scales to keep the simulation stable and readable.",
            solarChallenges:
                "- Apply physical formulas inside a usable simulation<br>\n- Handle the massive orders of magnitude involved in a solar system inside Unity<br>\n- Tune time progression to keep the orbits readable<br>\n- Coordinate team work within a short deadline<br>\n- Add visual polish to make the project clear and presentable",
            verletTitle: "Gravitational simulation and the Verlet algorithm",
            verletText:
                "Each body receives an acceleration generated by the gravitational field of the other bodies. The Verlet algorithm is then used to update positions in a stable way, limiting numerical drift while preserving believable orbital motion over time.",
            scaleTitle: "Managing scale and time",
            scaleText:
                "One of the main challenges was making extremely large masses, distances, and velocities coexist inside Unity. That required dimensional analysis, coherent scaling factors, and controlled time acceleration to keep the simulation readable, stable, and demonstrative.",
            roleTitle: "My contribution to the project",
            roleText:
                "I focused especially on implementing the Verlet algorithm, working on the dimensional analysis of the simulation, and handling the visual polish to make the result clear and presentable.",
            keyPointsText:
                "- Course project<br>\n- Built in Unity in 2 weeks<br>\n- Solar system reproduction<br>\n- Simulation based on the Verlet algorithm",
            plannedAdditionsText:
                "- Full modeling assumptions<br>\n- Time and scale adjustments where needed<br>\n- Additional details on the team work if useful"
        },
        "tower-defense": {
            pageTitle: "Project Details | Tower Defense",
            title: "Tower Defense",
            summaryText:
                "C++ / Raylib project built in 2 weeks with a custom map editor.",
            overviewText:
                "The detailed page is now ready to be expanded with the gameplay systems, the map editor, and the project organization in a small team.",
            keyPointsText:
                "- Developed in C++ with Raylib<br>\n- Built in 2 weeks<br>\n- Team of 2<br>\n- Includes a custom map editor",
            plannedAdditionsText:
                "- Core loop and main systems<br>\n- How the map editor works<br>\n- Project architecture<br>\n- Screenshots and demo if available"
        }
    }
};

// Traductions additionnelles déclarées par une page avant ce script
// (window.extraTranslations = { en: { common: {...}, "page-id": {...} } })
Object.entries(window.extraTranslations || {}).forEach(([lang, pages]) => {
    translations[lang] = translations[lang] || {};
    Object.entries(pages).forEach(([pageId, keys]) => {
        translations[lang][pageId] = Object.assign(translations[lang][pageId] || {}, keys);
    });
});

const langToggle = document.getElementById("lang-toggle");
const page = document.body.dataset.page || "common";
const langStorageKey = "siteLang";
const readStoredLang = () => {
    try {
        const stored = localStorage.getItem(langStorageKey);
        return stored === "en" || stored === "fr" ? stored : "fr";
    } catch (error) {
        return "fr";
    }
};
let currentLang = readStoredLang();

const getTranslation = (key) => {
    const langMap = translations[currentLang] || {};
    const pageMap = langMap[page] || {};
    const commonMap = langMap.common || {};
    return pageMap[key] ?? commonMap[key];
};

// Texte d'origine (français) écrit dans le HTML, mémorisé au premier passage :
// une clé absente du dictionnaire FR retombe sur ce texte. Les pages peuvent
// donc ne fournir que la version anglaise (ex : html/Engine/engine-i18n.js).
const originalTexts = new WeakMap();
const originalTitle = document.title;
const resolveTranslation = (el, slot, key, readOriginal) => {
    let saved = originalTexts.get(el);
    if (!saved) {
        saved = {};
        originalTexts.set(el, saved);
    }
    if (!(slot in saved)) {
        saved[slot] = readOriginal();
    }
    return getTranslation(key) ?? (currentLang === "fr" ? saved[slot] : undefined);
};

const applyTranslations = () => {
    document.documentElement.lang = currentLang;

    const titleKey = document.body.dataset.titleKey;
    if (titleKey) {
        const titleValue = getTranslation(titleKey) ?? (currentLang === "fr" ? originalTitle : undefined);
        if (titleValue) {
            document.title = titleValue;
        }
    }

    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const value = resolveTranslation(el, "text", key, () => el.textContent);
        if (value) {
            el.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
        const key = el.getAttribute("data-i18n-html");
        const value = resolveTranslation(el, "html", key, () => el.innerHTML);
        if (value) {
            el.innerHTML = value;
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
        const value = resolveTranslation(el, "alt", el.getAttribute("data-i18n-alt"), () => el.getAttribute("alt"));
        if (value) {
            el.setAttribute("alt", value);
        }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
        const value = resolveTranslation(el, "aria", el.getAttribute("data-i18n-aria"), () => el.getAttribute("aria-label"));
        if (value) {
            el.setAttribute("aria-label", value);
        }
    });

    // Les formules MathJax injectées via innerHTML doivent être recomposées
    if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
        window.MathJax.typesetPromise().catch(() => {});
    }

    if (langToggle) {
        langToggle.textContent = currentLang === "fr" ? "EN" : "FR";
        langToggle.setAttribute(
            "aria-label",
            currentLang === "fr" ? "Switch to English" : "Passer en français"
        );
    }
};

if (langToggle) {
    langToggle.addEventListener("click", () => {
        currentLang = currentLang === "fr" ? "en" : "fr";
        try {
            localStorage.setItem(langStorageKey, currentLang);
        } catch (error) {
            /* stockage indisponible : la langue ne sera pas mémorisée */
        }
        applyTranslations();
    });
}

applyTranslations();
