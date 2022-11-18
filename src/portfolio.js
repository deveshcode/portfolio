/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Devesh Surve",
  title: "Hi all, I'm Devesh Surve",
  subTitle: emoji(
    "A passionate ML Engineer 🚀 having an experience of working closely with software engineers and data scientists to develop and deploy machine learning models."
  ),
  // resumeLink:
  //   "https://drive.google.com/file/d/1FvX95ycVnmS6Cv5MwwX8J8Mk6xV0A8rP/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/deveshcode",
  linkedin: "https://www.linkedin.com/in/deveshsurve/",
  gmail: "deveshssurve@gmail.com",
  gitlab: "https://gitlab.com/deveshcode",
  facebook: "https://www.facebook.com/DeVeshSurVe/",
  medium: "https://medium.com/@deveshsurve",
  stackoverflow: "https://stackoverflow.com/users/10616901/devesh",
  // kaggle
  // twitter
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I make Machines Smarter.",
  skills: [
    emoji(
      "⚡ Find patterns in data and use them to make predictions."
    ),
    emoji("⚡ Develop algorithms that improve the performance of machine learning models."),
    emoji(
      "⚡ Create applications to automate the deployment and monitoring of machine learning models."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
    // {
    //   skillName: "JavaScript",
    //   fontAwesomeClassname: "fab fa-js"
    // },
    // {
    //   skillName: "reactjs",
    //   fontAwesomeClassname: "fab fa-react"
    // },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    // {
    //   skillName: "npm",
    //   fontAwesomeClassname: "fab fa-npm"
    // },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    // {
    //   skillName: "firebase",
    //   fontAwesomeClassname: "fas fa-fire"
    // },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/northeasternlogo.svg"),
      subHeader: "Master of Science in Computer Software Engineering",
      duration: "August 2022 - May 2024",
      // desc: "",
      // descBullets: [
      //   "t",
      //   "t"
      // ]
    },
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/mumbaiuniversitylogo.png"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "August 2015 - June 2019",
      // desc: "desc 1",
      descBullets: [
        "Final year Gold Medalist of Comuter Engineering 2019 Batch.",
        "Alumni Representative in the Department Advisory Board for Department of AI&DS at SAKEC.", 
        "Cleared the Infinity Coding Challenge organised by LnTInfotech securing job offer with LTI.",
        "Cleared the TCS Codevita organised by Tata Consultancy Services securing job offer with TCS.",
        "Winners at Smart India Hackathon 2018 for development of Cyberguard Mobile Application in 48 hours for the Department of empowerment of persons with disability, ministry of social justice and empowerment."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "MLOps",
      progressPercentage: "85%"
    },
    {
      Stack: "Python Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "75%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Kubernetes",
      progressPercentage: "75%"
    },
    {
      Stack: "Programming",
      progressPercentage: "68%"
    },
    {
      Stack: "Docker", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",
      progressPercentage: "63%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "57%"
    },
    {
      Stack: "Databases",
      progressPercentage: "45%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "40%"
    } 
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Product Engineer ( Machine Learning )",
      company: "Larsen & Toubro Infotech",
      companylogo: require("./assets/images/LTI.png"),
      date: "August 2021 – June 2022",
      desc: "",
      descBullets: [
        "Achieved 95% Quarter goals by implementing 50+ features",
        "Increased team size by 15% members by conducting 30+ interviews",
        "Spearheaded the complete development of ML Interpretability & Automated Machine Learning libraries",
        "Consolidated Spark with Kubernetes to run Spark jobs saving costs by 29%"
      ]
    },
    {
      role: "Product Engineer ( Machine Learning )",
      company: "Larsen & Toubro Infotech",
      companylogo: require("./assets/images/LTI.png"),
      date: "August 2020 – August 2021",
      descBullets: [
        "Developed module for auto-deployment & scaling of ML Models",
        "Compiled 25+ API for interacting with MySQL & PostgreSQL databases",
        "Researched & implemented dockerizing of Jupter, R IDEs",
        "Integrated ML Interpretability libraries like Lime, Shap"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Larsen & Toubro Infotech",
      companylogo: require("./assets/images/LTI.png"),
      date: "August 2019 – August 2020",
      descBullets: [
        "Represented team in the Tech4 Heritage Hackathon as speaker and platform hosts",
        "Conducted research and experimentation to improve effectiveness of ML models",
        "Utilized AWS, GCP and Azure to host and deploy ML models",
        "Worked on Model Assessment & Validation"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Gold Medal in Engineering",
      subtitle:
        "Securing the 1st rank in Final year of Engineering, made all those late nights studying felt finally worth.",
      image: require("./assets/images/gold.jpeg"),
      imageAlt: "Engineering Gold Medal",
      footerLink: []
    },
    {
      title: "Speaker's Certificate for Explainable Ai ",
      subtitle:
        "Took a session in College where I explained the concepts of ML Model Interpretability",
      image: require("./assets/images/xaispeaker.jpeg"),
      imageAlt: "Engineering Gold Medal",
      footerLink: []
    },
    {
      title: "Took Workshop for Data Science using Python",
      subtitle:
        "Took a workshop on Data Science using Pythin covering Pyspark and Apache Hive ",
      image: require("./assets/images/dsworkshop.jpeg"),
      imageAlt: "Engineering Gold Medal",
      footerLink: []
    },
    {
      title: "Winner Certificate for LTI Solvathon",
      subtitle:
        "Won LTI Global Solvathon against 100+ teams throughout the world with 550+ participants",
      image: require("./assets/images/winsolvathon.jpeg"),
      imageAlt: "Engineering Gold Medal",
      footerLink: []
    },
    {
      title: "Winner Certificate for Smart India Hackathon 2018",
      subtitle:
      "Won Smart India National Hackathon against 50+ teams throughout the country with 500+ participants",
      image: require("./assets/images/sih.png"),
      imageAlt: "Engineering Gold Medal",
      footerLink: []
    },
    {
      title: "100k views on Quora",
      subtitle:
        "Finally achieved my views goals on Quora",
      image: require("./assets/images/quora.png"),
      imageAlt: "Engineering Gold Medal",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@deveshcode/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/deveshcode-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "deveshssurve@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
