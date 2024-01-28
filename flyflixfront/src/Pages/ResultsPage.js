import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


var example = [{
                      id: 1,
                      city : "Austin",
                      country : "USA",
                      img : require('../assets/austin.jpg'),
                      cost: "Expected Cost Here",
                      description : "Horns down. Aggies are better. College Station rocks. "
                  },
                  {
                      id:2,
                      city : "Dublin",
                      country : "Irland",
                      img : require('../assets/dublin.jpg'),
                      cost: "Expected Cost Here",
                      description : "Horns down. Aggies are better. College Station rocks. "
                  },
                  {
                      id:3,
                      city : "Dallas",
                      country : "USA",
                      img : require("../assets/london.jpg"),
                      cost: "Expected Cost Here",
                      description : "Rome, the capital city of Italy, is a perfect destination for your trip. Known for its rich history, stunning architecture, and delicious Italian cuisine, Rome offers a wide range of activities to explore. Start your trip by visiting the famous Colosseum and Roman Forum to immerse yourself in the ancient Roman history. Take a leisurely stroll through the charming streets of Trastevere, known for its picturesque alleys and vibrant atmosphere. Don't miss the opportunity to visit the Vatican City, home to the iconic St. Peter's Basilica and the Sistine Chapel. When it comes to food, Rome is a paradise for Italian cuisine lovers. Indulge in mouthwatering pasta dishes like carbonara, cacio e pepe, and amatriciana. Don\'t forget to try the traditional Roman-style pizza, known for its thin and crispy crust. For dessert, treat yourself to gelato, the famous Italian ice cream, available in a variety of flavors. For hiking enthusiasts, the nearby Appian Way Regional Park offers beautiful trails surrounded by nature. Explore the ancient ruins and enjoy panoramic views of the countryside. In terms of accommodation, Rome offers a wide range of options to suit every budget. From luxury hotels near the city center to cozy bed and breakfasts in charming neighborhoods, you will find something that fits your preferences. Some popular hotels include Hotel Artemide, Hotel Eden, and Hotel Raphael. With its fascinating history, delicious cuisine, and stunning sights, Rome is the perfect destination for your trip. Enjoy the blend of ancient and modern attractions, indulge in Italian delicacies, and immerse yourself in the vibrant atmosphere of the Eternal City."
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
                    <h1 className='captionColor'>{location.city}, {location.country}</h1>
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
