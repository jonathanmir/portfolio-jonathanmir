import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import {
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiPython,
  SiExpress,
} from "react-icons/si";
import { DiDjango } from "react-icons/di";
export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  { title: "Tailwind CSS", img: SiTailwindcss },
  {
    title: "React",
    img: imgReact,
  },
  { title: "TypeScript", img: SiTypescript },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Express", img: SiExpress },
  { title: "Django", img: DiDjango },
  { title: "Python", img: SiPython },
];
