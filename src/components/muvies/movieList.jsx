import { useEffect, useState } from "react"
import MovieCard from "./movieCard" 


import tmdb from "../../api/tmdb"
import { request } from "../../api/request"
import Blur from "../../baseUI/blur/blur"



const MovieList = ({fetch}) => {

    const [movies, setmovies] = useState([])

    useEffect(()=>{
        const fetchMovies = async() =>{
            const {data} = await tmdb.get(request[fetch])
            setmovies(data.results)
        }

        fetchMovies()
        // console.log(tmdb);

    },[fetch])

    // console.log('movieList');
  return (
    <div className="flex pb-5 pr-9 pl-5 overflow-x-auto ">
        {movies?.map((movie, index)=>{
            return <MovieCard key={index} {...movie}/>
        })}
        <div className="absolute top-0 right-0  w-16 h-full">
            <Blur/>
        </div>
    </div>
  )
}
export default MovieList