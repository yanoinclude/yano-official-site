export type NavigationItem = {
  label: string;
  href: string;
};

export const primaryNavigation: NavigationItem[] = [
  { label: "ヤノについて", href: "/about" },
  { label: "できること", href: "/#services" },
  { label: "手入れしてきたもの", href: "/#works" },
  { label: "記録", href: "/columns" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "商品を見る", href: "/product" },
];

export const footerNavigation: NavigationItem[] = [
  { label: "ヤノについて", href: "/about" },
  { label: "古民家", href: "/kominka" },
  { label: "レモン農園", href: "/lemon-farm" },
  { label: "週末移住レモン果汁", href: "/product" },
  { label: "島との関わり方", href: "/visit" },
  { label: "記録", href: "/columns" },
  { label: "お問い合わせ", href: "/contact" },
  { label: "Instagram", href: "https://www.instagram.com/yano_include/" },
  { label: "note", href: "https://note.com/yano_pleasure" },
  { label: "プライバシーポリシー", href: "/privacy" },
];
