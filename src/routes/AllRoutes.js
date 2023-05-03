import {Routes,Route} from 'react-router-dom';

import { MovieList,PageNotFound,Search } from '../pages';
import { FavList } from '../pages/FavList';


export const AllRoutes = ({mediaType}) => {
  const apiPath = mediaType === 'movies' ? 'search/movie' : 'search/tv';

  return (
    <div className='dark:bg-slate-800'>
        <Routes>
            <Route path='/' element={<MovieList apiPath="movie/now_playing"/>}/>
            <Route path='fav' element={<FavList/>}/>
            <Route path='tv' element={<MovieList apiPath="tv/airing_today"/>}/>
            <Route path='search' element={<Search apiPath={apiPath}/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

