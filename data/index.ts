export const navItems = [
  { name: "Home", link: "#home", },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration and focus on ensuring client satisfaction.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm globally minded and collaboration focused",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly strive to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for user satisfaction.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a full stack React recipe app",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to get in contact?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Blackjack",
    des: "Play Blackjack online with real-time card shuffling, interactive gameplay, and sleek design. Try your luck now!",
    img: "/playerwins.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg", "/api.svg"],
    websiteURL: "https://spinksblackjack.netlify.app/",
    githubURL: "https://github.com/k-spinks/blackjack"
  },
  {
    id: 2,
    title: "Board Game Quiz",
    des: "Test your board game knowledge with fun quizzes on classics and new hits. Challenge yourself and level up!.",
    img: "/boardgamequiz.png",
    iconLists: ["/html.svg", "/css.svg", "/ts.svg", "/api.svg"],
    websiteURL: "https://spinksboardgamequiz.netlify.app/",
    githubURL: "https://github.com/k-spinks/boardgame-quiz"
  },
  {
    id: 3,
    title: "The Artisan's Slice",
    des: "Experience fresh, flavorful dishes in a cozy atmosphere. Enjoy unique cuisine made with the finest ingredients!",
    img: "/landingpage.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    websiteURL: "https://theartisansslice.netlify.app/",
    githubURL: "https://github.com/k-spinks/artisans-slice"
  },
  {
    id: 4,
    title: "Dice Palace",
    des: "Discover thrilling board games with immersive gameplay, strategic challenges, and endless fun for all ages!",
    img: "/dicepalacesplash.png",
    iconLists: ["/html.svg", "/bs.svg", "/css.svg", "/js.svg", "/re.svg", "/mdb.svg"],
    websiteURL: "",
    githubURL: "https://github.com/k-spinks/dice-palace"
  },
];

export const testimonials = [
  {
    quote:
      "Working with Kevin has been such a great experience. He has a real passion for turning mundane backend data into some really cool looking projects. He is always willing to lend a helping hand and has no issues going the extra mile. I can't recommend him enough.",
    name: "Emily R.",
    title: "Classmate",
  },
  {
    quote:
      "Kevin is such a pleasure to have on a team. His knowledge of HTML, CSS and JS was such a key aspect in ensuring the success of the team and final product. He really makes the effort to understand what the user wants and is always thinking ahead when it came to design. On top of that, he is such an awesome teammate who lifts everyone around him! ",
    name: "Milo B.",
    title: "Software Engineer (100Devs)",
  },
  {
    quote:
      "Kevin always exceeded my expectations in all aspects of his work. He was always so punctual and honest about his progress with his work but also was not afraid to offer suggestions and handled feedback graciously. He is an amazing team-player and communicator who always kept a positive attitude. I would love to have him on my team again.",
    name: "Lauren P.",
    title: "Project Manager (100Devs)",
  },
  {
    quote:
      "Kevin is by far one of my favorite people to have worked with. We collaborated on a few class projects together and his ability to lead and give a helping hand was such a refreshing experience. He does not just focus on himself but made sure that the team as a whole was working well. His passion for collaborating and helping others was such an amazing thing to experience.",
    name: "Jasper S.",
    title: "Classmate",
  },
  {
    quote:
      "Working with Kevin was an absolute pleasure. His ability to adapt to any situation he was thrown into was very inspiring. He really took the time to understand my design vision and ensured that every aspect was to my personal taste, while also giving and taking feedback incredibly well. His honesty and attention to detail truly set him apart from others I have collaborated with.",
    name: "William M",
    title: "Classmate",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Lead Frontend Developer (Capstone)",
    desc: "Led the frontend development of a web-based recipe application using React.js, enhancing interactivity, user experience and efficiency.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "100Devs",
    desc: "Implemented agile methodologies for project management, fostering a collaborative and adaptive development environment.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance Web Dev",
    desc: "Led the development of a website for a client, from initial concept and mocks to deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Projects",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: 'https://github.com/k-spinks'
  },
  {
    id: 2,
    img: "/twit.svg",
    link: 'https://x.com/KSpinks07'
  },
  {
    id: 3,
    img: "/link.svg",
    link: 'https://www.linkedin.com/in/kevin-spinks-38b65b160/'
  },
];