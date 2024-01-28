import './pages.css';
import './ticket.css';
import Logo  from './AALogo.png';

const FlightsPage = () => {
  const resultsInfo = JSON.parse(localStorage.getItem('results'))

    const flights =[{
                      id: 1,
                      from : "DFW",
                      to: resultsInfo[0].IATA,
                      seatNumber: "25C",
                      departureTime: "12:01am",
                      gate: "2",
                      flightNum: "AA251"
                    },
                    {
                      id: 2,
                      from : "DFW",
                      to: resultsInfo[1].IATA,
                      seatNumber: "19D",
                      departureTime: "5:21pm",
                      gate: "4",
                      flightNum: "AA51"

                    },
                    {
                      id: 3,
                      from : "DFW",
                      to: resultsInfo[2].IATA,
                      seatNumber: "3A",
                      departureTime: "9:41pm",
                      gate: "21",
                      flightNum: "AA346"

                    },
                ]

    return (
      <body className='flight'>
        <div className='FlightsBackground'>
            <div class="container1">
            {flights.map(items => {
              return(
              <div class="ticket">
              <div class="ticket-left">
                <div class="corner-seat-container">
                  <div class="item">seat</div>
                  <div class="lgdetail">{items.seatNumber}</div>
                </div>
                <div>
                  <img style= {{innerWidth:"10px"}}src={Logo} alt="airplane-img" />
                </div>
                  
                <div class="departure-time">
                  <div class="item">departure time</div>
                  <div class="lgdetail">{items.departureTime}</div>
                </div>
                <div class="departing">
                  <div class="item">departing</div>
                  <div class="smdetail">{items.from}</div>
                </div>
              </div>
              <div class="ticket-middle">
                <div class="passenger-name">
                  <div class="item">passenger</div>
                  <div class="smdetail">Hardy, Ben</div>
                </div>
                <div class="gate">
                  <div class="item">gate</div>
                  <div class="lgdetail">{items.gate}</div>
                </div>
                <div class="flight">
                  <div class="item">flight #</div>
                  <div class="lgdetail">{items.flightNum}</div>
                </div>
                <div class="destination">
                  <div class="item">destination</div>
                  <div class="smdetail">{items.to}</div>
                </div>
                <div class="group">
                  <div class="item">group</div>
                  <div class="smdetail">3</div>
                </div>
              </div>
              <div class="ticket-right">
                <div class="stub-flight">
                  <div class="smitem">flight #</div>
                  <div class="exsmdetail">{items.flightNum}</div>
                </div>
                <div class="stub-seat">
                  <div class="smitem">seat</div>
                  <div class="exsmdetail">{items.seatNumber}</div>
                </div>
                <div class="stub-depart">
                  <div class="smitem">depart</div>
                  <div class="exsmdetail">{items.departureTime}</div>
                </div>
                <div className='QRcode'>
                  <a href="https://aa.com"><img  src="https://api.qrserver.com/v1/create-qr-code/?data=aa.com&amp;size=100x100" alt="" title="American Airlines" /></a>
                </div>
              </div>
            </div>
            
            )})};
    
        </div>
      </div>
      </body>
    )
}

export default FlightsPage;