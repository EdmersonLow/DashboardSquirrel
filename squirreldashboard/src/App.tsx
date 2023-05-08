import { Sidenav }  from './Sidenav'
import { Routes, Route, createBrowserRouter,Outlet, RouterProvider ,ScrollRestoration, Navigate } from 'react-router-dom'
import Students from './Students'
import Modules from './Modules'
import Results from './Results'
import Topics from './Topics'
import Questions from './Questions'
import {getAllModules, getAllTopics, getAllUsers, getAllResults, getAllQuestions } from './api'
const Layout=()=>{
  return(
<div className="flex">
  <div className="w-1/5 bg-gray-100">
    <Sidenav />
  </div>
  <div className="w-4/5 bg-gray-200 p-4">
    <Outlet />
    <ScrollRestoration />
  </div>
</div>
  )
}

const router =  createBrowserRouter(
  [
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/students',
        element: <Students/>,
        loader: getAllUsers,
      },
      {
        path: '/modules',
        element: <Modules/>,
        loader: getAllModules,
      },
      {
        path: '/results',
        element: <Results/>,
        loader: getAllResults,
      },
      {
        path: '/topics',
        element: <Topics/>,
        loader: getAllTopics,
      },
      {
        path: '/questions',
        element: <Questions/>,
        loader: getAllQuestions,
      },
      // error page
      {
        path: '*',
        // element:<Error/>
      },
    ]
  
  },
],{
  basename : '/',
})
function App() {


  return (
    <div className='font-bodyFont'>
 
      <RouterProvider router={router}/>
     </div> 
  )
}

export default App
