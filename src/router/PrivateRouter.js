import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router'


function PrivateRouter() {
  const localStoreChange = localStorage.getItem("admin");
  return (
    localStoreChange !== null ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRouter
