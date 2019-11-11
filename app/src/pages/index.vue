<template>
  <div>
    <v-row no-gutters>
      <Carousel />
    </v-row>
    <v-row
      justify="center"
    >
      <img
        src="/logo.png"
        width="200px"
      >
      <blockquote class="blockquote">
        Code for Univ.(University)は大学に対してみなさんが抱いている想いを、 想いのまま終わらせずITやネットワーキングを通じて実際の課題解決にコミットするためのシビックテックコミュニティです。
      </blockquote>
    </v-row>
    <v-row
      justify="center"
    >
      <a href="https://twitter.com/codeforuniv" target="_blank" class="sns-link">
        <i class="fab twitter-icon" />
      </a>
      <iframe
        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FCode-for-University-103516374334392&width=450&layout=standard&action=like&size=large&show_faces=true&share=true&height=80&appId"
        width="450"
        height="80"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
    </v-row>
    <v-row
      justify="center"
    >
      <footer>
        <div>©️ 2019 Code for University</div>
      </footer>
    </v-row>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Carousel
  }
}
</script>

<style lang="sass" scoped>
</style>
