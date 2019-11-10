<template>
  <div>
    <v-row>
      <v-col cols="12">
        <Carousel />
      </v-col>
    </v-row>
    <v-row class="text-center">
      <img
        src="/logo.png"
        width="200px"
      >
      <h1 class="tagline">
        大学 × 市民社会 × テクノロジーは未来を変える
      </h1>
      <blockquote class="blockquote">
        Code for Univ.(University)は大学に対してみなさんが抱いている想いを、 想いのまま終わらせずITやネットワーキングを通じて実際の課題解決にコミットするためのシビックテックコミュニティです。
      </blockquote>
    </v-row>
    <v-row class="text-center">
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
.tagline
  padding: 20px
</style>
