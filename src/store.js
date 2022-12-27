import { reactive } from 'vue'
export const store = reactive({
    languages: [
        {
            name: "ITA",
            link: "#"
        },
        {
            name: "ENG",
            link: "#"
        },
        {
            name: "DET",
            link: "#"
        }
    ],
    socials: [
        {
            name: "Instagram",
            link: "#",
            icon: "fa-brands fa-instagram"
        },
        {
            name: "Facebook",
            link: "#",
            icon: "fa-brands fa-facebook-f"
        }
    ],
    heroImgs: [
        {
            id: 0,
            scr: "../../public/img/hero1.jpg",
            name: "esterno 1"
        },
        {
            id: 1,
            scr: "../../public/img/hero2.jpg",
            name: "esterno 2"
        },
        {
            id: 2,
            scr: "../../public/img/hero3.jpg",
            name: "esterno 3"
        },
        {
            id: 3,
            scr: "../../public/img/hero4.jpg",
            name: "dettaglio 1"
        },

    ],
});