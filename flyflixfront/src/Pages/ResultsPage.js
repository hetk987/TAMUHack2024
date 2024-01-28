import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


var example = [{
                      id: 1,
                      city : "Austin",
                      country : "USA",
                      img : require('../assets/temp.jpg'),
                      cost: "Expected Cost Here",
                      description : "Horns down. Aggies are better. College Station rocks. "
                  },
                  {
                      id:2,
                      city : "Dublin",
                      country : "Irland",
                      img : require('../assets/temp.jpg'),
                      cost: "Expected Cost Here",
                      description : "Horns down. Aggies are better. College Station rocks. "
                  },
                  {
                      id:3,
                      city : "Dallas",
                      country : "USA",
                      img : require("../assets/london.jpg"),
                      cost: "Expected Cost Here",
                      description : "Horns down. Aggies are better. College Station rocks. "
                  }]

export default function ResultsPage() {
  console.log(example);
  return (
    <div className='resultsContainer'>
    <section id="home" className="hero-block">
      <carousel> </carousel>
       <Carousel>
          {
            example.map(location => {
              return (
                <Carousel.Item key={location.id}>
                  <img
                    style={{height:'100vh'}}
                    className="d-block w-100"
                    src={location.img}
                    alt={"slide " + location.city}
                  />
                  <Carousel.Caption className='caption'>
                    <h1>{location.city}, {location.country}</h1>
                    <p>{location.description}</p>
                    <a className="btn btn-primary" href={location.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
    </div>
  );
}
