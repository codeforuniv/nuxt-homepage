<template>
  <v-card>
    <v-select
      v-model="selectedIdeathon"
      :items="items"
      menu-props="auto"
      item-text="ideathon"
      item-value="information"
      hide-details
      single-line
      return-object
    />
    <v-toolbar class="tabs" color="cyan" dark flat>
      <template v-slot:extension>
        <v-tabs
          v-model="currentItem"
          background-color="transparent"
          fixed-tabs
          slider-color="white"
        >
          <v-tab v-for="info in selectedIdeathon.information" :key="info.id" :href="'#tab-' + info.team">
            {{ info.team }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="currentItem">
      <v-tab-item v-for="info in selectedIdeathon.information" :key="info.id" :value="'tab-' + info.team">
        <v-row justify="center">
          <v-col
            v-for="content in info.contents"
            :key="content.id"
            cols="6"
          >
            <v-card @click.stop="content.dialog = true" dark height="400px">
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title
                    v-text="content.title"
                    class="headline"
                  />
                  <v-divider />
                  <v-spacer />
                  <!-- <v-card-subtitle v-text="content.artist" white-space:pre-wrap word-wrap:break-word></v-card-subtitle> -->
                </div>
              </div>
              <v-img :src="content.src" />
              <v-dialog v-model="content.dialog" max-width="1200px">
                <v-card class="grey fluid">
                  <v-card class="pa-4 font headline" width="1200px">
                    {{ content.title }}
                  </v-card>
                  <v-divider />
                  <v-card width="1200px" height="2500" />
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
    currentItem: 'tab-teamA',
    items: [
      {
        ideathon: '11/15 @東大',
        information: [
          {
            team: 'teamA',
            color: '#1F7087',
            contents: [
              {
                src: 'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
                title: '教育',
                artist: '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                '/nこういった対応も含め、見事な官民連携の事例と感じます。',
                dialog: false
              },
              {
                src: 'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
                title: '政治',
                artist: '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                '/nこういった対応も含め、見事な官民連携の事例と感じます。',
                dialog: false
              }
            ]
          },
          {
            team: 'teamB',
            color: '#952175',
            contents: [
              {
                src: 'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
                title: '経済',
                artist: '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                '/nこういった対応も含め、見事な官民連携の事例と感じます。',
                dialog: false
              },
              {
                src: 'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
                title: '社会',
                artist: '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                '/nこういった対応も含め、見事な官民連携の事例と感じます。',
                dialog: false
              }
            ]
          }
        ]
      },
      {
        ideathon: '11/23 @会議室',
        information: [
          {
            team: 'teamC',
            color: '#1F7087',
            contents: [
              {
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
                src: 'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
                title: '「4919（食育） for IKOMA」が正式運用開始！【鈴木まなみ】',
                artist: '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                '/nこういった対応も含め、見事な官民連携の事例と感じます。',
                dialog: false
              }
            ]
          },
          {
            team: 'teamD',
            color: '#952175',
            contents: [
              {
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
                src: 'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
                title: '「4919（食育） for IKOMA」が正式運用開始！【鈴木まなみ】',
                artist: '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                '/nこういった対応も含め、見事な官民連携の事例と感じます。',
                dialog: false
              }
            ]
          }
        ]
      }
    ],
    selectedIdeathon: {
      ideathon: '11/15 @東大',
      information: [
        {
          team: 'teamA',
          color: '#1F7087',
          contents: [
            {
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
              src: 'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
              title: '「4919（食育） for IKOMA」が正式運用開始！【鈴木まなみ】',
              artist: '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
              '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
              '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
              '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
              '/nこういった対応も含め、見事な官民連携の事例と感じます。',
              dialog: false
            }
          ]
        },
        {
          team: 'teamB',
          color: '#952175',
          contents: [
            {
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
              src: 'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
              title: '「4919（食育） for IKOMA」が正式運用開始！【鈴木まなみ】',
              artist: '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
              '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
              '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
              '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
              '/nこういった対応も含め、見事な官民連携の事例と感じます。',
              dialog: false
            }
          ]
        }
      ]
    }
  })

}
</script>

<style>
  .tabs-component {
    margin: 4em 0;
  }
  .tabs-component-tabs {
    border: solid 1px #ddd;
    border-radius: 6px;
    margin-bottom: 5px;
  }
  @media (min-width: 700px) {
    .tabs-component-tabs {
      border: 0;
      align-items: stretch;
      display: flex;
      justify-content: flex-start;
      margin-bottom: -1px;
    }
  }
  .tabs-component-tab {
    color: #999;
    font-size: 14px;
    font-weight: 600;
    margin-right: 0;
    list-style: none;
  }
  .tabs-component-tab:not(:last-child) {
    border-bottom: dotted 1px #ddd;
  }
  .tabs-component-tab:hover {
    color: #666;
  }
  .tabs-component-tab.is-active {
    color: #000;
  }
  .tabs-component-tab.is-disabled * {
    color: #cdcdcd;
    cursor: not-allowed !important;
  }
  @media (min-width: 700px) {
    .tabs-component-tab {
      background-color: #fff;
      border: solid 1px #ddd;
      border-radius: 3px 3px 0 0;
      margin-right: .5em;
      transform: translateY(2px);
      transition: transform .3s ease;
    }
    .tabs-component-tab.is-active {
      border-bottom: solid 1px #fff;
      z-index: 2;
      transform: translateY(0);
    }
  }
  .tabs-component-tab-a {
    align-items: center;
    color: inherit;
    display: flex;
    padding: .75em 1em;
    text-decoration: none;
  }
  .tabs-component-panels {
    padding: 4em 0;
  }
  @media (min-width: 700px) {
    .tabs-component-panels {
      border-top-left-radius: 0;
      background-color: #fff;
      border: solid 1px #ddd;
      border-radius: 0 6px 6px 6px;
      box-shadow: 0 0 10px rgba(0, 0, 0, .05);
      padding: 4em 2em;
    }
  }
</style>
