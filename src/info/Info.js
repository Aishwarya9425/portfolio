import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";
import mock6 from "../img/mock6.png";
import mock7 from "../img/mock7.png";
import mock8 from "../img/mock8.png";
import mock9 from "../img/mock9.png";
import mock10 from "../img/mock10.png";
import { FaFileArrowDown } from "react-icons/fa6";

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Aishwarya",
  lastName: "Janakiraman",
  initials: "AJ",
  position: "a MERN/Full Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "📧",
      text: "aishwaryajhere25@gmail.com",
    },
    {
      emoji: "📲",
      text: "+91-8618405934",
    },
    {
      emoji: "🌎",
      text: "Namma Bengaluru",
    },
    {
      emoji: "📂",
      text: "Click here to Download Resume",
      link: "https://drive.google.com/file/d/1RLxzHybdgBLAzTQYBjMZp-IDnXfL_9L8/view",
    },
  ],
  socials: [
    {
      link: "https://github.com/Aishwarya9425",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/aishwarya-janakiraman-231228261",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: "Hello! I'm Aishwarya. I have 7+ years of IT hands-on experience in building end to end web applications using MERN Stack [React,Node] along with basics CI/CD(devops) tools in a agile/scrum model. ",
  skills: {
    proficientWith: [
      "Javascript",
      "React",
      "Redux/Redux ToolKit",
      "Tailwind",
      "Nodejs",
      "Express js",
      "Rest APIs",
      "MongoDB",
      "MySQL",
      "Git",
      "Github",
      "Bootstrap",
      "Html5",
      "Css3",
      "Sass",
      "Typescript",
      "Unit testing - Mocha, Jest, Chai, React Testing Library, SuperTest",
    ],
    exposedTo: ["Jenkins", "Ansible", "AWS/Azure", "Terraform"],
  },
  hobbies: [
    {
      label: "Swimming",
      emoji: "🏊‍♀️",
    },
    {
      label: "Dance",
      emoji: "💃",
    },
    {
      label: "addicted to movies",
      emoji: "🎥",
    },
  ],
  portfolio: [
    {
      title: "TV Show Advicer",
      live: "https://react-tv-show-adviser-lyart.vercel.app/",
      source: "https://github.com/Aishwarya9425/react-tv-show-adviser",
      image: mock1,
    },
    {
      title: "Blog MERN",
      live: "https://blogmern-0eoz.onrender.com/",
      source: "https://github.com/Aishwarya9425/Blog_MERN",
      image: mock2,
    },
    {
      title: "Game Hub",
      live: "https://game-hub-gray-chi.vercel.app/",
      source: "https://github.com/Aishwarya9425/game_hub",
      image: mock3,
    },
    {
      title: "Todo App",
      live: "https://todo-bay-tau.vercel.app/",
      source: "https://github.com/Aishwarya9425/TODO",
      image: mock4,
    },
    {
      title: "ProShop MERN",
      live: "https://proshopmern.onrender.com/",
      source: "https://github.com/Aishwarya9425/ProShop_MERN",
      image: mock6,
    },
    {
      title: "Travel list",
      live: "https://react-travel-todo-list.vercel.app/",
      source: "https://github.com/Aishwarya9425/React-Travel-List",
      image: mock5,
    },
    //
    {
      title: "Dice Game",
      live: "https://aishwarya9425.github.io/Dice_Game_JS/",
      source:
        "https://github.com/Aishwarya9425/Dice_Game_JS?tab=readme-ov-file",
      image: mock7,
    },
    {
      title: "Eat N Split",
      live: "https://react-eat-n-split-gamma.vercel.app/",
      source: "https://github.com/Aishwarya9425/React-Eat-N-Split",
      image: mock8,
    },
    {
      title: "React Quiz",
      live: "https://react-quiz-app-lyart.vercel.app/",
      source: "https://github.com/Aishwarya9425/React-quiz-app",
      image: mock9,
    },
    {
      title: "Bus Booking MERN",
      live: "https://busbookmern.onrender.com/",
      source: "https://github.com/Aishwarya9425/Bus_Booking_MERN",
      image: mock10,
    },
  ],
};
