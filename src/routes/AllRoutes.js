import {Routes,Route} from 'react-router-dom';

import { MovieList,PageNotFound,Search } from '../pages';


export const AllRoutes = () => {
  return (
    <div className='dark:bg-slate-800'>
        <Routes>
            <Route path='/' element={<MovieList apiPath="movie/now_playing"/>}/>
            {/* <Route path='fav' element={<MovieList/>}/> */}
            <Route path='tv' element={<MovieList apiPath="tv/airing_today"/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='*' element={<PageNotFound/>}/>
        </Routes>
    </div>
  )
}

