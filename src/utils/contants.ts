import icon from "./icon";
import { Routes, RoutesAdmin } from "./path";
import { Menu, TitemSidebar, itemTable } from "./type";

export const itemSidebar: TitemSidebar[] = [
  {
    id: 1,
    icon: icon.faGaugeHigh,
    path: `/${RoutesAdmin.ADMIN}/${RoutesAdmin.DASHBOARD}`,
    title: "Dashboard",
    type: "single",
  },
  {
    id: 2,
    icon: icon.faPeopleGroup,
    path: `/${RoutesAdmin.ADMIN}/${RoutesAdmin.USER}`,
    title: "User",
    type: "single",
  },
  {
    id: 3,
    icon: icon.faBookTanakh,
    path: `/${RoutesAdmin.ADMIN}/${RoutesAdmin.COURSE}`,
    title: "Course",
    type: "parent",
    lastIcon: icon.faPlus,
    options: [
      {
        id: 4,
        icon: icon.faListCheck,
        path: `/${RoutesAdmin.ADMIN}/${RoutesAdmin.COURSE}/${RoutesAdmin.MANAGE_COURSE}`,
        title: "Manage course",
        type: "single",
      },
      {
        id: 5,
        icon: icon.faCirclePlus,
        path: `/${RoutesAdmin.ADMIN}/${RoutesAdmin.COURSE}/${RoutesAdmin.CREATE_COURSE}`,
        title: "Create course",
        type: "single",
      },
    ],
  },
];

export const elSidebarHomePage: Menu[] = [
  {
    id: 1,
    icon: icon.faPlus,
    style:
      "bg-blue-600 text-white py-4 px-5 rounded-full text-mainSize cursor-pointer",
    type: "parent",
    child: [
      {
        id: 2,
        link: Routes.NEW_POST,
        icon: icon.faPen,
        type: "single",
        text: "Viết blog",
      },
    ],
  },
  {
    id: 3,
    icon: icon.faHouse,
    text: "Trang chủ",
    type: "single",
    link: Routes.HOME_PAGE,
  },
  {
    id: 4,
    icon: icon.faMap,
    type: "single",
    text: "Lộ trình",
    link: Routes.ROAD_MAP,
  },
  {
    id: 5,
    icon: icon.faFileSignature,
    type: "single",
    text: "Bài viết",
    link: Routes.BLOG,
  },
];

export const FieldsTableAdmin: itemTable[] = [
  { id: 1, title: "#" },
  { id: 2, title: "Email" },
  { id: 3, title: "FullName" },
  { id: 4, title: "DateOfBirth" },
  { id: 5, title: "PhoneNumber" },
  { id: 6, title: "Sex" },
  { id: 7, title: "CreatedAt" },
  { id: 8, title: "Blocked" },
  { id: 9, title: "Role" },
  { id: 10, title: "Action", style: "text-center" },
];

export const FieldsTableCourse: itemTable[] = [
  { id: 1, title: "#", style: "text-start" },
  { id: 2, title: "Title" },
  { id: 3, title: "View" },
  { id: 4, title: "Thumbnail" },
  { id: 5, title: "CreatedAt" },
  { id: 6, title: "Action" },
];
