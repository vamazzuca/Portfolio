


const NavLink = (props) => {

    const executeScroll = () => props.ref.current.scrollIntoView()

    return (
        <div
            onClick={executeScroll}
            className="block py-2 pl-3 pr-4 text-[#557A95] sm:text-xl font-medium rounded md:p-0 hover:text-gray-400 cursor cursor-pointer"
        >
            {props.title}
        </div>
    )
}


export default NavLink;