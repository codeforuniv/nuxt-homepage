<template>
  <v-container dense>
    <v-row class="align-center my-12">
      <v-col
        cols="12"
        md="6"
        class="text-center"
      >
        <v-row class="justify-center my-4">
          <v-col
            cols="6"
            md="3"
          >
            <v-img
              src="./logo.png"
            ></v-img>
          </v-col>
        </v-row>
        <v-row class="justify-center my-4">
          <h2>明日の大学をアップデートしよう。</h2>
        </v-row>
        <v-row class="justify-center my-4">
          <v-col cols="12">
            世界中の知の拠点となっている大学。<br>
            その大学は今、時代に押し流されている。<br>
            僕たちの力で明日の大学をデザインしよう。<br>
            一人一人の思いを形にしていこう。
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <Carousel :images="images" />
      </v-col>
    </v-row>

    <v-divider />

    <v-row class="my-12">
      <v-col class="text-center">
        <h2> 大学の3つの役割 </h2>
      </v-col>
    </v-row>
    <v-row class="my-12">
      <v-col
        cols="12"
        md="4"
        class="my-4"
      >
        <v-card flat class="transparent">
          <v-card-text class="text-center">
            <v-icon x-large class="blue--text text--lighten-2">
              mdi-palette
            </v-icon>
          </v-card-text>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-center">
              研究
            </div>
          </v-card-title>
          <v-card-text>
            世界の知識の最前線で試行錯誤を重ねながら誰も成し遂げていない発見を目指します。
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
        class="my-4"
      >
        <v-card flat class="transparent">
          <v-card-text class="text-center">
            <v-icon x-large class="blue--text text--lighten-2">
              mdi-flash
            </v-icon>
          </v-card-text>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-center">
              教育
            </div>
          </v-card-title>
          <v-card-text>
            専門的教育の他にも、科学リテラシーや深い洞察など教育は幅広い分野にわたります。
            学生だけでなく、知を生み出す場所として意義のある教育を目指します。
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
        class="my-4"
      >
        <v-card flat class="transparent">
          <v-card-text class="text-center">
            <v-icon x-large class="blue--text text--lighten-2">
              mdi-wrench
            </v-icon>
          </v-card-text>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-center">
              社会貢献
            </div>
          </v-card-title>
          <v-card-text>
            生み出された知識や知恵を使って社会課題を解決します。
            行政や企業を巻き込んだ社会的意義のある大学を目指します。
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider />

    <v-row class="my-12">
      <v-col class="text-center">
        <h2> 最近のニュース </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(post, index) in posts"
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
        <h2> Code for Universityの主な活動 </h2>
      </v-col>
    </v-row>

    <v-row class="my-12">
      <v-col
        cols="12"
        md="4"
        class="my-4"
      >
        <v-card flat class="transparent">
          <v-card-text class="text-center">
            <v-icon x-large class="blue--text text--lighten-2">
              mdi-palette
            </v-icon>
          </v-card-text>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-center">
              アプリ開発支援
            </div>
          </v-card-title>
          <v-card-text>
            大学の「研究・教育・社会貢献」を支援するアプリケーションの開発を行っています。
            個人開発やハッカソンを通じて、皆さんの思いをアプリにして実装しています。
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
        class="my-4"
      >
        <v-card flat class="transparent">
          <v-card-text class="text-center">
            <v-icon x-large class="blue--text text--lighten-2">
              mdi-flash
            </v-icon>
          </v-card-text>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline">
              イベント開催
            </div>
          </v-card-title>
          <v-card-text>
            大学×シビックテックの実現する形として、イベントを開催しています。
            院生や研究者、行政の方などその時々でフォーカスを変えながら、大学のより良い活用方法について議論しています。
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
        class="my-4"
      >
        <v-card flat class="transparent">
          <v-card-text class="text-center">
            <v-icon x-large class="blue--text text--lighten-2">
              mdi-wrench
            </v-icon>
          </v-card-text>
          <v-card-title primary-title class="layout justify-center">
            <div class="headline text-center">
              Facebook ページ
            </div>
          </v-card-title>
          <v-card-text>
            Code for
            Universityの活動やイベントを載せているFacebookページ。
            活動に興味のある方・アプリの宣伝・イベントについての質問などなどお気軽にご連絡ください！！
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-divider />

    <v-row class="my-12">
      <v-col class="text-center">
        <h2> メッセージ </h2>
      </v-col>
    </v-row>
    <v-row class="justify-center my-12">
      <v-col
        class="text-center"
      >
        大学の目的には「研究・教育・社会貢献」の3つがあると言われています。
        しかし、高速で変化する世界の中で今の大学はこの3つの目的を果たすために様々な問題に直面しています。
        1つ1つの課題はとても大きく、1人の力では解決できないかもしれません。
        Code for
        Universityは、そんな大学のために活動するすべての人を応援します。
        1人の力では解決できない課題も、誰かが動き始めることで繋がり、社会に広がっていきます。
        今あなたの頭の中にある思いを、Code for
        Universityと一緒に形にしてみませんか？<br><br>
        Code for University代表 三浦 崇寛<br>
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
import { mapGetters, mapActions } from 'vuex'
import Carousel from '@/components/Carousel.vue'
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    NewsCard
  },
  computed: {
    ...mapGetters({
      posts: 'news/posts',
      images: 'images/images'
    })
  },
  created () {
    this.initNews()
    this.initImages()
  },
  methods: {
    ...mapActions({
      initNews: 'news/init',
      initImages: 'images/init'
    })
  }
}
</script>
