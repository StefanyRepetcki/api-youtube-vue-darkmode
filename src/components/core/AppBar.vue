<template>
  <div>
    <v-app-bar
      dense
      height="68"
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="toggleDrawer"
      />

      <v-img
        v-if="!$vuetify.theme.dark"
        :src="require('@/assets/logo.png')"
        class="logo mr-5"
        contain
        height="48"
        width="100"
        max-width="100"
        @click="$vuetify.goTo(0)"
      />
      <v-img
        v-if="$vuetify.theme.dark"
        :src="require('@/assets/youtube-white.svg')"
        class="logo mr-5"
        contain
        height="100"
        width="100"
        max-width="100"
        @click="$vuetify.goTo(0)"
      />

      <v-card>
        <v-row class="header">
          <div
            class="search"
          >
            <v-btn
              v-for="(link, i) in links"
              :key="i"
              v-bind="link"
              class="hidden-sm-and-down"
              text
            >
              {{ link.text }}
            </v-btn>
            <v-text-field
              v-model="texto"
              placeholder="Pesquisar"
              append-icon="mdi-magnify"
              flat
              hide-details
              @click:append="onClick"
            />
          </div>
        </v-row>
      </v-card>

      <v-spacer />

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <div>
            <v-tooltip
              v-if="!$vuetify.theme.dark"
              bottom
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  color="info"
                  small
                  fab
                  v-on="on"
                  @click="darkMode"
                >
                  <v-icon class="mr-1">
                    mdi-moon-waxing-crescent
                  </v-icon>
                </v-btn>
              </template>
              <span>Dark Mode On</span>
            </v-tooltip>

            <v-tooltip
              v-else
              bottom
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  color="info"
                  small
                  fab
                  v-on="on"
                  @click="darkMode"
                >
                  <v-icon color="yellow">
                    mdi-white-balance-sunny
                  </v-icon>
                </v-btn>
              </template>
              <span>Dark Mode Off</span>
            </v-tooltip>
          </div>
        </template>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'CoreAppBar',
    data () {
      return {
        texto: '',
        links: [],
      }
    },
    methods: {
      darkMode () {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark
      },
      onClick () {
        this.$store.commit('setTextoBuscar', this.texto)
      },
    },
  }
</script>
<style scoped lang="scss">
  .header {
      -webkit-text-size-adjust: none;
      margin: 0;
      border: 0;
      background: transparent;
      height: 56px;
      padding: 0 16px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
  }
  .search {
      -webkit-text-size-adjust: none;
      margin: 0;
      padding: 0;
      border: 0;
      background: transparent;
      display: flex;
      flex-direction: row;
      align-items: center;
      flex: 0 1 728px;
      min-width: 0px;
  }
</style>
