import {Card} from "../components"
import { useFetch } from "../hooks/useFetch";

export const MovieList = ({apiPath}) => {
  const {data:programs} = useFetch(apiPath)
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
          <div className="flex flex-wrap justify-start">
              {programs.map((movie)=>(
                <Card key={movie.id}  movie ={movie}/>
              ))}
          </div>
      </section>
    </main>
  )
}

