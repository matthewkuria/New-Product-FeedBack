import { Link } from "react-router-dom"
function SideBarRoadmap(){
    return(
        <div className=" rounded-lg ">
            <p className="font-bold text-left text-[#3A4374]">Roadmap <span className="font-normal text-[#4661E6] ml-16"><Link to="/roadmap" className="hover:underline">View</Link></span></p>
            <div className="flex items-center  pt-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="#F49F85"/>
            </svg>
            <p className="ml-4">Planned <span className="ml-16 font-bold text-[#647196]">2</span></p>
            </div>
            <div className="flex items-center py-5 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
            </svg>
            <p className="ml-4">In-Progress <span className="ml-11 font-bold text-[#647196]">3</span></p>
            </div>
            <div className="flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
            </svg>
            <p className="ml-4">Live <span className="ml-24 font-bold text-[#647196]">1</span></p>
            </div>
        </div> 
    ) 
}
export default  SideBarRoadmap;