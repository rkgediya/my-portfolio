// import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Ronak",
  lastName: "Gediya",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Salesforce Developer",
  avatar: "/images/Ronak_New_Year.jpg",
  email: "gediyaronak200@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Gujarati"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about Salesforce development, automation, and integration solutions using Apex, LWC, and the latest cloud technologies.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rkgediya",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://bit.ly/ronakgediya",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Trailhead",
    icon: "salesforce",
    link: "https://www.salesforce.com/trailblazer/ronakgediya144",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Discord",
    icon: "discord",
    link: `https://discord.com/users/1289224940557697128`,
  }
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Delivering smart Salesforce solutions with code and creativity</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Duotax Email Automation & AI</strong></>,
    href: "/work/duotax",
  },
  subline: (
    <>
      {/* I'm Selene, a design engineer at <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects. */}
      I'm Ronak, a Salesforce developer at 
      <a 
        href="https://kriit.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ fontWeight: "bold", marginLeft: "0.25em", textDecoration: "none", color: "inherit" }}
      >
        Kriit Technologies Pvt. Ltd
      </a>, specializing in custom Apex solutions, LWC development,
      <br /> and seamless API integrations to transform business workflows.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Ronak is a skilled Salesforce Developer based in Surat, bringing over 2.5 years of practical experience in Apex, Lightning Web Components (LWC), process automation, and cloud integrations. He has played a key role in delivering impactful solutions for clients such as Duotax, Rocketship Financial, and Dubai Properties. Ronak’s expertise includes building Outlook-style applications, integrating AI technologies, designing REST APIs, and crafting custom user interfaces within the Salesforce ecosystem—always focused on delivering high performance and seamless functionality.
      </>
    ),
  },
  certification: {
    display: true, // set to false to hide this section
    title: "Certification",
    certificate: [
      {
        name: "Salesforce Certified Agentforce Specialist",
        provider: "Salesforce",
        issueDate: "June 18, 2025",
        expireDate: "",
        link: "https://sforce.co/verifycerts",
        logo: {
          src: "/images/certificates/Agentforce_Specialist.png",
          alt: "Agentforce Specialist Logo",
          style: { width: '100px', objectFit: 'contain', height: '100px', marginRight: '10px' },
        }
      },
      {
        name: "Salesforce Certified AI Associate",
        provider: "Salesforce",
        issueDate: "December 28, 2024",
        expireDate: "",
        link: "https://sforce.co/verifycerts",
        logo: {
          src: "/images/certificates/AI_Associate.png",
          alt: "AI Associate Logo",
          style: { width: '100px', objectFit: 'contain', height: '100px', marginRight: '10px' },
        }
      },
      {
        name: "Salesforce Certified Associate",
        provider: "Salesforce",
        issueDate: "June 03, 2023",
        expireDate: "",
        link: "https://sforce.co/verifycerts",
        logo: {
          src: "/images/certificates/Associate.png",
          alt: "Associate Logo",
          style: { width: '100px', objectFit: 'contain', height: '100px', marginRight: '10px' },
        }
      }
    ]
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kriit Technologies Pvt Ltd",
        website: "https://kriit.com/",
        timeframe: "May 2024 - Present",
        role: "Salesforce Developer",
        companyLogo: {
          src: "/images/Kriit_Logo.png",
          alt: "Kriit Logo",
          style: { width: '60px', objectFit: 'contain', height: '30px', marginRight: '10px' },
        },
        achievements: [
          <>
            Driving the development of intelligent, scalable Salesforce applications and AI-driven automations to optimize customer service, lead management, and cross-platform integrations. Focused on building modern UI/UX with LWC, integrating advanced APIs, and deploying real-time systems across domains.
          </>,
          <>
            Developed enterprise-grade AI-powered calling and email systems for operational efficiency.
          </>,
          <>
            Led full-stack architecture using Apex, LWC, Node.js, and external APIs for seamless business workflows.
          </>,
          <>
            Collaborated cross-functionally to deliver performance-driven customer support tools and dashboards.
          </>
        ],
        type: "Full-time",
        projects: [
          { name: "Duotax Quantity Surveyors", logo: "Duotax/Duotax_Logo.png", style: { width: '60px', objectFit: 'contain', height: '30px' } },
        ],
        images: []
      },
      {
        company: "Kriit Technologies Pvt Ltd",
        website: "https://kriit.com/",
        timeframe: "Jan 2023 - Apr 2024",
        role: "Salesforce Developer",
        companyLogo: {
          src: "/images/Kriit_Logo.png",
          alt: "Kriit Logo",
          style: { width: '60px', objectFit: 'contain', height: '30px', marginRight: '10px' },
        },
        type: "Part-time",
        projects: [
          { name: "Rocketship Financial", logo: "Rocketship/Rocketship_Logo.svg", style: { width: '60px', objectFit: 'contain', height: '30px' } },
          { name: "Dubai Properties - Real Estate", logo: "Dubai_Properties/Dubai_Properties_Logo.png", style: { width: '60px', objectFit: 'contain', height: '30px' } },
          { name: "Huna Living", logo: "Huna/Huna_Logo.png", style: { width: '30px', objectFit: 'contain', height: '30px' } },
        ],
        achievements: [
          <>
            Worked on multiple real-world Salesforce implementations across fintech, real estate, and customer service domains. Designed and delivered scalable, component-based solutions with a strong focus on UI/UX, automation, and data integrity.
          </>,
          <>
            Built highly customized LWC components for lead, case, and calendar management.
          </>,
          <>
            Integrated third-party APIs and implemented CTI tools to enhance CRM functionality.
          </>,
          <>
            Designed scalable automation workflows for case tracking, lead processing, and document handling.
          </>
        ],
        images: [],
      },
      {
        company: "Kriit Technologies Pvt Ltd",
        website: "https://kriit.com/",
        timeframe: "Aug 2022 - Dec 2022",
        role: "Salesforce Developer Trainee",
        companyLogo: {
          src: "/images/Kriit_Logo.png",
          alt: "Kriit Logo",
          style: { width: '60px', objectFit: 'contain', height: '30px', marginRight: '10px' },
        },
        type: "Part-time",
        projects: [],
        achievements: [
          <>
            Completed a structured 5-month part-time training program focused on Salesforce fundamentals.
          </>,
          <>
            Gained practical experience in developing with Apex, Lightning Web Components (LWC), automation flows, and system architecture under senior developer supervision.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Amity University Online, Noida",
        course: "Master of Computer Application (MCA)",
        startDate: "July 2024",
        endDate: "Aug 2026 (Expected)",
        cgpa: "",
        website: "https://amityonline.com/",
        logo:"Amity_University_Logo.jpg",
        description: <>An online postgraduate course covering advanced topics in software development and system design.</>,
      },
      {
        name: "Veer Narmad South Gujarat University, Surat",
        course: "Bachelor’s in Computer Application (BCA)",
        startDate: "May 2021",
        endDate: "April 2024",
        cgpa: "7.5 / 10",
        website: "https://www.vnsgu.ac.in/",
        logo:"VNSGU_Logo.png",
        description: <>Focused on programming, databases, and web development with strong practical foundations.</>,
      },
    ],
  },
  // technical: {
  //   display: true, // set to false to hide this section
  //   title: "Technical skills",
  //   skills: [
  //     {
  //       title: "Figma",
  //       description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-02.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //         {
  //           src: "/images/projects/project-01/cover-03.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       title: "Next.js",
  //       description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
  //       // optional: leave the array empty if you don't want to display images
  //       images: [
  //         {
  //           src: "/images/projects/project-01/cover-04.jpg",
  //           alt: "Project image",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //   ],
  // },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        category: "Salesforce Development",
        image: "Salesforce_Logo.png",
        imageStyle: { width: '50px', objectFit: 'contain' },
        items: [
          { name: "Apex" },
          { name: "Visualforce" },
          { name: "Lightning Web Components (LWC)", logo: "LWC_Logo.png" },
          { name: "SOQL" },
          { name: "SOSL" },
          { name: "Triggers" },
          { name: "Batch Apex" },
          { name: "Asynchronous Apex" },
          { name: "Apex REST API", logo: "Apex_REST_API_Logo.png" },
          { name: "WSDL" },
          { name: "WSDL-to-Apex" },
          { name: "Integration", logo: "Integration_Logo.png" },
          { name: "Packaging", logo: "Packaging_Logo.png" },
          { name: "Customization", logo: "Customization_Logo.png" },
        ],
      },
      {
        category: "Salesforce Administrative",
        image: "Salesforce_Logo.png",
        imageStyle: { width: '50px', objectFit: 'contain' },
        items: [
          { name: "Flows", logo: "Flow_Logo.png" },
          { name: "Process Builder" },
          { name: "Validation Rules", logo: "Validation_Rules_Logo.png" },
          { name: "Reports", logo: "Report_Dashboard_Logo.png" },
          { name: "Dashboards", logo: "Report_Dashboard_Logo.png" },
          { name: "Permission Management" },
          { name: "Sites", logo: "Sites_Logo.png" },
          { name: "Communities" },
          { name: "Workflow & Approval Process" },
          { name: "Profiles" },
          { name: "Salesforce Einstein", logo: "Einstein_Logo.png" },
          { name: "Custom Objects" },
          { name: "Security Model", logo: "Security_Logo.png" },
          { name: "SSO", logo: "SSO_Logo.png" },
        ],
      },
      {
        category: "Integration & Tools",
        image: "Integration&Tools_Logo.png",
        imageStyle: { width: '40px', height: '40px', objectFit: 'contain' },
        items: [
          { name: "REST API", logo: "Rest_API_Logo.png" },
          { name: "SOAP API", logo: "SOAP_API_Logo.png" },
          { name: "Bulk API" },
          { name: "Salesforce Connect", logo: "Salesforce_Connect_Logo.png" },
          { name: "Streaming API" },
          { name: "Platform Events", logo: "Platform_Events_Logo.png" },
          { name: "OAuth 2.0", logo: "OAuth_2.0_Logo.png" },
          { name: "Postman", logo: "Postman_Logo.png" },
        ],
      },
      {
        category: "Design Tools",
        image: "Design_Tools_Logo.png",
        imageStyle: { width: '40px', height: '40px', objectFit: 'contain' },
        items: [
          { name: "Lightning Design System (SLDS)", logo: "SLDS_Logo.png" },
          { name: "Bootstrap", logo: "Bootstrap_Logo.png" },
          { name: "Other Third Party Libraries" },
        ],
      },
      {
        category: "Data Management",
        image: "Data_Management_Logo.png",
        imageStyle: { width: '40px', height: '40px', objectFit: 'contain' },
        items: [
          { name: "Data Loader", logo: "Data_Loader_Logo.png" },
          { name: "Data Import Wizard", logo: "Data_Import_Wizard_Logo.png" },
          { name: "Shield Encryption", logo: "Shield_Encryption_Logo.png" },
          { name: "Data Masking", logo: "Data_Masking_Logo.png" },
        ],
      },
      {
        category: "DevOps & Tools",
        image: "DevOps&Tools_Logo.png",
        imageStyle: { width: '40px', height: '40px', objectFit: 'contain' },
        items: [
          { name: "Salesforce DX (SFDX)", logo: "Salesforce_CLI_Logo.png" },
          { name: "Salesforce CLI", logo: "Salesforce_CLI_Logo.png" },
          { name: "Git", logo: "git.png", logo: "Git_Logo.png" },
          { name: "GitHub", logo: "github.png", logo: "GitHub_Logo.png" },
          { name: "VS Code", logo: "vs-code.png", logo: "VS_Code_Logo.png" },
          { name: "Change Sets" },
          { name: "Workbench" },
          { name: "AWS (EC2, S3)", logo: "AWS_Logo.png" },
          { name: "Azure", logo: "Azure_Logo.png" },
          { name: "Docker", logo: "Docker_Logo.png" },
          { name: "DockerHub", logo: "Docker_Logo.png" },
        ],
      },
      {
        category: "Salesforce Clouds",
        image: "Salesforce_Clouds_Logo.png",
        imageStyle: { width: '40px', height: '40px', objectFit: 'contain' },
        items: [
          { name: "Sales Cloud", logo: "Sales_Cloud_Logo.jpg" },
          { name: "Service Cloud", logo: "Service_Cloud_Logo.png" },
          { name: "Community/Experience Cloud", logo: "Experience_Cloud_Logo.png" },
          { name: "Financial Services Cloud", logo: "Financial_Services_Cloud_Logo.png" },
        ],
      },
      {
        category: "Technologies & Languages",
        image: "Technologies&Languages_Logo.png",
        imageStyle: { width: '40px', height: '40px', objectFit: 'contain' },
        items: [
          { name: "React.js", logo: "React_Logo.png" },
          { name: "Node.js", logo: "Node_Logo.png" },
          { name: "Python", logo: "Python_Logo.png" },
          { name: "Java", logo: "Java_Logo.png" },
          { name: "SQL", logo: "SQL_Logo.png" },
          { name: "JavaScript (ES6+)", logo: "JavaScript_Logo.png" },
          { name: "HTML5", logo: "HTML_Logo.png" },
          { name: "WebSocket", logo: "WebSocket_Logo.png" },
          { name: "CSS3", logo: "CSS3_Logo.png" },
          { name: "JSON" },
          { name: "XML" },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
