export type NavigationItem = {
  label: string;
  href: string;
  external?: boolean;
  accent?: boolean;
};

export const primaryNavigation: NavigationItem[] = [
  { label: "矢野について", href: "/about/" },
  { label: "島でしていること", href: "/#activities" },
  { label: "古民家をのぞく", href: "/kominka/" },
  { label: "レモン畑をのぞく", href: "/lemon-farm/" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yano_include/",
    external: true,
  },
  { label: "商品を見る", href: "/product/", accent: true },
];

export const footerNavigation: NavigationItem[] = primaryNavigation;
