import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    decade,
    sfm,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "SOFTWARE ENGINEER - INTERNSHIP",
        company_name: "SFM TECHNOLOGIES",
        icon: sfm,
        iconBg: "#fbc3bc",
        date: "June 2022 - August 2022",
        points: [
            "Iintegration of machine learning functionalities in a facial recognition project.",
            "Door detection systems using machine learning (python & tensorflow)",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "SOFTWARE ENGINEER -  End of sudy internship",
        company_name: "DECADE",
        icon: decade,
        iconBg: "#a2d2ff",
        date: "Feb 2023 - May 2023",
        points: [
            "Implement a recommendation system on a ski equipment rental website using Rubix ML in PHP to create a configurable recommendation model based on rules.",
            "Backend development utilizes Sylius (Symfony), while Drupal and React.js are employed for frontend development.",
            "Additionally, sportive profiles are associated with users to enhance purchase decisions and navigation speed.",
        ],
    },
    {
        title: "SOFTWARE ENGINEER - FULLSTACK PHP",
        company_name: "DECADE",
        icon: decade,
        iconBg: "#a2d2ff",
        date: "Jul 2023 - Fev 2024",
        points: [
            "Use of Symfony and Sylius PHP frameworks for backend development of ecommerce solutions (INTERSPORT RENT).",
            "Creation of user-friendly interfaces using React and Drupal frontend technologies.",
            "Implemented Docker and Jenkins for environment preparation, facilitating smooth transitions from Symfony 4.3 to Symfony 6.4 (PHP 7.3 to PHP 8.2) in development and production environments.",
            "Participating in code checks and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "SOFTWARE ENGINEER - FULLSTACK SFCC",
        company_name: "DECADE",
        icon: decade,
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "FullStack design and development on the SFCC e-commerce platform for Pacific Pêche, including the use of JavaScript, SFRA (Storefront Reference Architecture).",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Integration with Jenkins for continuous deployment.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];
