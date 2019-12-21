<template>
  <v-carousel
    :show-arrows="false"
    height="auto"
    cycle
    hide-delimiters
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
    >
      <v-img :src="item.src">
        <!-- <v-row
          class="dark fill-height"
          align="center"
          justify="center"
        >
          <p class="tagline display-1">
            {{ item.text }}
          </p> -->
        <!-- </v-row> -->
      </v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: '/event1.jpg',
          text: '大学の明日をちょっとだけ変えよう'
        },
        {
          src: '/event2.jpg',
          text: 'Code for University'
        },
        {
          src: '/event3.jpg',
          text: '思いを形に'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
.tagline
  color: white

.dark
  background-color: black
  opacity: 0.5
</style>
