<template>
  <v-container dense>
    <v-row class="align-center my-12">
      <v-col cols="12" md="6" class="text-center">
        <v-row class="justify-center my-4">
          <v-col cols="6" md="3">
            <v-img src="./logo.png" />
          </v-col>
        </v-row>
        <v-row class="justify-center my-4">
          <h2>明日の大学をアップデートしよう。</h2>
        </v-row>
        <v-row class="justify-center my-4">
          <v-col cols="12">
            世界中の知の拠点となっている大学。<br />
            その大学は今、時代に押し流されている。<br />
            僕たちの力で明日の大学をデザインしよう。<br />
            一人一人の思いを形にしていこう。
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <Carousel :images="images" />
      </v-col>
    </v-row>

    <v-divider />

    <v-row class="my-12">
      <v-col class="text-center">
        <h2>NEWS</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(post, index) in news"
        :key="index"
        cols="12"
        md="4"
        class="my-4"
      >
        <NewsCard :post="post" />
      </v-col>
    </v-row>

    <v-divider />

    <v-row class="my-12">
      <v-col class="text-center">
        <h2>ACTIVITIES</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(post, index) in projects"
        :key="index"
        cols="12"
        md="4"
        class="my-4"
      >
        <ProjectCard :post="post" />
      </v-col>
    </v-row>

    <v-divider />

    <v-row class="my-12">
      <v-col class="text-center">
        <h2>メッセージ</h2>
      </v-col>
    </v-row>
    <v-row class="justify-center my-12">
      <v-col class="text-center">
        大学の目的には「研究・教育・社会貢献」の3つがあると言われています。
        しかし、高速で変化する世界の中で今の大学はこの3つの目的を果たすために様々な問題に直面しています。
        1つ1つの課題はとても大きく、1人の力では解決できないかもしれません。 Code
        for Universityは、そんな大学のために活動するすべての人を応援します。
        1人の力では解決できない課題も、誰かが動き始めることで繋がり、社会に広がっていきます。
        今あなたの頭の中にある思いを、Code for
        Universityと一緒に形にしてみませんか？<br /><br />
        Code for University代表 三浦 崇寛<br />
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <a
        href="https://twitter.com/codeforuniv"
        target="_blank"
        class="sns-link"
      >
        <i class="fab twitter-icon" />
      </a>
      <iframe
        src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FCode-for-University-103516374334392&width=450&layout=standard&action=like&size=large&show_faces=true&share=true&height=80&appId"
        width="450"
        height="80"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import Carousel from '@/components/Carousel.vue'
import NewsCard from '@/components/NewsCard.vue'
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    NewsCard,
    ProjectCard
  },
  data() {
    return {
      news: [],
      images: [],
      projects: []
    }
  },
  async asyncData() {
    const myHttpClient = axios.create({
      baseURL: process.env.MICROCMS_BASE_URL,
      headers: {
        'X-API-KEY': process.env.MICROCMS_API_KEY
      }
    })
    const [carouselData, newsData, projectData] = await Promise.all([
      myHttpClient.get('carousel_images'),
      myHttpClient.get('news'),
      myHttpClient.get('projects')
    ])
    return {
      images: carouselData.data.contents,
      news: newsData.data.contents,
      projects: projectData.data.contents
    }
  }
}
</script>
