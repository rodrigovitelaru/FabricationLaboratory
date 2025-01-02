export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 lg:row-span-2 justify-end", // Dimensiuni fixe
    imgClassName: "w-full h-full  opacity-70",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Time means money, and money means a lot of work",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-1 lg:row-span-1", // Dimensiuni fixe
    imgClassName: "",
    titleClassName: "",
    img: "/c1.png",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className:
      "lg:col-span-1 md:col-span-3 md:row-span-2 lg:row-span-1 justify-center", // Dimensiuni fixe
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-1 md:col-span-3 md:row-span-3 lg:row-span-1", // Dimensiuni fixe
    imgClassName: "w-[100vw] h-[16vw]",
    titleClassName: "",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className:
      "md:col-span-3 md:row-span-2 lg:col-span-2 lg:row-span-2 justify-center", // Dimensiuni fixe
    imgClassName: "absolute right-0 bottom-0 md:w-[30vw] md:h-[20vw]",
    titleClassName: "justify-center lg:justify-center align-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-1 md:col-span-2 md:row-span-2 lg:row-span-1", // Dimensiuni fixe
    imgClassName: "",
    titleClassName: "justify-center text-center align-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "#contact",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "#contact",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "#contact",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Rodrigo was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rodrigo's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rodrigo is the ideal partner.",
    name: "David Kolo",
    title: "Director of Real.inc",
  },
  {
    quote:
      "We had the pleasure of working with Rodrigo on the development and optimization of our website. His technical expertise and results-oriented approach completely transformed our online presence. Not only did we see a significant increase in web traffic, but also an improvement in customer conversions. Rodrigo demonstrated professionalism and dedication at every stage of the project. We highly recommend him!.",
    name: "Andres",
    title: "Tech Innovators Ltd.",
  },
  {
    quote:
      "Rodrigo was the perfect partner for our website redesign project. With meticulous attention to detail and a deep understanding of our requirements, he was able to create a modern and functional website that perfectly reflects our brand. Working with him was an extremely pleasant and efficient experience, and the results exceeded our expectations. Rodrigo is a true professional, and we wholeheartedly recommend him.",
    name: "Michael",
    title: "Creative Solutions Inc.",
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
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/rodrigovitelaru/portfolio",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/rodrigovitelaru",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/vitelaru-rodrigo-8a47a632a/",
  },
  {
    id: 4,
    img: "/upwork.png",
    link: "https://www.upwork.com/freelancers/~01e6a92e26ca606ee8?mp_source=share",
  },
];
