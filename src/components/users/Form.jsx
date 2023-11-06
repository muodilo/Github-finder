import React,{useState,useContext} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import GithubContext from '../../context/github/GithubContext';



function Form() {
  const [text, setText] = useState('');
  const { users, fetchUsers, clearSearch } = useContext(GithubContext) 

  const handleChange = (e) => {
    const currentText = e.target.value
    setText(currentText) 
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text === '') {
      alert('Enter name please')
    } else {
      //@todo - search users
      fetchUsers(text)
      setText('')
    }

  }
  const handleClick = ()=>{
    clearSearch()
  }
  

  return (
    
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <input type="text" className='input' placeholder='Search' value={text} onChange={handleChange } />
        <button className='btn btn-dark'><SearchIcon/></button>
      </form> 

      {users.length > 0 && (<div>
        <button className='btn btn-light ' onClick={handleClick}>CLEAR</button>
      </div>)}
    </div>
  )
}

export default Form