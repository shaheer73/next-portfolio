  import discoverycrate from '../public/static/assets/company/discoverycrate.jpg';
  import cxn from '../public/static/assets/company/cxnlogo.jpeg';
  import ford from '../public/static/assets/company/ford.jpeg';
  import waterloop from '../public/static/assets/company/waterloop.jpeg';
  import reblink from '../public/static/assets/company/reblink.png';
  import watstreet from '../public/static/assets/company/watstreet.jpeg';

  const technologies = [
    {
      name: "Python",
      icon: cxn,
    },
    {
      name: "C++",
      icon: cxn,
    },
    {
        name: "C#",
        icon: cxn,
    },
    {
        name: "Java",
        icon: cxn,
    },
    {
      name: "JavaScript",
      icon: cxn,
    },
    {
      name: "TypeScript",
      icon: cxn,
    },
    {
      name: "React JS",
      icon: cxn,
    },
    {
      name: "Next JS",
      icon: cxn,
    },
    {
      name: "Tailwind CSS",
      icon: cxn,
    },
    {
      name: "Node JS",
      icon: cxn,
    },
    {
      name: "PostgreSQL",
      icon: cxn,
    },
    {
      name: "Three JS",
      icon: cxn,
    },
    {
      name: "git",
      icon: cxn,
    },
    {
      name: "figma",
      icon: cxn,
    },
    {
      name: "AWS",
      icon: cxn,
    },
    {
      name: "Django",
      icon: cxn,
    },
    {
      name: "Flask",
      icon: cxn,
    },
    {
      name: "Unity",
      icon: cxn,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "ReBlink",
      icon: reblink,
      iconBg: "black",
      date: "September 2023 - December 2023",
      points: [
        "Worked on building backend platform with the use of Laravel (PHP) from end-to-end. This involved designing database schemas, setting up relationships, creating their models, and controllers for the endpoints.",
        "Learned more about blockchain through integration of wallets and working with the ETH chain.",
        "Leveraged tools such as AWS to run serverless deployments of the application.",
        "Integrated web APIs into Unity, being able to leverage Unity as a frontend from any backend platform of our choice.",
      ],
    },
    {
      title: "Lead Backend Developer",
      company_name: "Wat Street",
      icon: watstreet,
      iconBg: "black",
      date: "September 2023 - Present",
      points: [
        "Working on an algorithmic trading app in Python to visualize past data, efficacy of models, and monitor triggers.",
        "Implementing API endpoints with Flask, to allow users to view real-time financial stock data.",
        "Collaborating with cross-functional teams including ML, frontend to drive this project to completion.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Cognixion",
      icon: cxn,
      iconBg: "#1c2c2c",
      date: "January 2023 - April 2023",
      points: [
        "Exposed to how we can combine technology with neuroscience to create speech solutions for those who suffer from diseases that restrict them from communicating to others.",
        "I utilized C# and Unity to help develop front end features as well as improve backend processes, as well as using other technologies such as Azure and AWS!",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Ford Motor Company",
      icon: ford,
      iconBg: "#040b5a",
      date: "May 2022 - August 2022",
      points: [
        "This was my first co-op during university, this experience helped me gain my first insight on working in the software industry.",
        "I got to work on several automation scripts using Python and make device code changes with C in a Linux environment.",
        "I participated in Agile methodologies alongside others to complete tasks. This experience helped me gain insight on working in the software industry.",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Waterloop",
      icon: waterloop,
      iconBg: "#041423",
      date: "September 2022 - April 2023",
      points: [
        "Developing and maintaining web applications using Electron.js and other related technologies.",
        "Participating in weekly meetings in order to drive tasks to completion."
      ],
    },
    {
      title: "CEO & Co-Founder",
      company_name: "Discovery Crate",
      icon: discoverycrate,
      iconBg: "white",
      date: "September 2020 - December 2020",
      points: [
        "Co-Founded Discovery Crate, a start-up that creates international-themed mystery snack boxes curated from local small businesses, in order to support them during the COVID-19 pandemic.",
        "Conducted market research through surveys and cold-calling to validate business idea.",
        "Used project management skills such as creating a budgeting plan and managed other finances.",
        "Generated hundreds in revenue and won Best Pitch award over 250+ competitors."
      ],
    },
  ];
  
  export { technologies, experiences };