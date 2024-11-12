
import proj2 from "../assets/proj2.webp";
import pro3 from "../assets/pro3.jpeg";
import proj4 from "../assets/proj4.jpg";
import proj5 from "../assets/proj5.jpg";
import projects6 from "../assets/projects6.webp";
import proj1 from "../assets/proj1.jpeg"

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I’m Mohammed Aslawi, a passionate frontend developer who brings ideas to life with immersive and intuitive web experiences.",
  description:
    " Empowering brands to connect with their audiences through engaging digital experiences.",
  resumeLinkText: "Download Resume",
  resumeLink: "/resume.pdf",
};

export const PROJECTS = [
  {
    name: "Translating Designs",
    description: "Convert design mockups and prototypes into functional web pages using HTML, CSS, and JavaScrip",
    image: proj1,
    link: "https://github.com/mohammedaslawy/mohammed-aslawi.git",
  },
  {
    name: "Performance Optimization",
    description: "Optimize web applications for speed and performance, including minimizing file sizes.",
    image: proj2,
    link: "https://github.com/mohammedaslawy/mohammed-aslawi.git",
  },
  {
    name: "User Experience (UX)",
    description: "Implement best practices for web accessibility (WCAG) to ensure that applications are usable by people with disabilities.",
    image: pro3,
    link: "https://github.com/mohammedaslawy/mohammed-aslawi.git",
  },
  {
    name: "Responsive Design",
    description:
      "Ensure that web applications look and function well on various devices and screen sizes (mobile, tablet, desktop)",
    image: proj4,
    link: "https://github.com/mohammedaslawy/mohammed-aslawi.git",
  },
  {
    name: "FitConnect",
    description: "Fitness social network to connect athletes and trainers",
    image: proj5,
    link: "https://github.com/mohammedaslawy/mohammed-aslawi.git",
  },
  {
    name: "Staying Updated",
    description: "Keep up with the latest trends, tools, and technologies in front-end development.",
    image: projects6,
    link: "https://github.com/mohammedaslawy/mohammed-aslawi.git",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I am a passionate front-end developer dedicated to crafting dynamic web applications that are not only functional but also visually engaging. With extensive experience in a variety of projects, from sleek single-page applications to intricate multi-tiered systems, I prioritize delivering high performance and exceptional user experiences.",
    "My expertise lies in leveraging technologies such as React, Next.js, and Tailwind CSS to build responsive and scalable user interfaces. I am committed to writing clean, maintainable code and enjoy collaborating with cross-functional teams to achieve solutions that align with both business objectives and user expectations. I thrive in challenging environments that foster continuous learning and professional growth.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2023 — Now",
    title: "Senior Frontend Engineer at Upwork",
    location: "Remote",
    description: [
      "Leading the development of scalable frontend architecture for enterprise-level applications.",
      "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
      "Driving innovation through continuous improvements in performance and UI/UX design.",
    ],
  },
  {
    yearRange: "2021 — 2023",
    title: "Frontend Engineer at Startup Company.",
    location: "Remote",
    description: [
      "Built dynamic, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
      "Spearheaded frontend optimization efforts, resulting in a 40% performance boost.",
      "Mentored junior developers and led internal frontend workshops.",
    ],
  },
  {
    yearRange: "2018 — 2021",
    title: "Frontend Developer at Creative Solutions",
    location: "Riyadh, Saudi Arabia",
    description: [
      "Developed and maintained user interfaces for high-traffic websites.",
      "Worked closely with designers to implement pixel-perfect designs.",
      "Optimized websites for SEO and performance, resulting in a 30% increase in traffic.",
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Prety Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Adam Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "John Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "test@example.com",
  socialLinks: [
    {
      platform: "Twitter",
      url: "https://twitter.com/yourprofile",
      ariaLabel: "Follow me on Twitter",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/mohammedaslawy",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Mohammed Aslawi. All rights reserved.`,
};
