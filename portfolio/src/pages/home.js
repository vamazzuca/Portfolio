import '../styles/home.css'
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { FaReact, FaHtml5, FaCss3Alt, FaSass, FaPython,  FaNodeJs, FaJava, FaGithub, FaWindows, FaLinux    } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiCsharp, SiExpress,  SiAndroidstudio, SiPostman  } from "react-icons/si";
import { TbFileTypeSql } from "react-icons/tb";
import { DiMysql, DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa6";

import logo from "../images/net.svg"


function Home() {
    return (
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-4/5 h-screen flex flex-col items-center justify-center py-2">
          <div className="flex flex-col items-center pb-[10rem] gap-2">
            <h1 className="text-[#557A95] font-semibold text-6xl text-center">Vittorio Mazzuca</h1>
            <p className="text-gray-400 text-xl font-medium">Full-Stack Developer</p>
          </div>
          <div className='arrow'>
            <span></span>
            <span></span>
            <span></span>
          </div>
            
        </div>

        <div className='w-4/5 flex h-full items-center gap-4 flex-col py-2'>
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
                <p>I thrive on the dynamic challenges of coding and creating innovative solutions that bring ideas to life. Whether it's crafting elegant front-end interfaces or architecting robust back-end systems, I love the entire spectrum of software development.</p>
                <p>Beyond coding, I have a penchant for gaming—both digital and analog. From immersive video game worlds to strategic board games, I find joy in exploring new realms and honing my strategic thinking skills. One of my favorite pastimes is gathering with friends to tackle puzzles in escape rooms, where teamwork and quick thinking are key.</p>
                <p>I'm always seeking new opportunities to learn and grow in the ever-evolving landscape of technology. Let's connect and embark on exciting projects together!</p>
                <div className='flex gap-6 py-6'>
                  <button className="bg-[#282828] hover:border-opacity-80 hover:text-opacity-80 active:text-opacity-90 active:border-opacity-90 text-[#557A95] border-2 border-[#557A95] font-bold py-2 px-6 rounded-full">Contact</button>
                  <button className="bg-[#557A95] hover:bg-opacity-80 active:bg-opacity-90 text-[#282828] font-bold py-2 px-6 rounded-full">Download CV</button>
                </div>
              </div>
           
          </div>
          
          
        </div>

        <div className='w-4/5 flex h-full items-center mt-20 gap-4 flex-col p-4'>
            <header className='w-full grid grid-cols-2'>
              <div className='flex items-center gap-5 col-span-2 md:col-span-1' >
                <h1 className='font-semibold text-[#557A95] text-3xl'>Skills</h1>
                <div className="h-[2px] w-full bg-[#557A95]"></div>
              </div>
          </header>
          
          <div className='flex flex-wrap flex-col lg:flex-row justify-evenly w-full mt-10'>
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


        <div className='w-4/5 flex h-full items-center mt-20 gap-4 flex-col p-4'>
            <header className='w-full grid grid-cols-2'>
              <div className='flex items-center gap-5 col-span-2 md:col-span-1' >
                <h1 className='font-semibold text-[#557A95] text-3xl'>Projects</h1>
                <div className="h-[2px] w-full bg-[#557A95]"></div>
              </div>
          </header>

          <div className='w-full mt-10 flex flex-col md:grid md:grid-cols-2 items-center'>
            <div className='flex  h-full justify-center p-2'>
              <div className=''>
                <img className="object-cover" src={require('../images/boardify.png')} alt='boardify'></img>
              </div>
                
              
              
            </div>
            <div className='flex h-full flex-col justify-center text-gray-400 gap-4 p-4'>
              <h1 className='text-center font-semibold text-[#557A95] text-3xl'>Boardify</h1>
            </div>

          </div>
        </div>


      </div>
    );
  }
  
export default Home;