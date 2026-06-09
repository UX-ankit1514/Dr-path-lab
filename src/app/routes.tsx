import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Screen1 from "../imports/IPhone13145";
import Screen2 from "../imports/IPhone13146";
import SearchScreen from "../imports/SearchScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Screen1 },
      { path: "test-packages", Component: Screen2 },
      { path: "search", Component: SearchScreen },
    ],
  },
]);
