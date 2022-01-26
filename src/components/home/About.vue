<template>
  <div
    id="about"
    tag="section"
  >
    <v-row
      no-gutters
      class="gutters"
    >
      <div
        v-for="(video, index) in videos"
        :key="index"
      >
        <v-col :key="index">
          <v-card
            class="pa-2"
            outlined
            tile
          >
            <iframe
              class="video w100"
              width="640"
              height="360"
              :src="`https://www.youtube.com/embed/${video.id.videoId}`"
              frameborder="0"
              allowfullscreen
            />
          </v-card>
        </v-col>
        <v-responsive
          v-if="index === 2"
          :key="`width-${index}`"
          width="100%"
        />
      </div>
    </v-row>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { buscarYoutube } from './About.service.js'

  export default {
    name: 'HomeAbout',
    data () {
      return {
        videos: null,
      }
    },
    computed: {
      ...mapGetters(['getTextoBuscar']),
    },
    watch: {
      getTextoBuscar (newValue, oldValue) {
        this.init(newValue)
      },
    },
    methods: {
      async init (params) {
        try {
          const videos = await buscarYoutube(params)
          this.videos = videos.data.items
        } catch (error) {
          console.log(error)
        }
      },
    },
  }
</script>
<style scoped>
.gutters {
  display: flex;
  place-content: center;
}
</style>
