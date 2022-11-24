import React from 'react'
import Navbar from './Navbar';
import NavPage from './NavPage';
import 'bootstrap/dist/css/bootstrap.min.css';
const MainPage=()=> {
  return (
    <React.Fragment>
        <section>
    <div   className='bg-blue-100 h-20' > </div>
<Navbar/>


    <div className='bg-blue-200'>
    <NavPage/>

    </div>
    </section>
    </React.Fragment>
  )
}

export default MainPage