import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './styles.css';
// import Signup from './Components/Signup';
// import Profile from './Pages/Profile';
// import Questions from './Pages/Questions';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import FinalPage from './Pages/FinalPage';

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App />,
//   },
//   {
//     path:"/signup",
//     element:<Signup/>,
//   },
//   {
//     path:"/profile",
//     element:<Profile/>,
//   },
//   {
//     path:"/questions",
//     element:<Questions  />,
//   },
//   {
//     path:"/userProfile",
//     element: <FinalPage />,
//   }
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//    <RouterProvider router={router}/>
//   </React.StrictMode>
// );

