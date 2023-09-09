// import './App.css';
import React, { useEffect } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Admin/Dashboard/Dashboard";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import WebFont from "webfontloader";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import store from './Redux/store'
import { loadUser } from "./Redux/actions/userAction";
import NewUser from "./Components/Admin/NewUser/NewUser";
import userDashboard from './Components/User/Dashboard/UserDashboard';
import NewCandidate from "./Components/User/NewCandidate/NewCandidate";
import Candidate from "./Components/User/CandidateList/Candidate";
import CandidateDetail from "./Components/User/CandidateDetail/CandidateDetail";
import AllUsers from "./Components/Admin/AllUsers/AllUsers";

function App() {

  useEffect(() => {

    const value = localStorage.getItem('token');
    if (value)
      store.dispatch(loadUser());

  }, [])

  // return (
  //   <div className="App">
  //     <Routes>
  //       <Route exact path='/login' element={<Login />} />
  //       <Route path='/' element={<MainHeader />}>
  //         <Route index element={<Dashboard />} />
  //         <Route path='/candidates' element={<List />} />
  //         <Route path='/candidates/new' element={<CreateRecord />} />
  //         <Route path='/mytask' element={'My Task'} />
  //         <Route path='/*' element={<ErrorPage />} />
  //       </Route>
  //     </Routes>
  //   </div>
  // );

  return (
    <Router>

      {/* <Sidebar/> */}

      {/* {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <ProtectedRoute exact path="/process/payment" component={Payment} />
        </Elements>
      )} */}

      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/products" component={Products} />
        <Route path="/products/:keyword" component={Products} />

        <Route exact path="/search" component={Search} />

        <Route exact path="/contact" component={Contact} />

        <Route exact path="/about" component={About} />

        <ProtectedRoute exact path="/account" component={Profile} />

        <ProtectedRoute exact path="/me/update" component={UpdateProfile} />

        <ProtectedRoute
          exact
          path="/password/update"
          component={UpdatePassword}
        />

        <Route exact path="/password/forgot" component={ForgotPassword} />

        <Route exact path="/password/reset/:token" component={ResetPassword} /> */}

        <Route exact path="/login" component={Login} />

        <Redirect exact from="/" to="/login" />

        {/* <Route exact path="/cart" component={Cart} />

        <ProtectedRoute exact path="/shipping" component={Shipping} />

        <ProtectedRoute exact path="/success" component={OrderSuccess} />

        <ProtectedRoute exact path="/orders" component={MyOrders} />

        <ProtectedRoute exact path="/order/confirm" component={ConfirmOrder} />

        <ProtectedRoute exact path="/order/:id" component={OrderDetails} /> */}

        {/* DASHBOARD -ADMIN */}
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/dashboard"
          component={Dashboard}
        />

        {/* REGISTER USER - ADMIN */}
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/register"
          component={NewUser}
        />

        {/* DASHBOARD - USER */}
        <ProtectedRoute
          isAdmin={false}
          exact
          path="/user/dashboard"
          component={userDashboard}
        />

        {/* NEW CANDIDATE - USER */}
        <ProtectedRoute
          isAdmin={false}
          exact
          path="/user/new/candidate"
          component={NewCandidate}
        />

        {/* CANDIDATE - USER */}
        <ProtectedRoute
          isAdmin={false}
          exact
          path="/user/candidate"
          component={Candidate}
        />

        {/* CANDIDATE - USER */}
        <ProtectedRoute
          isAdmin={false}
          exact
          path="/user/candidate/:id/:val"
          component={CandidateDetail}
        />

        {/* ALL USERS LIST - ADMIN */}
        <ProtectedRoute
          isAdmin={true}
          exact
          path="/user/all/users"
          component={AllUsers}
        />

        {/* <ProtectedRoute
          isAdmin={true}
          exact
          path="/candidates"
          component={List}
        />

        <ProtectedRoute
          isAdmin={true}
          exact
          path="/candidates/new"
          component={Register}
        /> */}

        {/* <ProtectedRoute
          exact
          path="/admin/products"
          isAdmin={true}
          component={ProductList}
        />
        <ProtectedRoute
          exact
          path="/admin/product"
          isAdmin={true}
          component={NewProduct}
        />

        <ProtectedRoute
          exact
          path="/admin/product/:id"
          isAdmin={true}
          component={UpdateProduct}
        />
        <ProtectedRoute
          exact
          path="/admin/orders"
          isAdmin={true}
          component={OrderList}
        />

        <ProtectedRoute
          exact
          path="/admin/order/:id"
          isAdmin={true}
          component={ProcessOrder}
        />
        <ProtectedRoute
          exact
          path="/admin/users"
          isAdmin={true}
          component={UsersList}
        />

        <ProtectedRoute
          exact
          path="/admin/user/:id"
          isAdmin={true}
          component={UpdateUser}
        />

        <ProtectedRoute
          exact
          path="/admin/reviews"
          isAdmin={true}
          component={ProductReviews}
        />

        <Route
          component={
            window.location.pathname === "/process/payment" ? null : NotFound
          }
        /> */}
      </Switch>

      {/* <Footer /> */}
    </Router>
  );
}

export default App;
