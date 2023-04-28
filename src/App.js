import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import WorkShop from './pages/Workshop';

function App() {

  return (
    <div id="app">
      <BrowserRouter>
        <Routes>
          <Route path='/workshop' element={<WorkShop/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
