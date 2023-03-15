import profile from './profile.jpg';
import {
  faAppStore,
  faGithub,
  faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';
import {
  SiJavascript,
  SiMongodb,
  SiHtml5,
  SiReact,
  SiRedux,
  SiGithub,
  SiNpm,
  SiCss3,
  SiPython,
  SiBootstrap,
} from 'react-icons/si';
import { IoLogoNodejs } from 'react-icons/io5';
import { IoMdSend, IoMdLink } from 'react-icons/io';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import homebb from './homebb.gif';
import prodbb from './prodbb.gif';
import et1 from './et1.gif';
import et2 from './et2.gif';
import ama1 from './ama1.gif';
import ama2 from './ama2.gif';
import homejio from './homejio.gif';
import prodjio from './prodjio.gif';

export const navigation = {
  name: 'Prajwal',
  links: [
    {
      title: 'About',
      link: '#about',
    },
    {
      title: 'Skills',
      link: '#skills',
    },
    {
      title: 'Projects',
      link: '#projects',
    },
    {
      title: 'Contact',
      link: '#contact',
    },
  ],
};
export const intro = {
  title: "Hey, I'm Prajwal Raut",
  description: 'Full Stack Web Developer.',
  image: profile.src,
  buttons: [
    {
      title: 'Contact Me',
      link: '#contact',
      isPrimary: true,
    },
    {
      title: 'Resume',
      link: 'https://drive.google.com/drive/folders/101cYxH762sHspvSLLEAoYhaaWCQmFVNf?usp=sharing',
      isPrimary: false,
    },
  ],
};

export const about = {
  title: 'Who I am',
  description: [
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
      "I'm a Full stack web developer with 6 months of working experience at Inai Technologies. (Chennai TamilNadu) which is a fintech startup providing checkout experience/stack to merchants globally and 8 months of learning with real-time projects while I was in Masai School. I'm An Inquisitive, energetic MERN stack developer skilled in problem-solving with a strong foundation in math, programming logic, data structures and algorithms with the ability to work with various Frontend as well as Backend technologies. and have an experience in working with agile methodology.",
    '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' +
      'When I’m not programming, I focus on my hobbies which are going to the Gym, playing video Games/Outdoor Games, meeting people and growing my network. And one more thing feel free to try your luck against me in FIFA.',
  ],
};
const iconStyle = {
  width: '75px',
  height: '75px',
  margin: 'auto',
};
export const work = {
  title: 'Tech Stack',
  cards: [
    {
      title: 'JS',
      icons: [
        {
          icon: <SiJavascript style={iconStyle} />,
          link: '',
        },
      ],
    },
    {
      title: 'HTML',
      icons: [
        {
          icon: <SiHtml5 style={iconStyle} />,
          link: '',
        },
      ],
    },
    {
      title: 'CSS',
      icons: [
        {
          icon: <SiCss3 style={iconStyle} />,
          link: '',
        },
      ],
    },
    {
      title: 'Git',
      icons: [
        {
          icon: <SiGithub style={iconStyle} />,
          link: '',
        },
      ],
    },
    {
      title: 'Mongodb',
      icons: [
        {
          icon: <SiMongodb style={iconStyle} />,
          link: '',
        },
      ],
    },
    {
      title: 'Npm',
      icons: [
        {
          icon: <SiNpm style={iconStyle} />,
          link: '',
        },
      ],
    },
    {
      title: 'Redux',
      icons: [
        {
          icon: <SiRedux style={iconStyle} />,
          link: '',
        },
      ],
    },
    {
      title: 'React',
      icons: [
        {
          icon: <SiReact style={iconStyle} />,
          link: '',
        },
      ],
    },
    {
      title: 'Node',
      icons: [
        {
          icon: <IoLogoNodejs style={iconStyle} />,
          link: '',
        },
      ],
    },
    {
      title: 'Python',
      icons: [
        {
          icon: <SiPython style={iconStyle} />,
          link: '',
        },
      ],
    },
    {
      title: 'Bootstrap',
      icons: [
        {
          icon: <SiBootstrap style={iconStyle} />,
          link: '',
        },
      ],
    },
  ],
};
const iconStyle2 = {
  width: '50px',
  height: '50px',
  marginRight: '10px',
};

export const projects = {
  title: 'Projects',
  cards: [
    {
      title: 'Expense Tracker MERN',
      description:
        'An expense tracker app is a tool that helps individuals and businesses track their expenses. The app typically allows users to enter and categorize expenses, set budgets, and view reports on their spending habits.  The goal of an expense tracker app is to help users better understand and manage their spending, ultimately leading to greater financial control and savings.tech stacks were Mongodb | Express |npm | React | Redux | Bootstrap | antd | Javascript | Css | Html | Node',
      image: et1.src,
      image2: et2.src,
      icons: [
        {
          icon: <FaExternalLinkSquareAlt style={iconStyle2} />,
          link: 'https://aggressive-mite-cowboy-hat.cyclic.app/',
        },
        {
          icon: <SiGithub style={iconStyle2} />,
          link: 'https://github.com/prajwal0403/Expense-Tracker-MERN',
        },
      ],
    },
    {
      title: 'MERN Ecommerce',
      description:
        'It is an ecommerce app with  all the functionalities including sign up, sign in, user profile, product page, cart functionality, payment method ,order history, sorting ,sidebar and many more the design is ispired from amazon app. To complete this project it took me 10 days , as i worked alone on this one it is my solo project. tech stacks were Mongodb | Express |npm | React | Redux | Bootstrap | Javascript | Css | Html | Node',
      image: ama1.src,
      image2: ama2.src,
      icons: [
        {
          icon: <FaExternalLinkSquareAlt style={iconStyle2} />,
          link: 'https://test-n5u4.onrender.com/',
        },
        {
          icon: <SiGithub style={iconStyle2} />,
          link: 'https://github.com/prajwal0403/MERN-app',
        },
      ],
    },
    {
      title: 'BigBasket Clone',
      description:
        "BigBasket is India’s Largest online Food and groceries store. and We've cloned this app and added some functionalities using backend. tech stack that we've used are HTML | JavaScript | CSS | Mongodb | NodeJs | Npm etc. for deployment we used Heroku. It was a collaborative project built by a team of 4 executed in 5 days. my teammates were  Iqbal, Ashutosh, Bhaskar ",
      image: homebb.src,
      image2: prodbb.src,
      icons: [
        {
          icon: <FaExternalLinkSquareAlt style={iconStyle2} />,
          link: 'https://big-basket-five.vercel.app/',
        },
        {
          icon: <SiGithub style={iconStyle2} />,
          link: 'https://github.com/prajwal0403/BigBasket',
        },
      ],
    },
    {
      title: 'JioMart Clone',
      description:
        'In this project we have tried to make a look alike clone of Jio-Mart Website. With our efforts and the technology stack like JS, CSS and HTML, we were able to clone the front end with similar looks and features.',
      image: homejio.src,
      image2: prodjio.src,
      icons: [
        {
          icon: <FaExternalLinkSquareAlt style={iconStyle2} />,
          link: 'https://jio-mart-clone-eight.vercel.app/',
        },
        {
          icon: <SiGithub style={iconStyle2} />,
          link: 'https://github.com/prajwal0403/JioMart-Clone',
        },
      ],
    },
  ],
};

export const contact = {
  title: 'Get in touch',
  description:
    'Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at rautprajwal546@gmail.com.',
  location: 'Location : Buldhana ,Maharashtra',
  call: 'Contact me :    +91 -7030120546 ',
  buttons: [
    {
      title: 'Email Me',
      link: 'mailto:rautprajwal546@gmail.com',
      isPrimary: true,
    },
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/prajwal-raut-602a99171/',
      isPrimary: true,
    },
    {
      title: 'GitHub',
      link: 'https://github.com/prajwal0403',
      isPrimary: true,
    },
    {
      title: 'Medium',
      link: 'https://medium.com/@rautprajwal546',
      isPrimary: true,
    },
    {
      title: 'HackerRank',
      link: 'https://www.hackerrank.com/prajwal_fw14_420',
      isPrimary: true,
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/Prajwal0403',
      isPrimary: true,
    },
  ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: 'Prajwal Raut | Full Stack Web Developer',
  image: './profile.jpg',
};

export const links = {
  image: '',
  title: 'prajwal',
  description: 'Full stack Developer',
  cards: [],
};
