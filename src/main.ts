import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/routes'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCloud} from '@fortawesome/free-solid-svg-icons'
import { faCloudBolt } from '@fortawesome/free-solid-svg-icons'
import { faSun} from '@fortawesome/free-solid-svg-icons'
import { faWind } from '@fortawesome/free-solid-svg-icons'
import { faTornado } from '@fortawesome/free-solid-svg-icons'
import { faSmog } from '@fortawesome/free-solid-svg-icons'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'
import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons'
import { faCloudRain } from '@fortawesome/free-solid-svg-icons'
import { faCloudMoonRain } from '@fortawesome/free-solid-svg-icons'
import { faCloudMoon } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCloudBolt, faCloud, faSun, faWind, faTornado, faSmog, faSnowflake, faMoon, faCloudSunRain, faCloudSun, faCloudShowersHeavy, faCloudRain, faCloudMoonRain, faCloudMoon)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
