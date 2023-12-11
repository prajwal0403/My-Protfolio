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
      "A dynamic MERN stack developer with over 16 months of professional experience. Graduated from Masai School with a strong foundation in mathematics, programming logic, data structures, and algorithms. Proficient in both Frontend and Backend technologies, with a proven track record of applying agile methodology to deliver robust web applications. An inquisitive problem solver with a passion for traveling, trekking, and football. Outside work, enjoy going to gym, playing video/outdoor games, networking and meeting new people. In downtime, find playing FIFA, feel free to try your luck against me."
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
        'The Expense Tracker app is designed to assist both individuals and businesses in monitoring their expenditures. With features that enable users to input and categorize expenses, set budgets, and generate spending reports, the app facilitates better financial management and promotes increased savings. This project was developed using a range of technologies including MongoDB, Express, NPM, React, Redux, Bootstrap, Ant Design, JavaScript, CSS, HTML, and Node.',
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
        'This is a fully-functional ecommerce app that includes features such as user authentication, user profiles, product pages, shopping cart functionality, payment methods, order history, and sorting options. The design of the app is inspired by the Amazon app, and it was completed as a solo project in 10 days. The tech stack used for this project includes MongoDB, Express, npm, React, Redux, Bootstrap, JavaScript, CSS, HTML, and Node.',
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
        "We cloned India's largest online food and grocery store, BigBasket, and added additional functionalities using backend technologies such as HTML, JavaScript, CSS, MongoDB, Node.js, and npm. We deployed the app on Heroku. This was a collaborative project that was completed in 5 days by a team of 4, including myself and my teammates Iqbal, Ashutosh, and Bhaskar. ",
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
        'In this project, we aimed to create a visually identical clone of the Jio-Mart website using technologies such as JavaScript, CSS, and HTML. Through our collective efforts and expertise, we successfully replicated the front-end design and features of the original website.',
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
