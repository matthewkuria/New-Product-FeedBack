import { useMediaQuery } from 'react-responsive'
import Logo from '../ui/Logo';
import SideBarCategories from '../ui/SideBarCategories';
import SideBarRoadmap from '../ui/SideBarRoadMap';

// eslint-disable-next-line react/prop-types
function SideBar({isOpen, setIsOpen }){
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
    return(
        <aside className=" md:flex md:justify-between md:gap-[10px] md:px-10 md:pb-10 md:pt-14 lg:ml-auto lg:flex lg:max-w-[285px] lg:flex-col lg:justify-normal lg:gap-6 lg:pl-0 lg:pr-[30px] lg:pt-24">
             <Logo isOpen={isOpen} setIsOpen={setIsOpen} />
             {!isMobile && (
                <>
                <SideBarCategories />
                <SideBarRoadmap />
                
                </>
            )}
            {isOpen && (
                <div className="absolute right-0 z-10 h-screen max-w-[270px] bg-neutral-white">
                <SideBarCategories />
                <SideBarRoadmap />
               
                </div>
            )}     
            

        </aside>
        
    )
}
export default SideBar