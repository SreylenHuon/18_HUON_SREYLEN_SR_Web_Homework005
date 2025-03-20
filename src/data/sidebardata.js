import {
  Cat,
  MoveIcon,
  Music4,
  Video,
  Image as ImageSVG,
  Navigation,
  Dumbbell,
  Package2,
  Plane,
  SquarePen,
  HomeIcon,
  Book,
  BookText,
  Link,
} from "lucide-react";

export const sideBarData = [
  {
    id: 1,
    image: <HomeIcon color="#C81D25" />,
    dashboadName: "Home",
    path: "/",
  },
  {
    id: 2,
    image: <BookText color="#C81D25" />,
    dashboadName: "Book Categories",
    path: "/book",
  },
  {
    id: 3,
    image: <Cat color="#C81D25" />,
    dashboadName: "Old-School Cartoons",
    path: "/cartoon",
  },
  {
    id: 4,
    image: <Video color="#C81D25" />,
    dashboadName: "Movies & TV Shows",
  },
  {
    id: 5,
    image: <Music4 color="#C81D25" />,
    dashboadName: "Music",
  },
  {
    id: 6,
    image: <ImageSVG color="#C81D25" />,
    dashboadName: "Photography",
  },
  {
    id: 7,
    image: <Dumbbell color="#C81D25" />,
    dashboadName: "Sports & Fitness",
  },
  {
    id: 8,
    image: <Package2 color="#C81D25" />,
    dashboadName: "Technology & Gadgets",
  },
  {
    id: 9,
    image: <Plane color="#C81D25" />,
    dashboadName: "Travel & Exploration",
  },
  {
    id: 10,
    image: <SquarePen color="#C81D25" />,
    dashboadName: "Writing & Journaling",
  },
];
