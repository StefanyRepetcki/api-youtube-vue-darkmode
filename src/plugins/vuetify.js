import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#FF0000',
        secondary: '#181818',
      },
      dark: {
        primary: '#FF0000',
        secondary: '#FFFFFF',
      },
    },
  },
})
