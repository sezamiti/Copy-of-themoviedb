import React from 'react'
import Ellipsis from '../../baseUI/ellipsis/ellipsis'
import Progress from '../../baseUI/progress/progress'

const img = ((posterpath)=>{
  return `https://www.themoviedb.org/t/p/w220_and_h330_face${posterpath}`
})



const MovieCard = ({poster_path, name, release_date, vote_average, title, first_air_date}) => {
  return (
    <div className='flex flex-col pl-5 gap-2'>
        <div className="relative">
          <img src={img(poster_path)} alt={title} className='w-[150px] h-[225] shadow-sm rounded-md'/>
          <div className="absolute bottom-[-1.2rem] left-2">
            <Progress percent={vote_average * 10}/>
          </div>
          <div className="absolute top-3 right-[10px] w-[1.4rem] h-[1.4rem] absolute top-3 right-[10px] text-white">
            <Ellipsis/>
          </div>
        </div>
        <div className="flex flex-col px-3 pt-5 w-[150px]">
            <h1 className="font-bold">{name || title}</h1>
            <p className="font-normal text-slate-500">{release_date || first_air_date}</p>
        </div>
    </div>
  )
}

export default MovieCard