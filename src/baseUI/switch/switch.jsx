import React from 'react'
import { useState, useRef, useLayoutEffect } from 'react'

const Switch = ({items, onToggle, isToggled}) => {

  
  const [item1Witch, setItem1Widtch] = useState();
  const [item2Witch, setItem2Widtch] = useState();

  const item1Ref = useRef();
  const item2Ref = useRef();

  const textavtivColor ='bg-clip-text text-transparent bg-gradient-to-r from-[#c0fecf] to-[#1ed5a9]';

  const handleToggle = (selectedItem)=>{
    onToggle(selectedItem)
  }

  useLayoutEffect(()=>{
    // console.log(item1Ref.current.offsetWidth ); 
    setItem1Widtch(item1Ref.current.offsetWidth);
    setItem2Widtch(item2Ref.current.offsetWidth);
  },[])
  

  

  return (
    <div className='hover: cursor-pointer h-8 border-solid border-tmdbDarkBlue rounded-[30px] border-[1px] font-semibold flex items-center relative z-[1]'>
      <div ref={item1Ref} onClick={handleToggle.bind(null,items[0])} className={`py-1 px-5 h-8 rounded-[30px] ${isToggled || textavtivColor}`} >{items[0]}</div>
      <div ref={item2Ref} onClick={()=>{handleToggle(items[1])}} className={`py-1 px-5 h-8 rounded-[30px] ${isToggled && textavtivColor}`}>{items[1]}</div>
      <div className="h-8 w-20 bg-tmdbDarkBlue rounded-[30px] absolute z-[-1] transition-all duration-150 ease-in" style={
        isToggled?{
          left: `${item1Witch}px`,
          width: `${item2Witch+2}px`
        }:{
          left:'0',
          width: `${item1Witch}px`
        }}></div>
    </div>
  )
}

export default Switch