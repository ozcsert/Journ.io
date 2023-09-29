


// eslint-disable-next-line react/prop-types
const SideBarIcon = ({icon, text}) => {
    return (
    <div className= "sidebar-icon group"> 
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100" >
            {text}
        </span>
    </div>
    )
}; 



export default SideBarIcon;