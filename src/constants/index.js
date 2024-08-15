import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  // typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  meta,
  // starbucks,
  // tesla,
  // shopify,
  // carrent,
  jobit,
  cine,
  // tripguide,
  // threejs,
  next,
  ecommerce,
  nextjsSite3dImage,
  weatherImage
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Javascript",
    icon: web,
  },
  {
    title: "React",
    icon: mobile,
  },
  {
    title: "Nextjs",
    icon: backend,
  },
  {
    title: "Nodejs",
    icon: creator,
  },
  {
    title: "Python",
    icon: mobile,
  },
  {
    title: "Dsa",
    icon: backend,
  },
  {
    title: "Database",
    icon: creator,
  },
];

const technologies = [
  {
    name: "react JS",
    icon: reactjs,
  },
  {
    name: "nextjs",
    icon: next,
  },
  {
    name: "javaScript",
    icon: javascript,
  },

  {
    name: "github",
    icon: nodejs,
  },

  {
    name: "mongodb",
    icon: mongodb,
  },

  {
    name: "java",
    icon: git,
  },
  {
    name: "hTML 5",
    icon: html,
  },
  {
    name: "cSS 3",
    icon: css,
  },
  {
    name: "tailwind CSS",
    icon: tailwind,
  },


  {
    name: "redux Toolkit",
    icon: redux,
  },


  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },






];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Continuous Since January 2020",
    points: [
      "Developed robust and scalable web applications using the MERN stack",
      "Implemented efficient backend solutions, ensuring seamless data flow and optimal performance.",
      "Leveraged React.js to create dynamic and interactive user interfaces.",
      "Utilized MongoDB for effective data storage and management.",
    ],
  },
  {
    title: "Problem Solving",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Continuous Since January 2020",
    points: [
      "Successfully identified and resolved intricate bugs within the codebase.",
      "showcasing a meticulous approach to troubleshooting and debugging.",
      "demonstrating a knack for thinking outside the box.",
      "Collaborated with the team to conceptualize and implement innovative functionalities.",
    ],
  },
  {
    title: "Database Management",
    company_name: "",
    icon: backend,
    iconBg: "#383E56",
    date: "Continuous Since August 2020",
    points: [
      "Spearheaded the design and optimization of relational databases.",
      "ensuring efficient data storage, retrieval, and seamless integration with application logic.",
      "Integrated third-party APIs and services.",
      "Implemented robust backup and recovery strategies, safeguarding critical data against unforeseen events and minimizing downtime in case of system failures.",
    ],
  },
  {
    title: "Collaboration and Teamwork",
    company_name: "",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Always",
    points: [
      // "Collaborated seamlessly with cross-functional teams.",
      // "Contributed to the iterative development process, promoting flexibility and responsiveness to changing project requirements.",
      // "Actively participated in knowledge-sharing sessions.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I highly recommend Nasir for any future endeavors. His dedication, hard work, and passion for his work are truly inspiring. Nasir is a rare talent, and I am confident that he will continue to make great strides in his career and achieve even greater success in the future.",
    name: "Robin",
    designation: "HR Business Partner",
    company: "Experian",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    testimonial:
      "Nasir has very visible passion for his idea and it was great to witness his clarity of thoughts. He is also a good team player, ready to mould his skills if that helps him improve. I wish him the very best",
    name: "Khairul Kabir",
    designation: "HR",
    company: "Simply Body Talk",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
  {
    testimonial:
      "This guy has what it takes for the first unicorn. Just wait and watch.",
    name: "Aman Ullah",
    designation: "CTO",
    company: "Dinnerfy",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  },
];


// projects
const projects = [



  {
    name: "LWS Cart",
    description:
      "At LWS-Cart, we bring you a diverse and trendy collection for all your fashion needs. Whether you're shopping for yourself or your loved ones, we have something special for everyone. ",
    tags: [
      {
        name: "e-commerce application",
        color: "blue-text-gradient",
      },

      {
        name: "Nextjs application",
        color: "green-text-gradient",
      },
      {
        name: "web dev",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://shadhin-shop.vercel.app/en",
  },

  {
    name: "3D Portfolio",
    description:
      "Nasir Mollah 3D Portfolio website is a Awesome website created by Three js and Nextjs and it's designed by Tailwind css . I using some Awesome 3d Models in this website which makes it glourious and excellent",
    tags: [
      {
        name: "portfolio",
        color: "blue-text-gradient",
      },
      {
        name: "3d Apps",
        color: "green-text-gradient",
      },
      {
        name: "3d Models",
        color: "pink-text-gradient",
      },
    ],
    image:   nextjsSite3dImage,
    source_code_link: "https://nasirmollah2.vercel.app/",
  },

  {
    name: "Cine - Rental",
    description:
      "Discover the ultimate movie-watching experience with Cinerental, your go-to app for renting the latest blockbusters and timeless classics. Whether you're in the mood for action-packed adventures,action-packed adventures,action-packed adventures",
    tags: [
      {
        name: "Movie",
        color: "blue-text-gradient",
      },
      {
        name: "Cinema",
        color: "green-text-gradient",
      },
      {
        name: "Show",
        color: "pink-text-gradient",
      },
      {
        name: "MOve Lover",
        color: "orange-text-gradient",
      },
    ],
    image: cine,
    source_code_link: "https://cine-rental-app.netlify.app/",
  },
  {
    name: "Weather-Dashboard",
    description:
      "Stay ahead of the weather with this intuitive and user-friendly dashboard. The app provides real-time updates and accurate forecasts for any location. Whether you’re planning your day or a weekend trip.",
    tags: [
      {
        name: "weather",
        color: "blue-text-gradient",
      },
      {
        name: "climate",
        color: "green-text-gradient",
      },
      {
        name: "Show",
        color: "pink-text-gradient",
      },
      {
        name: "rain",
        color: "orange-text-gradient",
      },
    ],
    image: weatherImage,
    source_code_link: "https://weather152.vercel.app/",
  },






];

export { services, technologies, experiences, testimonials, projects };