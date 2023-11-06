import React, { useContext} from 'react'
import User from './User';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/GithubContext';


function UseResults() {
  const { users, isLoading} = useContext(GithubContext)
  

  return isLoading? <Spinner/>:
  (
    <div className='container-lg row user-results'>
      {users.map((user) => {
        return <User key={user.id} user={user} />
      })}
    </div>
  )
}

export default UseResults