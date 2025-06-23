import {
  DashboardOutlined,
  UserOutlined,
  ProductOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

export const MENU_DATA = [
  {
    title: "Dashboard",
    path: "/",
    icon: <DashboardOutlined />,
    roles: [],
  },
  {
    title: "Usuarios",
    path: "/users",
    icon: <UserOutlined />,
    roles: [],
  },
  {
    title: "Productos",
    path: "/products",
    icon: <ProductOutlined />,
    roles: [],
  },
  {
    title: "Ordenes",
    path: "/orders",
    icon: <FileTextOutlined />,
    roles: [],
  },
];
