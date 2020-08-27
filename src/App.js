import React from 'react';
import './App.css';
import Courses from './components/Courses/Courses';
import fakeData from './fakeData';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Header/Header';

function App() {
  // Sliceing only 14 data from fakeData
  const first14 = fakeData.slice(0, 14);

  // Course State
  const [courses, setCourses]= useState(first14);

  // Cart State
  const [cart, setCart] = useState([]);

  // Event Handler Function for button
  const handleAddButton = (course) => {
      console.log("course added", course);
      const newCart = [...cart, course];
      setCart(newCart);
  }
  return (
    <div>
       {/* Header Area */}
      <header className="text-center">
        <Header></Header>
      </header>

      {/* Main Area */}
      <div className="full_container">

        {/* Course Area */}
        <div className="course_container">

            {/* Mapping data from courses */}
            {
              courses.map((course) => <Courses key={course.key} handleAddButton={handleAddButton} course={course}></Courses>)
            }
        </div>
        {/* Cart Area */}
        <div className="cart_container">

          {/* Sending cart as prop */}
            <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
