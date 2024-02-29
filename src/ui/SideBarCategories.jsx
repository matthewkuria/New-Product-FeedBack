
import {  Link } from "react-router-dom";
export default function SideBarCategories(){
    return(
       
            <div className="">
                <div className="rounded-lg bg-white text-[#4661E6] font-bold w-1/2 h-full p-5">
                <Link to="/all" className="text-white py-1 px-3 bg-[#4661E6] rounded-lg hover:bg-[#CFD7FF]">ALL </Link>              
                <Link to="/ui" className="m-3 py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">UI
                    </Link>
                    <button className="mx-3 py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">
                    <Link to="/ux">UX</Link>
                    </button>
                    <button className="my-3  py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">
                    <Link to="/enhancement">Enhancement</Link>
                    </button>
                    <button className="mx-3 py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">
                    <Link to="/bug">Bug</Link>
                    </button>
                    <button className="mx-3 py-1 px-3 bg-[#F2F4FF] rounded-lg hover:bg-[#CFD7FF]">
                    <Link to="/feature">Feature</Link>
                    </button>
                </div>
                   

        </div> 
        
    )
}