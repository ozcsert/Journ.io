


// eslint-disable-next-line react/prop-types
const SideBarIcon = ({icon, text, onClick, className, classNameText }) => {
    return (
    <div className = {className} onClick={onClick}> 
        {icon}
        <span className = {classNameText} >
            {text}
        </span>
    </div>
    )
}; 



export default SideBarIcon;