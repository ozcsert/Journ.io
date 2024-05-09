
import CardContainer from "./CardContainer"
import MainSideBar from "./MainSideBar"





const WorkspaceComponent = () => {

    return (
        <div 
            className={'grid grid-cols-5 grid-rows-5 gap-2  '}
            >
            <aside className= 'row-span-5 bg-gradient-to-br from-slate-400 to-indigo-500 rounded-l-2xl '> 
                <MainSideBar />
            </aside>

            <main className="col-span-4 row-span-5 rounded-r-2xl  "> 
                <div className=' col-start-1 row-start-1 bg-gradient-to-br rounded-tr-2xl  from-slate-400 to-indigo-500  '>
                    <p>awdsd</p>
                </div>
                <div className="row-start-2 bg-gradient-to-br from-slate-400 rounded-br-2xl">
                <CardContainer />
                </div>
                
            </main>
            
        </div>
    )


}


export default WorkspaceComponent