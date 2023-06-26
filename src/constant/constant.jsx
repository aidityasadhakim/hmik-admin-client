export const MENU_LIST = [
  {
    name: "Home",
    path: new RegExp(/^\/dashboard$/),
    href: "/dashboard",
  },
  {
    name: "Lomba",
    path: new RegExp(/^\/dashboard\/lomba.*/),
    href: "/dashboard/lomba",
  },
  {
    name: "Seminar",
    path: /^\/dashboard\/seminar\/.*/,
    href: "/dashboard/seminar",
  },
  {
    name: "Acara",
    path: /^\/dashboard\/acara\/.*/,
    href: "/dashboard/acara",
  },
];
