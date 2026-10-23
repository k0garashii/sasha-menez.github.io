/* ============================================================
   engine-i18n.js : traductions anglaises des pages EnigmaEngine
   Chargé AVANT annexe.js, qui fusionne window.extraTranslations
   dans son dictionnaire. Le français est le texte écrit dans le
   HTML : il n'est pas dupliqué ici (annexe.js le restaure seul).
   - common          : clés partagées (nav, pastilles, pagination)
   - engine          : page d'accueil engine.html
   - engine-<page>   : une entrée par sous-page (data-page du <body>)
   ============================================================ */
window.extraTranslations = {
    en: {
        common: {
            backToEngine: "Back",
            tocTitle: "On this page",
            ownerPersonal: "Personal work",
            ownerTeam: "Team work",
            ownerMixed: "Team + personal",
            ownerWip: "In progress",
            ownerWipPersonal: "Personal work · in progress",
            pagerLabel: "Engine pages",
            pagerPrev: "← Previous",
            pagerNext: "Next →",
            pagerBackHome: "Back to start →",
            navHome: "Engine home",
            navPhysics: "Physics",
            navScripting: "Scripting & Hot Reload",
            navAudio: "Audio",
            navRendering: "Rendering",
            navSerialisation: "Reflection & Serialization",
            navTools: "Editor & Tools",
            navAi: "AI: chat and actions",
            navTeam: "Team & Review",
            navGallery: "Gallery",
            limLabel: "Hindsight",
            limTitle: "Limits and next steps"
        },
        engine: {
            pageTitle: "Project Details | EnigmaEngine",
            heroLabel: "3D engine · C++20",
            heroSubtitle:
                "A custom C++ game engine built to power a playable racing game, with its own editor, rendering, physics, audio and scripting.",
            heroAlt: "In-game capture of the EnigmaEngine racing demo",
            metaContextTitle: "Context",
            metaContextText:
                "Course project in a team of 3, from March 10 to May 20, 2026, which I have kept improving since.",
            metaGoalTitle: "Goal",
            metaGoalText:
                "Build an engine able to serve as the base of a car game, then prove it with a playable racing demo.",
            metaStackTitle: "Stack",
            metaStackText: "C++20, CMake, custom RHI over OpenGL, Jolt Physics, ImGui, RTTR, miniaudio, Assimp, ENet.",
            todayLabel: "Current state",
            todayTitle: "What the engine already does",
            todayIntro:
                "The repository holds more than an engine: it builds an editor, a game executable and a scripting SDK, and it runs a small racing game with car selection, menus and cameras.",
            todayEditorTitle: "A complete editor",
            todayEditorText:
                "Hierarchy, inspector, viewport, content browser, console, material editor, gizmos, undo / redo.",
            todayPhysicsTitle: "Vehicle physics",
            todayPhysicsText:
                "Jolt integrated into the scene model, compound colliders and a VehicleController tunable from the editor.",
            todayRenderTitle: "Real-time rendering",
            todayRenderText: "Deferred PBR, IBL, cascaded directional shadows, SSAO, bloom, FXAA and 2D / 3D text.",
            todayScriptTitle: "Hot-reloaded scripts",
            todayScriptText:
                "C++ scripts compiled into a DLL, auto-generated reflection and reloading without leaving the editor.",
            todayAudioTitle: "A believable engine sound",
            todayAudioText: "3D audio with miniaudio and sound layers blended according to engine RPM.",
            todayNetTitle: "A networking base",
            todayNetText: "ENet client / server with serialized packets to sync player position and rotation.",
            pagesLabel: "Explore the project",
            pagesTitle: "Project pages",
            pagesIntro:
                "Each part of the engine has its own page. The tag shows whether it is my own work or a shared team effort.",
            pagesNavLabel: "EnigmaEngine project pages",
            physicsDesc: "Jolt integration, Physicalbody, collisions and VehicleController.",
            scriptingDesc: "Script lifecycle, generated reflection, DLL compilation and reloading.",
            audioDesc: "Spatial audio, listeners, emitters and engine sound built from RPM layers.",
            renderingDesc: "Custom RHI, deferred PBR, IBL, shadows, SSAO and post-processing.",
            serialisationDesc: "RTTR, JSON scenes and prefabs, save before play and restore.",
            toolsDesc: "ImGui panels, gizmos, shortcuts, undo / redo and duplication.",
            aiDesc: "AI console inside the editor, connected to a local LLM through Ollama.",
            teamDesc: "Organization, work split, current limits and what comes next.",
            galleryDesc: "Captures of the editor, the racing demo and the rendering."
        },
        "engine-physics": {
            pageTitle: "Physics | EnigmaEngine",
            introLabel: "Jolt Physics",
            title: "Physics",
            lead:
                "My goal was not only to integrate Jolt, but to build an engine layer that ties scene, editor, gameplay and simulation together consistently, all the way to a drivable car.",
            pbLabel: "The foundation",
            pbTitle: "Physicalbody, the object's physics manager",
            pbText1:
                "In EnigmaEngine, an object never talks to Jolt directly. I introduced a central layer, <code>Physicalbody</code>, which acts as the local physics manager of a <code>GameObject</code>. It centralizes the colliders, the active Jolt body, the motion type, transform synchronization and collision feedback to gameplay.",
            pbFigAlt: "Diagram of how Physicalbody works in EnigmaEngine",
            pbText2:
                "This class does not replace the other components, it coordinates them. The <code>Collider</code> describes a shape, the <code>Body</code> holds the Jolt reference and its <code>BodyID</code>, and the <code>Physicalbody</code> links both to produce a single physical representation per object.",
            pbCard1Title: "Shape",
            pbCard1Text: "The <code>Collider</code> builds its Jolt shape and keeps its local offsets.",
            pbCard2Title: "Body",
            pbCard2Text: "The <code>Body</code> creates and destroys the body in the <code>PhysicsSystem</code> from the final shape.",
            pbCard3Title: "Coordination",
            pbCard3Text: "The <code>Physicalbody</code> rebuilds, updates and dispatches the physics state around the object.",
            colLabel: "Shapes",
            colTitle: "Several colliders, one body",
            colText1:
                "Every collider derives from a common base that handles the parent, the local position and rotation, and the Jolt shape. Each type then builds its own shape: <code>BoxCollider</code>, <code>SphereCollider</code>, <code>MeshCollider</code> and <code>ConvexCollider</code>.",
            colText2:
                "When an object carries several colliders, I do not create several small independent bodies. The <code>Physicalbody</code> gathers them into a <strong>compound shape</strong>, then creates or rebuilds the body from that single volume. As soon as a collider changes size or position, the rebuild runs automatically.",
            colFigAlt: "Colliders shown in the EnigmaEngine editor",
            colNote:
                "Each body stores a pointer to its <code>Physicalbody</code> in its <code>userData</code>. That link is what later lets a Jolt contact be traced back to the engine object and its scripts.",
            rbLabel: "Component facade",
            rbTitle: "Rigidbody: expose without duplicating",
            rbText1:
                "The <code>Rigidbody</code> is the component added from the editor. It exposes what you expect from a dynamic object (mass, gravity, static / kinematic / dynamic motion type, trigger mode, velocities and forces), but every one of these operations is executed by the <code>Physicalbody</code>. The <code>Rigidbody</code> exposes, the <code>Physicalbody</code> executes: the physics logic lives in a single place.",
            rbText2:
                "An edge case is handled along the way: an object that gets a <code>Rigidbody</code> without any collider receives an <code>EmptyCollider</code>, so a minimal physical support always exists.",
            syncLabel: "Scene ↔ simulation",
            syncTitle: "Keeping two worlds in sync",
            syncText1: "Physics runs at a fixed step, rendering at the display rate. Synchronization therefore has to work both ways.",
            syncStep1: "<strong>Scene → physics</strong>A modified transform or collider updates the pose or shape in Jolt.",
            syncStep2: "<strong>Fixed step</strong><code>PhysicsSystem::Update</code> simulates, parallelized by Jolt's job system.",
            syncStep3: "<strong>Physics → scene</strong>The computed position and rotation are stored in the <code>Physicalbody</code>.",
            syncStep4: "<strong>Interpolation</strong>The displayed transform is interpolated between the last two physics steps.",
            syncNote:
                "A concrete case: in play mode, moving a physical object with the gizmos cannot just move its visual <code>Transform</code>. Otherwise the scene shows one position while Jolt simulates another. <code>UpdatePhysicsTransform</code> sends the change back to the body.",
            collLabel: "Into gameplay",
            collTitle: "From Jolt contacts to scripts",
            collText1:
                "Jolt callbacks fire during the simulation, potentially from several threads. I therefore never call gameplay code there: the <code>ContactListener</code> only queues body pairs, and dispatching happens after the physics step, on the main thread.",
            collStep1: "<strong>Detection</strong>Jolt reports the contact to the <code>ContactListener</code>.",
            collStep2: "<strong>Queue</strong>The pair is stored in <code>contactsAdded</code>, <code>Persisted</code> or <code>Removed</code>.",
            collStep3: "<strong>Resolution</strong><code>UpdateCallBacks()</code> finds both <code>Physicalbody</code> through the <code>userData</code>.",
            collStep4: "<strong>Dispatch</strong>Registered scripts receive <code>OnCollisionEnter</code>, <code>Stay</code> or <code>Exit</code>.",
            collText2:
                "A single function handles all three lists thanks to pointers to members. It is also a deliberate API choice: unlike Unity, I did not split <code>OnCollision</code> and <code>OnTrigger</code>. A body becomes a sensor with <code>SetTrigger</code>, and the script-side interface stays more compact.",
            vehLabel: "The most visible piece",
            vehTitle: "VehicleController",
            vehText1:
                "The <code>VehicleController</code> builds a complete car on top of Jolt's vehicle building blocks, not just a rigidbody pushed around by forces. It assembles the body, the four wheels, the suspension, the anti-roll bars, the differential, the engine, the gearbox and the vehicle constraint. Scripts only need to send the player's input and read the RPM, the speed or the current gear.",
            vehColGroup: "Group",
            vehColParams: "Settings exposed in the editor",
            vehRowGeneral: "General",
            vehRowGeneralText: "mass, max roll angle, FWD / RWD / AWD drive, automatic or manual gearbox",
            vehRowSusp: "Suspension",
            vehRowSuspText: "front / rear stiffness, frequency, damping",
            vehRowEngine: "Engine",
            vehRowEngineText: "max torque, min / max RPM, inertia, angular damping",
            vehRowWheels: "Wheels",
            vehRowWheelsText: "radius, width, wheelbase, track, steering angle, brake torque",
            vehText2:
                "The hard part: many of these settings cannot be changed on a Jolt vehicle once it is built. Each setter therefore triggers a clean rebuild of the car (<code>DeleteCar()</code> then <code>CreateCar()</code>), which makes it possible to tune the handling live from the inspector, in play mode. Wheels are drawn as gizmos to check their placement.",
            vehNote: "The RPM returned by <code>GetRPM()</code> directly drives the engine sound: see the <a href=\"./audio.html\">Audio</a> page.",
            lim1Title: "Collision layers",
            lim1Text:
                "Filtering relies on two fixed layers (static / moving). It is enough for the demo, but the next step is a layer system configurable at runtime, like Unity's.",
            lim2Title: "Physics queries",
            lim2Text:
                "Scripts do not have access to Jolt raycasts and overlaps yet. Exposing them would open the way to opponent AI and finer triggers."
        },
        "engine-scripting": {
            pageTitle: "Scripting & Hot Reload | EnigmaEngine",
            introLabel: "Gameplay in C++",
            title: "Scripting & Hot Reload",
            lead:
                "I wanted the comfort of Unreal: write a gameplay script in C++, click Hot-Reload, and see its variables appear in the inspector without restarting the editor or losing the scene.",
            apiLabel: "User side",
            apiTitle: "Writing a script",
            apiText1:
                "A script inherits from <code>Script&lt;T&gt;</code> and marks its editable variables with <code>ENIGMA_PROPERTY()</code>. That's it: no registration function to write by hand.",
            apiText2:
                "The <code>ScriptManager</code> then calls the classic game engine lifecycle: <code>Awake</code>, <code>Start</code>, <code>Update</code>, <code>FixedUpdate</code> (at the physics rate), <code>LateUpdate</code> and <code>End</code>, plus <code>OnCollisionEnter / Stay / Exit</code> coming from the physics layer. Scripts are kept in one list per stage, and the editor can generate a new script from a template.",
            reflLabel: "Code generation",
            reflTitle: "Automatically generated reflection",
            reflText1:
                "The engine's inspector relies on RTTR: it only shows what is registered in the reflection. Rather than asking users to write those registrations, the engine generates them:",
            reflStep1: "<strong>Reading headers</strong>The scripts folder is scanned for <code>ENIGMA_CLASS</code> and <code>ENIGMA_PROPERTY</code>.",
            reflStep2: "<strong>properties.json</strong>Classes, types and default values are written to an intermediate file.",
            reflStep3: "<strong>generated_reflection.cpp</strong>A C++ file registers each class in RTTR with the inspector's UI metadata.",
            reflStep4: "<strong>Exported entry points</strong><code>EnigmaRegisterScriptReflection</code> and <code>Unregister</code> are exported by the DLL.",
            reflText2:
                "The C++ type picks the widget: a <code>float</code> becomes a drag field, a <code>bool</code> a checkbox, a <code>Vector3D</code> three fields, a <code>GameObject*</code> an object reference. Each script is also added to the editor's component list, with its icon.",
            pipeLabel: "The core of the system",
            pipeTitle: "The hot reload pipeline",
            pipeText1:
                "Reloading is a real production chain, launched in an asynchronous task so the editor is not blocked during compilation:",
            pipeStep1: "<strong>Unloading</strong>Scripts are unregistered, their reflection and inspector caches cleared.",
            pipeStep2: "<strong>Generation</strong>JSON, then <code>generated_reflection.cpp</code>.",
            pipeStep3: "<strong>Compilation</strong><code>cmake --fresh</code> then <code>cmake --build</code> on the scripts project, output to <code>build_log.txt</code>.",
            pipeStep4: "<strong>Promotion</strong>The most recent DLL and PDB are copied to the expected location.",
            pipeStep5: "<strong>Loading</strong>Versioned copy <code>script_reloaded_N.dll</code>, then <code>LoadLibrary</code> and reflection registration.",
            pipeStep6: "<strong>Reattach</strong>Scripts and their values are reattached to the right scene objects through their UUID.",
            probLabel: "What resisted",
            probTitle: "Problems solved",
            prob1Title: "Locked DLL",
            prob1Text:
                "Windows locks a loaded DLL: it cannot be overwritten while the editor runs. The engine therefore loads a numbered copy, and the original DLL stays free for the next build.",
            prob2Title: "Stale reflection",
            prob2Text:
                "Without care, RTTR would keep types pointing to the old DLL's code. Each DLL therefore exports its own unregister function, called before FreeLibrary.",
            prob3Title: "Keeping the scene",
            prob3Text:
                "Objects are not recreated: only scripts are detached and reattached, with their property values saved in the scene's scripts file.",
            probNote:
                "Compilation errors never bring the editor down: each step returns a clean failure, logged in the engine console, and the full build log remains available.",
            lim1Title: "A deliberately simple parser",
            lim1Text:
                "Headers are read line by line: a property must fit on the line following its macro. A real parser (or libclang) would make the system more robust.",
            lim2Title: "More exposed types",
            lim2Text:
                "Properties currently cover float, int, bool, Vector3D and GameObject*. Arrays, enums and asset references are the next types to add."
        },
        "engine-audio": {
            pageTitle: "Audio | EnigmaEngine",
            introLabel: "miniaudio",
            title: "Audio",
            lead:
                "In a racing game, the engine sound carries a large part of the sense of speed. Beyond the audio system itself, I mostly focused on getting a believable car engine out of real recordings.",
            tagLayers: "RPM layers",
            sysLabel: "Architecture",
            sysTitle: "Three building blocks, modeled on Unity",
            sysText1:
                "The system relies on a miniaudio <code>ma_engine</code>, wrapped in a single <code>SoundManager</code>. On the scene side, two components are enough:",
            sysCard1Text: "Initializes the audio engine, keeps the list of emitters and listeners and updates them every frame.",
            sysCard2Text:
                "The player's ears: position and orientation are passed to miniaudio. If there are several, the one on the active game camera takes priority.",
            sysCard3Text: "Carries one or more sounds and places them at its object's world position. Its volume can be tuned from the inspector.",
            sysText2:
                "Each <code>Sound</code> exposes what gameplay needs: play, loop, spatialization, volume, pitch, position and velocity. The velocity passed to miniaudio also lets it compute the Doppler effect.",
            engLabel: "Feel",
            engTitle: "A car engine built from RPM layers",
            engText1:
                "A single recording sped up or slowed down quickly sounds wrong. I therefore used eight loops recorded on a Mazda MX-5 at fixed RPM, from 0 to 7,000 rpm. The RPM returned by the <code>VehicleController</code> decides how these loops are blended.",
            engText2:
                "Each layer gets a triangle-shaped weight: 1 at its recording RPM, 0 at the RPM of the neighboring layers. At any time, at most two layers are audible and their sum stays constant, which avoids volume jumps.",
            demoLabel: "Engine RPM (illustration)",
            engText3:
                "Volume alone is not enough: between two recordings, each layer's pitch is also adjusted so the rev-up stays continuous. Most of the work went into this fine tuning of pitch and volume.",
            lim1Title: "Mixing",
            lim1Text:
                "There are no audio buses yet (music, effects, engine) with their own volumes. That is the next piece to add to the SoundManager.",
            lim2Title: "Load and acceleration",
            lim2Text:
                "The sound currently depends on RPM alone. Telling acceleration from deceleration (\"on load\" / \"off load\" layers) would make the engine feel much more alive."
        },
        "engine-rendering": {
            pageTitle: "Rendering | EnigmaEngine",
            introLabel: "OpenGL 4.6",
            title: "Rendering",
            lead:
                "Rendering was designed by Eliott Blesz, who was in charge of the whole graphics side of the project. It relies on a custom abstraction layer (RHI) and on a physically based deferred pipeline, designed to show cars and a race track convincingly.",
            rhiLabel: "Abstraction",
            rhiTitle: "A custom RHI",
            rhiText1:
                "The engine never makes OpenGL calls outside the RHI (<em>Render Hardware Interface</em>). The renderer works with Vulkan-inspired interfaces (<code>IDevice</code>, <code>ICommandBuffer</code>, <code>IPipeline</code>, <code>IDescriptor</code>, <code>IFramebuffer</code>, <code>ISwapChain</code>...) and the <code>gl_core</code> module provides the OpenGL implementation.",
            rhiText2:
                "Each pass is described as a pipeline: shaders, vertex format, culling mode, depth and blending are declared once, at creation, instead of being changed on the fly while rendering.",
            rhiNote:
                "The whole project was built on the RHI's OpenGL backend. The current goal is to move the engine onto a Vulkan base, building on this abstraction.",
            frameLabel: "One frame",
            frameTitle: "The pipeline, pass by pass",
            frameStep1: "<strong>Shadows</strong>Shadow maps for directional, spot and point lights.",
            frameStep2: "<strong>G-Buffer</strong>Position, normal, albedo + AO, metal / roughness, clear coat, emissive.",
            frameStep3: "<strong>SSAO</strong>Screen-space ambient occlusion (64 samples), then blur.",
            frameStep4: "<strong>Deferred lighting</strong>PBR, IBL and shadows on a full-screen quad.",
            frameStep5: "<strong>Transparency</strong>Transparent objects in forward, back faces then front faces.",
            frameStep6: "<strong>Bloom</strong>Downsample / upsample chain on bright areas.",
            frameStep7: "<strong>UI</strong>Widgets, buttons and 2D / 3D text rendered with FreeType.",
            frameStep8: "<strong>FXAA</strong>Final anti-aliasing before presentation.",
            frameText1:
                "The same renderer serves two contexts: an \"editor\" instance (grid, gizmos, selection) and a \"game\" instance, the game camera's view, shown in the <em>Game</em> tab or full screen in the final executable.",
            lightLabel: "Materials and light",
            lightTitle: "PBR and image-based lighting",
            lightText1:
                "Materials follow the metal / roughness model, with a <em>clear coat</em> layer that matters a lot for car paint. Lighting combines a directional light, spots (up to 10) and point lights (up to 6).",
            lightText2:
                "Ambient lighting comes from an HDR image: it is projected onto a cubemap, from which an irradiance map (diffuse) and a map prefiltered per roughness level (specular) are precomputed, combined with a BRDF lookup table.",
            lightFigAlt: "A car rendered in EnigmaEngine",
            shadowLabel: "Shadows",
            shadowTitle: "Three kinds of shadows",
            shadow1Title: "Directional",
            shadow1Text:
                "Cascaded shadow maps (CSM) stored in a texture array, rendered in a single pass with a geometry shader. Resolution stays good both near the camera and far away.",
            shadow2Title: "Spot",
            shadow2Text: "One perspective shadow map per spot, sampled in the lighting pass.",
            shadow3Title: "Point",
            shadow3Text: "Depth cubemaps rendered in a single pass with a geometry shader that duplicates geometry onto the six faces.",
            lim1Title: "Moving to Vulkan",
            lim1Text:
                "This is the work in progress: the RHI was designed around Vulkan concepts, and this migration will truly validate the abstraction, proven on OpenGL so far.",
            lim2Title: "Fewer draw calls",
            lim2Text:
                "Off-screen objects are already discarded by a frustum / AABB test, and AABBs are only recomputed when the transform changes. Next: instancing and sorting draw calls by material."
        },
        "engine-serialisation": {
            pageTitle: "Reflection & Serialization | EnigmaEngine",
            introLabel: "RTTR + JSON",
            title: "Reflection & Serialization",
            lead:
                "Designed by Ugo Szemberg along with the project architecture, this is the invisible piece that holds the rest together: thanks to reflection, a component declared once is shown in the inspector, saved in the scene and restored after play mode.",
            reflLabel: "Declare once",
            reflTitle: "One declaration, three uses",
            reflText1:
                "Each component registers its properties in RTTR, along with a <code>UIData</code> metadata describing how to edit it (drag field, integer, checkbox, vector, color, object reference...).",
            use1Title: "Inspector",
            use1Text: "The editor walks the properties and picks the widget from the metadata, with no component-specific UI code.",
            use2Title: "Saving",
            use2Text: "The serializer walks the same properties, recursively, to write and read the JSON.",
            use3Title: "Scripts",
            use3Text: "User scripts go through the same path, with reflection generated at compile time.",
            fmtLabel: "Files",
            fmtTitle: "What gets saved",
            fmtColFile: "File",
            fmtColContent: "Content",
            fmtScene: "Object hierarchy and components, skybox, editor camera position.",
            fmtScript: "Attached scripts and their property values, stored by object UUID.",
            fmtPrefab: "An object and all its children, which can be instantiated in any scene.",
            fmtMat: "Parameters and textures of a material, edited in the material editor.",
            fmtText1:
                "Scripts are stored separately on purpose: they live in a reloadable DLL, and keeping them apart from the scene lets them be reattached after a hot reload without reloading everything else.",
            playLabel: "Play mode",
            playTitle: "Playing without breaking anything",
            playText1:
                "As in Unity, everything that changes during a test run (positions, script values, destroyed objects) must disappear when the game stops.",
            playStep1: "<strong>Play</strong><code>SaveBeforePlay</code> writes the scene to a temporary file.",
            playStep2: "<strong>Game</strong>Physics, scripts and audio freely modify the scene.",
            playStep3: "<strong>Stop</strong><code>ResetAfterPlay</code> clears the scene and rebuilds it from the temporary file.",
            playStep4: "<strong>Reattach</strong>Scripts are reattached to their objects, then the temporary file is deleted.",
            lim1Title: "Binary format",
            lim1Text:
                "JSON is readable and easy to debug, but heavy for a final build. A binary format for the game executable would speed up loading.",
            lim2Title: "Versioning",
            lim2Text:
                "Files carry no version number: renaming a property can make an old scene unreadable. A migration system would be the next step."
        },
        "engine-tools": {
            pageTitle: "Editor & Tools | EnigmaEngine",
            introLabel: "ImGui docking",
            title: "Editor & Tools",
            lead:
                "An engine is useless if you cannot build a scene with it. The editor, built by Eliott Blesz, is a standalone executable, with the panels you would expect from Unity or Unreal. I added undo / redo, unique identifiers and duplication to it.",
            panelsLabel: "Team work",
            panelsTitle: "The editor panels",
            panelsFigAlt: "The EnigmaEngine editor with the hierarchy, viewport, inspector and content browser",
            panel1Title: "Hierarchy",
            panel1Text: "Scene tree, object creation, selection and deletion.",
            panel2Title: "Viewport & Game",
            panel2Text: "Editing view with a free camera, gizmos and picking, plus the game camera view.",
            panel3Title: "Inspector",
            panel3Text: "Components and properties generated from RTTR reflection, scripts included.",
            panel4Title: "Content browser",
            panel4Text: "Asset browsing: models, materials, prefabs, scenes, sounds.",
            panel5Title: "Console",
            panel5Text: "Engine logs and script compilation feedback.",
            panel6Title: "Material editor",
            panel6Text: "Editing PBR materials and their textures, saved as <code>.mat</code>.",
            materialFigAlt: "Editing a material in EnigmaEngine",
            undoLabel: "Ctrl + Z / Ctrl + Y",
            undoTitle: "Undo / Redo",
            undoText1:
                "Every change to the scene records an <code>Action</code> that knows how to revert it: a closure, the UUID of the affected object and, when needed, a JSON snapshot. Actions cover object creation and deletion, parenting, transforms (position, rotation, scale) and adding or removing components.",
            undoText2:
                "The trick lies in the symmetry. During an undo, the manager switches to the <code>REDO</code> context: while modifying the scene, the inverse action records its own inverse… onto the redo stack. There is no \"redo\" code to write for each operation.",
            uuidTitle: "Why UUIDs",
            uuidText:
                "Undoing a deletion recreates the object: its memory address changes. An action therefore never keeps a pointer, only the object's 128-bit identifier, which also survives saving and hot reload.",
            snapTitle: "JSON snapshots",
            snapText:
                "A deletion serializes the object and its children before destroying them. Undoing it means deserializing it, reusing the scene serializer.",
            dupNote:
                "<strong>Duplication (Ctrl + D)</strong>: it also reuses the serializer. The selected object is serialized with its children and components, then deserialized under the same parent. Script values are not copied yet.",
            keysLabel: "Getting started",
            keysTitle: "Shortcuts",
            keysColAction: "Action",
            keysColInput: "Input",
            key1: "Free camera",
            key1Input: "Hold left click + ZQSD / A E",
            key2: "Panning",
            key2Input: "Hold mouse wheel",
            key3: "Translate / rotate / scale gizmo",
            key4: "Save / new scene",
            key5: "Undo / redo",
            key6: "Duplicate",
            lim1Title: "Scripts in the history",
            lim1Text: "Changes to script values cannot be undone yet, because their types live in the reloadable DLL.",
            lim2Title: "Bounded history",
            lim2Text:
                "The stacks have no size limit and a new action does not clear the redo stack yet. Those are the next two fixes."
        },
        "engine-ai": {
            pageTitle: "AI: chat and actions | EnigmaEngine",
            introLabel: "Local LLM",
            title: "AI: chat and actions",
            lead:
                "Since the end of the course project, I have kept improving the engine on my own time. The current work in progress: an assistant built into the editor, first able to answer, then to act on the scene.",
            chatLabel: "Working",
            chatTitle: "The AI console",
            chatText1:
                "An <code>AIConsole</code> panel is added to the editor, next to the log console. You type a question, send it with <em>Send</em> or Ctrl + Enter, and the history is displayed like a messaging app, with auto-scroll.",
            chatText2:
                "The model runs <strong>locally</strong> with Ollama: the engine sends the question as JSON to <code>127.0.0.1:11434/api/chat</code> through cpp-httplib. No API key, no data sent online, and the model can be swapped without touching the engine.",
            chatNote:
                "Connection errors and unexpected HTTP codes are reported explicitly, so you know right away when Ollama is not running.",
            actLabel: "In progress",
            actTitle: "Actions, not just answers",
            actText1:
                "The goal is for a request like \"add a rigidbody to the car and lower its mass\" to actually change the scene. The engine already has what it needs for that: RTTR reflection describes every component, its properties and its methods.",
            actStep1: "<strong>Context</strong>Describe the scene and the available components to the model, from the reflection.",
            actStep2: "<strong>Structured answer</strong>Ask for an action in JSON rather than free text.",
            actStep3: "<strong>Validation</strong>Check that the object, component and property exist before acting.",
            actStep4: "<strong>Execution</strong>Apply the action through RTTR, recording it in undo / redo.",
            actNote:
                "Current state: the chat works. The <code>ApplyAction</code> entry point exists but is not implemented yet. Going through undo / redo is a deliberate choice: an action from the AI must always be reversible."
        },
        "engine-team": {
            pageTitle: "Team & Review | EnigmaEngine",
            introLabel: "Course project",
            title: "Team & Review",
            lead:
                "EnigmaEngine was built by three people, from March 10 to May 20, 2026. This page clearly separates what I built from what the team built together, then reviews what is solid, what is young and what comes next.",
            teamLabel: "Organization",
            teamTitle: "The team and how it worked",
            member1: "Graphics: RHI, shaders, rendering, editor, loaders",
            member2: "Architecture, reflection, serialization, multithreading, debug, build",
            member3: "Physics, scripting, audio, tools",
            flow1Title: "Git and branches",
            flow1Text:
                "A shared GitHub organization, one branch per major workstream (renderer, editor, AI), merged into dev and then into main.",
            flow2Title: "Reproducible build",
            flow2Text:
                "CMake with presets and FetchContent: the 12 dependencies (Jolt, ImGui, RTTR, Assimp, miniaudio, ENet...) are downloaded and built automatically, with no manual install.",
            splitLabel: "Who did what",
            splitTitle: "My contributions and the shared work",
            mineList:
                "<li><a href=\"./physics.html\">Physics</a>: Jolt integration, Physicalbody, colliders, collisions to scripts, VehicleController</li><li><a href=\"./scripting.html\">Scripting &amp; hot reload</a>: generated reflection, DLL compilation and reloading</li><li><a href=\"./audio.html\">Audio</a>: miniaudio system and engine sound from RPM layers</li><li><a href=\"./tools.html\">Tools</a> (after the project): UUIDs, undo / redo, duplication</li><li><a href=\"./ai-chat-action.html\">AI</a> (after the project): local AI console</li>",
            teamList:
                "<li><strong>Eliott Blesz</strong>: <a href=\"./rendering.html\">rendering</a> (OpenGL RHI, shaders, pipeline), <a href=\"./tools.html\">editor</a>, resource loaders</li><li><strong>Ugo Szemberg</strong>: project architecture, <a href=\"./serialisation.html\">reflection &amp; serialization</a>, multithreading, debug, CMake build</li><li><strong>Shared</strong>: math, input, ENet networking, racing demo (cars, track, menus, cameras)</li>",
            statusLabel: "Honest review",
            statusTitle: "Where the engine stands",
            solidTitle: "Solid",
            solidText:
                "Deferred PBR rendering, Jolt and vehicle physics, hot reload, editor, serialization and play mode: all of it already serves the playable demo.",
            youngTitle: "Still young",
            youngText:
                "The RHI has a single backend (the move to Vulkan is underway), networking syncs positions and rotations without prediction, and the architecture remains a component hierarchy rather than a true ECS.",
            nextTitle: "Next",
            nextText:
                "AI actions, configurable collision layers, physics queries for scripts, audio buses and a Vulkan base for rendering.",
            lessonNote:
                "What I take away: an engine is judged by what it lets you make. Every piece I handled was designed to serve the racing demo, and that constraint is what shaped the code."
        },
        "engine-gallery": {
            pageTitle: "Gallery | EnigmaEngine",
            introLabel: "Captures",
            title: "Gallery",
            lead:
                "The editor, the racing demo and a few technical views, all captured in EnigmaEngine. Click an image to open it at full size.",
            shot1: "The racing demo, seen from the game camera.",
            shot1Alt: "A car racing in the EnigmaEngine demo",
            shot2: "The editor: racing scene hierarchy, viewport and content browser.",
            shot2Alt: "The EnigmaEngine editor",
            shot3: "PBR rendering of a car.",
            shot3Alt: "A car rendered in EnigmaEngine",
            shot4: "Editing a material.",
            shot4Alt: "Editing a material in EnigmaEngine",
            shot5: "Colliders and physics in the editor.",
            shot5Alt: "Colliders shown in the EnigmaEngine editor",
            shot6: "The demo menu, built with the engine's widgets.",
            shot6Alt: "Menu of the EnigmaEngine racing demo"
        }
    }
};
