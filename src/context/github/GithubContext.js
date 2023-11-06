import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;



export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos:[],
    isLoading:false,
  }

  const [state,dispatch]=useReducer(githubReducer,initialState)

  
//searching users
  const fetchUsers = async (text) => {
    setLoading()

    const params = new URLSearchParams({
      q:text
    })
    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })
    const {items} = await response.json();
    dispatch({
      type: 'GET_USERS',
      payload:items, 
    })
  };
  //serach a single user

  const getSingleUser = async (name) => {
    setLoading()
    const response = await fetch(`${GITHUB_URL}/users/${name}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })
    if (response.status === 404) {
      window.location = '/notfound'
    } else {
      const data = await response.json()

      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }

  //get repos

  const getRepos = async (name) => {
    const response = await fetch(`${GITHUB_URL}/users/${name}/repos`, {
      headers: {
        Authorization:`token ${GITHUB_TOKEN}`
      }
    })
    const data = await response.json()

      dispatch({
        type: 'GET_REPOS',
        payload:data,
      })
    
  }
  //setLoading
  
  const setLoading = () => {
    dispatch({
      type:'SET_LOADING'
    })
  }
  const clearSearch = () => {
    dispatch({
      type:'CLEAR_SEARCH'
    })
  }


  return <GithubContext.Provider value={{
    ...state,
    fetchUsers, 
    clearSearch,
    getSingleUser,
    getRepos,

  }}>
    {children}
  </GithubContext.Provider>
}

export default GithubContext;