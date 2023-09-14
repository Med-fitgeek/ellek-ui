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
    path: "/services",
    element: <Profile />,
  },
  {
    icon: InformationCircleIcon,
    name: "A propos de nous",
    path: "/apropos",
    element: <SignIn />,
  },
  {
    icon: QuestionMarkCircleIcon,
    name: "FAQ",
    path: "/faq",
    element: <SignUp />,
  },
  
];

export default routes;
