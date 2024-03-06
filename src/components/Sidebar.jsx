import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AiOutlineAlipay } from "react-icons/ai";
import {MdOutlineCancel} from "react-icons/md" 
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {links} from "../data/dummy"

const Sidebar = () => {
  const activeMenu = true
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-whit text-md m-2"
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-whit text-md text-gray-700 dark-gray-300 dark:hover:text-black hover:bg-light-gray m-2"
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={()=>{}} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-blue-900'>
            <AiOutlineAlipay />
            <span>INTENSIFY</span>
          </Link>
          <TooltipComponent content="Menu" position='BottomCenter'>
            <button type='button' className='text-xl rounded-full p-3 hover:bg-light-gray nt-4 block md:hidden'>
              <MdOutlineCancel/>
            </button>
          </TooltipComponent>
        </div>

        <div>
          {links.map((item)=>{
            return(
              <div key={item.title}>
                 <p className='text-blue-500 m-3 mt-4 uppercase'>
                   {item.title}
                 </p> 
                 {item.links.map((link)=>(
                  <NavLink to={`/${link.name}`} key={link.name} onClick={() =>{}} className={({isActive})=>isActive ? activeLink: normalLink}>
                      {link.icon}
                      <span className='capitalize'>
                        {link.name}
                      </span>
                  </NavLink>
                 ))}
              </div>
            )    
          })}
        </div>
      </>)}
    </div>
  )
}

export default Sidebar