import './App.css';
import 'bulma/css/bulma.css';
import  Course  from './Course';
import Firstpht from './images/1.jpg';
import Bootstrap from './images/bootstrap.png';
import CSS from './images/css.png';
import HTML from './images/html.png';
import Javascript from './images/javascript.png';
import materialUi from './images/materialUi.png';
import React from './images/react.png';
import Typescript from './images/typescript.jpg';
import Photo1 from './images/avatar.png';


function App() {
  return (
    <div className="App">
      <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      My Courses
    </p>

    <p className="title">
      Home
    </p>

    <p className="title">
      Contact
    </p>

    <p className="title">
      Services
    </p>
  </div>
</section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
          <Course 
      image={Firstpht}
      title="Web Development" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus provident
       esse ex laborum perferendis rerum cum dolor, tenetur fugit tempora praesentium illo neque. 
       Dolorum ipsum commodi quos nam harum."
       price={'10$'}/>
          </div>

          <div className='column'>
          <Course 
      image={Bootstrap}
      title="Bootstrap" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus provident
       esse ex laborum perferendis rerum cum dolor, tenetur fugit tempora praesentium illo neque. 
       Dolorum ipsum commodi quos nam harum."
       price={'10$'}/>
          </div>

          <div className='column'>
          <Course
      image={CSS}
       title="CSS" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus provident
       esse ex laborum perferendis rerum cum dolor, tenetur fugit tempora praesentium illo neque. 
       Dolorum ipsum commodi quos nam harum."
       price={'10$'}/>
          </div>

          <div className='column'>
          <Course
      image={HTML}
       title="HTML" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus provident
       esse ex laborum perferendis rerum cum dolor, tenetur fugit tempora praesentium illo neque. 
       Dolorum ipsum commodi quos nam harum."
       price={'10$'}/>
          </div>
          </div>
        </section>
        

        </div>

        <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
          <Course 
      image={Javascript}
      title="Javascript" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus provident
       esse ex laborum perferendis rerum cum dolor, tenetur fugit tempora praesentium illo neque. 
       Dolorum ipsum commodi quos nam harum."
       price={'10$'}/>
          </div>

          <div className='column'>
          <Course 
      image={materialUi}
      title="Material Ui" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus provident
       esse ex laborum perferendis rerum cum dolor, tenetur fugit tempora praesentium illo neque. 
       Dolorum ipsum commodi quos nam harum."
       price={'10$'}/>
          </div>

          <div className='column'>
          <Course
      image={React}
       title="React" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus provident
       esse ex laborum perferendis rerum cum dolor, tenetur fugit tempora praesentium illo neque. 
       Dolorum ipsum commodi quos nam harum."
       price={'10$'}/>
          </div>

          <div className='column'>
          <Course
      image={Typescript}
       title="Typescript" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus provident
       esse ex laborum perferendis rerum cum dolor, tenetur fugit tempora praesentium illo neque. 
       Dolorum ipsum commodi quos nam harum."
       price={'10$'}/>
          </div>
          </div>
        </section>
        

        </div>

        <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Photo1})` }}
      ></div>
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
            rows="6"
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