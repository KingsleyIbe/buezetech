'use client';
import { useState } from "react";
import { FaSearch, FaPencilRuler, FaClock, FaTools, FaVial, FaDeploydog, FaRuler, FaSave } from "react-icons/fa";

const steps = [
  {
    id: "A1",
    title: "Specifications & Planning",
    phase: "Phase A – R&D",
    icon: <FaSearch />,
    content: {
      heading: "A Wholesome Method for Developing Websites and Apps",
      description: [
        "After a number of facilitated discovery meetings, we develop a specifications document that precisely defines our project's objective.",
        "What features, for whom, and for what purpose are we developing?",
        "Which programming languages, frameworks, and services are best for balancing cost and functionality?",
        "Our group of experts assists in directing this procedure through:",
        "Suggestions for Features: Did you consider creating an admin panel to monitor analytics and user traffic, for instance?",
        "80/20 principles, which allow for the construction of a comparable feature at a significantly lower cost."
      ]
    }
  },
  {
    id: "A2",
    title: "Designs, Wireframe & Prototype",
    phase: "Phase A – R&D",
    icon: <FaPencilRuler />,
    content: {
      heading: "Visual Blueprint of the Solution",
      description: [
        "We craft user-centric wireframes and mockups to visualize how the solution will function.",
        "- Low-fidelity and high-fidelity designs",
        "- Clickable prototypes for early feedback"
      ]
    }
  },
  {
    id: "A3",
    title: "Estimates & Timeline",
    phase: "Phase A – R&D",
    icon: <FaClock />,
    content: {
      heading: "Resource & Schedule Forecast",
      description: [
        "We determine the project timeline and cost based on the features and tech stack.",
        "We segment the entire development into defined phases and sprints, each with measurable goals. You’ll get a full roadmap outlining when to expect deliverables and which feature sets will be covered in each sprint.",
        "A clear cost estimate is provided based on the scope, with detailed team roles. We match the right talent—designers, developers, QA engineers—to each stage of the project, optimizing both budget and performance."
      ]
    }
  },
  {
    id: "B1",
    title: "Build",
    phase: "Phase B – Development",
    icon: <FaTools />,
    content: {
      heading: "Execution of Development",
      description: [
        "Our engineers begin building the product based on the approved prototype and specification. We translate ideas into reality using scalable architecture and clean, efficient code.",
        "Frontend and backend development: The user interface and experience come to life as our frontend team codes pixel-perfect, responsive layouts. Simultaneously, the backend team sets up robust databases, logic, and security protocols to power your app.",
        "Integration of APIs and services: We seamlessly connect your product to essential services—payment gateways, third-party APIs, cloud tools, CRMs—ensuring it functions smoothly within your operational ecosystem."
      ]
    }
  },
  {
    id: "B2",
    title: "Test",
    phase: "Phase B – Development",
    icon: <FaVial />,
    content: {
      heading: "Quality Assurance & Bug Fixing",
      description: [
        "We conduct multiple test rounds to ensure the product is reliable and user-ready. From code quality to user interaction, we leave nothing to chance.",
        "Unit, integration, and usability testing: Each function is tested in isolation (unit testing), and then within the full system (integration testing). We also simulate real user behavior to ensure the experience is intuitive and bug-free.",
        "Security and performance audits: We scan for vulnerabilities, enforce best practices, and optimize performance—ensuring your product is not only safe but also lightning-fast under load."
      ]
    }
  },
  {
    id: "B3",
    title: "Deploy",
    phase: "Phase B – Development",
    icon: <FaDeploydog />,
    content: {
      heading: "Lauch Product In a Suitable Environment",
      description: [
        "We launch the product into your desired environment—whether it’s staging, production, or app stores. Our deployment process is streamlined to minimize downtime and risk.",
        "Cloud or on-prem deployment options: We offer flexible hosting solutions—from AWS, Vercel, and DigitalOcean to your preferred on-premise setup. We handle server configuration, DNS, environment variables, and CI/CD pipelines.",
        "Domain and SSL setup, app store publishing: We ensure your web app has a professional, secure domain presence with HTTPS encryption. For mobile products, we prepare and publish them on Google Play and the Apple App Store with proper metadata and compliance.",
      ]
    }
  },
  {
    id: "B4",
    title: "Measure",
    phase: "Phase B – Development",
    icon: <FaRuler />,
    content: {
      heading: "Measure The Performance of Product",
      description: [
        "We track how users interact with your product to understand performance, behavior, and ROI. This data helps you make smarter decisions post-launch.",
        "Analytics and KPI dashboards: Using tools like Google Analytics, Hotjar, or custom dashboards, we track user sessions, conversions, and drop-off points. You’ll know what’s working—and what’s not.",
        "User feedback loop: We help you gather user insights via forms, NPS scores, or in-app surveys to inform future updates and improvements."
      ]
    }
  },
  {
    id: "B5",
    title: "Maintain",
    phase: "Phase B – Development",
    icon: <FaSave />,
    content: {
      heading: "Continuous Maintainence of Product",
      description: [
        "Depending on client's budget, we ensure your product remains secure, up-to-date, and functioning as intended. Our maintenance plans are designed to support long-term growth and stability.",
        "Regular updates and monitoring: We release regular patches to update dependencies, fix bugs, and improve performance. Real-time monitoring alerts us of issues before your users notice.",
        "Feature enhancement and scalability support: As your user base grows, we assist with scaling infrastructure, optimizing databases, and rolling out new features aligned with your business goals."
      ]
    }
  }
];

export default function OurProcess() {
  const [selectedStep, setSelectedStep] = useState(steps[0]);

  return (
    <section className="flex flex-col md:flex-row gap-10 mt-[100px] p-6 md:p-12">
      <div className="flex flex-col gap-6 min-w-[280px]">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex items-center gap-4 cursor-pointer" onClick={() => setSelectedStep(step)}>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${selectedStep.id === step.id ? "bg-[#fd9800] text-white" : "bg-gray-100 text-[#fd9800]"}`}>
              {step.icon}
            </div>
            <div>
                 {idx === 0 || steps[idx - 1].phase !== step.phase ? (
                <p className="text-2xl text-gray-400 mt-1">{step.phase}</p>
              ) : null}
              <p className={`text-sm font-semibold ${selectedStep.id === step.id ? "text-[#fd9800]" : "text-gray-700"}`}>{step.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Content Panel */}
      <div className="flex-1 bg-white rounded-xl shadow p-6 md:p-10">
        <h2 className="text-[#fd9800] text-xl font-bold">{selectedStep.title}</h2>
        <h3 className="text-2xl font-semibold mt-2">{selectedStep.content.heading}</h3>
        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
          {selectedStep.content.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
