import SearchInput from "../../baseUI/input/searchInput";
import SearchButton from "../../baseUI/button/searchButton";
import { useRef } from "react";




const Header = () => {
  const searchInputRef = useRef();
 
  const hundleSearch =(e)=>{
    // const serchThem = searchInputRef.current.value
    console.log(searchInputRef.current.value);
    console.log( fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7f821069f8a6715215674242b7ecc9f7&language=ru-US&page=1`).then((response) => response.json())
    .then(data=>{console.log(data.results);}));
    
  }

  const hundleKeyDown =(e)=>{
    if (e.key === "Enter") {
      hundleSearch()
    }
  }

  return <h1 className="h-[300px] bg-banner bg-cover">
    <div className="flex flex-col gap-10 px-10 py-10">
      <div className='text-white'>
        <h2 className='font-extrabold  text-5xl'>Добро пожаловать.</h2>
        <h3 className="font-semibold text-[2rem]">Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
      </div>
      <div className="relative">
        <SearchInput ref={searchInputRef} onKeyDown ={hundleKeyDown}/>
      <div className='absolute top-0 right-0'><SearchButton onClick={hundleSearch}/></div>
      </div>
    </div>
  </h1>


  
}

export default Header