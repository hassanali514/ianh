import React, { Fragment } from 'react';
import './userDashboard.css'
import Sidebar from '../../Layout/Sidebar/Sidebar';
import MetaData from '../../MetaData/MetaData';
import { useSelector } from 'react-redux';

function Dashboard() {

  const { user } = useSelector(state => state.user)

  return (
   <Fragment>
      <MetaData title={'DASHBOARD'} />
      <Sidebar role={user.role}/>
      <div>User Dashboard</div>
   </Fragment>
  );
}

export default Dashboard;
