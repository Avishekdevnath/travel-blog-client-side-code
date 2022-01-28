import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setBlogs, setOrders } from './redux/actions';
import { useEffect } from 'react';
import Mobile from './Pages/Explore/Blog/Blog/Blog';

function App() {

  const user = useSelector((state) => state?.firebaseReducer?.firebase);
  const blogs = useSelector((state) => state.blogsReducer.blogs);
  const orders = useSelector((state) => state.ordersReducer.orders);
  const dispatch = useDispatch();

  // Fetching blogs
  const fetchBlogs = async () => {
    const response = await axios
      .get("https://travel-blog-server.herokuapp.com/blogs")
      .catch((err) => {
        console.error("Error: ", err);
      });
    dispatch(setBlogs(response.data.blogs));
  };
  useEffect(() => {
    fetchBlogs();
  }, [blogs]);


  // // Fetching Orders
  // const fetchOrders = async () => {
  //   const response = await axios
  //     .get('https://travel-blog-server.herokuapp.com/allOrders')
  //     .catch((err) => {
  //       console.error("Error ", err);
  //     });
  //   dispatch(setOrders(response.data))
  // }
  // useEffect(() => {
  //   fetchOrders();
  // }, [orders])

  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/blogDetails/:blogID">
              <Mobile></Mobile>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
