import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarPanel from './NavBarPanel'
import { Provider } from 'react-redux'
import store from '../Store/Store'

const RootLayout = () => {
  return (
    <Provider store={store}>
      <div>
          <NavBarPanel/>
          
          <main>
              <Outlet/>
          </main>
      </div>
    </Provider>
  )
}

export default RootLayout