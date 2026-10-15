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
    "Full-stack web developer who builds responsive, database-driven applications with HTML5, CSS3, Tailwind CSS, JavaScript, React, PHP, Python, SQL and MySQL. I have built role-based learning management, e-commerce, bulk email and weather applications using frontend technologies, backend APIs and database integration. I enjoy building user-friendly applications, debugging issues and improving application reliability across the development lifecycle.",

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
      group: "Backend",
      items: [
        "Python",
        "PHP",
        "Node.js",
        "Express.js",
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
        "MongoDB",
        "Relational Databases",
      ],
    },
    {
      group: "Tools & Libraries",
      items: [
        "Git",
        "GitHub",
        "GitHub Pages",
        "VS Code",
        "Axios",
        "Nodemailer",
        "Debugging",
        "Testing",
        "Form Validation",
      ],
    },
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
        "Built an LMS with 3 role-based access levels (Admin, Staff and Student) for course, user and assessment management.",
        "Implemented 5+ database-backed modules, including course allocation, MCQ assessments, coding assessments, results tracking and announcements.",
        "Added CRUD operations, session-based authentication, input validation and responsive interfaces across core workflows.",
      ],
    },

    {
      name: "Bulk Mail App",
      stack: "React, Node.js, Express.js, MongoDB, Nodemailer",
      demo: "", // paste your deployed frontend URL
      points: [
        "Developed a full-stack bulk email application to send emails to multiple recipients from a single interface.",
        "Built a React interface with inputs for email subject, message body and multiple recipient email addresses.",
        "Integrated a Node.js and Express.js backend with Nodemailer for email delivery.",
        "Used MongoDB to store email records, recipient details and sending status.",
      ],
    },

    {
      name: "Weather Report Application",
      stack: "React.js, JavaScript, Axios, Weather API, CSS",
      demo: "", // paste your deployed frontend URL
      points: [
        "Built a React-based weather application to retrieve and display current weather information for searched cities.",
        "Integrated a weather API using Axios to fetch weather data dynamically.",
        "Displayed temperature and weather conditions through a user-friendly interface.",
        "Designed the application to make checking weather information simple and accessible.",
      ],
    },

    {
      name: "Greenery Plants Shop",
      stack: "HTML5, CSS3, Tailwind CSS, JavaScript",
      demo: "", // paste live demo URL
      points: [
        "Created a responsive plant shopping interface with interactive product browsing for desktop, tablet and mobile.",
        "Used Tailwind CSS and JavaScript to create a consistent shopping experience across different screen sizes.",
      ],
    },

    {
      name: "Pro-Laps - Fashion Store",
      stack: "HTML5, CSS3, JavaScript",
      demo: "", // paste live demo URL
      points: [
        "Created a 3-page e-commerce frontend (Home, Collections and Contact) and deployed it on GitHub Pages.",
        "Implemented storefront features including product listings, pricing, sale tags, category filters, promotional banners and newsletter signup.",
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
    "Full Stack Development Internship I - Life Technologies",
    "TCS iON CareerEdge - Young Professional",
  ],
};

export default resume;