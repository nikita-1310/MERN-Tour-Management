import React from 'react'
import './booking.css';
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'

const Booking = ({tour , avgRating}) => {

    const {price, reviews} = tour
    const handleChange = e=>{
       
    }

  return <div className="booking">
    <div className="booking__top align-items-center justify-content-between d-flex">
        <h3> ${price} <span>/per person</span> </h3>
        <span className="tour__rating d-flex align-items-center">
                    <i class="ri-star-s-fill" ></i> 
                    {avgRating ===0 ? null : avgRating}({reviews?.length})    
        </span>
    </div>


    {/* =============================== Booking Form  */}
    <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info-form">
            <FormGroup>
                <input type="text" placeholder='Enter Your Full Name' id='fullName' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <input type="text" placeholder='Enter Your Phone Number' id='phone' required onChange={handleChange}/>
            </FormGroup>
            <FormGroup className='d-flex align-items-center gap-3'>
                <input type="date" placeholder='' id='bookAt' required onChange={handleChange}/>
                <input type="number" placeholder='' id='guests' required onChange={handleChange}/>
            </FormGroup>
           
        </Form>
    </div>

  </div>
}

export default Booking
