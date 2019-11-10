<template>
  <v-carousel
    height="auto"
    cycle
  >
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
    >
      <img
        :src="item.src"
        width="800px"
        height="auto"
      >
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
.v-carousel
  width: 100%
</style>
