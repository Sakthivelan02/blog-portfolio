const resume = {
  name: "Sakthivel Arumugam",
  title: "MERN Stack & Full-Stack Web Developer",
  location: "Trichy, Tamil Nadu",
  phone: "+91 70948 14270",
  email: "sakthi09112002@gmail.com",

  links: {
    linkedin: "", // paste your LinkedIn URL
    github: "", // paste your GitHub URL
    portfolio: "", // paste your Portfolio URL
  },

  resumeFile: "/Sakthivel_Arumugam_Resume.pdf",

  summary:
    "Full-stack web developer with hands-on experience building responsive, database-driven applications using HTML5, CSS3, Tailwind CSS, JavaScript, React, PHP, Python, SQL, and MySQL. Skilled in designing role-based learning management and e-commerce applications featuring REST APIs, CRUD operations, session authentication, form validation, and responsive interfaces. Experienced in debugging application and database issues across the software development lifecycle.",

  skills: [
    {
      group: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript",
        "React",
        "Responsive Web Design",
      ],
    },
    {
      group: "Backend & Programming",
      items: [
        "Python",
        "PHP",
        "Object-Oriented Programming",
        "REST APIs",
        "CRUD Operations",
        "Session Management",
      ],
    },
    {
      group: "Database",
      items: [
        "MySQL",
        "SQL",
        "Relational Databases",
        "Database-Driven Applications",
      ],
    },
    {
      group: "Tools & Practices",
      items: [
        "Git",
        "GitHub",
        "GitHub Pages",
        "VS Code",
        "Debugging",
        "Testing",
        "Form Validation",
      ],
    },
  ],

  experience: [
    {
      role: "Full-Stack Developer Intern",
      company: "Siva Sethu Infotech, Trichy",
      period: "Jul 2024 - Sep 2024",
      points: [
        "Developed database-driven application features using PHP, Python, SQL, and MySQL for data entry, retrieval, update, and validation workflows.",
        "Built and tested responsive user interfaces across desktop and mobile layouts using HTML5 and CSS3.",
        "Diagnosed application and database issues, improving feature reliability and supporting on-time delivery during the 3-month internship.",
      ],
    },
    {
      role: "GIS Engineer",
      company: "DSM Software, Trichy",
      period: "Oct 2024 - Aug 2026",
      points: [
        "Processed and classified LiDAR point-cloud data to produce quality-checked geospatial datasets for client mapping projects.",
        "Produced high-resolution orthomosaic and orthophotography outputs using MicroStation CONNECT, QGIS, Global Mapper, and Adobe Photoshop.",
      ],
    },
  ],

  projects: [
    {
      name: "Dinco E-Commerce Platform",
      stack: "MERN Stack",
      demo: "https://dinco.vercel.app/login", // paste live demo URL
      points: [
        "Architected a bulk-email application with a responsive React frontend and backend API integration for email-sending requests.",
        "Managed deployment configuration and troubleshooting across Vercel and Render for seamless connectivity.",
      ],
    },
    {
      name: "Jettomastery - Learning Management System",
      stack: "PHP, MySQL, HTML5, CSS3, JavaScript",
      demo: "",
      points: [
        "Built an LMS with 3 role-based access levels—Admin, Staff, and Student—for secure course, user, and assessment management.",
        "Developed 5+ database-backed modules covering course allocation, MCQ assessments, coding assessments, results tracking, and announcements.",
        "Implemented CRUD operations, session-based authentication, input validation, and responsive interfaces across core workflows.",
      ],
    },
    {
      name: "Greenery Plants Shop",
      stack: "HTML5, CSS3, Tailwind CSS, JavaScript",
      demo: "https://sakthivelan02.github.io/Greenery-plants-shop/", // paste live demo URL
      points: [
        "Developed a responsive plant e-commerce interface with interactive product browsing and navigation optimized for desktop, tablet, and mobile breakpoints.",
        "Applied Tailwind CSS and JavaScript interactions to maintain a consistent shopping experience across 3 screen categories.",
      ],
    },
    {
      name: "Pro-Laps - Fashion Store",
      stack: "HTML5, CSS3, JavaScript",
      demo: "https://sakthivelan02.github.io/Pro-Laps/", // paste live demo URL
      points: [
        "Built and deployed a 3-page e-commerce front end comprising Home, Collections, and Contact pages on GitHub Pages.",
        "Implemented 5+ storefront features, including product listings, pricing, sale tags, category filters, promotional banners, and newsletter signup.",
      ],
    },
    {
      name: "Weather Report App",
      stack: "React, JavaScript, Axios, REST API, CSS",
      demo: "https://weather-report-indol-nu.vercel.app", // paste live demo URL
      points: [
        "Built a weather application interface that retrieves and displays weather information from an API based on user search queries.",
        "Utilized React components and Axios for API requests, featuring responsive UI styling and loading/error handling.",
      ],
    },
    {
      name: "Bulk Mail App",
      stack: "MERN Stack, React, Node.js, Express.js, MongoDB",
      demo: "https://bulk-mail-wheat-one.vercel.app/login", // paste live demo URL
      points: [
        "Developed a bulk-email application with a React frontend and backend API integration for submitting email-sending requests.",
        "Managed deployment configuration and troubleshooting across Vercel and Render, ensuring seamless frontend-to-backend API connectivity.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Bishop Heber College",
      period: "2020 - 2023",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      school: "E.R. Higher Secondary School",
      period: "2019 - 2020",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      school: "Bishop Heber Higher Secondary School",
      period: "2017 - 2018",
    },
  ],

  certifications: [
    "Full Stack Development Internship 1 - Life Technologies",
    "TCS iON CareerEdge - Young Professional",
  ],
};

export default resume;
