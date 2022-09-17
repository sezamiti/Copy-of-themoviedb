import { forwardRef } from "react"

const SearchInput = forwardRef((props, ref) => {

  return <>
    <input {...props} type='text' ref={ref} className="w-full h-11 rounded-[8rem] outline-none px-5 py-3 placeholder: text-slate-500 text-[1.1rem] text-black/90" placeholder="Найти фильм, сериаал, персону..."/>
    </>
})

export default SearchInput