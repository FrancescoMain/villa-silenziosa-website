import { createApp } from 'vue'
import App from './App.vue'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faPhoneFlip, faFacebookF, faInstagram, faPaperPlane)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')