import { placeholderImages } from "./site";
import sceneryKominka from "@/assets/images/scenery/scenery-kominka.jpg";
import sceneryLemonOrchard from "@/assets/images/scenery/scenery-lemon-orchard.jpg";
import sceneryPeople from "@/assets/images/scenery/scenery-people.jpg";
import sceneryPort from "@/assets/images/scenery/scenery-port.jpg";
import scenerySea from "@/assets/images/scenery/scenery-sea.jpg";
import sceneryTable from "@/assets/images/scenery/scenery-table.jpg";

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
    sublabel: "in Nakajima",
    slides: [
      {
        image: sceneryPort,
        label: "PORT",
        title: "船を見送る港",
        description: "帰る人と、旅立つ人が交わる場所。",
        alt: "中島の港で船を見送る人の後ろ姿",
      },
      {
        image: sceneryLemonOrchard,
        label: "LEMON ORCHARD",
        title: "100本のレモン畑",
        description: "季節ごとに表情を変える、島の畑。",
        alt: "中島のレモン畑で木を手入れする人",
      },
      {
        image: sceneryKominka,
        label: "KOMINKA",
        title: "築100年の古民家",
        description: "長く使われてきた家に、もう一度風を通す。",
        alt: "築100年の古民家の室内を手入れする人",
      },
      {
        image: scenerySea,
        label: "SEA",
        title: "浜辺の道",
        description: "何もないようで、島の時間が流れている。",
        alt: "中島の緑の中から瀬戸内海へ下っていく浜辺の道",
      },
      {
        image: sceneryTable,
        label: "TABLE",
        title: "島の食卓",
        description: "レモンや季節のものを囲む時間。",
        alt: "中島のレモンを浮かべた鍋を囲む食卓",
      },
      {
        image: sceneryPeople,
        label: "PEOPLE",
        title: "島の人と仲間",
        description: "できる範囲を持ち寄って、少しずつ手を入れる。",
        alt: "中島のレモン畑に集まった島の人と仲間",
      },
    ],
  },
  about: {
    eyebrow: "ABOUT US",
    heading: "暮らしを全部変えなくても、\n島との関係は始められる。",
    body: [
      "矢野諭稔は、平日は松山・東京で働き、週末になると中島へ通っています。最初から古民家改修や農業ができたわけではありません。",
      "島の人や仲間に教わりながら、できる範囲で家や畑に手を入れていく。週末移住レモンは、移住するかしないかではなく、自分にできる距離から島と関わるための入口です。",
    ],
    image: placeholderImages.about,
    imageAlt: "中島のレモン畑で作業する矢野諭稔",
  },
  concept: {
    eyebrow: "CONCEPT",
    headline: "できる範囲で、手を入れる。",
    heading: "できる範囲で、\n手を入れる。",
    body: "田舎暮らしなんて無理。週末移住なんて、時間がない。古民家なんて直せない。農業なんて、経験がない。気づけば、「ない、ない」のまま、時間だけが過ぎていく。でも、すべてが揃っていなくても、できることはありました。島へ行ってみる。レモンを味わう。手を貸してみる。話を聴いてみる。古い家に風を通す。畑の草を刈る。誰かに、この島のことを話す。それは、小さくて確かな、はじまりの一歩。週末移住レモンは、大きく暮らしを変えることではなく、自分にできる範囲で島に関わるための入口です。この島に帰ってこられる風景を、次の世代へ手渡していくために。",
    bodyColumns: [
      "田舎暮らしなんて無理。\n週末移住なんて、時間がない。",
      "古民家なんて直せない。\n農業なんて、経験がない。",
      "気づけば、\n「ない、ない」のまま、\n時間だけが過ぎていく。",
      "でも、\nすべてが揃っていなくても、\nできることはありました。",
      "島へ行ってみる。\nレモンを味わう。\n手を貸してみる。\n話を聴いてみる。",
      "古い家に風を通す。\n畑の草を刈る。\n誰かに、この島のことを話す。",
      "それは、\n小さくて確かな、\nはじまりの一歩。",
      "週末移住レモンは、\n大きく暮らしを変えることではなく、\n自分にできる範囲で島に関わるための入口です。",
      "この島に帰ってこられる風景を、\n次の世代へ手渡していくために。",
    ],
    image: placeholderImages.concept,
    imageAlt: "苔むした石と木々の中にレモンが実る森のような風景",
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
        alt: "古民家の外壁を塗る矢野諭稔",
        href: "/kominka",
      },
      {
        title: "100本のレモン",
        body: "受け取った畑に通い、草を刈り、木を見て、季節の変化を受け取る。",
        image: placeholderImages.farm,
        alt: "レモンの木を手入れする矢野諭稔",
        href: "/lemon-farm",
      },
      {
        title: "人と島との関わり",
        body: "一人で抱えず、島の人や仲間とできる範囲を持ち寄って手を入れる。",
        image: placeholderImages.repair,
        alt: "島での活動を写した写真を並べたテーブル",
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
    imageAlt: "古民家の棚に置かれた週末移住レモン果汁の瓶",
    href: "https://drafts.editmysite.com/d/9qMX00kNEKH5198B0GE8FoEJpD61/",
    cta: "週末移住レモン果汁を見る",
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
    body: "古民家のこと、畑のこと、島で出会った人のこと。週末ごとに積み重なる、小さな記録です。",
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
    imageAlt: "中島の港を出入りする船と瀬戸内海を見下ろす風景",
    lines: [
      "帰る人を迎え、",
      "旅立つ人を見送る。",
      "この島に、帰ってこられる風景を。",
    ],
  },
} as const;
