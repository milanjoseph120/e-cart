import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:"100%", height:"300px" , color:"white"}} className='d-flex justify-content-center align-items-center flex-column bg-primary'>
    <div className='footer d-flex justify-content-evenly align-items-center w-100 mt-5 '>
       <div className='website' style={{width:"300px"}}>
           <h4>
           <i class="fa-solid fa-cart-shopping me-3"></i>{' '}
             E-CART
           </h4>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quis ne, ipsum sunt harum voluptatem velit corporis, quia quidem aut ut debitis fugit?</p>

       </div>
       <div className='links d-flex flex-column '>
         <h3>Links</h3>
         <Link to={'/'} style={{textDecoration:"none" , color:"white"}}>Home</Link>
         <Link to={'/wishlist'}  style={{textDecoration:"none" , color:"white"}}>WishList</Link>
         <Link to={'/cart'}  style={{textDecoration:"none" , color:"white"}}>Cart</Link>
       </div>
       <div className='guides d-flex flex-column '>
       <h3>Guides</h3>
         <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"white"}}>React</Link>
         <Link to={'https://react-bootstrap.netlify.app/'}  style={{textDecoration:"none" , color:"white"}}>React bootstrap</Link>
         <Link to={'https://bootswatch.com/'}  style={{textDecoration:"none" , color:"white"}}>BootsWatch</Link>
       </div>
       <div className='contact'>
         <h4 className='mb-3 '>Contact US</h4>
         <div className='d-flex mb-4'>
           <input type="text" className='form-control' placeholder='enter ur email id' />
           <button className='btn btn-warning text-white ms-3'>Subcribe</button>
         </div>
         <div className='icons d-flex justify-content-evenly'>
              <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"white"}}><i class="fa-brands fa-instagram"></i></Link>

              <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"white"}}><i class="fa-brands fa-twitter"></i></Link>

              <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"white"}}><i class="fa-brands fa-facebook"></i></Link>

              <Link to={'https://bootswatch.com/'} style={{textDecoration:"none" , color:"white"}}><i class="fa-brands fa-linkedin"></i></Link>
         </div>
       </div>
    </div>
    <p><center>Copyright @ 2023 E-CART.Built with React</center></p>
</div>
  )
}

export default Footer