export type NavigationItem = {
  label: string;
  href: string;
};

export const primaryNavigation: NavigationItem[] = [
  { label: "私たちについて", href: "/about" },
  { label: "中島の風景", href: "/landscape" },
  { label: "古民家", href: "/kominka" },
  { label: "レモン農園", href: "/lemon-farm" },
  { label: "週末移住レモン果汁", href: "/product" },
  { label: "島との関わり方", href: "/visit" },
  { label: "記録", href: "/journal" },
  { label: "お問い合わせ", href: "/contact" },
];

export const footerNavigation: NavigationItem[] = [
  ...primaryNavigation,
  { label: "Instagram", href: "https://www.instagram.com/yano_include/" },
  { label: "note", href: "https://note.com/yano_pleasure" },
  { label: "プライバシーポリシー", href: "/privacy" },
];
