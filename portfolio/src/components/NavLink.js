import { HashLink } from 'react-router-hash-link';


const NavLink = ({title, link}) => {

    

    return (
        <HashLink smooth to={link}>
            <div className="block py-2 pl-3 pr-4 text-[#557A95] sm:text-xl font-medium rounded md:p-0 hover:text-gray-400 cursor cursor-pointer">
                {title}
            </div>
        </HashLink>
    )
       
       
}


export default NavLink;