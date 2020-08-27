import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Courses.css';

const Courses = (props) => {

    // destructuring of course properties
    const {name, category, instructor, price, img} = props.course;
    return (
        <div className="single_course">
            <div>
                <img src={img} className="img-thumbnail" alt=""/>
            </div>
            <div className="course_details">
                <h4 className="text-success">Name: {name}</h4>
                <h6 className="text-primary">Price: ${price}</h6>
                <p><span>Category: {category}</span> <br/> <span>instructor: {instructor}</span></p>
                
                {/* onClick Event Handler */}
                <button  className="btn btn-danger" onClick={() => props.handleAddButton(props.course)}><FontAwesomeIcon icon={faShoppingCart} />Enroll Now</button>
            </div>
        </div>
    );
};

export default Courses;