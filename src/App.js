import { useSelector } from 'react-redux';
import './App.css';
import LocalRoutes from './Routes/LocalRoutes';
import AllRoutes from './Routes/AllRoutes';



function App() {
  const { auth } = useSelector((state) => state.authreducer)




  return (
    auth?
      <AllRoutes/>:
      <LocalRoutes/>
  );
}

export default App;
