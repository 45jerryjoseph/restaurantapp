import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from "../img/heroBg.png"
import I1 from "../img/i1.png"
import { HeroData } from '../utils/Data'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2' id='home'>
    <div className='py-2  flex-1 flex flex-col items-start  justify-center gap-6'>
      <div className=' flex items-center gap-2 justify-center bg-orange-100  rounded-full px-2 py-1'>
        <p className='text-orange-500 font-semibold'> Bike Delivery</p>
        <div className='w-6 h-6 rounded-full overflow-hidden drop-shadow-xl'>
          <img src={Delivery} alt="delivery" className='w-full h-full object-contain bg-white' />
        </div>
      </div>
      <p className=' text-[2.5rem] lg:text-[4.5rem] font-bold  tracking-wide text-headingColor '>
        The Fastest Delivery in <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span>
      </p>
      <p className=' text-base text-textcolor text-center md:text-left md:w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet dolorem iure porro consequatur deserunt, possimus tenetur, ratione voluptate dicta nobis veniam repellat facilis illo aliquid et debitis natus cumque eos!</p>
      <button type='button' className=' bg-gradient-to-br from-orange-400 to-orange-500 px-4 py-2 rounded-lg w-full md:w-auto hover:shadow-lg transition-all ease-in-out duration-100 '> Order Now</button>
    </div>
    <div className='py-2  flex-1 flex items-center relative '>
        <img src={HeroBg} alt="HeroBg"  className='ml-auto h-420 w-full lg:w-auto lg:h-650' />
        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center  py-4 gap-4 flex-wrap'>
          {HeroData && HeroData.map(n =>(
              <div key={n.id} className=' md  lg:w-190 p-4  bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
              <img src={n.imageSrc} className="w-20 lg:w-40 -mt-10 lg:-mt-20" alt="I1" />
              <p className=' text-base lg:text-xl font-semibold  text-textcolor mt-2 lg:mt-4'>{n.name}</p>
              <p className='text-[12px]lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'> {n.decp}</p>
              <p className='text-sm font-semibold text-headingColor'><span className='text-xs text-red-600'>$</span> {n.price}</p>
          </div>
          )
          )}
        </div>
    </div>
  </section>
  )
}

export default HomeContainer