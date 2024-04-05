import { facebook, instagram, youtube,tiktok, xtwitter, create, sell, coown, invest, create_red, sell_red, coown_red, invest_red, create_footer, sell_footer, coown_footer, invest_footer, r_logo_black } from "../assets/icons";

export const navigation = [
  {
    id: "0",
    title: "Create",
    iconUrl: create,
    iconUrlRed: create_red,
    url: "#create",
  },
  {
    id: "1",
    title: "Sell",
    iconUrl: sell,
    iconUrlRed: sell_red,
    url: "#sell",
  },
  {
    id: "2",
    title: "Co-own",
    iconUrl: coown,
    iconUrlRed: coown_red,
    url: "#co-own",
  },
  {
    id: "3",
    title: "Invest",
    iconUrl: invest,
    iconUrlRed: invest_red,
    url: "#invest",
  },
  {
    id: "4",
    title: "Sign Up",
    url: "#signup",
    iconUrl: r_logo_black,
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Login",
    url: "#login",
    iconUrl: r_logo_black,
    onlyMobile: true,
  },
];

export const footer_mkplace = [
  {
    id: "0",
    title: "Create",
    iconUrl: create_footer,
    url: "#create",
  },
  {
    id: "1",
    title: "Sell",
    iconUrl: sell_footer,
    url: "#sell",
  },
  {
    id: "2",
    title: "Co-own",
    iconUrl: coown_footer,
    url: "#co-own",
  },
  {
    id: "3",
    title: "Invest",
    iconUrl: invest_footer,
    url: "#invest",
  },
];

export const socials = [
  {
    id: "0",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "2",
    title: "YoutTube",
    iconUrl: youtube,
    url: "#",
  },
  {
    id: "3",
    title: "TikTok",
    iconUrl: tiktok,
    url: "#tiktok",
  },
  {
    id: "4",
    title: "X",
    iconUrl: xtwitter,
    url: "#xtwitter",
  },
];