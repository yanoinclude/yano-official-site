import { placeholderImages } from "./site";
import introYano from "@/assets/images/intro/yano-in-lemon-grove.jpeg";
import sceneryKominka from "@/assets/images/scenery/scenery-kominka.jpg";
import sceneryLemonOrchard from "@/assets/images/scenery/scenery-lemon-orchard.jpg";
import sceneryPeople from "@/assets/images/scenery/scenery-people.jpg";
import sceneryPort from "@/assets/images/scenery/scenery-port.jpg";
import scenerySea from "@/assets/images/scenery/scenery-sea.jpg";
import sceneryTable from "@/assets/images/scenery/scenery-table.jpg";
import sceneryMap from "@/assets/images/scenery/nakajima-map.svg";
import sceneryNakajimaSea from "@/assets/images/closing/closing-nakajima-ferry.jpeg";

export const homeContent = {
  hero: {
    image: placeholderImages.hero,
    imageAlt: "レモン畑の中で木を見上げる人の後ろ姿。ユーザー提供のHero写真",
  },
  intro: {
    text: "愛媛・中島という島で。築100年の古民家を2円で譲り受け、100本のレモンの木を任されました。",
    columns: [
      "愛媛・中島という島で。",
      "築100年の古民家を\n2円で譲り受け、",
      "100本のレモンの木を\n任されました。",
    ],
    image: introYano,
    imageAlt: "中島のレモン畑で作業の合間に話す矢野諭稔",
  },
  shortProfile: {
    eyebrow: "ABOUT ME",
    heading: "暮らしを変えすぎず、島へ通う。",
    body: "松山へIターンし、2026年からは東京との二拠点生活へ。平日は仕事をしながら、週末になると中島へ通っています。すべてを移すのではなく、自分にできる範囲で田舎暮らしを実現していきたいと思っています。",
    instagramLabel: "Instagramはこちら",
  },
  timeline: {
    eyebrow: "STORY",
    heading: "私の軌跡",
    lead: "松山へ移り住み、中島へ通い始めてから。週末ごとに手を動かしてきた時間をたどります。",
    groups: [
      {
        number: "01",
        title: "Iターン",
        period: "2022—2023",
        body: "松山へ移り住み、中島と出会うまで。",
        itemIndexes: [0, 1],
      },
      {
        number: "02",
        title: "古民家再生",
        period: "2023.12—2025.08",
        body: "2円で譲り受けた築100年の家を、仲間と直した時間。",
        itemIndexes: [2, 3, 4, 5, 6, 7, 8],
      },
      {
        number: "03",
        title: "レモン畑",
        period: "2025.10—",
        body: "100本の木を受け取り、畑へ通い始める。",
        itemIndexes: [9],
      },
    ],
    items: [
      {
        date: "2022",
        title: "松山にIターン",
        body: "ウェブ会社に勤めながら、田舎暮らしに憧れる。",
        photoNote: "松山で暮らし始めた頃",
      },
      {
        date: "2023.02",
        title: "松山市・中島に来島",
        body: "毎週末、島へ通い始める。",
        photoNote: "初めて中島を訪れた頃",
      },
      {
        date: "2023.12",
        title: "築100年の古民家を譲り受ける",
        body: "島の古民家を、2円で受け取る。",
        photoNote: "手を入れる前の古民家",
      },
      {
        date: "2024.06",
        title: "屋根の瓦下ろし",
        body: "仲間とともに、本格的な改修を始める。",
        photoNote: "瓦下ろしの作業風景",
      },
      {
        date: "2025.02",
        title: "屋根の張り替えが完了",
        body: "雨風から家を守る、大きな工程を終える。",
        photoNote: "張り替えを終えた屋根",
      },
      {
        date: "2025.03",
        title: "クラウドファンディングを実施",
        body: "古民家の続きを、多くの人とつくり始める。",
        photoNote: "応援を呼びかけた記録",
      },
      {
        date: "2025.05",
        title: "電気工事と漆喰塗り",
        body: "人を迎えるため、室内を少しずつ整える。",
        photoNote: "漆喰を塗る作業風景",
      },
      {
        date: "2025.08",
        title: "トイレ工事と床の張り替え",
        body: "暮らし、集まれる場所へ仕上げていく。",
        photoNote: "床を張り替える作業風景",
      },
      {
        date: "2025.08.26",
        title: "古民家が完成",
        body: "受け取った家に、もう一度人が集まる。",
        photoNote: "完成した古民家と仲間",
      },
      {
        date: "2025.10",
        title: "100本のレモンの木を譲り受ける",
        body: "家に続いて、島の畑の手入れが始まる。",
        photoNote: "受け取ったレモン畑",
      },
    ],
    current: {
      date: "現在",
      heading: "家と畑を行き来する、週末。",
      body: "平日は松山や東京で働き、週末は中島へ。古民家とレモン畑を行き来しながら、島の人や仲間と手を動かしています。",
    },
    moreLabel: "ストーリーをもっと見る",
  },
  scenery: {
    eyebrow: "Nakajima",
    heading: "中島",
    body: [
      "中島は、愛媛県松山市の沖合に浮かぶ忽那諸島のひとつ。松山から船で約1時間の場所にあります。",
      "忽那諸島の中で最も大きな島で、海からすぐに山の斜面が立ち上がります。あたたかな日差しと潮風を受けるその斜面には、みかんやレモンなどの柑橘畑が広がっています。",
      "港に船が着き、人が行き交い、家や畑には誰かの手が入る。ここにある風景は、島で暮らしてきた人たちの営みの積み重ねです。",
    ],
    map: sceneryMap,
    mapAlt: "松山市の沖合、忽那諸島の中央に位置する中島を示した線画地図",
    featureImage: sceneryNakajimaSea,
    featureImageAlt: "中島の山の斜面から見下ろす瀬戸内海と港を行き交うフェリー",
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
    eyebrow: "ABOUT YANO",
    heading: "この島に通っている人。",
    name: "矢野 諭稔",
    body: [
      "平日は松山や東京で仕事をし、週末になると中島へ通っています。",
      "最初から古民家を直せたわけでも、農業ができたわけでもありません。島の人や仲間に教わりながら、自分にできる範囲で家や畑に手を入れてきました。",
      "暮らしをすべて変えなくても、島との関係は始められる。その一つの形を、週末ごとの活動を通して伝えていきたいと思っています。",
    ],
    image: placeholderImages.about,
    imageAlt: "中島のレモン畑で作業する矢野諭稔",
  },
  activities: {
    eyebrow: "ACTIVITIES",
    heading: "島で、手を入れていること。",
    lead: "古い家に風を通すこと。\nレモンの木を手入れすること。\n\n別々に見える二つの活動は、\nこの島の風景を次へつなぐ、同じ営みです。",
    items: [
      {
        title: "築100年の古民家再生",
        body: "長く使われてきた家にもう一度風を通し、人が集まれる場所へ。できるところから、少しずつ手を入れています。",
        image: placeholderImages.house,
        alt: "古民家の外壁を塗る矢野諭稔",
        href: "/kominka",
      },
      {
        title: "100本のレモン農園",
        body: "任された畑に通い、草を刈り、木の状態を見ながら、島の季節と向き合っています。",
        image: placeholderImages.farm,
        alt: "レモンの木を手入れする矢野諭稔",
        href: "/lemon-farm",
      },
    ],
  },
  people: {
    eyebrow: "PEOPLE",
    heading: "一緒に、手を入れる人たち。",
    body: "古民家や畑の活動は、一人では続きません。教えてくれる島の人、週末に手を貸す仲間、訪れてくれる人と、できることを持ち寄っています。",
    items: [
      {
        name: "島の人と仲間",
        relation: "古民家再生・農作業",
        body: "作業を教え合い、食卓を囲みながら、無理のない範囲で島の家や畑に関わっています。",
        image: placeholderImages.repair,
        imageAlt: "古民家での活動を写した写真を囲む島の人と仲間の時間",
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
    body: "大きな決断をしなくても、自分に合った距離から、この島との関係を始めることができます。",
    image: placeholderImages.table,
    imageAlt: "レモンや季節の食材を囲む島の食卓",
    items: [
      {
        title: "レモンを味わう",
        body: "中島の畑から生まれたレモン果汁を、食卓で味わう。",
        href: "/product",
      },
      {
        title: "記録を読む",
        body: "古民家や畑で起きている、週末ごとの出来事を読む。",
        href: "/journal",
      },
      {
        title: "島を訪れる",
        body: "港や道を歩き、自分の目で中島の時間に触れる。",
        href: "/visit",
      },
      {
        title: "作業に参加する",
        body: "古民家や畑で、できる範囲の手を一緒に動かす。",
        href: "/visit",
      },
      {
        title: "活動を見守る",
        body: "記録を読み、誰かに話しながら、離れた場所から応援する。",
        href: "/journal",
      },
    ],
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
  },
} as const;
