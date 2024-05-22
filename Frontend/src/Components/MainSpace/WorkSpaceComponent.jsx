
import CardContainer from "./CardContainer"
import MainSideBar from "./MainSideBar"


//bg-gradient-to-r from-primary to-eleventh


const WorkspaceComponent = () => {

    return (
        <div 
            className={'grid grid-cols-5 grid-rows-5 gap-2  '}
            >
            <aside className= 'row-span-5 bg-primary bg-opacity-70 rounded-l-2xl '> 
                <MainSideBar />
            </aside>

            <main className="col-span-4 row-span-5 rounded-r-2xl  "> 
                <div className=' col-start-1 row-start-1 rounded-tr-2xl  bg-fourth bg-opacity-100 '>
                    <p>awdsd</p>
                </div>
                <div className="row-start-2 bg-gradient-to-b from-primary to- bg-opacity-75 rounded-br-2xl">
                <CardContainer />
                </div>
                
            </main>
            
        </div>
    )


}


export default WorkspaceComponent