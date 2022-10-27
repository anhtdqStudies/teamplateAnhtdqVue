import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
} from "@mdi/js";

export default [
  {
    permissions: ["admin", "engineer"],
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    permissions: ["admin", "engineer"],
    to: "/tables",
    label: "Tables",
    icon: mdiTable,
  },
  {
    permissions: ["admin", "engineer"],
    to: "/forms",
    label: "Forms",
    icon: mdiSquareEditOutline,
  },
  {
    permissions: ["admin", "engineer"],
    to: "/ui",
    label: "UI",
    icon: mdiTelevisionGuide,
  },
  {
    permissions: ["admin", "engineer"],
    to: "/responsive",
    label: "Responsive",
    icon: mdiResponsive,
  },
  {
    permissions: ["admin", "engineer"],
    to: "/",
    label: "Styles",
    icon: mdiPalette,
  },
  {
    permissions: ["admin", "engineer"],
    to: "/profile",
    label: "Profile",
    icon: mdiAccountCircle,
  },
  {
    permissions: ["admin", "engineer"],
    to: "/login",
    label: "Login",
    icon: mdiLock,
  },
  {
    permissions: ["admin", "engineer"],
    to: "/error",
    label: "Error",
    icon: mdiAlertCircle,
  },
  {
    permissions: ["admin", "engineer"],
    label: "Dropdown",
    icon: mdiViewList,
    menu: [
      {
        permissions: ["admin", "engineer"],
        label: "Item One",
      },
      {
        permissions: ["admin", "engineer"],
        label: "Item Two",
      },
    ],
  },
];
