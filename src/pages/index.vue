<template>
  <v-container>
    <v-row>
      <v-col>
        <Carousel />
      </v-col>
    </v-row>
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
    <v-row class="my-12">
      <v-col
        class="text-center"
      >
        大学の目的には「研究・教育・社会貢献」の3つがあると言われています。<br>
        しかし、高速で変化する世界の中で今の大学はこの3つの目的を果たすために様々な問題に直面しています。<br>
        1つ1つの課題はとても大きく、1人の力では解決できないかもしれません。<br>
        Code for
        Universityは、そんな大学のために活動するすべての人を応援します。<br>
        1人の力では解決できない課題も、誰かが動き始めることで繋がり、社会に広がっていきます。<br>
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
import Carousel from '@/components/Carousel.vue'
import NewsCard from '@/components/NewsCard.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    NewsCard
  },
  data: () => ({
    posts: [
      {
        dialog: false,
        title: '2019/8/12 アイデアソン@Code for Japan オフィス',
        content:
          '前半に2人のスピーカーによるセッションの後、各グループで今の大学が抱える課題感をKJ法を使って構造化しました。ケータリングはかささぎ食堂さん(@magpie_kitchen1116)でした！',
        images: [
          'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/68310782_116681003017929_3993429826970058752_o.jpg?_nc_cat=110&_nc_oc=AQnWFRGs8t9djUKlozZyAO2nzS-7KEBkNTfKKgdeeld_GmwZchjSPVi0IKyGVepWZBM&_nc_ht=scontent-nrt1-1.xx&oh=b72d8ae610d1b9edeaf67ef3e4aa8d1c&oe=5E55DF5E'
        ],
        tasks: [
          {
            // done: false,
            comment: 'Foobar',
            time: '2019-11-18 00:13'
          },
          {
            // done: false,
            comment: 'Fizzbuzz',
            time: '2019-11-18 00:15'
          }
        ],
        word: null,
        flex: 6
      },
      {
        dialog: false,
        title: '2019 11/15 開発@東大',
        content:
          'いよいよ本腰入れて開発はじめ！！まずはプラットホームになるページから作って、大学をもっと面白くしていけるものにするぞ…Code for Japan, America, IKOMA, Niigata, AICHI,みんな個性あってとっても参考になる！',
        images: [
          'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/75412289_150687489617280_6605594129982291968_n.jpg?_nc_cat=104&_nc_ohc=nWLJeeNAs6IAQklaZMzBVMDXCdmYkNtPL5XsKHRMBhv_XlG1gru9oOf3w&_nc_ht=scontent-nrt1-1.xx&oh=f4589280ce0980d710ab275f465fc2ef&oe=5E46C146',
          'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/74826467_150687506283945_4268904755843039232_n.jpg?_nc_cat=100&_nc_ohc=XqJHC7rXTDQAQkE0xSGdu1-pLZN0jmQy0dI-duMjwPlBkNATbMVU2NlGw&_nc_ht=scontent-nrt1-1.xx&oh=3b0f8e3683806d9fa0cf74f4c7dd0b8b&oe=5E4430B2',
          'https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/74333545_150687532950609_2777432028927229952_n.jpg?_nc_cat=108&_nc_ohc=kufRB5WtlugAQnMC-syP_jrzU3Jqr3YfH39S8ZzaEv53jAvpG98efqRpg&_nc_ht=scontent-nrt1-1.xx&oh=f7aca4cb452f95afc315598e422ede2b&oe=5E4E5E55'
        ],
        tasks: [
          {
            done: false,
            comment: 'Foobar',
            time: '2019-11-18 00:13'
          },
          {
            done: false,
            comment: 'Fizzbuzz',
            time: '2019-11-18 00:15'
          }
        ],
        word: null,
        flex: 6
      }
    ]
  })
}
</script>

<style lang="sass" scoped>
.text
  line-height: 40px
</style>
