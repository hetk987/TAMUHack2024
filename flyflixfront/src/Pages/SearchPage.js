import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import QuestionCard from '../components/QuestionCard';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './pages.css'

const SearchPage = () => {
    const [cusineInput, setCusineInput] = useState(null);
    const [activitiesInput, setActivitiesInput] = useState(null);
    const [budgetInput, setBudgetInput] = useState(null);
    const [datesInput, setDatesInput] = useState(null);
    const [additionalInput, setAdditionalInput] = useState(null);


    const handleSubmit = (e) => {
        console.log(cusineInput);
        console.log(activitiesInput);
        console.log(budgetInput);
        console.log(datesInput);
        console.log(additionalInput);

    }

    return (
        <div className="background" style={{display: 'flex', height: window.innerHeight}}>
            <Container>
                <Row >
                    <Col style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <div style={{marginLeft: '25px'}}>
                            <h1 style={{fontSize:"4em",}}>
                                Set Your Preferences.
                            </h1>
                        </div>
                    </Col>
                    <Col>
                        <QuestionCard value={cusineInput} setValue={setCusineInput} title="Cuisine" formLabel="What are your preffered meals for the trip?"/>
                    </Col>
                    <Col>
                        <QuestionCard value={activitiesInput} setValue={setActivitiesInput}  title="Activities" formLabel="What Activities would you like to participate in?"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <QuestionCard value={budgetInput} setValue={setBudgetInput} title="Budget" formLabel="How much would you like to spend on this trip total?"/>
                    </Col>
                    <Col>
                        <QuestionCard value={datesInput} setValue={setDatesInput} title="Dates" formLabel="What dates would you like to go on vacation?" calendar={true}/>
                    </Col>
                    <Col>
                        <QuestionCard value={additionalInput} setValue={setAdditionalInput} title="Additional Information" formLabel="Include any extra details you would like consider"/>
                    </Col>
                </Row>
                <Row>
                    <div style={{display:'flex', justifyContent:'center', marginTop:'2em'}}>
                        <button onClick={handleSubmit} class="button-64" style={{fontSize:'2em', backgroundColor:'rgb(255, 255, 255)'}}><span class="text">Find Your Destination</span></button>
                    </div>
                </Row>
            </Container>
            
        </div>
    )
}

export default SearchPage;