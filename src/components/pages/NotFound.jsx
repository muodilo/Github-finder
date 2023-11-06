import {Link} from "react-router-dom"

function NotFound() {
  return (
    <div className='notFound main'>
      <div className="notFound-msg">
        <h1>Oops!</h1>
        <h3>404 -Page not found!</h3>

        <Link to='/' className="btn btn-dark btn-lg">Back to home</Link>
      </div>
      
    </div>
    
  );
}

export default NotFound;