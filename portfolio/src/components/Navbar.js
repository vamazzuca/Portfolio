import { useState } from "react";
import NavLink from "./NavLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import MenuOverlay from "./MenuOverlay";



function Navbar() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }


    const navLinks = [
        {
            title: "About",
            link: "/#about"
        },
        {
            title: "Skills",
            link: "/#skills"
        },
        {
            title: "Projects",
            link: "/#projects"
        },
        {
            title: "Contact",
            link: "/#contact"
        }
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#282828] bg-opacity-90">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <button onClick={scrollToTop}><img className="h-12" src={require('../images/logo.png')} alt="LOGO" ></img></button>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true) } className="flex items-center px-3 py-2 border rounded border-[#557A95] text-[#557A95] hover:text-gray-400 hover:border-gray-400">
                            <RxHamburgerMenu className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false) }className="flex items-center px-3 py-2 border rounded border-[#557A95] text-[#557A95] hover:text-gray-400 hover:border-gray-400">
                            <IoMdClose className="h-5 w-5" />
                        </button>    
                    )}
                </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink link={link.link} title={link.title} />
                            </li>
                    ))}
                </ul>

            </div>
            </div>
            {navbarOpen ? <MenuOverlay links={ navLinks} /> : null}
        </nav>
        
    )
    

}


export default Navbar;