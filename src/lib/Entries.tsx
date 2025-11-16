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
    page: "/Chaos1",
    images: [
      {
        original: ChaosDashboard,
        description: `Simple display and management of a user's projects. The website also supports individually shared projects and organisation level resources.`,
      },
      {
        original: ChaosKanban,
        description: `Kanban board, with rearrangable cards to represent tasks. These tasks can then be imported into the main project framework.`,
      },
    ],
    body: (
      <>
        <h2 className="italic text-slate-500 text-xl">Dec 2023 - Aug 2024</h2>
        <div className="pt-4">
          <p className="pl-2 text-md sm:text-xl whitespace-pre-wrap ">
            Chaos 1 are a defence innovation company focused on integrating
            technology with military planning processes. The company had
            developed a framework aimed at streamlining existing workflows. This
            project involved the development of a digital platform to improve
            the usability of the framework and support collaborative planning.
            The platform also supported existing frameworks such as Kanban and
            the Military Appreciation Process (MAP),. the user experience was
            enhanced with collaborative editing features and an AI Chatbot,
            powered by Vertex AI.
          </p>
        </div>
        <div className="pt-4">
          <h2 className="xl:leading-loose text-2xl xl:text-3xl">{`Background\n`}</h2>
          <p className="pl-2 text-md sm:text-xl whitespace-pre-wrap">
            I was connected to Chaos 1 through the Green Gate internship
            program, a joint program between UTS and USYD students. Our team was
            tasked with acting as the company's consultants, designers and
            developers. I was selected as team leader, which added additional
            organisation and project management duties on top of my
            contributions to the website development. After completing the
            program, I was rehired individually and continued the project
            alongside a team of senior developers.
          </p>
        </div>

        <div className="pt-4 pb-8">
          <h2 className="xl:leading-loose text-2xl xl:text-3xl">{`My Contributions\n`}</h2>
          <p className="pl-2 text-md sm:text-lg whitespace-pre-wrap italic">{`Under NDA - original screenshots cannot be disclosed. Recreated designs have been provided.\n`}</p>
        </div>
      </>
    ),
  },
  {
    id: "police",
    title: "RBT/RDT Mobile App",
    type: "experience",
    subtitle: "NSW Police",
    page: "/NSWPolice",
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
            The current workflow for NSW police to record and store the data
            collected during RBT and RDT stops is currently inefficient due to
            the reliance on hand written reports. To streamline these processes,
            a mobile app was being designed as a hub for many police reporting
            tasks. Our team was tasked with developing a prototype for a digital
            form. My primary responsibility was in UI/UX design, where I focused
            on creating a simple and intuitive interface to ensure that officers
            could efficiently input data during stops.
          </p>
        </div>{" "}
        <div className="pt-4">
          <h2 className="xl:leading-loose text-2xl xl:text-3xl">{`Background\n`}</h2>
          <p className="pl-2 pb-6 text-md sm:text-xl whitespace-pre-wrap">
            This project was completed as part of the UTS Software Development
            Studio, where teams of students were able to complete a project for
            a real world client. Throughout the project we were tasked with
            acting as consultants for our clients to elucidate their needs, and
            regularly provide samples and reports to ensure the product matched
            their intended vision.
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

    description:
      "A simulation of a slime mold (Physarum Polycephalum) to explore organic simulations.",
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
    title: "Bachelors of Engineering (Software)",
    type: "education",

    subtitle: "University of Technology Sydney",
    description: "\u2022 4th year student\n\u2022 Expected graduation in 2026",
  },
];

export { entries };
