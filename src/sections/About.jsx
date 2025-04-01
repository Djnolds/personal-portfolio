
import RevealOnScroll from '../Ui/RevealOnScroll'

function About() {
    const skills= ["Python", "LangGraph", "Pandas", "React", "Machine Learning",
        "LangChain", "TailwindCSS", "Natural Language Processing", "API Integration", 
        "Exploratory Data Analysis", "Data Visualization", "HTML", "Transformers",
        "Classification", "AWS", "Scikit-learn","FastAPI", "Docker", "Flask", "JavaScript"
    ];

  return (
    <section id="about" className="min-h-screen font-mono flex items-center justify-center py-20">
      
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r 
          from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            About Me
          </h2>
          
          <div className="p-8 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 
          transition-all ">
             <p className="text-grey-300 mb-5 text-xl">
                Passionate AI developer with expertise in building scalable web 
                applications, machine learning models and creating innovative solutions.
             </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">Skills</h3>
              
              <div className="flex justify-center flex-wrap gap-2">
                { skills.map((skill, index) => (
                <span 
                  className="bg-blue-500/10 text-blue-400 py-1
                  px-3 rounded-full text-balance hover:bg-blue-500/20
                  hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)] transition"
                  key={index}>
                  {skill}
                </span>
               ))}
              </div>
            </div>
            {/* <div className="p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-2xl text-center font-bold mb-8">
                Education
              </h3>
              <ul className="pl-5 list-disc list-inside text-lg text-grey-300">
                <li>
                   <strong>
                    <en>Master of Science</en>
                   </strong>
                        University of Benin
                </li>
                <li>Google Advanced Data Analytics Certificate,
                    Google Data Analytics Professional Certificate, 
                    Web Development</li>
              </ul>
            </div> */}
            
            <div className="p-6 mb-6 rounded-xl border-white/10 border-2 hover:-translate-y-1 
                transition-all">
              <h3 className="text-2xl text-center font-bold mb-4">
                Work Experience
              </h3>
              <ul className="pl-5 list-disc list-inside text-lg text-grey-300">
                <li>
                   <strong className="text-blue-400">
                    <em>Data Scientist / machine Learning | (Freelance / Contract)</em>
                   </strong>
                   <br /> Remote | 2022 - Present <br />
                   - Developed and deployed machine learning models such as Random Forest
                    Logistic Regression for various clients. <br />- Created and maintained 
                    data pipelines for data collection, cleaning, and preprocessing. <br />
                    <br />* 🚀 Retrieval-Augmented Generation (RAG) Chatbots <br /> 
                    - Built AI chatbots that analyze large documents to provide accurate, 
                    context-aware answers. 
                    <br />- Integrated LangChain, OpenAI APIs, and vector databases like Qdrant
                     & Pinecone for efficient data retrieval. <br /> <br />* Custom AI Chatbots <br />
                     - Built LLM-powered chatbots for customer support, HR automation, 
                     and knowledge management. <br />- Integrated API workflows, multi-turn conversations, 
                     and real-time dashboard monitoring. <br /> <br />* Multi-Agent AI Systems <br />
                     - Developed autonomous AI agents with LangGraph and CrewAI for collaborative 
                     task execution.
                    <br />- Used Celery and Redis for efficient task scheduling and state management. <br />
                    <br />* Fine-Tuning OpenAI Models <br />
                     - Fine-tuned OpenAI models like GPT-4o, optimizing them for 
                     domain-specific applications. <br /> <br />* 🎙️ Speech-to-Text & Text-to-Speech Applications <br />
                     - Designed amd developed high-accuracy speech recognition and synthesis systems for accessibility, 
                     transcription, and voice-enabled applications. <br /> <br />* Natural Language to SQL (NL2SQL) <br />
                     - Developed AI solutions that convert natural language queries into SQL, enabling seamless 
                     database interaction without SQL expertise.
                    <br />- Built a secure, scalable FastAPI backends with MySQL integration. <br />
                    <br />* 📄 OCR & Document Parsing <br />
                     - Automated data extraction from scanned documents, and invoices using OCR and NLP-based
                      parsing techniques.
              
                    
                {/* <li>
                  <strong className="text-blue-400">
                    <em>Senior Research Assistant | National Biotechnology Development Agency</em>
                  </strong>
                     <br /> October 2017 - November 2024 <br/>
                     <br />Played a key role in research projects, 
                     gathered and analyzed data from over 50 test subjects, achieving 57% improved agricultural 
                     production process. <br />
                     - Contributed to the creation of a comprehensive database of environmental factors affecting 
                     crop yield, resulting in improved agricultural practices. <br />
                     - Collecteds, cleaned, and analyzed large datasets from various sources to deliver actionable 
                     insights resulting in improved productions. <br />
                     - Conducted literature reviews and synthesized research findings. <br />
                     - Collaborated with cross-functional teams to execute successful production processes, resulting in 
                     a 32% increase in production. <br />
                     - Performed data exploration and visualization using Tableau and Excel, facilitating data-driven 
                     decision-making processes.
                </li> */}
                </li>
              </ul>
    
            </div>
          
          </div>
        </div>
      </RevealOnScroll>
    </section>
  )
}

export default About;
