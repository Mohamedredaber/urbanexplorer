import { Outlet } from 'react-router-dom';
import './Layout.css';
import Header from '../Header/Header';
function Layout() {
  return (
    <>
        <Header/>
        <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout