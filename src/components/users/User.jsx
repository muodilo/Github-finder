import React from 'react'
import {Link} from 'react-router-dom'

function User({user}) {
  return (
    <div className="col-lg-3 col-md-6 mb-4 user-card">
      <div className='user'>
        <img src={user.avatar_url} alt="" />
      
        <div className='user-info'>
          <h3>{user.login}</h3>
          <Link to={`/user/${user.login}`} className='btn btn-secondary'>Visit Profile</Link>
        </div>
      </div>
    </div>
  )
}

export default User