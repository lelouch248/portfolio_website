import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  threejs,
  flutter,
  python,
  dart,
  tensorflow,
  hari,
  pallavi,
  rinex,
  drdo,
  animelist,
  chatapp,
  discordbot,
  todolist,
  poodals,
  handwriting,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Science and Machine Learning",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "dart",
    icon: dart,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
];

const experiences = [
  {
    title: "Data Science Intern",
    company_name: "Rinex Technologies",
    icon: rinex,
    iconBg: "#E6DEDD",
    date: "January 2022 - March 2022",
    points: [
      "Developed proficiency in Python and obtained hands-on experience with datasets Utilized data",
      "visualization tools, such as Matplotlib and Seaborn Learnt model creation and deployment",
      "Created data visualization graphics, translating complex data sets into comprehensivevisual representations",
      "Participated in workshops to advance skills",
      "Applied appropriate data science techniques to solve business problems",
    ],
  },
  {
    title:
      "Development and Embedded Deployment of DL models ForBionic Hand Action Recognition [DRDO Sponsored]",
    company_name: "DRDO",
    icon: drdo,
    iconBg: "#E6DEDD",
    date: "April 2023 -  Present",
    points: [
      "Creating and refining deep learning models for precise recognition of bionic hand actions, enhancing amputees' interaction with prosthetic limbs.",
      "Integrating real-time processing capabilities into bionic hand control systems, enabling instantaneous execution of recognized actions.",
      "Optimizing deep learning model performance for embedded deployment, ensuring efficient and seamless operation within bionic hand devices.",
      "Collaborating closely with DRDO experts and engineers to align deep learning advancements with the specific needs of bionic hand users, resulting in a symbiotic human-machine interface.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Pallavi Kumar",
    designation: "professor",
    company: "Ramaiah University of Applied Sciences",
    image: pallavi,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Hari Krishna",
    designation: "Professor",
    company: "Ramaiah University of Applied Sciences",
    image: hari,
  },  
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "Ramaiah University of Applied Sciences",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Poodals Pet service app",
    description:
      "dynamic web application built on the MERN (MongoDB, Express.js, React, Node.js) stack. This innovative platform streamlines pet care",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: poodals,
    source_code_link: "https://github.com/lelouch248/poodals",
  },
  {
    name: "Anime List Tracker",
    description:
      "A unique way to keep track of anime you've watched with smart recommendation based on the anime you like.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: animelist,
    source_code_link: "https://github.com/lelouch248/anime_list",
  },
  {
    name: "Realtime Chat App",
    description:
      "Created a chat applicaiton using flutter and firebase with authentication methods and realtime database",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "firebase storage",
        color: "pink-text-gradient",
      },
    ],
    image: chatapp,
    source_code_link: "https://github.com/lelouch248/chat_app_flutter",
  },
  {
    name: "Discord Bot",
    description:
      "created a discord server to enhance the experience of the members of the server by adding various features to the server",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "REST Api",
        color: "green-text-gradient",
      },
    ],
    image: discordbot,
    source_code_link: "https://github.com/lelouch248/Discord_movie_bot",
  },
  {
    name: "Todo List React",
    description:
      "created a discord server to enhance the experience of the members of the server by adding various features to the server",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://github.com/lelouch248/Todolist-react",
  },
  {
    name: "Handwriting analysis",
    description:
      "created a machine learning model that can predict handwriting and predict the number writted with the help of gui",
    tags: [
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "Tkinter",
        color: "green-text-gradient",
      },
      {
        name: "keras",
        color: "pink-text-gradient",
      }
    ],
    image: handwriting,
    source_code_link: "https://github.com/lelouch248/MNIST-Dataset-with-GUI",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
