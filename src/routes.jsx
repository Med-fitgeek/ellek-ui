import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "accueil",
    path: "/home",
    element: <Home />,
  },
  {
    icon: BarsArrowUpIcon,
    name: " Nos services",
    path: "#services",
    element: <Home />,
  },
  {
    icon: InformationCircleIcon,
    name: "A propos de nous",
    path: "#aPropos",
    element: <Home />,
  },
  {
    icon: QuestionMarkCircleIcon,
    name: "FAQ",
    path: "#faq",
    element: <Home />,
  },
  
];

export default routes;
