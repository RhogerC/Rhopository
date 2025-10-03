document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.getElementById('lang-btn');
    let currentLang = 'es'; // Idioma por defecto

    const translations = {
        es: {
            navTitle: "Curriculum Vitae",
            langBtnText: "English",
            name: "Rhommel Cardona",
            profession: "Técnico Superior en Administración de Sistemas en Red - Asistencia en Carretera",
            educationTitle: "Educación",
            edu1Title: "Ciclo FP Superior ASIR , IES Palomeras-Vallecas (2024-2026)",
            edu1Details: [
                "Implantación de sistemas operativos.",
                "Planificación y administración de redes.",
                "Fundamentos de hardware.",
                "Gestión de bases de datos.",
                "Lenguajes de marcas y sistemas de gestión de información.",
                "Administración de sistemas operativos.",
                "Servicios de red e Internet.",
                "Implantación de aplicaciones web.",
                "Administración de sistemas gestores de bases de datos.",
                "Seguridad y alta disponibilidad."
            ],
            edu2Title: "Ciclo FP Superior Gestión de Ventas y Espacios Comerciales , IES Clara del Rey (2015-2017)",
            edu2Details: [
                "Escaparatismo y diseño de espacios comercial.",
                "Gestión de productos y promociones en el punto de venta.",
                "Organización de equipos de ventas.",
                "Técnicas de venta y negociación.",
                "Políticas de marketing.",
                "Investigación comercial.",
                "Logística de almacenamiento.",
                "Logística de aprovisionamiento.",
                "Gestión económica y financiera de la empresa."
            ],
            experienceTitle: "Experiencia",
            exp1: "<b>Teleoperador asistencia en carretera</b>, CASER (06/2025 - 12/2025)",
            exp2: "<b>Conductor profesional</b>, Uber (09/2024 - 06/2025)",
            exp3: "<b>Teleoperador asistencia en carretera</b>, RACE (06/2024 - 08/2024)",
            exp4: "<b>Agente Rent a Car</b>, Bipi (04/2023 - 05/2024)",
            exp5: "<b>Conductor profesional</b>, Uber (08/2023 - 03/2024)",
            exp6: "<b>Mozo almacén</b>, GLS Logística (07/2022 - 08/2022)",
            hobbiesTitle: "Aficiones",
            hobbie1: "Música",
            hobbie2: "Programación (por ahora javascript)",
            hobbie3: "Psicología",
            hobbie4: "Diseño (tanto web como publicitario)",
            hobbie5: "Juegos de mesa",
            footerText: "© 2025-2026 Rhommel Cardona. Todos los derechos reservados."
        },
        en: {
            navTitle: "Resume",
            langBtnText: "Español",
            name: "Rhommel Cardona", // Proper names are not usually translated
            profession: "Senior Technician in Network Systems Administration - Roadside Assistance",
            educationTitle: "Education",
            edu1Title: "Higher VET Cycle in Network Systems Administration, IES Palomeras-Vallecas (2024-2026)",
            edu1Details: [
                "Operating systems deployment.",
                "Network planning and administration.",
                "Hardware fundamentals.",
                "Database management.",
                "Markup languages and information management systems.",
                "Operating systems administration.",
                "Network and Internet services.",
                "Web application deployment.",
                "Database management systems administration.",
                "Security and high availability."
            ],
            edu2Title: "Higher VET Cycle in Sales Management and Commercial Spaces, IES Clara del Rey (2015-2017)",
            edu2Details: [
                "Window dressing and commercial space design.",
                "Product and promotion management at the point of sale.",
                "Sales team organization.",
                "Sales and negotiation techniques.",
                "Marketing policies.",
                "Commercial research.",
                "Warehouse logistics.",
                "Procurement logistics.",
                "Economic and financial management of the company."
            ],
            experienceTitle: "Experience",
            exp1: "<b>Roadside Assistance Teleoperator</b>, CASER (06/2025 - 12/2025)",
            exp2: "<b>Professional Driver</b>, Uber (09/2024 - 06/2025)",
            exp3: "<b>Roadside Assistance Teleoperator</b>, RACE (06/2024 - 08/2024)",
            exp4: "<b>Rent a Car Agent</b>, Bipi (04/2023 - 05/2024)",
            exp5: "<b>Professional Driver</b>, Uber (08/2023 - 03/2024)",
            exp6: "<b>Warehouse Worker</b>, GLS Logistics (07/2022 - 08/2022)",
            hobbiesTitle: "Hobbies",
            hobbie1: "Music",
            hobbie2: "Programming (currently javascript)",
            hobbie3: "Psychology",
            hobbie4: "Design (both web and advertising)",
            hobbie5: "Board games",
            footerText: "© 2025-2026 Rhommel Cardona. All rights reserved."
        }
    };

    function translatePage(lang) {
        document.documentElement.lang = lang; // Update the lang attribute of the HTML

        document.getElementById('nav-title').textContent = translations[lang].navTitle;
        langBtn.textContent = translations[lang].langBtnText;
        document.getElementById('name').textContent = translations[lang].name;
        document.getElementById('profession').innerHTML = translations[lang].profession;
        
        document.getElementById('education-title').textContent = translations[lang].educationTitle;
        document.getElementById('edu1-title').innerHTML = translations[lang].edu1Title;
        const edu1DetailsUl = document.getElementById('edu1-details');
        edu1DetailsUl.innerHTML = ''; // Clear previous details
        translations[lang].edu1Details.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            edu1DetailsUl.appendChild(li);
        });

        document.getElementById('edu2-title').innerHTML = translations[lang].edu2Title;
        const edu2DetailsUl = document.getElementById('edu2-details');
        edu2DetailsUl.innerHTML = ''; // Clear previous details
        translations[lang].edu2Details.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            edu2DetailsUl.appendChild(li);
        });

        document.getElementById('experience-title').textContent = translations[lang].experienceTitle;
        document.getElementById('exp1').innerHTML = translations[lang].exp1;
        document.getElementById('exp2').innerHTML = translations[lang].exp2;
        document.getElementById('exp3').innerHTML = translations[lang].exp3;
        document.getElementById('exp4').innerHTML = translations[lang].exp4;
        document.getElementById('exp5').innerHTML = translations[lang].exp5;
        document.getElementById('exp6').innerHTML = translations[lang].exp6;

        document.getElementById('hobbies-title').textContent = translations[lang].hobbiesTitle;
        document.getElementById('hobbie1').textContent = translations[lang].hobbie1;
        document.getElementById('hobbie2').textContent = translations[lang].hobbie2;
        document.getElementById('hobbie3').textContent = translations[lang].hobbie3;
        document.getElementById('hobbie4').textContent = translations[lang].hobbie4;
        document.getElementById('hobbie5').textContent = translations[lang].hobbie5;
        
        document.getElementById('footer-text').innerHTML = translations[lang].footerText;
    }

    langBtn.addEventListener('click', () => {
        if (currentLang === 'es') {
            currentLang = 'en';
        } else {
            currentLang = 'es';
        }
        translatePage(currentLang);
    });
});