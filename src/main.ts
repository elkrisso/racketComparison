/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Global Types
export interface BadmintonRacket {
    name: string;
    manufacturer: string;
    balance: string;
    weight: string;
    stiffness: string;
    color: string;
    weighU: string;
    gripSize: string;
  }

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
