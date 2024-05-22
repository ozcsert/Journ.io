import Header from './Header'
import CardContainer from './MainSpace/CardContainer';
import '../cardContainer.css'

import WorkspaceComponent from './MainSpace/WorkSpaceComponent';




const MainDesktop= () => {

    return (
        <div className= "flex m-auto mt-10 w-3/4 h-96 "   >
            <WorkspaceComponent />
        </div>
    )


}


export default MainDesktop