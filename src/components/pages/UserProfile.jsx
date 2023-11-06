import React, { useContext, useEffect } from 'react'
import {useParams,Link} from 'react-router-dom'
import GithubContext from '../../context/github/GithubContext'
import Spinner from '../layout/Spinner'
import PeopleIcon from '@mui/icons-material/People';
import Repo from '../users/Repo';


function UserProfile() {
  const { user,repos, getSingleUser,isLoading,getRepos } = useContext(GithubContext)
  const params= useParams()
  
  useEffect(() => {
    getSingleUser(params.login)
    getRepos(params.login)
  },[])

  if (isLoading) {
    return<Spinner/>
  } else {
    
  return (
    <div className='main userProfile pb-5 container-fluid'>
      <Link className='btn btn-dark m-3' to='/'>BACK TO SEARCH</Link>
      <div className=' m-3 row'>
        <div className='col profile text-center'>
          <img className='img-fluid  m-1 rounded profile-img' src={user.avatar_url} alt="" />
        </div>
        <div className="col-md-6">
          <h3 className='m-3 text-white'>{user.login} <span className="badge text-bg-info badge-sm">{user.type}</span></h3>
          <hr  />
          <p className='text-white fw-light pe-5 ms-3'>{user.bio}</p>
          <p className='text-white fw-light pe-5 ms-3'><span className='fw-bold'>Folloers:</span>  {user.followers} <PeopleIcon /> <br /> <span className='fw-bold'>Following:</span> {user.following} <PeopleIcon /></p>
          
          <a className='m-3 btn btn-primary' href={user.html_url}>Visit Github Profile</a>
        </div>

      </div>
      <div className='row container-lg m-2 mt-5'>
        <h1 className='text-white mb-3'>Rpositories: { repos.length}</h1>
        <hr className='text-white' />

        {repos.map(repo => {
          return <Repo key={repo.id} repo={repo } />
        })}
      </div>
      
    </div>
  )
  }
}

export default UserProfile