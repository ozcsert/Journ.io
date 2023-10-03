

const Header = () => {
  return (
    <header className="bg-white bg-transparent rounded-xl shadow-lg ">
      <div className="container mx-auto py-4 flex items-center justify-between ">
        <div className="flex items-center">
          <img
            src="src\assets\Logo2.PNG"
            alt="Your Logo"
            className="h-13 w-12 rounded-full"
          />
          <h1 className="text-xl font-semibold ml-4 text-orange-300 ">JOURNIO</h1>
        </div>
        {/* Add any additional header content here */}
      </div>
    </header>
  );
};

export default Header;