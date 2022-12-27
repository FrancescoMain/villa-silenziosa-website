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
    ]
});