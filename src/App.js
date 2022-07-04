import './App.css';

import DoghnutChart from './DoghnutChart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Teachers from './Teachers';
import Login from './Login';
import Portal from './Portal';
import Students from './Students';


function App() {

  // const data = {
  //   labels: [
  //     'Red',
  //     'Blue',
  //     'Yellow'
  //   ],
  //   datasets: [{
  //     label: 'My First Dataset',
  //     data: [300, 50, 100],
  //     backgroundColor: [
  //       'rgb(255, 99, 132)',
  //       'rgb(54, 162, 235)',
  //       'rgb(255, 205, 86)'
  //     ],
  //     hoverOffset: 4
  //   }]
  // };
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Portal' element={<Portal />} >
          <Route path="TeachersList" element={<Teachers />} />
          <Route path="StudentList" element={<Students />} />
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
