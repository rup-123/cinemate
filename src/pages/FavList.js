import {Card} from "../components"
import { useFav } from "../context/ProgramContext"

export const FavList = () => {
  const {programlist} = useFav();  
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        {
            programlist.length > 0? (
            <div className="flex flex-wrap justify-start">
            {programlist.map((movie)=>(
              <Card key={movie.id}  movie ={movie}/>
            ))}
        </div>) : (
             <p className="text-3xl text-gray-700 dark:text-white">No Favourites</p>
        )
        }
          
      </section>
    </main>
  )
}