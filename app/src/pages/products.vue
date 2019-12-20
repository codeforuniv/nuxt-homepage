 <template>
  <v-card>
    <v-toolbar color="cyan" dark flat>
     <template v-slot:extension>
        <v-tabs
          v-model="currentItem"
          background-color="transparent"
          fixed-tabs
          slider-color="white"
        >
          <v-tab v-for="column in columns" :key="column" :href="'#tab-' + column">{{ column }}</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="currentItem">
      <v-tab-item v-for="(column,j) in columns" :key="column" :value="'tab-' + column">
        <v-row justify="center">
          <v-col
            v-for="(item, i) in items[j]"
            :key="i"
            cols="8"
          >
            <v-card :color="item.color" dark height="400px" @click.stop="item.dialog = true">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.title"
                  ></v-card-title>
                  <v-divider></v-divider>
                  <v-spacer></v-spacer>
                  <v-card-subtitle v-text="item.artist" white-space:pre-wrap word-wrap:break-word></v-card-subtitle>
                </div>
                <v-avatar
                  class="mt-12 ma-3"
                  size="250"
                  tile
                >
                  <v-img :src="item.src"></v-img>
                </v-avatar>
              </div>
              <v-dialog v-model="item.dialog" max-width="1200px">
                <v-card class="grey fluid">
                  <v-card class="pa-4 font headline" width="1200px">{{ item.title }}</v-card>
                  <v-divider></v-divider>
                  <v-card width="1200px" height="2500"></v-card>

                </v-card>
              </v-dialog>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    currentItem: 'tab-Web',
    columns: ['アプリ紹介', 'オリジナルアプリ'],
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    items: [
      [
        {
          color: '#1F7087',
          src: 'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
          title: '「4919（食育） for IKOMA」が正式運用開始！【鈴木まなみ】',
          artist: '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
          '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
          '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
          '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
          '/nこういった対応も含め、見事な官民連携の事例と感じます。',
          dialog: false
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
          dialog: false
        }
      ],
      [
        {
          color: '#A5D6A7',
          src: 'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
          title: '「4919（食育） for IKOMA」が正式運用開始！【鈴木まなみ】',
          artist: '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
          '生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
          '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
          '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
          '/nこういった対応も含め、見事な官民連携の事例と感じます。',
          dialog: false
        },
        {
          color: '#E6EE9C',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
          dialog: false
        }
      ]
    ]
  }),

  methods: {
    addItem (item) {
      const removed = this.items.splice(0, 1)
      this.items.push(...this.more.splice(this.more.indexOf(item), 1))
      this.more.push(...removed)
      this.$nextTick(() => {
        this.currentItem = 'tab-' + item
      })
    }
  }
}
</script>
