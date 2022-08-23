import React, { useEffect, useRef, useState } from 'react'
import {MdShoppingBasket} from 'react-icons/md';
import {motion} from 'framer-motion';
import  NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/stateProvider';
import { actionType } from '../context/reducer';

// destructuring my props
const RowContainer = ({flag , data ,scrollValue}) => {
    const rowContainer =useRef();
    useEffect( () => {
        rowContainer.current.scrollLeft += scrollValue;
    }, [scrollValue]);
    
    const [{cartItems }, dispatch] = useStateValue();
    const [items, setItems] = useState([])
    useEffect(() => { 
        
        addtocart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items])
    

    const addtocart = () => {
        
            dispatch({
                type : actionType.SET_CARTITEMS,
                // destructure like eg: ...cartItems
                cartItems : items
            })
            // sending it to our localstorage to avoid loosing the data when we refresh
            localStorage.setItem("cartItems", JSON.stringify(items))
    };
  return (
    <div ref={rowContainer} className={`w-full my-12 flex items-center scroll-smooth  gap-3 ${ flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"}`}>
      
       {/* or we can also place data $$ data.legth but since we will get the data we can use alternative below */}
       {data && data.length >0 ? ( data.map((item) => (
            <div key={item.id} className=' w-300 min-w-[300px] md:w-340 md:min-w-[340] h-auto bg-cardOverlay rounded-lg p-2 my-12   backdrop-blur-lg'>
                <div whileTap={{scale :0.75}} className='w-full flex items-center justify-between'>
                   <motion.div whileHover={{scale : 1.2}} className='w-40 -mt-8 h-40 drop-shadow-2xl'>
                         <img  src={item?.imageURL} alt="" className=' w-full h-full object-contain'/>
                   </motion.div>
                    <motion.div whileTap={{scale :0.75}} className='w-10 h-10 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md' onClick={()=>setItems([...cartItems , item])}>
                        <MdShoppingBasket className='text-white' />
                    </motion.div>
                </div>

                <div className='w-full flex flex-col gap-4 items-end justify-end '>
                    <p className=' text-textcolor font-semibold text-base md:text-lg'>{item?.title} </p>
                    <p className='mt-1 text-sm text-gray-500'>{item?.calories}</p>
                    <div className=' flex items-center gap-8'>
                        <p className=' text-lg text-headingColor font-semibold '> <span className='text-sm text-red-500'>$</span> {item?.price}</p>
                    </div>
                </div>
            </div>
       )) 
       ): ( <div className=' w-full flex flex-col items-center justify-center'>
                <img src={NotFound} alt="" className='h-340' />
                <p className=' text-xl text-headingColor font-semibold p-3'>Items Not Available</p>
             </div>
            ) }
    </div>
  )
}

export default RowContainer