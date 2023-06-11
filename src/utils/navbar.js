import Generic from "../components/Generic";
import Components from "../components/Components";
import Page from "../components/404page";
import Soon from "../components/Soonpage";

export const navbar = [
  { id: 1, title: "Docs", path: "/docs", element: <Soon /> },
  { id: 2, title: "Components", path: "/components", element: <Components /> },
  { id: 3, title: "Resources", path: "/resources", element: <Soon /> },
];
