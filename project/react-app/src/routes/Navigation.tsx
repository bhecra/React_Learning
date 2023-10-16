import { BrowserRouter, Navigate, NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { routes } from './routes';

import logo from '../logo.svg'
import { Suspense } from "react";
export const Navigation = () => {

  // let navigate = useNavigate();

  // navigate('about');

    
  return (
    <>

      <Suspense fallback={<span>Loading....</span>}>



        <BrowserRouter>
          <div className='main-layout'>
            <nav>
              <img src={logo} alt="" />

              <ul>
                {
                  routes.map(({ to, path, Component, name }) =>
                  (<li key={path}>
                    <NavLink
                      to={to}
                      className={({ isActive }) => isActive ? 'nav-active' : ''}>
                      {name}
                    </NavLink>
                  </li>
                  )
                  )
                }

              </ul>
            </nav>

           

              {  routes.map(({ path, to, Component }) => (
                <Component />
                  
                )
                )}
           

           

             

           
            {/* <Routes>

              {
                routes.map(({ path, to, Component }) => (
                  <Route
                    key={to}
                    path={path}
                    element={<Component />}
                  />
                )
                )
              }

              {/* <Route path='home' element={<LazyPage1 />}></Route>
            <Route path='about' element={<LazyPage2 />}></Route>
            <Route path='users' element={<LazyPage3 />}></Route> */}

          </div>
        </BrowserRouter>
      </Suspense>
    </>
  )
}
