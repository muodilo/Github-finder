import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-dark mt-5 pt-2'>
      <div className='mb-2 '>
        <div>
          <PhoneIcon />:+250 785 244 715
          <br />
          <br />
          <p>Copyright &copy; Odilo {currentYear}</p>
        </div>

      </div>
      
    </footer>
  )
}

export default Footer