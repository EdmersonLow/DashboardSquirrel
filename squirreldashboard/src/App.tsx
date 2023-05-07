import { Sidenav }  from './Sidenav'
import { Routes, Route, createBrowserRouter,Outlet, RouterProvider ,ScrollRestoration, Navigate } from 'react-router-dom'
import Students from './Students'
import { getChoices, getModules, getQuestion, getUserData, getUserResults } from './api'
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
        loader: getUserData,
      },
      {
        path: '/modules',
        element: <Students/>,
        loader: getModules,
      },
      {
        path: '/question',
        element: <Students/>,
        loader: getQuestion,
      },
      {
        path: '/results',
        element: <Students/>,
        loader: getUserResults,
      },
      {
        path: '/choices',
        element: <Students/>,
        loader: getChoices,
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
