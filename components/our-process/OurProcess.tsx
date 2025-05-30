'use client';
import { useState } from "react";
import { FaSearch, FaPencilRuler, FaClock, FaTools, FaVial } from "react-icons/fa";

const steps = [
  {
    id: "A1",
    title: "Specifications & Planning",
    phase: "Phase A – R&D",
    icon: <FaSearch />,
    content: {
      heading: "Comprehensive Approach to Website and App Development Process",
      description: [
        "Through several guided discovery sessions, we build out a specifications document that clearly outlines our project goal.",
        "- What are we building, for what users, and with what features?",
        "- What languages, frameworks & services should we use to optimize cost vs functionality?",
        "Our team of professionals help guide this process through feature suggestions, scalability considerations, and risk mitigation."
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
        "- Breakdown of phases, sprint durations, and key milestones",
        "- Budget projection and team allocation"
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
        "Our engineers begin building the product based on the approved prototype and specification.",
        "- Frontend and backend development",
        "- Integration of APIs and services"
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
        "We conduct multiple test rounds to ensure the product is reliable and user-ready.",
        "- Unit, integration, and usability testing",
        "- Security and performance audits"
      ]
    }
  }
];

export default function OurProcess() {
  const [selectedStep, setSelectedStep] = useState(steps[0]);

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 md:p-12">
      {/* Timeline */}
      <div className="flex flex-col gap-6 min-w-[280px]">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex items-center gap-4 cursor-pointer" onClick={() => setSelectedStep(step)}>
            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${selectedStep.id === step.id ? "bg-pink-500 text-white" : "bg-gray-100 text-pink-500"}`}>
              {step.icon}
            </div>
            <div>
              <p className={`text-sm font-semibold ${selectedStep.id === step.id ? "text-pink-500" : "text-gray-700"}`}>{step.title}</p>
              {idx === 0 || steps[idx - 1].phase !== step.phase ? (
                <p className="text-xs text-gray-400 mt-1">{step.phase}</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* Content Panel */}
      <div className="flex-1 bg-white rounded-xl shadow p-6 md:p-10">
        <h2 className="text-pink-500 text-xl font-bold">{selectedStep.title}</h2>
        <h3 className="text-2xl font-semibold mt-2">{selectedStep.content.heading}</h3>
        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700">
          {selectedStep.content.description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
