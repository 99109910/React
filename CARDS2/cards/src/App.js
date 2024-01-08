import 'bulma/css/bulma.css';
import './App.css';
import  Course  from './Course';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import CompleteWeb from './images/Completeweb.jpg';

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      My Courses
    </p>
  </div>
</section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
          <Course 
      image={Angular}
      title="Angular" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus provident
       esse ex laborum perferendis rerum cum dolor, tenetur fugit tempora praesentium illo neque. 
       Dolorum ipsum commodi quos nam harum."/>
          </div>

          <div className='column'>
          <Course 
      image={Bootstrap}
      title="Bootstrap" 
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus provident
       esse ex laborum perferendis rerum cum dolor, tenetur fugit tempora praesentium illo neque. 
       Dolorum ipsum commodi quos nam harum."/>
          </div>

          <div className='column'>
          <Course
      image={Ccsharp}
       title="Complete Web" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus provident
       esse ex laborum perferendis rerum cum dolor, tenetur fugit tempora praesentium illo neque. 
       Dolorum ipsum commodi quos nam harum."/>
          </div>

          <div className='column'>
          <Course
      image={CompleteWeb}
       title="Frontend" 
       description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel temporibus provident
       esse ex laborum perferendis rerum cum dolor, tenetur fugit tempora praesentium illo neque. 
       Dolorum ipsum commodi quos nam harum."/>
          </div>
          </div>
        </section>
        

        </div>
      </div>
  );
}

export default App;
