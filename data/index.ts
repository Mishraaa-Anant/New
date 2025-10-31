import { links } from "@/config";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
] as const;

export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration and open communication.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "We’re flexible and adapt across all global time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack keeps evolving with every project.",
    description: "AI agents, app dev, web solutions, and data tools.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "AI-driven minds passionate about building smarter tech.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building automation and intelligent systems.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start an innovation journey with us?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
] as const;



export const projects = [
  {
    id: 1,
    title: "Color Your World - AI Design Studio",
    des: "An AI-powered collaborative design tool with real-time editing, smart color suggestions, and a fully responsive interface.",
    img: "/example1.jpeg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://clone-figmaa.netlify.app",
    sourceCode: "https://github.com/sanidhyy/figma-clone",
  },
  {
    id: 2,
    title: "Olaf - AI Meeting Assistant",
    des: "An intelligent video conferencing app that uses AI for meeting summaries, smart scheduling, and seamless team collaboration.",
    img: "/example5.jpg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://clone-yoom.netlify.app",
    sourceCode: "https://github.com/sanidhyy/zoom-clone",
  },
  {
    id: 3,
    title: "MotoHome - AI SaaS Platform",
    des: "A next-gen SaaS platform integrating AI automation, analytics dashboards, and secure payment & credit systems.",
    img: "/example6.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://ai-imaginify.netlify.app",
    sourceCode: "https://github.com/sanidhyy/imaginify",
  },
  {
    id: 4,
    title: "3D Website made using Blender -",
    des: "A stunning 3D portfolio website built using Blender and Three.js featuring smooth GSAP animations and an interactive user experience.",
    img: "/example4.jpeg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://app-iphone.netlify.app",
    sourceCode: "https://github.com/sanidhyy/apple-clone",
  },
] as const;


export const testimonials = [
  {
    quote: `Partnering with ${links.ownerName} and the Quantum Build team completely transformed our online presence. Their understanding of our brand and ability to deliver a seamless, high-performing website exceeded expectations.`,
    name: "WE 1 Fitness Studio",
    title: "Founder & CEO",
  },
  {
    quote: `${links.ownerName}'s team brought our app idea to life with precision and creativity. From planning to deployment, their commitment to quality and communication made the entire process smooth and efficient.`,
    name: "Mandar Tandel",
    title: "Entrepreneur & App Owner",
  },
  {
    quote: `Collaborating with ${links.ownerName} was an absolute delight. The Quantum Build team helped us design a scalable web platform that beautifully represents our products and streamlined our business operations.`,
    name: "Pronova Lifesciences",
    title: "Operations Head",
  },
  {
    quote: `Our partnership with ${links.ownerName} led to a complete digital transformation. The team developed custom tools and dashboards that improved efficiency and gave us real-time business insights.`,
    name: "Nand Gaon Dairy",
    title: "Director",
  },
] as const;


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
] as const;

export const workExperience = [
  {
    id: 1,
    title: "AI Agent Development - Quantum Build",
    desc: "Built custom AI automation agents and chat assistants to streamline client operations and enhance user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Web Platform Development",
    desc: "Developed responsive and high-performance web platforms using Next.js and modern frontend frameworks.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Mobile App Development",
    desc: "Designed and deployed cross-platform mobile applications for startups and businesses using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Data Analytics & Dashboards",
    desc: "Delivered real-time analytics dashboards and insights tools powered by Python, Pandas, and visualization libraries.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
] as const;




export const techStack = {
  stack1: ["React.js", "Next.js", "Typescript"],
  stack2: ["Vue.js", "AWS", "MongoDB"],
} as const;
