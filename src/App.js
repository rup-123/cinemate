import { useState } from 'react';
import './App.css';
import { Footer, Header } from './components';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  const [mediaType, setMediaType] = useState('movies');

  const handleMediaTypeChange = (newMediaType) => {
    setMediaType(newMediaType);
  }

  
  return (
    <div className="App">
      <Header onMediaTypeChange={handleMediaTypeChange}/>
      <AllRoutes  mediaType={mediaType}/>
      <Footer/>
    </div>
  );
}

export default App;
