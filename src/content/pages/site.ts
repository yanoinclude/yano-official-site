export const siteConfig = {
  name: "週末移住レモン",
  title: "週末移住レモン",
  mainCopy: "この島に、帰ってこられる風景を。",
  activityCopy: "島の続きを、手入れする。",
  description:
    "愛媛県松山市・中島の風景、古民家、レモン農園、そこに関わる人々の物語を伝える週末移住レモンのサイトです。",
  url: import.meta.env.PUBLIC_SITE_URL || "https://example.com",
  author: "矢野諭稔",
  social: {
    instagram: "https://www.instagram.com/",
    note: "https://note.com/",
  },
  contact: {
    email: "hello@example.com",
  },
} as const;

export const placeholderImages = {
  hero: heroUserLemonGrove.src,
  island: sceneryUserNakajima.src,
  concept: conceptUserForestLemon.src,
  about: aboutYanoLemonGrove.src,
  house: activityKominkaUser.src,
  repair: activityIslandPeopleUser.src,
  farm: activityLemonTreeUser.src,
  farmer: activityLemonFarm.src,
  bottle: productLemonBottle.src,
  table: experienceIslandLife.src,
  closing: closingFerrywave.src,
  yano: aboutYanoLemonGrove.src,
} as const;
import heroUserLemonGrove from "@/assets/images/hero-user-lemon-grove.jpg";
import conceptUserForestLemon from "@/assets/images/concept-user-forest-lemon.png";
import sceneryUserNakajima from "@/assets/images/scenery-user-nakajima.png";
import aboutYanoLemonGrove from "@/assets/images/about-yano-lemon-grove.jpg";
import activityIslandPeopleUser from "@/assets/images/activities/activity-island-people-user.jpg";
import activityKominkaUser from "@/assets/images/activities/activity-kominka-user.jpeg";
import activityLemonTreeUser from "@/assets/images/activities/activity-lemon-tree-user.jpeg";
import activityLemonFarm from "@/assets/images/generated/activity-lemon-farm.jpg";
import closingFerrywave from "@/assets/images/generated/closing-ferrywave.jpg";
import experienceIslandLife from "@/assets/images/generated/experience-island-life.jpg";
import productLemonBottle from "@/assets/images/generated/product-lemon-bottle.jpg";
