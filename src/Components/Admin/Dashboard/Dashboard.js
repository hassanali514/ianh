import React, { useState, Fragment } from 'react';
import './dashboard.css'
import Loader from '../../Layout/Loader/Loader';
import Sidebar from '../../Layout/Sidebar/Sidebar';
import MetaData from '../../MetaData/MetaData';
import { useDispatch,useSelector } from 'react-redux';

function Dashboard() {

  const { error, loading, isAuthenticated, user } = useSelector(state => state.user)

  return (
   <Fragment>
      <MetaData title={'DASHBOARD'} />
      <Sidebar role={user.role}/>
      <div>Admin Dashboard</div>
   </Fragment>
  );
}

export default Dashboard;
