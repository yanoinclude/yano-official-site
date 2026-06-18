import { placeholderImages } from "./site";

export const homeContent = {
  hero: {
    image: placeholderImages.hero,
    imageAlt: "レモン畑の中で木を見上げる人の後ろ姿。ユーザー提供のHero写真",
  },
  philosophy: {
    eyebrow: "OUR PHILOSOPHY",
    heading: "放っておけなかった風景に、できる範囲で手を入れる。",
    body: [
      "何十年、何百年と、人の手によって守られてきた家や畑。",
      "すべてを残すことはできなくても、気に留めたものに、できる範囲で手を入れる。",
      "古民家を直すことも、レモンの木を手入れすることも、この島の続きを次の人へ手渡すための営みです。",
    ],
    image: placeholderImages.table,
    imageAlt: "島の人と食卓を囲む様子を想定した仮ビジュアル",
  },
  scenery: {
    eyebrow: "SCENERY",
    heading: "何もないように見える島に、\n残したいものがある。",
    body: "海と山が近く、港からの坂道に畑と家が続いていく。何もないように見える場所に、受け取ってきた時間があります。",
    images: [
      {
        src: placeholderImages.island,
        alt: "中島のレモン畑、古民家、港、海辺、食卓の風景を組み合わせた写真",
      },
      {
        src: placeholderImages.hero,
        alt: "港から船を見送る人を想定した仮ビジュアル",
      },
      {
        src: placeholderImages.farm,
        alt: "中島の畑と集落を想定した仮ビジュアル",
      },
    ],
  },
  about: {
    eyebrow: "ABOUT US",
    heading: "放っておけなかったことから、\nすべてが始まりました。",
    body: [
      "矢野諭稔は、この風景を案内する語り手です。主役は中島の海、家、畑、そこで暮らしてきた人たちの時間です。",
      "古民家、レモン畑、果汁づくりは別々の事業ではありません。気に留めたものへ、できる範囲で手を入れる同じ活動です。",
    ],
    image: placeholderImages.about,
    imageAlt: "古民家や畑、港の気配が残る中島の風景を想定した仮ビジュアル",
  },
  concept: {
    sectionLabel: "99 + 1 project｜原体験",
    eyebrow: "99 + 1 project｜コンセプト",
    headline: "99の「ない」に、1を足す。",
    heading: "99の「ない」に、1を足す。",
    body: "田舎暮らしなんて無理。週末移住なんて時間がない。古民家なんて直せない。農業なんて経験がない。気づけば、ない、ない、ない、のまま、時間だけが過ぎていく。でも、99がそろっていなくても、島に行ってみる。レモンを味わう。手を貸してみる。話を聴いてみる。それは、小さくて確かなはじまりの一歩。99 + 1 Projectは、人と島のあいだに、その一歩をつくるプロジェクトです。",
    bodyColumns: [
      "田舎暮らしなんて無理。\n週末移住なんて時間がない。",
      "古民家なんて直せない。\n農業なんて経験がない。",
      "気づけば、「ない、ない」のまま、\n時間だけが過ぎていく。",
      "でも、99が揃っていなくても、\n島へ行ってみる。\nレモンを味わう。\n手を貸してみる。\n話を聴いてみる。",
      "それは、小さくて確かな、はじまりの一歩。\n99＋1 Projectは、人と島のあいだに、\nその一歩をつくるプロジェクトです。",
    ],
    framedMessage: ["99の「ない」に、", "1を足す。"],
    image: placeholderImages.concept,
    imageAlt: "苔むした石と木々の中にレモンが実る森のような風景",
    ideas: [
      {
        label: "Step",
        title: "最初の一歩をつくる",
        body: "島を訪れ、体験し、\n関わるきっかけを\nつくります。",
      },
      {
        label: "Relation",
        title: "島との関係を育てる",
        body: "人や地域とつながり、\n信頼を重ねながら\n関係を育みます。",
      },
      {
        label: "Future",
        title: "次の100年へ手渡す",
        body: "この島の恵みと文化を、\n未来の世代へ\nつないでいきます。",
      },
    ],
  },
  activities: {
    eyebrow: "ACTIVITIES",
    heading: "島で進んでいること。",
    lead: "古民家改修、農作業、島への訪問。ひとつずつは小さくても、同じ風景の続きを手入れする動きです。",
    items: [
      {
        title: "築100年の古民家",
        body: "長く使われてきた家に風を通し、人が集まれる余白を取り戻していく。",
        image: placeholderImages.house,
        alt: "築100年の古民家を想定した仮ビジュアル",
        href: "/kominka",
      },
      {
        title: "100本のレモン",
        body: "受け取った畑に通い、草を刈り、木を見て、季節の変化を受け取る。",
        image: placeholderImages.farm,
        alt: "レモン畑を想定した仮ビジュアル",
        href: "/lemon-farm",
      },
      {
        title: "人と島との関わり",
        body: "一人で抱えず、島の人や仲間とできる範囲を持ち寄って手を入れる。",
        image: placeholderImages.repair,
        alt: "古民家を直す仲間を想定した仮ビジュアル",
        href: "/people",
      },
    ],
  },
  product: {
    eyebrow: "PRODUCT",
    heading: "島との関係が始まる一本。",
    lead: "週末移住レモン果汁",
    body: "強く売り込むための商品ではなく、食卓から中島を気に留めてもらうための入口です。畑で受け取った季節を、できるだけそのまま瓶に閉じ込めます。",
    image: placeholderImages.bottle,
    imageAlt: "週末移住レモン果汁を想定した仮ビジュアル",
  },
  experience: {
    eyebrow: "EXPERIENCE",
    heading: "島との関わり方は、\n一つではありません。",
    body: "大きな決断をしなくても、関わり方は選べます。味わう、読む、手を貸す、訪れる、見守る。自分に合った距離から、この島を気に留めてもらえたらと思います。",
    image: placeholderImages.table,
    imageAlt: "島の人と食卓を囲む様子を想定した仮ビジュアル",
    items: ["味わう", "読む", "手を貸す", "訪れる", "見守る"],
  },
  journal: {
    eyebrow: "JOURNAL",
    heading: "島の日々を記録する。",
    body: "Journal記事は今後Notionから取得します。ここでは配置確認用の仮記事を表示しています。",
    items: [
      {
        title: "港で見送った朝のこと",
        date: "2026.06.01",
        excerpt:
          "船が離れていく時間に、この島で受け取っているものを考えた記録。",
        href: "/journal",
        image: placeholderImages.hero,
        imageAlt: "港で船を見送る朝を想定した仮ビジュアル",
      },
      {
        title: "古い家に風を通す",
        date: "2026.05.18",
        excerpt: "閉じていた部屋を開け、床を拭き、人が戻る準備をする週末。",
        href: "/journal",
        image: placeholderImages.house,
        imageAlt: "古民家に風を通す様子を想定した仮ビジュアル",
      },
      {
        title: "レモンの木を見る日",
        date: "2026.05.03",
        excerpt:
          "畑に立つと、できることと、まだ分からないことが同じくらい見えてくる。",
        href: "/journal",
        image: placeholderImages.farm,
        imageAlt: "レモンの木を見る日を想定した仮ビジュアル",
      },
    ],
  },
  news: {
    eyebrow: "NEWS",
    heading: "お知らせ",
    items: [
      {
        title: "週末作業日の仮予定を追加しました",
        date: "2026.06.10",
        href: "/visit",
      },
      {
        title: "レモン果汁の準備状況を更新しました",
        date: "2026.05.24",
        href: "/product",
      },
      {
        title: "古民家改修の記録を整理しています",
        date: "2026.05.08",
        href: "/kominka",
      },
    ],
  },
  closing: {
    image: placeholderImages.closing,
    imageAlt: "港から旅立つ船を見送る風景を想定した仮ビジュアル",
    lines: [
      "帰る人を迎え、",
      "旅立つ人を見送る。",
      "この島に残り続ける風景を、",
      "次の世代へ。",
    ],
  },
} as const;
