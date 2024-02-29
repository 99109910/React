import React from 'react';
import './App.css'
import { useState } from 'react';
import Calendar from 'react-calendar';
import First from "./images/1.jpg";
import Second from "./images/2.jpg";
import Third from "./images/3.jpg";
import Fourth from "./images/4.jpg";
import Fifth from "./images/5.jpg";
import Sixth from "./images/6.jpg";
import Seventh from "./images/7.jpg";
import Eighth from "./images/8.jpg";
import Typescript from "./images/typescript.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function App() {
  let items = ["Home","Schedule", "Service"];
  const [value, onChange] = useState<Value>(new Date());

  return (

    <div>

      <div className='navDiv'>
        <ul className='navUl'>
          <li id='navLi'>Main Page</li>
          <li>Services</li>
          <li>Galery</li>
          <li>Tours</li>
          <li>Memories</li>
        </ul>
      </div>

    
      <div className='div02'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={First} />
      <Card.Body>
        <Card.Title>Venedik</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur voluptate,
           repudiandae odio nostrum ea sapiente eum amet ut esse.
        </Card.Text>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Second} />
      <Card.Body>
        <Card.Title>Amsterdam</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur voluptate,
           repudiandae odio nostrum ea sapiente eum amet ut esse.
        </Card.Text>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Third} />
      <Card.Body>
        <Card.Title>Belgrade</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur voluptate,
           repudiandae odio nostrum ea sapiente eum amet ut esse.
        </Card.Text>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Fourth} />
      <Card.Body>
        <Card.Title>Zürich</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur voluptate,
           repudiandae odio nostrum ea sapiente eum amet ut esse.
        </Card.Text>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>
    </div>

    <div className='div02'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Fifth} />
      <Card.Body>
        <Card.Title>Oslo</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur voluptate,
           repudiandae odio nostrum ea sapiente eum amet ut esse.
        </Card.Text>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Sixth} />
      <Card.Body>
        <Card.Title>Madrid</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur voluptate,
           repudiandae odio nostrum ea sapiente eum amet ut esse.
        </Card.Text>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Seventh} />
      <Card.Body>
        <Card.Title>Portugal</Card.Title>
        <Card.Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur voluptate,
           repudiandae odio nostrum ea sapiente eum amet ut esse.
        </Card.Text>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Eighth} />
      <Card.Body>
        <Card.Title>Spain</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur voluptate,
           repudiandae odio nostrum ea sapiente eum amet ut esse.
        </Card.Text>
        <Button variant="primary">See Details</Button>
      </Card.Body>
    </Card>
    </div>

    
      
     <div className='div1'>
       <h1 className='header1'>Flight Schedule</h1>
       <Calendar onChange={onChange} value={value} />
       <button className='button1'>Continue</button>
     </div>

     <div className="contact">
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form>
          <label>Name-Surname</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name and Surname Please..."
          />
          <label>E-Mail</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your E-Mail Please..."
          />
          <label>Your Message</label>
          <textarea
            name="message"
            placeholder="Enter Your Message Please..."
          ></textarea>
        </form>
      </div>
    </div>

    <footer className='footer1'>
      <h1 className='h01'><i>Can Dinler</i></h1>
      <p className='p01'><i>Turkey,Istanbul</i></p>
      <p className='p02'> <i>Phone Number: <br /> 0555 555 55 55</i></p>
      <p className='p03'><i>Gmail: <br />Candinler@gmail.com</i></p>
      <p className='p04'><i>All Rights Reserved</i></p>
    </footer>

     </div>
  );
}
 

export default App;




