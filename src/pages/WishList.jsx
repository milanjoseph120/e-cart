import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishListSlice';
import { addToCart } from '../redux/slices/carttSlice';

function WishList() {
  const wishListArray = useSelector((state)=>state.wishListReducer)
  const dispatch = useDispatch()
  console.log(wishListArray);

  const handleWishList = (item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  return (
    <div>
       <Row className='ms-5 me-5'>
      {wishListArray?.length>0?
       wishListArray?.map((item)=>(<Col className='mb-5' sm={12}  md={6} lg={4} xl={3}  style={{marginTop:"100px"}}>
       <Card style={{ width: '18rem' , boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
       <Card.Img variant="top" src={item.thumbnail} style={{height:"200px"}}/>
       <Card.Body>
         <Card.Title className='fw-bolder'>{item.title.slice(0,20)}...</Card.Title>
         <Card.Text>
         <p>{item.description.slice(0,40)}...</p>
         <p className='fw-bolder'>price:💸{item.price}</p>
         </Card.Text>
         <div className='d-flex align-items-center justify-content-between'>
         <Button onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-trash"></i></Button>
         <Button onClick={()=>handleWishList(item)} variant="outline-success btn rounded"><i class="fa-solid fa-cart-shopping"></i></Button>
         </div>
       </Card.Body>
       </Card>
       </Col>))
       :<div style={{height:"100vh"}} className='d-flex flex-column justify-content-center align-items-center'>
        <img height={"300px"} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="" />
        <h4 className='text-dark fw-bolder'>Your wishlist is empty</h4>
        <button className='btn btn-success border rounded mt-3'><Link to={"/"} style={{textDecoration:"none" , color:"white"}}>Back to home</Link></button>
       </div>
      }
    </Row>
    </div>
  )
}

export default WishList