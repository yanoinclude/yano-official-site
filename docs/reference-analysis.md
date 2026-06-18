# onononouen.com デザイン分析

調査対象: https://onononouen.com/  
調査日: 2026-06-13  
調査方法: Codex in-app Browser の viewport capability で実レンダリングし、Computed Styles / DOM / スクリーンショットを取得。

## 保存したスクリーンショット

- `reference/onononouen-pc-1440-firstview.png`
- `reference/onononouen-pc-1440-full.png`
- `reference/onononouen-tablet-768-full.png`
- `reference/onononouen-mobile-390-firstview.png`
- `reference/onononouen-mobile-390-full.png`
- `reference/onononouen-mobile-390-menu-open.png`
- `reference/onononouen-analysis-data.json`

補足: Google Chrome / Chromium の直接起動はこの環境では `EXIT:134` / `EXIT:133` で失敗したため、in-app Browser で指定 viewport を設定して取得した。

## ページ構成

実レンダリング上の表示順は以下。サイトは STUDIO 系の自動クラスで構築されており、クラス名自体には意味が少ないため、視覚とテキスト内容からセクション名を整理する。

| #   | セクション            | 目的                                   | PC実測                                      | SP実測                             |
| --- | --------------------- | -------------------------------------- | ------------------------------------------- | ---------------------------------- |
| 1   | 右固定 Online Shop    | 購入導線を常時出す                     | 50px幅、950px高、黒背景、右固定風           | 非表示                             |
| 2   | Header                | ロゴ、カート、メニュー                 | 高さ80px、白背景、全幅                      | 高さ64px、白背景                   |
| 3   | Hero                  | 商品/農園の印象を写真で強く提示        | 高さ880px、左右に写真が見切れる横スライド風 | 高さ690.8px、縦長トリミング        |
| 4   | Brand Story           | コンセプト文と写真で思想を説明         | padding 240px 180px、1029px高               | padding 120px 24px 160px、1349px高 |
| 5   | Scenery               | 地域・風景の提示                       | padding bottom 240px、1017px高              | padding 0 16px 120px、795px高      |
| 6   | About us              | 農園紹介                               | PC左余白160px、802px高                      | padding 0 24px 160px、905px高      |
| 7   | Concept               | 暗い写真上に文章を重ねる情緒セクション | 黒背景、934px高、全幅写真                   | 黒背景、800px高                    |
| 8   | Service               | 農園の取り組み紹介                     | padding 120px 160px、3画像                  | padding 80px 40px、縦積み寄り      |
| 9   | Product Intro         | 商品への導入                           | padding 2px 160px 240px                     | padding 2px 24px 240px             |
| 10  | Product Carousel      | 商品カード/スライド                    | 幅1567.5pxで画面外にはみ出す                | 幅412.5pxで横方向に見切れる        |
| 11  | Product Detail        | こだわりの商品                         | padding 320px 160px 160px、1260px高         | padding 160px 36px 120px           |
| 12  | Credit / Visual Break | 制作クレジット兼余白                   | 562px高                                     | 300px高                            |
| 13  | News                  | お知らせ一覧                           | padding 2px 160px 240px、4画像              | padding 0 24px 80px                |
| 14  | Final CTA Visual      | 印象的な締めコピー                     | 黒背景、760px高                             | 黒背景、675px高                    |
| 15  | Footer                | サイトマップ、SNS、購入導線            | `#EEE9E2` 背景、padding 80px 160px 40px     | padding 0 30px、1373px高           |

## レイアウト実測

- PC viewport: 1440 x 950、document scrollHeight 10847px、scrollWidth 1425px。
- Tablet viewport: 768 x 1024、document scrollHeight 12346px、scrollWidth 753px。
- Mobile viewport: 390 x 844、document scrollHeight 11739px、scrollWidth 375px。
- Header: PC 80px、SP 64px。
- PC主要左右余白: 160px または 180px。
- Tablet主要左右余白: 48px、商品詳細は96px、フッターは120px。
- Mobile主要左右余白: 16px / 24px / 36px / 40px がセクションにより使い分け。
- PCセクション上下余白: 120px、160px、240px、320px など大きめ。
- Mobileセクション上下余白: 80px、120px、160px、240px。PCより小さいが、かなり余白を残す。
- 最大幅: 多くの外側セクションは `max-width: 100%`。内側要素で幅を制御している。
- カルーセル/横スライド系: PCで viewport より広い 1567.5px、SPで 412.5px。意図的に左右を見切らせる。

## タイポグラフィ

Computed Styles で確認できた代表値。

| 対象                   | font-family  | PC                                                     | SP                                                     | 特徴                                           |
| ---------------------- | ------------ | ------------------------------------------------------ | ------------------------------------------------------ | ---------------------------------------------- |
| Hero後の主見出し       | `"霞青藍 M"` | 34px / 700 / line-height 57.8px / letter-spacing 8.5px | 28px / 700 / line-height 47.6px / letter-spacing 7px   | 縦書き、字間を大きく取り、余白を含めて読ませる |
| 英字大見出し `SCENERY` | `Jost`       | 40px / 400 / line-height 68px / letter-spacing 8px     | 28px / 400 / line-height 47.6px / letter-spacing 5.6px | 英字は細く広い字間                             |
| 右固定 Online Shop     | `Jost`       | 16px / 400 / line-height 22.4px / letter-spacing 2.4px | SP非表示                                               | 購入導線だが強く売り込まず縦方向に置く         |
| Footer                 | sans-serif   | 16px / 400 / line-height 16px                          | 16px / 400 / line-height 16px                          | 見出し英字 + 日本語リンクの階層                |

見た目上の使い分け:

- 日本語の思想・コピーは縦書きまたは縦に近い細い組みで、視線を遅くする。
- 英字ラベルは Jost、広い letter-spacing、細めウェイト。
- 本文は小さめで行間を広く取り、コピーよりも控えめ。
- メニューは英字カテゴリを広い字間で置き、開閉項目として見せる。

## 色

Computed Styles 上の主要色。

| 用途         | HEX                             | 備考                                   |
| ------------ | ------------------------------- | -------------------------------------- |
| 背景         | `#FFFFFF`                       | 大半のセクション背景                   |
| 本文/見出し  | `#333333`                       | 主テキスト                             |
| 黒背景       | `#000000`                       | 写真重ね/右固定購入導線/暗いビジュアル |
| 補助文字     | `#7B7B7B`                       | 本文・補足系                           |
| 罫線/淡色    | `#D5D1CD`, `#EAEAEA`, `#ECECEC` | 区切り、カード背景寄り                 |
| フッター背景 | `#EEE9E2`                       | 暖かい薄ベージュ                       |
| CTA背景      | `#F4F0E9`, `#E6DFD5`            | オンラインストア/SNS導線の淡色面       |
| アクセント   | `#A27832`, `#CD9638`            | 商品/新生姜を想起させる茶金系          |

## 写真の使い方

取得画像の比率分類:

- PC: wide 9、portrait 1、square 0。
- Mobile: wide 9、portrait 1、square 0。

観察:

- Hero は横長写真を PC では横いっぱいに近く、SPでは縦長にトリミングして使う。
- 写真は角丸なし。矩形のまま大きく見せる。
- object-fit は多くが cover 相当の見え方。写真の中央または主被写体を残してトリミング。
- 写真の上に縦書きコピーを置く。コピーは白または濃色写真に乗るように配置。
- 写真と文章の左右配置では、写真が情緒、文章が思想説明。写真のほうが視覚的主役。
- 写真間の余白は大きい。ぎゅっと並べず、1枚ずつ余韻を持たせる。
- 明るさは全体に低コントラストというより、暗部をしっかり残した写真が多い。白背景との対比で静かに見える。

## ナビゲーション

PC:

- 上部ヘッダーは白背景、高さ80px。
- ロゴは左寄り、カートとメニューが右側。
- 右端に黒背景の縦型 Online Shop 導線が固定的に表示される。
- 通常の横並びグローバルナビを強く見せず、メニューから詳細ナビへ入る構成。

スマートフォン:

- ヘッダー高さ64px。
- 右固定 Online Shop は非表示。
- メニューを開くと白背景の全画面メニュー。
- メニュー項目は `TOP / About us / Product / Experience / Local / Contact`。
- 英字カテゴリは letter-spacing が広く、右側に開閉アイコン。
- 下部にオンラインストア、Instagram、LINE、note の大きな淡色ボタン。

## 動き

Computed Styles とスクリーンショット取得時の状態から確認できた範囲:

- 多くの要素に `transition-duration: 0.3s`、`transition-timing-function: cubic-bezier(0.4, 0.4, 0, 1)`。
- スクロール出現系の `.appear` 要素に `transition-duration: 1.2s` または `1.4s`、`ease-in-out`。
- Hero内の scroll 表示らしきテキストに `transition-duration: 2s`、`ease-in-out`。
- animation-name は多くが `none`。CSS animation より transition と appear クラスで制御している。
- メニュー開閉は白いオーバーレイが出て、右上の close アイコンに変わる。
- 商品部分は横に見切れるカルーセル/スライダー風。

## PC とスマートフォンの違い

| 項目        | PC                               | SP                                     |
| ----------- | -------------------------------- | -------------------------------------- |
| Header      | 80px                             | 64px                                   |
| Online Shop | 右固定の黒い縦導線あり           | 非表示、メニュー内の大ボタンへ移動     |
| Hero        | 横長写真、左右に次写真が見切れる | 縦長トリミング、主被写体を中央に寄せる |
| 余白        | 左右160-180px、上下240px級       | 左右16-40px、上下80-160px中心          |
| タイポ      | 大きい縦書き、字間広い           | サイズを落として縦書きの余韻は維持     |
| セクション  | 左右配置や横見切れを使う         | 縦積み、ただし余白は詰めすぎない       |
| Footer      | 横方向のサイトマップ感           | 縦に長いアコーディオン風               |

## デザイントークン案

週末移住レモンへ応用する場合の案。数値は参考サイトの実測をベースに、島・レモン・古民家向けに置き換える。

```ts
export const designTokens = {
  color: {
    background: "#F2EFE7",
    surface: "#FFFFFF",
    text: "#333333",
    muted: "#7B7B7B",
    border: "#D8D2C5",
    wood: "#5A4635",
    lemon: "#D7C43B",
    sea: "#6F8991",
    footer: "#EEE9E2",
  },
  space: {
    pagePc: "160px",
    pagePcWide: "180px",
    pageTablet: "48px",
    pageMobile: "24px",
    sectionPc: "clamp(160px, 16vw, 240px)",
    sectionMobile: "clamp(80px, 24vw, 160px)",
  },
  type: {
    jpHeading: "Zen Old Mincho",
    jpBody: "Zen Kaku Gothic New",
    latin: "Cormorant Garamond",
    heroLetterSpacing: "0.18em",
    labelLetterSpacing: "0.2em",
  },
  motion: {
    quick: "300ms cubic-bezier(0.4, 0.4, 0, 1)",
    reveal: "1200ms ease-in-out",
    slow: "2000ms ease-in-out",
  },
};
```

## そのまま参考にする要素

- 風景/作物写真を大きく使い、説明より先に印象を届ける構造。
- 白〜生成りの余白を大きく取り、写真とコピーを急がせないテンポ。
- PCで左右に写真を見切らせ、世界が画面外に続く感覚を出す。
- SPでも写真を小さくしすぎず、縦長トリミングで主役感を維持する。
- メニューを情報整理の中心にし、普段のヘッダーは静かにする。
- 購入導線を常時出しつつ、強い販売色ではなくサイトの一部として扱う。
- appear系の遅いフェード/移動で、読み進める速度を落とす。

## 週末移住レモン独自に変える要素

- コピー、写真、ロゴは一切流用しない。
- 新生姜の暗い森・苔・根菜の質感ではなく、中島の海、港、古民家、畑、レモンの光を主役にする。
- 縦書きコピーは使いすぎず、島の風景を邪魔しない箇所に限定する。
- 右固定 Online Shop は、週末移住レモンでは「購入」だけでなく「味わう」導線として柔らかく扱う。
- メニューカテゴリは `About us / Product` ではなく、「中島について」「活動」「記録」「訪れる」など日本語中心にする。
- 黒背景の重さは抑え、古民家の木・海・レモンの色を混ぜる。
- 商品カルーセルより、レモン果汁が島との関係の入口であることを伝える1本の物語性を優先する。

## 調査した事実

- 指定 viewport でスクリーンショットを保存した。
- PC 1440幅ではヘッダー80px、Hero 880px、主要左右余白160-180px。
- SP 390幅ではヘッダー64px、Hero 690.8px、主要左右余白16-40px。
- 背景の大半は `#FFFFFF`、フッターは `#EEE9E2`、本文/見出しは主に `#333333`。
- Hero後の主見出しは `"霞青藍 M"`、PC 34px、SP 28px、縦書き、字間が広い。
- 英字大見出しは `Jost`、PC 40px、SP 28px、letter-spacing が広い。
- 画像は角丸なし。取得できた img は wide が多く、PC/SPとも wide 9、portrait 1、square 0。
- 多くの要素に 0.3s の transition、appear要素に 1.2s / 1.4s の ease-in-out transition がある。
- SPメニューは白背景の全面メニューで、カテゴリと外部導線ボタンを縦に配置する。

## Codexの推測

- Studio系ビルダーで作られているため、細かい class 名ではなく、余白・写真・縦書き・導線設計を抽象化して参考にするのが適切。
- このサイトの核は「商品を売る」より先に「土地の風景と作り手の感性を信頼してもらう」設計。
- 週末移住レモンでは、同じ静けさを使いつつ、暗い森の湿度ではなく、港・海・家・畑の開けた空気へ置き換えると相性がよい。
- 写真の大きさと余白の取り方は参考にできるが、見出しの縦書きや字間は多用すると模倣感が出るため、トップや章扉に限定したほうがよい。
