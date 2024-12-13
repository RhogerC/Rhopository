// Botón de cambio de idioma
const languageBtn = document.getElementById("lang-btn");
const photoBtn = document.getElementById("photo-btn");
const videoBtn = document.getElementById("video-btn");
const photo = document.getElementById("photo");
const video = document.getElementById("cv-video");

// Variable para controlar el idioma actual
let isEnglish = false;

// Contraseña para proteger foto y video
const PASSWORD = "12345";

// Contenido en español e inglés
const translations = {
    es: {
        langBtn: "English",
        name: "Rhommel Cardona",
        profession: "Conductor-Técnico Superior en Administración de Sistemas en Red",
        infoTitle: "Información Personal",
        phone: "Teléfono:",
        educationTitle: "Educación",
        experienceTitle: "Experiencia",
        hobbiesTitle: "Aficiones",
        fotoBtn: "Ver Foto",
        videoBtn: "Ver Video",
        accessDenied: "Contraseña incorrecta. Intente de nuevo.",
        accessGranted: "Acceso concedido.",
        enterPassword: "Por favor, introduzca la contraseña:",
        education: [
            {
                title: "Ciclo FP Superior ASIR , IES Palomeras-Vallecas (2024-2026)",
                details: [
                    "Implantación de sistemas operativos.",
                    "Planificación y administración de redes.",
                    "Fundamentos de hardware.",
                    "Gestión de bases de datos.",
                    "Lenguajes de marcas y sistemas de gestión de información."
                ]
            },
            {
                title: "Ciclo FP Superior Gestión de Ventas y Espacios Comerciales , IES Clara del Rey (2015-2017)",
                details: [
                    "Escaparatismo y diseño de espacios comerciales.",
                    "Gestión de productos y promociones en el punto de venta.",
                    "Organización de equipos de ventas.",
                    "Técnicas de venta y negociación.",
                    "Políticas de marketing.",
                    "Investigación comercial.",
                    "Logística de almacenamiento.",
                    "Logística de aprovisionamiento.",
                    "Gestión económica y financiera de la empresa."
                ]
            }
        ],
        experience: [
            "<b>Conductor profesional</b>, Uber (09/2024 - Actualidad)",
            "<b>Teleoperador asistencia en carretera</b>, RACE (06/2024 - 08/2024)",
            "<b>Agente Rent a Car</b>, Bipi (04/2023 - 05/2024)",
            "<b>Conductor profesional</b>, Uber (08/2023 - 03/2024)",
            "<b>Mozo almacén</b>, GLS Logística (07/2022 - 08/2022)",
            "<b>Repartidor</b>, Domino's Pizza (10/2019 - 07/2021)"
        ],
        hobbies: ["Música", "Baloncesto", "Psicología", "Diseño"]
    },
    en: {
        langBtn: "Español",
        name: "Rhommel Cardona",
        profession: "Driver - Higher Technician in Network Systems Administration",
        infoTitle: "Personal Information",
        phone: "Phone:",
        educationTitle: "Education",
        experienceTitle: "Experience",
        hobbiesTitle: "Hobbies",
        fotoBtn: "View Photo",
        videoBtn: "View Video",
        accessDenied: "Incorrect password. Try again.",
        accessGranted: "Access granted.",
        enterPassword: "Please enter the password:",
        education: [
            {
                title: "Higher VET Cycle in Network Systems Administration, IES Palomeras-Vallecas (2024-2026)",
                details: [
                    "Operating systems implementation.",
                    "Network planning and administration.",
                    "Hardware fundamentals.",
                    "Database management.",
                    "Markup languages and information management systems."
                ]
            },
            {
                title: "Higher VET Cycle in Sales Management and Commercial Spaces, IES Clara del Rey (2015-2017)",
                details: [
                    "Window dressing and commercial space design.",
                    "Product management and promotions at the point of sale.",
                    "Sales team organization.",
                    "Sales techniques and negotiation.",
                    "Marketing policies.",
                    "Market research.",
                    "Storage logistics.",
                    "Supply logistics.",
                    "Economic and financial management of the company."
                ]
            }
        ],
        experience: [
            "<b>Professional driver</b>, Uber (09/2024 - Present)",
            "<b>Roadside assistance teleoperator</b>, RACE (06/2024 - 08/2024)",
            "<b>Rent a Car Agent</b>, Bipi (04/2023 - 05/2024)",
            "<b>Professional driver</b>, Uber (08/2023 - 03/2024)",
            "<b>Warehouse assistant</b>, GLS Logistics (07/2022 - 08/2022)",
            "<b>Delivery driver</b>, Domino's Pizza (10/2019 - 07/2021)"
        ],
        hobbies: ["Music", "Basketball", "Psychology", "Design"]
    }
};

// Funciones para proteger foto y video
function requestPassword(type) {
    const lang = isEnglish ? translations.en : translations.es;
    const password = prompt(lang.enterPassword);
    if (password === PASSWORD) {
        alert(lang.accessGranted);
        if (type === 'photo') {
            photo.classList.remove("d-none");
        } else if (type === 'video') {
            video.classList.remove("d-none");
        }
    } else {
        alert(lang.accessDenied);
    }
}

// Función para cambiar idioma
function changeLanguage() {
    isEnglish = !isEnglish;
    const lang = isEnglish ? translations.en : translations.es;
    languageBtn.textContent = lang.langBtn;
    document.getElementById("name").textContent = lang.name;
    document.getElementById("profession").textContent = lang.profession;
    document.getElementById("info-title").textContent = lang.infoTitle;
    document.getElementById("telefono").textContent = lang.phone;
    document.getElementById("education-title").textContent = lang.educationTitle;
    document.getElementById("experience-title").textContent = lang.experienceTitle;
    document.getElementById("hobbies-title").textContent = lang.hobbiesTitle;
    photoBtn.textContent = lang.fotoBtn;
    videoBtn.textContent = lang.videoBtn;

    // Actualizar contenido de Educación
    const educationList = document.querySelectorAll("#education-title + ul > li");
    lang.education.forEach((edu, index) => {
        educationList[index].querySelector("b").textContent = edu.title;
        const details = educationList[index].querySelectorAll("ul li");
        edu.details.forEach((detail, i) => {
            details[i].textContent = detail;
        });
    });

    // Actualizar contenido de Experiencia
    const experienceList = document.querySelectorAll("#experience-title + ul > li");
    lang.experience.forEach((exp, index) => {
        experienceList[index].innerHTML = exp;
    });

    // Actualizar contenido de Aficiones
    const hobbiesList = document.querySelectorAll("#hobbies-title + ul > li");
    lang.hobbies.forEach((hobby, index) => {
        hobbiesList[index].textContent = hobby;
    });
}

// Event listeners para botones protegidos
photoBtn.addEventListener("click", () => requestPassword('photo'));
videoBtn.addEventListener("click", () => requestPassword('video'));

// Event listener para el botón de idioma
languageBtn.addEventListener("click", changeLanguage);
