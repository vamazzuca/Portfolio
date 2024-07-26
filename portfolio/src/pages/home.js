import '../styles/home.css'
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaPython,  FaNodeJs, FaJava, FaGithub, FaWindows, FaLinux, FaLinkedin    } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiCsharp, SiExpress,  SiAndroidstudio, SiPostman  } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { DiMysql, DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';
import { useInView } from "react-intersection-observer";
import { easing, fadeInUp } from "../animations/variants";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from 'react';

import logo from "../images/net.svg"
import Navbar from '../components/Navbar';


function Home() {

  
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

 
  

    return (
      <div className='flex flex-col'>
        <Navbar  />
      <div className="w-full h-full flex flex-col items-center" >
        
        <div className="w-4/5 h-screen flex flex-col items-center justify-center py-2" ref={ref}>
            <motion.div className="flex flex-col items-center pb-[18rem] gap-2"
              initial="hidden"
              animate={controls}
              variants={{
                visible: {
                    transition: {
                        delayChildren: 0.5,
                        staggerChildren: 0.5,
                        easing,
                    },
                },
            }}>
              <motion.h1 variants={fadeInUp} className="text-[#557A95] font-semibold text-6xl text-center">Vittorio Mazzuca</motion.h1>
              <motion.p variants={fadeInUp} className="text-gray-400 text-xl font-medium">Full-Stack Developer</motion.p>
          </motion.div>
          <div className='arrow'>
            <span></span>
            <span></span>
            <span></span>
          </div>
            
        </div>

          <div className='w-4/5 flex h-full items-center gap-4 flex-col pt-20' id="about">
          <header className='w-full grid grid-cols-2'>
            <div className='col-span-1'></div>
            <div className='flex items-center gap-5 col-span-2 md:col-span-1' >
              <h1 className='font-semibold text-[#557A95] text-3xl'>About</h1>
              <div className="h-[2px] w-full bg-[#557A95]"></div>
            </div>
          </header>
          
          <div className='w-full flex flex-col md:grid md:grid-cols-2 items-center'>
            <div className='flex  h-full justify-center p-2'>
              <div className='max-w-[28rem]'>
                <img className="object-cover rounded-xl" src={require('../images/profile.jpg')} alt='profile'></img>
              </div>
                
              
              
            </div>

            <div className='flex h-full flex-col text-gray-400 gap-4 p-4'>
                <p >Hey there! I'm Vittorio, a passionate full-stack software developer based in Edmonton, Alberta. I earned my Bachelor of Science degree in Computer Science from the University of Alberta, where I delved deep into the world of algorithms, data structures, and software development.</p>
                <p>I thrive on the dynamic challenges of coding and creating innovative solutions that bring ideas to life. Whether it's crafting front-end interfaces or architecting robust back-end systems, I love the entire spectrum of software development.</p>
                <p>Beyond coding, I have a passion for gaming—both digital and tabletop. From immersive video game worlds to strategic board games, I find joy in exploring new realms and honing my strategic thinking skills. One of my favorite pastimes is gathering with friends to tackle puzzles in escape rooms, where teamwork and quick thinking are key.</p>
                <p>I'm always seeking new opportunities to learn and grow in the ever-evolving landscape of technology. Let's connect and embark on exciting projects together!</p>
                <div className='flex gap-6 py-6'>
                  <HashLink smooth to="/#contact">
                    <button className="bg-[#557A95] hover:bg-opacity-80 active:bg-opacity-90 text-[#282828] font-bold py-2 px-6 rounded-full">Contact</button>
                  </HashLink>
                  
                </div>
              </div>
           
          </div>
          
          
        </div>

        <div className=' w-full sm:w-4/5 flex h-full items-center mt-10 gap-4 flex-col p-4 pt-20' id="skills">
            <header className='w-4/5 sm:w-full grid grid-cols-3'>
              <div className='flex items-center gap-5 col-span-3 md:col-span-2' >
                <h1 className='font-semibold text-[#557A95] text-3xl'>Skills</h1>
                <div className="h-[2px] w-full bg-[#557A95]"></div>
              </div>
          </header>
          
          <div className='flex flex-wrap flex-col lg:flex-row justify-evenly w-full mt-16'>
            <div className='flex flex-col items-center '>
              <h1 className='font-medium text-[#557A95] text-2xl'>Front-end</h1>
              <div className='flex flex-col h-[400px] border-2 w-[300px] rounded-lg mt-4 border-[#557A95] mb-8 mx-2 pb-10 p-2'>
              <div className="justify-evenly flex items-end flex-1">
                  <div className='flex flex-col items-center text-[#557A95]'>
                    <FaHtml5 size={40} style={{ color: "#557A95" }} />
                    <p className='font-medium'>HTML</p>
                  </div> 
                  <div className='flex flex-col items-center text-[#557A95]'>
                    <FaCss3Alt  size={40} style={{ color: "#557A95" }} />
                    <p className='font-medium'>CSS</p>
                  </div> 
                  
                </div>
                <div className="justify-evenly items-end flex flex-1">
                  <div className='flex flex-col items-center text-[#557A95]'>
                    <IoLogoJavascript size={40} style={{ color: "#557A95" }} />
                    <p className='font-medium'>Javascript</p>
                  </div> 
                  <div className='flex flex-col items-center text-[#557A95]'>
                    <SiTailwindcss size={40} style={{ color: "#557A95" }} />
                    <p className='font-medium'>Tailwind</p>
                  </div> 
                </div>
                <div className="justify-evenly flex items-end px-2 flex-1">
                  <div className='flex flex-col items-center text-[#557A95]'>
                    <FaReact size={40} style={{ color: "#557A95" }} />
                    <p className='font-medium'>React</p>
                  </div> 
                  <div className='flex flex-col items-center text-[#557A95]'>
                    <SiRedux size={40} style={{ color: "#557A95" }} />
                    <p className='font-medium'>Redux</p>
                  </div> 
                  
                </div>
                <div className="justify-evenly flex items-end px-2 flex-1">
          
                  <div className='flex flex-col items-center text-[#557A95]'>
                    <FaSass size={40} style={{ color: "#557A95" }} />
                    <p className='font-medium'>SASS</p>
                  </div> 
                  
                </div>
              </div>
            </div>
            <div className='flex flex-col items-center '>
              <h1 className='font-medium text-[#557A95] text-2xl'>Back-end</h1>
              <div className='flex flex-col h-[400px] border-2 w-[300px] rounded-lg mt-4 border-[#557A95] mb-8 mx-2 pb-10 p-2'>
                <div className="justify-between flex items-end px-4 flex-1">
                    <div className='flex flex-col items-center text-[#557A95]'>
                      <FaPython size={40} style={{ color: "#557A95" }} />
                      <p className='font-medium'>Python</p>
                    </div> 
                    <div className='flex flex-col items-center text-[#557A95]'>
                      <SiCsharp  size={40} style={{ color: "#557A95" }} />
                      <p className='font-medium'>C#</p>
                    </div> 
                    <div className='flex flex-col items-center text-[#557A95]'>
                      <img src={logo} style={{ width: "40px" }} alt='NET Icon'/>
                      <p className='font-medium'>.NET Core</p>
                    </div> 
                    
                </div>
                <div className="justify-evenly flex items-end px-2 flex-1">
                  <div className='flex flex-col items-center text-[#557A95]'>
                    <FaNodeJs size={40} style={{ color: "#557A95" }} />
                    <p className='font-medium'>NodeJs</p>
                  </div> 
                  <div className='flex flex-col items-center text-[#557A95]'>
                    <SiExpress  size={40} style={{ color: "#557A95" }} />
                    <p className='font-medium'>Express</p>
                  </div> 
                  
                </div>
                <div className="justify-between flex items-end px-4 flex-1">
                    <div className='flex flex-col items-center text-[#557A95]'>
                      <TbFileTypeSql size={40} style={{ color: "#557A95" }} />
                      <p className='font-medium'>SQL</p>
                    </div> 
                    <div className='flex flex-col items-center text-[#557A95]'>
                      <DiMysql  size={40} style={{ color: "#557A95" }} />
                      <p className='font-medium'>MySQL</p>
                    </div> 
                    <div className='flex flex-col items-center text-[#557A95]'>
                      <DiMongodb  size={40} style={{ color: "#557A95" }} />
                      <p className='font-medium'>MongoDB</p>
                    </div> 
                    
                </div>
                <div className="justify-evenly flex items-end px-2 flex-1">
          
                  <div className='flex flex-col items-center text-[#557A95]'>
                    <FaJava size={40} style={{ color: "#557A95" }} />
                    <p className='font-medium'>Java</p>
                  </div> 
                  
                </div>
                
              </div>
            </div>
            <div className='flex flex-col items-center '>
              <h1 className='font-medium text-[#557A95] text-2xl'>Technologies</h1>
              <div className='flex flex-col h-[400px] border-2 w-[300px] rounded-lg mt-4 border-[#557A95] mb-8 mx-2 pb-10 p-2'>
                <div className="justify-evenly flex items-end px-2 flex-1">
                    <div className='flex flex-col items-center text-[#557A95]'>
                      <FaGitAlt size={40} style={{ color: "#557A95" }} />
                      <p className='font-medium'>Git</p>
                    </div> 
                    <div className='flex flex-col items-center text-[#557A95]'>
                      < FaGithub   size={40} style={{ color: "#557A95" }} />
                      <p className='font-medium'>Github</p>
                    </div> 
                    
                
                </div>
                <div className="justify-evenly flex items-end px-2 flex-1">
                    <div className='flex flex-col items-center text-[#557A95]'>
                      <IoLogoFirebase size={40} style={{ color: "#557A95" }} />
                      <p className='font-medium'>Firebase</p>
                    </div> 
                    <div className='flex flex-col items-center text-[#557A95]'>
                      <SiPostman     size={40} style={{ color: "#557A95" }} />
                      <p className='font-medium'>Postman</p>
                    </div> 
                    
                
                </div>
                <div className="justify-evenly flex items-end px-2 flex-1">
                    <div className='flex flex-col items-center text-[#557A95]'>
                      <FaWindows  size={40} style={{ color: "#557A95" }} />
                      <p className='font-medium'>Windows</p>
                    </div> 
                    <div className='flex flex-col items-center text-[#557A95]'>
                      <FaLinux    size={40} style={{ color: "#557A95" }} />
                      <p className='font-medium'>Linux</p>
                    </div> 
                    
                
                </div>
                <div className="justify-evenly flex items-end px-2 flex-1">
                    <div className='flex flex-col items-center text-[#557A95]'>
                      <SiAndroidstudio  size={40} style={{ color: "#557A95" }} />
                      <p className='font-medium'>Android Studio</p>
                    </div> 
                    
                    
                
                </div>

              </div>
              
              
            </div>

          </div>
        </div>


        <div className='w-4/5 flex h-full items-center mt-10 gap-4 flex-col p-4 pt-20' id="portfolio">
            <header className='w-full grid grid-cols-3'>
              <div className='flex items-center gap-5 col-span-3 md:col-span-2' >
                <h1 className='font-semibold text-[#557A95] text-3xl'>Portfolio</h1>
                <div className="h-[2px] w-full bg-[#557A95]"></div>
              </div>
          </header>

          <div className='w-full mt-10 flex flex-col lg:grid lg:grid-cols-2 gap-4 items-center'>
            <div className='flex  h-full justify-center pt-4'>
              <div >
                <img className="object-cover" src={require('../images/finder.png')} alt='finder'></img>
              </div>
                
              
              
            </div>
            <div className='flex h-full flex-col justify-center text-gray-400 gap-4 sm:p-4'>
              <h1 className='text-center font-semibold text-[#557A95] text-3xl'>Tabletop Finder</h1>
              <div className='flex justify-center gap-4 whitespace-nowrap flex-wrap'>
                <div className='btn-primary'>React</div>
                <div className='btn-primary'>Tailwind</div>
                <div className='btn-primary'>NodeJS</div>
                <div className='btn-primary'>Express</div>
                <div className='btn-primary'>Javascript</div>
                <div className='btn-primary'>MongoDB</div>
              </div>
              <div className='flex sm:px-6 indent-4'>
                <p>Tabletop Finder is a dynamic full-stack web application tailored for board game enthusiasts seeking to connect, discover, and organize tabletop gaming events in their local communities. The social platform boasts intuitive user profiles, allowing individuals to showcase their interests and connect with like-minded peers. The robust event search functionality, powered by a scalable REST API backend developed with NodeJS and Express, enables discovery and participation in local tabletop events. A responsive frontend, devloped using React and Tailwind, ensures an enjoyable user experience across various devices. Additionally, a real-time group chat messaging system, implemented with socket.io, facilitates instant communication among event members. The efficient utilization of MongoDB for data storage ensures accessibility of event, profile, and group chat information, contributing to a thriving community of tabletop gaming enthusiasts. </p>
              </div>
              <div className='flex px-6 py-2 gap-6 justify-center lg:justify-start'>
                <button role='link' onClick={() => openInNewTab('https://github.com/vamazzuca/Tabletop-Finder')} className="bg-[#557A95] flex items-center gap-2 hover:bg-opacity-80 active:bg-opacity-90 text-[#282828] font-bold py-2 px-6 rounded-full">
                  <FaGithub size={20 } />
                  Github
                  </button>
                  
                  <button role='link' onClick={() => openInNewTab('https://tabletopfinder.vittoriomazzuca.ca')} className="bg-[#282828] hover:border-opacity-80 hover:text-opacity-80 active:text-opacity-90 active:border-opacity-90 text-[#557A95] border-2 border-[#557A95] font-bold py-2 px-6 rounded-full">
                    Website
                  </button>
              </div>
              
            </div>
            

          
          </div>

          <div className='w-full mt-24 flex flex-col lg:grid md:grid-cols-2 gap-4 items-center'>
            <div className='flex  h-full justify-center pt-4'>
              <div >
                <img className="object-cover" src={require('../images/labyrinthium.png')} alt='boardify'></img>
              </div>
                
              
              
            </div>
            <div className='flex h-full flex-col justify-center text-gray-400 gap-4 sm:p-4'>
              <h1 className='text-center font-semibold text-[#557A95] text-3xl'>Labyrinthium</h1>
              <div className='flex justify-center gap-4 whitespace-nowrap flex-wrap'>
                <div className='btn-primary'>React</div>
                <div className='btn-primary'>Tailwind</div>
                <div className='btn-primary'>.NET Core</div>
                <div className='btn-primary'>MySQL</div>
                <div className='btn-primary'>Javascript</div>
                <div className='btn-primary'>C#</div>
              </div>
              <div className='flex sm:px-6 indent-4'>
                  <p>Labyrinthium is a full-stack web application utilizing the Google Maps API to help users discover and explore local Canadian escape rooms, complete with user profiles for tracking completed rooms. The responsive frontend, developed using React and Tailwind,
                    features a robust search engine allowing users to find escape rooms based on location and other criteria, marking them on an interactive map for easy discovery. The scalable .NET backend with
                    MySQL ensures secure data management and integrates user authentication and tracking, enabling users to log in and track their completed escape rooms on personalized profiles.</p>
              </div>
              <div className='flex px-6 py-2 gap-6 justify-center lg:justify-start'>
                <button role="link" onClick={() => openInNewTab('https://github.com/vamazzuca/Labyrinthium')} className="bg-[#557A95] flex items-center gap-2 hover:bg-opacity-80 active:bg-opacity-90 text-[#282828] font-bold py-2 px-6 rounded-full">
                  <FaGithub size={20 } />
                  Github
                  </button>
                  
                  <button role='link' onClick={() => openInNewTab('https://labyrinthium.vittoriomazzuca.ca')} className="bg-[#282828] hover:border-opacity-80 hover:text-opacity-80 active:text-opacity-90 active:border-opacity-90 text-[#557A95] border-2 border-[#557A95] font-bold py-2 px-6 rounded-full">
                    Website
                  </button>
              </div>
              </div>
              
              
            

          
            </div>
            
            <div className='w-full mt-24 flex flex-col md:grid lg:grid-cols-2 gap-4 items-center'>
            <div className='flex  h-full justify-center pt-4'>
              <div >
                <img className="object-cover" src={require('../images/mazzuca.png')} alt='mazzuca'></img>
              </div>
                
              
              
            </div>
            <div className='flex h-full flex-col justify-center text-gray-400 gap-4 sm:p-4'>
              <h1 className='text-center font-semibold text-[#557A95] text-3xl'>Mazzuca Contracting Ltd.</h1>
              <div className='flex justify-center gap-4 whitespace-nowrap flex-wrap'>
                <div className='btn-primary'>React</div>
                <div className='btn-primary'>Tailwind</div>
                <div className='btn-primary'>CSS</div>
                <div className='btn-primary'>HTML</div>
                <div className='btn-primary'>Javascript</div>
              </div>
              <div className='flex sm:px-6 indent-4'>
                  <p>I've designed and developed a comprehensive website for Mazzuca Contracting Ltd., catering specifically to their needs as a general
                    contracting company specializing in home building. The website serves as a centralized platform for showcasing the company's portfolio of projects,
                    featuring detailed information about their services and a gallery of images highlighting their craftsmanship. Additionally, the website includes a section
                    dedicated to outlining the process through which Mazzuca Contracting designs and constructs homes, offering valuable insights to potential clients.
                    With user-friendly navigation and a seamless interface, the website also provides a convenient means for clients to get in touch with the company, ensuring a streamlined
                    communication channel for inquiries and consultations.</p>
              </div>
              <div className='flex px-6 py-2 justify-center lg:justify-start'>
                <button role="link" onClick={() => openInNewTab('https://www.mazzucacontracting.ca/')} className="bg-[#557A95] flex items-center gap-2 hover:bg-opacity-80 active:bg-opacity-90 text-[#282828] font-bold py-2 px-6 rounded-full">
                  Website
                </button>
              </div>
              </div>
              
              
            

          
          </div>

        </div>

        <div className='w-4/5 flex h-full items-center mt-20 gap-4 flex-col p-4' id="contact">
            <header className='w-full '>
              <div className='flex items-center gap-5 ' >
                <div className="h-[2px] w-full bg-[#557A95]"></div>
                <h1 className='font-semibold text-[#557A95] text-3xl'>Contact</h1>
                <div className="h-[2px] w-full bg-[#557A95]"></div>
              </div>
          </header>
          <div className='w-full mt-10 flex flex-col gap-4 items-center'>
              <div className='flex flex-col items-center w-full gap-1'>
                <h1 className='text-center font-medium text-gray-400 text-lg'>Email</h1>
                <button className='text-center font-semibold text-[#557A95] text-2xl sm:text-3xl' onClick={() => window.location = 'mailto:mazzuca115@gmail.com'}>mazzuca115@gmail.com</button>
                <p className='text-center font-medium text-gray-400 text-lg my-8'>OR</p>
                <h1 className='text-center font-medium text-gray-400 text-lg'>Socials</h1>
                <div className='flex gap-6 pt-3'>
                  <button className="text-[#557A95] hover:text-opacity-80 active:text-opacity-90 " role="link" onClick={() => openInNewTab('https://github.com/vamazzuca')}><FaGithub size={50}  /></button>
                  <button className="text-[#557A95] hover:text-opacity-80 active:text-opacity-90 " role="link" onClick={() => openInNewTab('https://www.linkedin.com/in/vittorio-mazzuca-48a590244/')}><FaLinkedin size={50 }/></button>
                </div>
              </div>
          </div>
        </div>

        <div className='w-4/5 flex h-full items-center mt-10 gap-4 flex-col p-4'>
            <header className='w-full '>
              <div className='flex items-center gap-5 ' >
                <div className="h-[2px] w-full bg-[#557A95]"></div>
                
              </div>
          </header>
          <div className='flex gap-2 text-[#557A95]'>
            <button  role="link" onClick={() => openInNewTab('https://github.com/vamazzuca/Portfolio')}><FaGithub size={30} /></button>
            <p className="text-lg font-medium">VMazzuca</p>
          </div>
        </div>
        </div>
      </div>
    );
  }
  
export default Home;