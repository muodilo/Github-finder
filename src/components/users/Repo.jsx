import React from 'react'
import CodeIcon from '@mui/icons-material/Code';
import LinkIcon from '@mui/icons-material/Link';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';

function Repo({repo}) {
  return (
    <div className='container col-md-6'>
      <div className="card mb-2 bg-secondary">
        <div className="card-header">
          <GitHubIcon/> {repo.name}
        </div>
        <div className="card-body">
          <p className='text-white fw-light'>{repo.description}</p>
          <p className='badge'><VisibilityIcon/> { repo.watchers}</p>
          <a href={repo.svn_url} className='btn btn-outline-dark'><LinkIcon/><CodeIcon/> {repo.full_name}</a>
        </div>
        
      </div>
      <hr className='text-white'/>
      
    </div>
  )
}

export default Repo
