import { Link } from "react-router-dom"
import Poster from "../assets/images/backup.png"
import { useState } from "react";
import { useFav } from "../context/ProgramContext";

export const Card = ({movie}) => {
    const {original_title, overview, poster_path} = movie;
    const image = poster_path?  `https://image.tmdb.org/t/p/w500/${poster_path}`:Poster
    
    const{programlist,addToFav,removeFromFav} = useFav();

    const favMovie = programlist.find((m)=>m.id===movie.id)
    const [fav, setFav] = useState(favMovie ? true : false);

    const handleClick = ()=>{
        setFav(!fav)
        if(fav){
            removeFromFav(movie)
        }
        else{
            addToFav(movie)
        }
    }
  return ( 
      <div className="m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          {/* <Link to="/">
              <img className="rounded-t-lg" src={image} alt="" />
          </Link> */}
          <div className="relative">
            <img className="rounded-t-lg" src={image} alt="" />
            <div onClick={handleClick} className="absolute inset-0 flex items-end justify-end">
                <span className={`${fav? "text-red-600 ":"text-white "}m-2 text-4xl cursor-pointer`}>&#x2665;</span>
            </div>
        </div>
          <div className="relative p-5">
            <Link to="/">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
          </div>
      </div>

  )
}


