import React from 'react'
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';

import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

function Single() {
  return (
    <div className='single'>
      <div className='content'>
        <img src='' alt=''/>
        <div className='user'>
          <img src='' alt=''/>
          <div className='info'>
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className='edit'>
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <Link>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className='menu'>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dicta minus sapiente omnis laboriosam quasi, suscipit pariatur, voluptas et est aliquid maxime, consectetur odit. Ut doloribus necessitatibus accusamus corporis assumenda.</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single