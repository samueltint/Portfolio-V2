import ChaosDashboard from "/assets/images/Chaos-Dashboard.png";
import ChaosKanban from "/assets/images/Chaos-Kanban.png";
import PoliceForm from "/assets/images/Police-Form.png";
import PoliceAddress from "/assets/images/Police-Address.png";
import PoliceLicense from "/assets/images/Police-LicensePlate.png";

type Entry = {
  id?: string;
  type: "experience" | "education" | "project";
  title: string;
  subtitle?: string;
  tags?: string[];
  description: string;
  fullTags?: string[];
  page?: string;
  images?: {
    original: string;
    description: string;
  }[];
  body?: React.ReactNode;
  link?: string;
};

const entries: Entry[] = [
  {
    id: "chaos1",
    type: "experience",
    title: "Digitised Evaluation and Report Generation Platform",
    subtitle: "Chaos 1",
    description:
      "Design and development updated evaluation framework and a web-based platform for data recording and report generation.",
    tags: [
      "Flutter",
      "Spring Boot",
      "Google Cloud Platform",
      "PostgreSQL",
      "Docker",
    ],
    fullTags: [
      "Flutter",
      "Spring Boot",
      "Java",
      "Google Cloud Platform",
      "Docker",
      "PostgreSQL",
      "Figma",
      "CI/CD",
      "Terraform",
    ],
    // page: "/Chaos1",
    body: (
      <>
        <h2 className="italic text-slate-500 text-xl">July 2024 - Feb 2026</h2>
        <div className="pt-4">
          <p className="pl-2 text-md sm:text-xl whitespace-pre-wrap w-full">
            This project consisted of two main components: updating an existing
            evaluation framework and developing a web-based platform to support
            it. The platform allowed users to input data, evaluate using context
            based rating systems, and generate reports aligned with US military
            standards.
          </p>
        </div>
        <div className="pt-4">
          <p className="pl-2 text-md sm:text-xl whitespace-pre-wrap">
            The project was eventually deployed using tools in the Google Cloud
            Platform ecosystem, including Cloud Run for hosting and Cloud SQL
            for database management. CI/CD was implemented through GitLab and
            Cloud run. Terraform was used to manage infrastructure as code,
            ensuring a scalable and maintainable deployment process.
          </p>
        </div>
      </>
    ),
  },

  {
    id: "chaos1internship",
    type: "experience",
    title: "Project Management Website with AI Integration",
    subtitle: "Chaos 1",
    description:
      "Design and development of a web-based problem-solving platform.",
    tags: [
      "TypeScript",
      "React",
      "Google Cloud Platform",
      "PostgreSQL",
      "Docker",
    ],
    fullTags: [
      "TypeScript",
      "React",
      "Tailwind",
      "Google Cloud Platform",
      "Docker",
      "PostgreSQL",
      "Figma",
      "Scrum",
      "Client Consultation",
      "Team Leadership",
    ],
    // page: "/Chaos1",
    images: [
      {
        original: ChaosDashboard,
        description: `Simple display and management of a user's projects. The website also supports individually shared projects and organisation level resources.`,
      },
      {
        original: ChaosKanban,
        description: `Kanban board with rearrangeable cards representing tasks. These tasks can then be imported into the main project framework.`,
      },
    ],
    body: (
      <>
        <h2 className="italic text-slate-500 text-xl">Dec 2023 - May 2024</h2>
        <div className="pt-4">
          <p className="pl-2 text-md sm:text-xl whitespace-pre-wrap">
            Chaos 1 are a defence innovation company focused on integrating
            technology with military planning processes. The company developed a
            framework aimed at streamlining existing workflows. This project
            involved creating a digital platform to improve the framework's
            usability and support collaborative planning. The platform also
            supported existing methodologies such as Kanban and the Military
            Appreciation Process (MAP). The user experience was enhanced with
            collaborative editing features and an AI chatbot powered by Vertex
            AI.
          </p>
        </div>
        <div className="pt-4">
          <h2 className="xl:leading-loose text-2xl xl:text-3xl">{`Background\n`}</h2>
          <p className="pl-2 text-md sm:text-xl whitespace-pre-wrap">
            I was connected to Chaos 1 through the Green Gate internship
            program, a joint initiative between UTS and USYD students. Our team
            acted as the company's consultants, designers, and developers. I was
            selected as team leader, which added organisation and project
            management duties in addition to my development contributions. After
            completing the program, I was rehired and continued the project
            alongside a team of senior developers.
          </p>
        </div>

        <div className="pt-4 pb-8">
          <h2 className="xl:leading-loose text-2xl xl:text-3xl">{`My Contributions\n`}</h2>
          <p className="pl-2 text-md sm:text-lg whitespace-pre-wrap italic">{`Under NDA — original screenshots cannot be disclosed. Recreated designs are provided.\n`}</p>
        </div>
      </>
    ),
  },
  {
    id: "police",
    title: "RBT/RDT Mobile App",
    type: "experience",
    subtitle: "NSW Police",
    // page: "/NSWPolice",
    description:
      "Developed a React Native app for NSW police officers to record and store RBT/RDT data digitally.",
    tags: ["TypeScript", "React Native", "Docker", "Figma"],
    fullTags: [
      "TypeScript",
      "React Native",
      "Docker",
      "Figma",
      "UI/UX",
      "Scrum",
      "Client Consultation",
    ],
    body: (
      <>
        <div className="pt-4">
          <p className="pl-2 text-md sm:text-xl whitespace-pre-wrap">
            The workflow for NSW Police officers to record and store data
            collected during RBT and RDT stops was inefficient due to reliance
            on handwritten reports. To streamline these processes, a mobile app
            was designed to act as a hub for many police reporting tasks. Our
            team developed a prototype for a digital form. My primary
            responsibility was UI/UX design, focusing on a simple, intuitive
            interface so officers could efficiently enter data during stops.
          </p>
        </div>
        <div className="pt-4">
          <h2 className="xl:leading-loose text-2xl xl:text-3xl">{`Background\n`}</h2>
          <p className="pl-2 pb-6 text-md sm:text-xl whitespace-pre-wrap">
            This project was completed as part of the UTS Software Development
            Studio, where student teams delivered projects for real-world
            clients. Throughout the engagement, we acted as consultants to
            clarify the client's needs and regularly provided samples and
            reports to ensure the product matched their vision.
          </p>
        </div>
      </>
    ),
    images: [
      {
        original: PoliceForm,
        description: `Digital input form for RBT and RDT testing.`,
      },
      {
        original: PoliceAddress,
        description: `Location recording for RBT/RDT. Allows for GPS or manual entry.`,
      },
      {
        original: PoliceLicense,
        description: `License Plate recording for RBT/RDT. Allows for Automatic Number Plate Recognition or manual entry.`,
      },
    ],
  },
  {
    title: "Slime Mold Simulation",
    type: "project",

    description: "A simulation of a slime mold to explore organic simulations.",
    tags: ["Processing", "Java"],
    link: "https://github.com/samueltint/Slime-Mould-Sim",
  },
  {
    title: "Early Learning Tools",
    type: "project",

    description:
      "Development of simple learning tools and games for use in a NSW based Disability Support clinic.",
    tags: ["JavaScript", "React", "TailwindCSS"],
    link: "https://github.com/samueltint/learning-tools",
  },
  {
    title: "Processing Projects",
    type: "project",

    description: "A series of experiments in the Processing language",
    tags: ["Processing", "Java"],
    link: "https://github.com/samueltint/processing-projects",
  },
  {
    title: "Portfolio",
    type: "project",
    description:
      "A personal portfolio website to showcase my projects and experience.",
    tags: ["Typescript", "React", "TailwindCSS"],
    link: "https://github.com/samueltint/Portfolio-V2",
  },
  {
    title: "Bachelor of Engineering (Software)",
    type: "education",

    subtitle: "University of Technology Sydney",
    description:
      "\u2022 Fourth-year student\n\u2022 Expected graduation in 2026",
  },
];

export { entries };
