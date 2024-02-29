import React from 'react'

function Course({image,title, description,price}) {
    
    return(
        <div className="card">
  <div class="card-image">
    <figure className="image is-4by3">
      <img src={image} alt="MyCourses"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      
      <div className="media-content">
        <p className="title is-4">{title}</p>
        
      </div>
    </div>

    <div className="content">
     {description}
    </div>

    <div className="media-content">
        <p className="title is-4">{price}</p>
        
      </div>
  </div>
</div>
  
    )
}

export default Course;