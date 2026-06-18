# デザイン微調整 差分一覧

## 実測値

| 項目               | 参考サイト            | 調整前           | 調整後                    |
| ------------------ | --------------------- | ---------------- | ------------------------- |
| PC Header          | 80px                  | 80px             | 80px                      |
| SP Header          | 64px                  | 64px             | 64px                      |
| PC Hero            | 880px                 | 880px            | 約100svh、計測900px       |
| SP Hero            | 690.8px               | 691px            | 100svh、計測844px         |
| PC scrollHeight    | 10847px               | 12396px          | 10507px                   |
| PC Activities      | Service相当は圧縮構成 | 2738px           | 1335px                    |
| PC Scenery         | 約1017px              | 1746px           | 1278px                    |
| 見出し weight      | 400中心、一部700      | 700中心          | 400中心                   |
| 見出し font        | 参考サイトは独自明朝  | Zen Old Mincho系 | Noto Serif JP / Yu Mincho |
| 本文 line-height   | 広め                  | 約2              | 約2                       |
| 英字 label spacing | 広め                  | 0.22em前後       | 0.22em                    |
| 罫線               | 1px淡色               | 1px淡色          | 1px淡色                   |

## 調整内容

- Heroを白背景の縦書き中心から、写真全面の横組みコピーへ変更。
- Hero画像に `scale(1.05)` から `scale(1)` の読み込みアニメーションを追加。
- コピーを行ごとに120msずつ遅らせて表示。
- Philosophyを縦書きではなく写真と文章の2カラムへ変更。
- Conceptは「気に留める・手入れする・手渡す」を整理する役割へ変更。
- Sceneryを複数画像の縦積みから、横幅いっぱいに近いパノラマ写真へ変更。
- Activitiesを4項目の長い交互レイアウトから、3項目の横並びへ変更。
- Productは島の風景の中にある仮瓶写真へ差し替え。
- Journalは写真付き大記事1件と文字一覧2件へ変更。
- セクション表示に IntersectionObserver とCSS transitionによる静かなリビールを追加。
- リンクの下線と矢印に小さなホバーアニメーションを追加。
- `prefers-reduced-motion` に対応。

## 推測・判断

- 参考サイトの独自フォントはそのまま使わず、指定に沿って Noto Serif JP / Noto Sans JP に置き換えた。
- 参考サイトの写真そのものは使わず、同じ縦横比を意識した仮JPGを生成した。
- 右固定Online Shop導線は、今回の情報構造と禁止事項に合わせて再現していない。
- 縦書きは模倣感が強くなるため、Hero/Conceptの反復を避け、今回はHeroも横組みに寄せた。

## 成果物

- `reference/weekend-lemon-tuned-1440-full.png`
- `reference/weekend-lemon-tuned-768-full.png`
- `reference/weekend-lemon-tuned-390-full.png`
- `reference/weekend-lemon-hero-animation-start.png`
- `reference/weekend-lemon-hero-animation-middle.png`
- `reference/weekend-lemon-hero-animation-complete.png`
- `reference/weekend-lemon-scroll-frame-1.png`
- `reference/weekend-lemon-scroll-frame-2.png`
- `reference/weekend-lemon-scroll-frame-3.png`
- `reference/weekend-lemon-scroll-frame-4.png`
- `reference/compare-tuned-1440-full.png`
- `reference/compare-tuned-768-full.png`
- `reference/compare-tuned-390-full.png`
