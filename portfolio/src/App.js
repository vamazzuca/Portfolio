import { Routes, Route,  Navigate} from 'react-router-dom'
import Home from './pages/home';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="*" element={<Navigate to='/' />}></Route>
      </Routes>
    </>
  );
}

export default App;
