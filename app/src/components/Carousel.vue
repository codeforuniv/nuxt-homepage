<template>
  <v-carousel
    height="auto"
    cycle
    show-arrows-on-hover
    hide-delimiter-background
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
    >
      <v-img
        :src="item.src"
      ></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          src: '/event1.jpg'
        },
        {
          src: '/event2.jpg'
        },
        {
          src: '/event3.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
