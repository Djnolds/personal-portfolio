import React from 'react'
import { useState } from 'react'
import dashboard from "../assets/dashboard-app.webp";
import agents from "../assets/AI_agents.jpg";
import chatbots from "../assets/Conversational_chatbots.jpg";
import confusion from "../assets/Confusion_matrix.png";
import correlation from "../assets/correlation_map.png";
import RevealOnScroll from '../Ui/RevealOnScroll';


function Projects() {
  const [projects] = useState([
    {
      image: dashboard,
      name: "Dashboard App",
      brief:
        "Scalable Dashboard App with CRUD operations manages all the bookings, users, guests and services.",
    },
    {
      image: agents,
      name: "AI Agents",
      brief:
        "Autonomous AI agents using LangGraph, make, n8n for multi-agent collaboration and task execution.",
    },
    {
      image: chatbots,
      name: "Conversational Chatbots",
      brief:
        "Developed a conversational chatbots, virtual assistant that can engage users in a human like manner.",
    },
    {
      image: confusion,
      name: "App User Churn",
      brief:
        "The project aim to increase growth by preventing monthly user churn through the use of ML model.",
    },
    {
      image: correlation,
      name: "HR Employees Satisfaction",
      brief:
        "Use a model to predict whether an employee will leave the company based on level of satisfaction.",
    }
  ]);
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center font-mono justify-center py-20">

        <RevealOnScroll>
      
         <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text 
              text-transparent text-center ">
              Features Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 
                hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.brief} </p>
                  <div className="flex flex-wrap sm:items-center gap-2 mb-4">
                  {/* {["Python", "OpenAI", "LangChain", "LangGraph", "React"].map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-balance hover:bg-blue-500/20 
                      hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition "
                    >
                      {tech}
                    </span> 
                  ))}  */}
                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 
                       hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]  cursor-pointer rounded-xl ">
                    <p className="text-gray-200">View Project</p>
                    <a
                      href="https://github.com/Djnolds"
                      className="flex justify-between items-center font-bold text-blue-400 transition-colors hover:text-white"
                    >
                      {" "}
                      <img src={project.image} alt={`${project.name}Image `} />
                    </a>
                  </div>
                </div>
              </div>
            ))} 
          </div>
        </div> 
      </RevealOnScroll>
    </section>
  );
}

export default Projects;