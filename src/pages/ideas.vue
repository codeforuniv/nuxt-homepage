<template>
  <v-container>
    <v-col class="d-flex" cols="12" sm="4" justify="center">
      <v-select
        v-model="selectedIdeathon"
        :items="items"
        label="アイデアソンを選択"
        menu-props="auto"
        item-text="ideathon"
        item-value="information"
        hide-details
        return-object
      />
    </v-col>
    <div class="bb">
      <v-tabs
        v-model="currentItem"
        class="tabs mt-3"
        color="rgb(40,170,170)"
        slider-color="white"
        grow
      >
        <v-tab
          v-for="info in selectedIdeathon.information"
          :key="info.id"
          :href="'#tab-' + info.team"
          active-class="tabs__item--active active"
        >
          {{ info.team }}
        </v-tab>
      </v-tabs>
    </div>

    <v-tabs-items v-model="currentItem">
      <v-tab-item
        v-for="info in selectedIdeathon.information"
        :key="info.id"
        :value="'tab-' + info.team"
      >
        <v-row justify="center">
          <v-col v-for="content in info.contents" :key="content.id">
            <v-card @click.stop="content.dialog = true" dark height="800px">
              <v-card-title v-text="content.title" class="headline" />
              <v-divider />
              <v-spacer />
              <v-img :src="content.src" />
              <v-dialog v-model="content.dialog" max-width="1200px">
                <v-card class="grey fluid">
                  <v-card class="pa-4 font headline" width="1200px">
                    {{ content.title }}
                  </v-card>
                  <v-divider />

                  <v-card width="1200px" height="2500">
                    <v-img :src="content.src" />
                  </v-card>
                </v-card>
              </v-dialog>
            </v-card>
          </v-col>
        </v-row>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
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
                src:
                  'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/68403814_116680189684677_4986041428145602560_o.jpg?_nc_cat=103&_nc_ohc=ReC2SWMSoJEAQkaEXXR8Ztj8aq_dtsOeIpcDQZ5gyVylvYw0kP7VtsoPQ&_nc_ht=scontent-lax3-1.xx&oh=fae605e55b30eff0dc2df9c33be107b8&oe=5E77C07B',
                title: '大学に求めることは？',
                artist:
                  '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
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
                src:
                  'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/68333965_116680153018014_5988082870537682944_o.jpg?_nc_cat=110&_nc_ohc=FaRzdiWemngAQnSlxyixalsinP8YDJtN9HF4WZ_Gh6_tCJQVjO5Fh95Fg&_nc_ht=scontent-lax3-1.xx&oh=7b11afc49cdf1d24171af27c44669bc6&oe=5EA8DCF8',
                title: '大学に求めることは？',
                artist:
                  '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                  '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                  '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                  '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                  '/nこういった対応も含め、見事な官民連携の事例と感じます。',
                dialog: false
              }
            ]
          },
          {
            team: 'teamC',
            color: '#1F7087',
            contents: [
              {
                src:
                  'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/68586209_116680136351349_8647060861082402816_o.jpg?_nc_cat=103&_nc_ohc=JjOPI5IP2HkAQmbmD1LkSn32rfRL7u-yX_KFuDpwT1S_Yvi1mG8S8OTbQ&_nc_ht=scontent-lax3-1.xx&oh=c01ceb0735f7b9e393fd24afdaaf8e5b&oe=5E682F0A',
                title: '大学に求めることは？',
                artist:
                  '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
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
            color: '#1F7087',
            contents: [
              {
                src:
                  'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/68403814_116680189684677_4986041428145602560_o.jpg?_nc_cat=103&_nc_ohc=ReC2SWMSoJEAQkaEXXR8Ztj8aq_dtsOeIpcDQZ5gyVylvYw0kP7VtsoPQ&_nc_ht=scontent-lax3-1.xx&oh=fae605e55b30eff0dc2df9c33be107b8&oe=5E77C07B',
                title: '大学に求めることは？',

                artist:
                  '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                  '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                  '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                  '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                  '/nこういった対応も含め、見事な官民連携の事例と感じます。',
                dialog: false
              }
            ]
          },
          {
            team: 'teamE',
            color: '#1F7087',
            contents: [
              {
                src:
                  'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
                title: '教育',
                artist:
                  '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                  '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                  '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                  '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                  '/nこういった対応も含め、見事な官民連携の事例と感じます。',
                dialog: false
              }
            ]
          },
          {
            team: 'teamF',
            color: '#1F7087',
            contents: [
              {
                src:
                  'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
                title: '教育',
                artist:
                  '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                  '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                  '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                  '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                  '/nこういった対応も含め、見事な官民連携の事例と感じます。',
                dialog: false
              }
            ]
          },
          {
            team: 'teamG',
            color: '#1F7087',
            contents: [
              {
                src:
                  'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
                title: '教育',
                artist:
                  '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
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
            team: 'teamA',
            color: '#1F7087',
            contents: [
              {
                src:
                  'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/68403814_116680189684677_4986041428145602560_o.jpg?_nc_cat=103&_nc_ohc=ReC2SWMSoJEAQkaEXXR8Ztj8aq_dtsOeIpcDQZ5gyVylvYw0kP7VtsoPQ&_nc_ht=scontent-lax3-1.xx&oh=fae605e55b30eff0dc2df9c33be107b8&oe=5E77C07B',
                title: '大学に求めることは？',
                artist:
                  '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
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
                src:
                  'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/68333965_116680153018014_5988082870537682944_o.jpg?_nc_cat=110&_nc_ohc=FaRzdiWemngAQnSlxyixalsinP8YDJtN9HF4WZ_Gh6_tCJQVjO5Fh95Fg&_nc_ht=scontent-lax3-1.xx&oh=7b11afc49cdf1d24171af27c44669bc6&oe=5EA8DCF8',
                title: '大学に求めることは？',
                artist:
                  '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                  '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                  '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                  '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                  '/nこういった対応も含め、見事な官民連携の事例と感じます。',
                dialog: false
              }
            ]
          },
          {
            team: 'teamC',
            color: '#1F7087',
            contents: [
              {
                src:
                  'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/68586209_116680136351349_8647060861082402816_o.jpg?_nc_cat=103&_nc_ohc=JjOPI5IP2HkAQmbmD1LkSn32rfRL7u-yX_KFuDpwT1S_Yvi1mG8S8OTbQ&_nc_ht=scontent-lax3-1.xx&oh=c01ceb0735f7b9e393fd24afdaaf8e5b&oe=5E682F0A',
                title: '大学に求めることは？',
                artist:
                  '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
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
            color: '#1F7087',
            contents: [
              {
                src:
                  'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/68403814_116680189684677_4986041428145602560_o.jpg?_nc_cat=103&_nc_ohc=ReC2SWMSoJEAQkaEXXR8Ztj8aq_dtsOeIpcDQZ5gyVylvYw0kP7VtsoPQ&_nc_ht=scontent-lax3-1.xx&oh=fae605e55b30eff0dc2df9c33be107b8&oe=5E77C07B',
                title: '大学に求めることは？',
                artist:
                  '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
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
              src:
                'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/68403814_116680189684677_4986041428145602560_o.jpg?_nc_cat=103&_nc_ohc=ReC2SWMSoJEAQkaEXXR8Ztj8aq_dtsOeIpcDQZ5gyVylvYw0kP7VtsoPQ&_nc_ht=scontent-lax3-1.xx&oh=fae605e55b30eff0dc2df9c33be107b8&oe=5E77C07B',
              title: '大学に求めることは？',
              artist:
                '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
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
              src:
                'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/68333965_116680153018014_5988082870537682944_o.jpg?_nc_cat=110&_nc_ohc=FaRzdiWemngAQnSlxyixalsinP8YDJtN9HF4WZ_Gh6_tCJQVjO5Fh95Fg&_nc_ht=scontent-lax3-1.xx&oh=7b11afc49cdf1d24171af27c44669bc6&oe=5EA8DCF8',
              title: '大学に求めることは？',
              artist:
                '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                '/nこういった対応も含め、見事な官民連携の事例と感じます。',
              dialog: false
            }
          ]
        },
        {
          team: 'teamC',
          color: '#1F7087',
          contents: [
            {
              src:
                'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/68586209_116680136351349_8647060861082402816_o.jpg?_nc_cat=103&_nc_ohc=JjOPI5IP2HkAQmbmD1LkSn32rfRL7u-yX_KFuDpwT1S_Yvi1mG8S8OTbQ&_nc_ht=scontent-lax3-1.xx&oh=c01ceb0735f7b9e393fd24afdaaf8e5b&oe=5E682F0A',
              title: '大学に求めることは？',
              artist:
                '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
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
          color: '#1F7087',
          contents: [
            {
              src:
                'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/68403814_116680189684677_4986041428145602560_o.jpg?_nc_cat=103&_nc_ohc=ReC2SWMSoJEAQkaEXXR8Ztj8aq_dtsOeIpcDQZ5gyVylvYw0kP7VtsoPQ&_nc_ht=scontent-lax3-1.xx&oh=fae605e55b30eff0dc2df9c33be107b8&oe=5E77C07B',
              title: '大学に求めることは？',
              artist:
                '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                '/nこういった対応も含め、見事な官民連携の事例と感じます。',
              dialog: false
            }
          ]
        },
        {
          team: 'teamE',
          color: '#1F7087',
          contents: [
            {
              src:
                'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
              title: '教育',
              artist:
                '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                '/nこういった対応も含め、見事な官民連携の事例と感じます。',
              dialog: false
            }
          ]
        },
        {
          team: 'teamF',
          color: '#1F7087',
          contents: [
            {
              src:
                'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
              title: '教育',
              artist:
                '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
                '<br />生駒市が公開している給食予定献立表のオープンデータを利用した給食献立表アプリ「4919（食育）for IKOMA」が、11月から学校で配布している給食献立表からダウンロードできるようになることが正式に発表されました。' +
                '/n→発表資料「給食献立アプリ「4919(食育)for_IKOMA」を給食献立表からダウンロード」' +
                '/n生駒市は、河中さんが開発したアプリのために、公開しているオープンデータを改訂し、9月からアレルゲンの列を追加しました。以前はアレルゲンはPDFに書かれており、その部分は河中さんが手打ちで入力して対応していましたが、9月からcsvに追加されたため、自動取り込みができるようになったとのこと。' +
                '/nこういった対応も含め、見事な官民連携の事例と感じます。',
              dialog: false
            }
          ]
        },
        {
          team: 'teamG',
          color: '#1F7087',
          contents: [
            {
              src:
                'https://livedoor.blogimg.jp/manax1121/imgs/9/7/97c0256e.png',
              title: '教育',
              artist:
                '市民参加のアプリコンテスト受賞作品が、実運用されるサービスに成長！' +
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
.active {
  border: 2px solid rgb(40, 170, 170);
  border-bottom: 0;
  border-radius: 5px 5px 0 0;
  background-color: #fff;
  color: black;
}

.bb {
  border-bottom: 5px solid rgb(40, 170, 170);
}

.tabs {
  position: relative;
  top: 2px;
}
</style>
