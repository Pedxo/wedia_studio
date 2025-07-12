import React from 'react';
import { Outlet } from 'react-router-dom';

const RequestLayout = () => {
  return (
    <main>
       <Outlet />
    </main>
  )
}

export default RequestLayout