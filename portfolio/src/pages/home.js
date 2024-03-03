import '../styles/home.css'


function Home() {
    return (
      <div className="w-full h-full flex flex-col items-center">
        <div className="w-4/5 h-screen flex flex-col items-center p-4 justify-center">
          <div className="flex flex-col items-center pb-[10rem] gap-2">
            <h1 className="text-[#557A95] font-semibold text-6xl text-center">Vittorio Mazzuca</h1>
            <p className="text-gray-400 text-xl font-medium">Fullstack Developer</p>
          </div>
          <div className='arrow'>
            <span></span>
            <span></span>
            <span></span>
          </div>
            
        </div>
        <div>test</div>
      </div>
    );
  }
  
export default Home;