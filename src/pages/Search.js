import {Card} from "../components"
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: programs } = useFetch(apiPath, queryTerm);
  return (
    <main>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ programs.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'` }</p>
      </section>
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
  