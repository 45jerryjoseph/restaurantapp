import React, { useEffect, useState } from 'react'
import {IoFastFood} from 'react-icons/io5'
import {Categories} from '../utils/Data'
import RowContainer from './RowContainer'
import {useStateValue} from '../context/stateProvider'

import { motion } from 'framer-motion'
const MenuContainer = () => {
   const [filter, setfilter] = useState("chicken");
    // whenever their is change we are going to rerender using use Effect
    useEffect( ()=> {},[filter])

    const [{foodItems} , dispatch] =useStateValue()

  return (
    <section className='w-full my-6 id="menu'>
       <div className=' w-full flex flex-col items-center justify-center'>
         <p className=' text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content-start before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto'>Our Hot Dishes</p>
        <div className='w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none'>
            { Categories && Categories.map( category =>(
                <motion.div whileTap={{scale : 0.75}} key={category.id} onClick = {() => setfilter(category.urlParamName)}  className= {`group ${filter === category.urlParamName ? "bg-cartNumBg" : "bg-white"}  w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 justify-center items-center duration-150 transition-all ease-in-out hover:bg-red-500`}>
                    <div className= {`w-10 h-10 rounded-full shadow-lg ${filter === category.urlParamName ? "bg-white" : "bg-cartNumBg"} group-hover:bg-card flex items-center justify-center`}>
                        <IoFastFood className= {`  ${filter === category.urlParamName ?  "text-textcolor" : "text-white"}  group-hover:text-textcolor text-lg`} />
                    </div>
                    <p className= {`text-sm ${filter === category.urlParamName ? ' text-white ' : ' text-textcolor'} group-hover:text-white`}>{category.name}</p>
                </motion.div>
            ))}
        </div>
        <div className=' w-full '>
            < RowContainer flag ={false } data ={foodItems?.filter(n => n.category === filter)} />
        </div>
       </div>
    </section>
  )
}

export default MenuContainer