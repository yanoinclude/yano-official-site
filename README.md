# ヤノ公式サイト

愛媛県松山市・中島の風景、古民家、レモン農園、そこに関わる人々の物語を伝える公式サイトです。

メインコピーは「この島に、帰ってこられる風景を。」、活動コピーは「島の続きを、手入れする。」です。中島の風景を主役に置き、矢野諭稔は風景を案内する語り手として扱います。古民家とレモン農園は別々の事業ではなく、同じ思いから始まった活動として表現します。

## 技術構成

- Astro
- TypeScript strict
- Tailwind CSS
- ESLint
- Prettier
- Cloudflare Pages
- npm

React は今回使用していません。必要なインタラクションが出てきた箇所だけ、今後 island として追加します。

## ローカル起動

```bash
npm install
npm run dev
```

## 検証コマンド

```bash
npm run build
npm run typecheck
npm run lint
npm run format:check
```

整形する場合:

```bash
npm run format
```

## Cloudflare Pages 設定

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: リポジトリ直下

`wrangler.toml` でも `pages_build_output_dir = "./dist"` を指定しています。

## 環境変数

実値は `.env` や `.env.local`、Cloudflare Pages の Environment variables に置きます。APIキーや個人情報はコミットしません。

今回 Notion 接続は未実装ですが、将来用に `.env.example` へ以下の名前だけを用意しています。

- `NOTION_TOKEN`
- `NOTION_JOURNAL_DATA_SOURCE_ID`
- `PUBLIC_SITE_URL`

`PUBLIC_` が付く値はブラウザに公開される前提のものだけに限定します。

## ディレクトリ構成

```txt
src/
  pages/
    index.astro
  layouts/
    BaseLayout.astro
  components/
    global/
    sections/
    ui/
  content/
    pages/
  lib/
    seo/
  styles/
    globals.css
    tokens.css
  assets/
    images/
public/
  favicon.svg
  robots.txt
```

ページ内に設定値を散らさず、サイト情報、ナビゲーション、SEO、トップページの仮コンテンツは `src/content/pages/` に分けています。

## デザインシステム

色、フォント、余白、最大幅、角丸などの最小トークンは `src/styles/tokens.css` にまとめています。色名は見た目の色ではなく、島の風景や役割に寄せています。

## 写真の差し替え方法

画像 URL は `src/content/pages/site.ts` の `placeholderImages` に集約しています。本番用写真に差し替える場合は、画像を `src/assets/images/generated/` に同じファイル名で置くか、各コンテンツ設定から参照先を差し替えてください。

Hero 画像はユーザー提供写真を Web 用に軽量化した `src/assets/images/hero-user-lemon-grove.jpg` を使用しています。元画像の内容を別物に改変せず、トリミング、明るさ、オーバーレイで Hero として成立するよう調整しています。

Hero 以外の現在の画像は UI 確認用にリポジトリ内で作成した仮ビジュアルです。本番公開用の写真ではありません。

トップページでは以下の差し替え前提ファイル名を使用しています。現在は UI 確認用の仮画像であり、公開前に必ず実写または正式な生成画像へ差し替えます。

- `src/assets/images/generated/scenery-nakajima.jpg`
- `src/assets/images/generated/about-landscape.jpg`
- `src/assets/images/generated/activity-kominka.jpg`
- `src/assets/images/generated/activity-lemon-farm.jpg`
- `src/assets/images/generated/activity-people.jpg`
- `src/assets/images/generated/product-lemon-bottle.jpg`
- `src/assets/images/generated/experience-island-life.jpg`
- `src/assets/images/generated/closing-ferrywave.jpg`

`product-lemon-bottle.jpg` は仮の瓶画像です。商品のラベルは読めない仮表現にしており、公開前に必ず実物写真へ差し替えます。画像生成や撮影ディレクションのメモは `docs/image-prompts.md` にまとめています。

仮画像の出典:

- `public/images/placeholder-harbor.svg`
- `public/images/placeholder-island.svg`
- `public/images/placeholder-house.svg`
- `public/images/placeholder-farm.svg`
- `public/images/placeholder-guide.svg`

## 今後の Notion 連携

Journal 記事のみ Notion 管理にする予定です。次以降の Pull Request で、Notion data source から公開済み記事を取得し、現在の仮 `JournalCard` を取得データに置き換えます。

今回の範囲には、Notion API 接続、Journal 詳細ページ、問い合わせフォーム送信、アクセス解析、本番ドメイン設定、決済、地図、高度なアニメーション、下層ページの本格実装は含めていません。
