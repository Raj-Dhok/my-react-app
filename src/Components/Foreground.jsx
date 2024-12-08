import React, { useRef, useState } from 'react'
import Card from './Card'


const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".4mb",
      close:false,
      tag:{
        isOpen:false, tagTitle:"Download Now" , tagColor:"green"  
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close:false,
      tag:{
        isOpen:true, tagTitle:"Download Now" , tagColor:"blue"  
      },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close:true,
      tag:{
        isOpen:true, tagTitle:"Upload" , tagColor:"green"  
      },
    }
  ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
          <Card data={item} referance={ref}/>
        ))}
    </div>
  )
}

export default Foreground