import DropdownMenu from "./dropdown";

const Header = () => {
  return (
    <header className="bg-transparent bg-white rounded-xl w-3/4  m-auto   ">
      <div className="container mx-auto py-3 flex   justify-center " > {/* Center the header */}
        <div className="flex items-center flex-grow-0 flex-shrink-0" style={{ flexBasis: '80%' }}> {/* Align items to center */}
          <img
            src="src\assets\Logo2.PNG"
            alt="Your Logo"
            className="h-13 w-12 rounded-full"
          />
          <h1 className="text-xl font-semibold ml-4 text-indigo-300">JOURNIO</h1>
                  </div>
        <DropdownMenu/> {/* Place DropdownMenu here */}
      
        {/* Add any additional header content here */}
      </div>
    </header>
  );
};


export default Header;


