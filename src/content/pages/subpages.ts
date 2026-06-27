import { placeholderImages } from "./site";

export const subpages = [
  {
    slug: "about",
    label: "ABOUT US",
    title: "私たちについて",
    description:
      "中島の風景を主役に、矢野諭稔が案内人として関わりを伝えるページです。",
    image: placeholderImages.yano,
    imageAlt: "中島のレモン畑で作業する矢野諭稔",
  },
  {
    slug: "landscape",
    label: "SCENERY",
    title: "何もないように見える島に、\n残したいものがある。",
    description:
      "海と山が近く、港からの坂道に畑と家が続いていく。何もないように見える場所に、受け取ってきた時間があります。",
    image: placeholderImages.island,
    imageAlt: "中島のレモン畑、古民家、港、海辺、食卓の風景を組み合わせた写真",
    variant: "imageHero",
  },
  {
    slug: "kominka",
    label: "KOMINKA",
    title: "築100年の古民家",
    description:
      "長く使われてきた家に風を通し、人が集まれる余白を取り戻していく記録を置くページです。",
    image: placeholderImages.house,
    imageAlt: "築100年の古民家を想定した仮ビジュアル",
  },
  {
    slug: "lemon-farm",
    label: "LEMON FARM",
    title: "レモン農園",
    description:
      "100本のレモンの木を手入れし、畑の続きを受け取っていく活動を紹介します。",
    image: placeholderImages.farm,
    imageAlt: "レモン畑を想定した仮ビジュアル",
  },
  {
    slug: "people",
    label: "PEOPLE",
    title: "島の人や仲間との活動",
    description:
      "島の人、週末に訪れる仲間、作業を手伝う人たちとの関わりを記録するページです。",
    image: placeholderImages.repair,
    imageAlt: "古民家を直す仲間を想定した仮ビジュアル",
  },
  {
    slug: "visit",
    label: "EXPERIENCE",
    title: "島との関わり方",
    description:
      "味わう、読む、手を貸す、訪れる、見守る。自分に合った距離で関わるための入口です。",
    image: placeholderImages.table,
    imageAlt: "島の人と食卓を囲む様子を想定した仮ビジュアル",
  },
  {
    slug: "journal",
    label: "JOURNAL",
    title: "記録",
    description:
      "Notion連携を追加するまで、島の日々を置くための仮ページとして用意しています。",
    image: placeholderImages.hero,
    imageAlt: "港から船を見送る人の後ろ姿を想定した仮ビジュアル",
  },
  {
    slug: "contact",
    label: "CONTACT",
    title: "お問い合わせ",
    description:
      "仕事、取材、視察、協業の相談を受けるためのページです。送信機能は次以降に実装します。",
    image: placeholderImages.island,
    imageAlt: "中島の海と山を想定した仮ビジュアル",
  },
  {
    slug: "privacy",
    label: "PRIVACY",
    title: "プライバシーポリシー",
    description: "本番公開までに正式な内容へ差し替えるための仮ページです。",
    image: placeholderImages.house,
    imageAlt: "古民家を想定した仮ビジュアル",
  },
] as const;

export type Subpage = (typeof subpages)[number];
