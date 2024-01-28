import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const QuestionCard = ( {title, formLabel, calendar, value, setValue} ) => {
    const [selectedFromDate, setSelectedFromDate] = useState(null);
    const [selectedToDate, setSelectedToDate] = useState(null);


    const handleChange = (event) => {
            setValue(event.target.value);
      };

    const handleDateChange = () => {
        if (selectedFromDate !== null && selectedToDate !== null) {
            console.log('bro work')
            setValue(`${selectedFromDate} ${selectedToDate}`);
        }
    }

    useEffect(() => {
        handleDateChange()
    }, [selectedFromDate, selectedToDate]);

    const handleToDateChange = (date) => {
        console.log(date)
        setSelectedToDate(date);
    }

    const handleFromDateChange = (date) => {
        console.log(date)
        setSelectedFromDate(date);
 


    };

    return (

        <div style={{padding: '20px'}}>
            <Card style={{display:'flex', height: '200px',border: 'none',  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px', borderRadius: '20px',  backgroundColor: 'rgba(225,225,225,0.9)'}}>
                <Card.Body >
                    <Card.Title style={{fontStyle: 'bold'}}>
                        {title}
                    </Card.Title>
                    {calendar ? 
                        <>
                            <Form.Label>From</Form.Label>
                            <div >
                                <DatePicker style={{color: 'red'}} selected={selectedFromDate}  onChange={ selectedFromDate => handleFromDateChange(selectedFromDate)  }/>
                            </div>
                            <Form.Label>To</Form.Label>
                            <div>
                                <DatePicker style={{opacity: .5}} selected={selectedToDate} onChange={ selectedToDate => handleToDateChange(selectedToDate)} />
                            </div>
                        </>
                    :
                        <>
                            <Form.Control value={value} onChange={handleChange} style={{ height: '100px', verticalAlign: 'top', borderColor:'black', backgroundColor: 'rgba(225,225,225,0)' }} placeholder={formLabel} as="textarea" />
                        </>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}

export default QuestionCard;