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
    path: /^\/dashboard\/events\.*/,
    href: "/dashboard/event",
  },
  {
    name: "Acara",
    path: /^\/dashboard\/event\.*/,
    href: "/dashboard/event",
  },
];
