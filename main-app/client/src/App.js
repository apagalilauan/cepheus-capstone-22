import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LogIn'
import Register from './pages/Register'
import UserType from './pages/UserType';
import Main from './pages/Main';
import UserHome from './pages/Home-User';
import AdminHome from './pages/Home-Admin';
import Backbone from './util/Backbone';

function App() {
  {/*const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000)
  }, []) */}

  return (
    <div>
        <Router>
            <Routes>
              <Route path='/' element={<Backbone />}>
                {/* public routes */} 
                <Route path='login' element={ <Login/> }></Route>
                <Route path='/user-type' element={ <UserType/> }></Route>
                <Route path='register' element={ <Register/> }></Route>

                {/* private routes */}
                  <Route path='home' element={ <Main/> }>
                    <Route path='/user' element={<UserHome />}></Route>
                    <Route path='/admin' element={<AdminHome />}></Route>                  
                  </Route>
              
              </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App