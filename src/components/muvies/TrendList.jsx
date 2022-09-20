import { useEffect, useState } from "react"
import TrendCard from "./TrendCard"
import { trend } from "../../api/trend"


import tmdb from "../../api/tmdb"
import Blur from "../../baseUI/blur/blur"




const TrendList = ({fetch}) => {

    const [movies2, setmovies2] = useState([])

    useEffect(()=>{
        const fetchMovies = async() =>{
            const {data} = await tmdb.get(trend[fetch])
            setmovies2(data.results)
        }

        fetchMovies()
       
    },[fetch])


  return (
    <div className="flex pb-5 pr-9 pl-5 overflow-x-auto ">
        {movies2?.map((movie, index)=>{
            return <TrendCard key={index} {...movie}/>
        })}
        <div className="absolute top-0 right-0  w-16 h-full">
            <Blur/>
        </div>
    </div>
  )
}
export default TrendList