import React from 'react'

const InfoComp = ({nameMember,work}) => {
  return (
    <div className='flex flex-col justify-center items-center mt-3'>
        <h1 className=' capitalize text-lg sm:text-lg  md:text-2xl'>{nameMember}</h1>
        <h2 className=' uppercase text-indigo-500 text-xs   font-normal sm:tracking-wide  md:tracking-widest md:font-medium mt-1'>{work}</h2>
    </div>
  )
}

export default InfoComp