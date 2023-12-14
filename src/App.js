
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcomepage from './components/Welcomepage';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div>

      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Welcomepage/>}></Route>
      </Routes>
      </BrowserRouter>
       
       {/* <Sidebar/> */}
    

    </div>
  );
}

export default App;


// function App() {
//   return (
//     <div>
//       <Welcomepage></Welcomepage>
//     </div>
//   );
// }
// export default App;