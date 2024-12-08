import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"
const Card = ({data , referance}) => {
  return (
    <motion.div drag dragConstraints={referance} whileDrag={{scale:1.1}} className='relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white px-8 py-10 text-sm overflow-hidden' >
        <FaRegFileAlt  />
        <p className='mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between py-3 px-8 mb-2'>
                <h5>{data.filesize}</h5>
                <span className='w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center'>
                    {data.close ? <IoClose/> :<LuDownload size=".8em" color='#ffff'/>}
                    
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full h-9 flex items-center justify-center py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600":"bg-green-600"}`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
                )
            }
            
        </div>
    </motion.div>
  )
}

export default Card