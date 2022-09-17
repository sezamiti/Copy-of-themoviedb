import React from 'react'

const img = ((posterpath)=>{
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
})



const MovieCard = ({poster_path, name, release_date, title, first_air_date}) => {
  return (
    <div className='flex flex-col pl-5 gap-2'>
        <img src={img(poster_path)} alt={title} className='w-[150px] h-[225] shadow-sm rounded-md'/>
        <div className="flex flex-col px-3 w-[150px]">
            <h1 className="font-bold">{name || title}</h1>
            <p className="font-normal text-slate-500">{release_date || first_air_date}</p>
        </div>
    </div>
  )
}

export default MovieCard