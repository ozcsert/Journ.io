


// eslint-disable-next-line react/prop-types
const SideBarIcon = ({icon, text, onClick }) => {
    return (
    <div className= "sidebar-icon group" onClick={onClick}> 
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100" >
            {text}
        </span>
    </div>
    )
}; 



export default SideBarIcon;