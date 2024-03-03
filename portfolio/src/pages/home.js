import '../styles/home.css'


function Home() {
    return (
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-11/12 h-screen flex flex-col items-center justify-center">
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
        <div className='w-11/12 flex h-full items-center gap-4 flex-col'>
          <header className='w-full grid grid-cols-2'>
            <div className='col-span-1'></div>
            <div className='flex items-center gap-5 col-span-2 md:col-span-1' >
              <h2 className='font-semibold text-[#557A95] text-2xl'>About</h2>
              <div className="h-[2px] w-full bg-[#557A95]"></div>
            </div>
          </header>
          
          <div className='w-full flex flex-col md:grid md:grid-cols-2 items-center'>
            <div className='flex  h-full justify-center p-2'>
              <div className='rounded-xl'>
                <img className="object-cover rounded-xl" src={require('../images/profile.jpg')} alt='profile'></img>
              </div>

              
            </div>

            <div className='flex h-full flex-col text-gray-400 gap-4 p-2'>
                <p >Hey there! I'm Vittorio, a passionate full-stack software developer based in Edmonton, Alberta. I earned my Bachelor of Science degree in Computer Science from the University of Alberta, where I delved deep into the world of algorithms, data structures, and software engineering.</p>
              <p>I thrive on the dynamic challenges of coding and creating innovative solutions that bring ideas to life. Whether it's crafting elegant front-end interfaces or architecting robust back-end systems, I love the entire spectrum of software development.
              </p><p>Beyond coding, I have a penchant for gaming—both digital and analog. From immersive video game worlds to strategic board games, I find joy in exploring new realms and honing my strategic thinking skills. One of my favorite pastimes is gathering with friends to tackle puzzles in escape rooms, where teamwork and quick thinking are key.
              </p><p>I'm always seeking new opportunities to learn and grow in the ever-evolving landscape of technology. Let's connect and embark on exciting projects together!</p>
              </div>
           
          </div>
          
          
        </div>
      </div>
    );
  }
  
export default Home;