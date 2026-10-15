// Edit this file to update the portfolio. Leave a link as "" to hide it.
const resume = {
  name: "Sakthivel Arumugam",
  title: "Python & Full-Stack Web Developer",
  location: "Trichy, Tamil Nadu",
  phone: "+91 70948 14270",
  email: "sakthi09112002@gmail.com",
  links: {
    linkedin: "", // paste your LinkedIn URL
    github: "", // paste your GitHub URL
    portfolio: "",
  },
  resumeFile: "/Sakthivel_Arumugam_Resume.pdf",

  summary:
    "Full-stack web developer who builds responsive, database-driven applications with HTML5, CSS3, Tailwind CSS, JavaScript, React, PHP, Python, SQL and MySQL. I have built role-based learning management and e-commerce applications with REST APIs, CRUD operations, session authentication and form validation, and I enjoy debugging application and database issues across the development lifecycle.",

  skills: [
    { group: "Frontend", items: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript", "React", "Responsive Web Design"] },
    { group: "Backend", items: ["Python", "PHP", "Object-Oriented Programming", "REST APIs", "CRUD Operations", "Session Management"] },
    { group: "Database", items: ["MySQL", "SQL", "Relational Databases"] },
    { group: "Tools", items: ["Git", "GitHub", "GitHub Pages", "VS Code", "Debugging", "Testing", "Form Validation"] },
  ],

  experience: [
    {
      role: "GIS Engineer",
      company: "DSM Software, Trichy",
      period: "Oct 2024 - Aug 2026",
      points: [
        "Processed and classified LiDAR point-cloud data to produce quality-checked geospatial datasets for client mapping projects.",
        "Produced high-resolution orthomosaic and orthophotography outputs using MicroStation CONNECT, QGIS, Global Mapper and Adobe Photoshop.",
      ],
    },
    {
      role: "Full-Stack Developer Intern",
      company: "Siva Sethu Infotech, Trichy",
      period: "Jul 2024 - Sep 2024",
      points: [
        "Developed database-driven features using PHP, Python, SQL and MySQL for data entry, retrieval, update and validation workflows.",
        "Built and tested responsive interfaces across desktop and mobile layouts using HTML5 and CSS3.",
        "Diagnosed application and database issues, improving feature reliability and supporting on-time delivery during the 3-month internship.",
      ],
    },
  ],

  projects: [
    {
      name: "Jettomastery - Learning Management System",
      stack: "PHP, MySQL, HTML5, CSS3, JavaScript",
      demo: "",
      points: [
        "LMS with 3 role-based access levels (Admin, Staff and Student) for secure course, user and assessment management.",
        "5+ database-backed modules: course allocation, MCQ assessments, coding assessments, results tracking and announcements.",
        "CRUD operations, session-based authentication, input validation and responsive interfaces across core workflows.",
      ],
    },
    {
      name: "Greenery Plants Shop",
      stack: "HTML5, CSS3, Tailwind CSS, JavaScript",
      demo: "", // paste live demo URL
      points: [
        "Responsive plant e-commerce interface with interactive product browsing, optimized for desktop, tablet and mobile.",
        "Tailwind CSS and JavaScript interactions keep the shopping experience consistent across 3 screen categories.",
      ],
    },
    {
      name: "Pro-Laps - Fashion Store",
      stack: "HTML5, CSS3, JavaScript",
      demo: "", // paste live demo URL
      points: [
        "3-page e-commerce front end (Home, Collections, Contact) deployed on GitHub Pages.",
        "5+ storefront features: product listings, pricing, sale tags, category filters, promotional banners and newsletter signup.",
      ],
    },
  ],

  education: [
    { degree: "Bachelor of Computer Applications (BCA)", school: "Bishop Heber College", period: "2020 - 2023" },
    { degree: "Higher Secondary Certificate (HSC)", school: "E.R. Higher Secondary School", period: "2019 - 2020" },
    { degree: "Secondary School Leaving Certificate (SSLC)", school: "Bishop Heber Higher Secondary School", period: "2017 - 2018" },
  ],

  certifications: ["Full Stack Development Internship I - Life Technologies | TCS iON CareerEdge - Young Professional"],
};

export default resume;
