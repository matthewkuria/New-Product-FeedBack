

// eslint-disable-next-line react/prop-types
function Logo({isOpen, setIsOpen}){
    return(
        <>
            <div className=" NAV flex items-center justify-between bg-mobile bg- pb-4 pl-6 pr-6 pt-4 text-neutral-white md:flex-1 md:justify-normal md:rounded-lg md:bg-tablet md:pb-6 md:pr-0 md:pt-[103px] lg:flex-none lg:bg-desktop lg:pt-[62px]">
            <div className="text-white">
              <h2 className="text-[15px] md:text-xl">Frontend Mentor</h2>
              <h4 className="text-[13px] font-normal md:text-[15px] lg:text-lg">
                Feedback Board
              </h4>
            </div>
        <div className="md:hidden">
          {isOpen ? (
            <button              
              onClick={() => setIsOpen((open) => !open)}
            >=</button>
          ) : (
            <button       
              className="p-3 bg-gray-500"
              onClick={() => setIsOpen((open) => !open)}
            >
              X
            </button>
          )}
        </div>
      </div>
        </>
    )
}
export default Logo