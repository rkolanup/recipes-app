import React, {useState} from 'react';
import {Row, Col} from 'react-bootstrap';
import './Searchform.css';

export default function Searchform ({sendSearchToApp}) {
    const [food, setFood] = useState('');
    
    return (
        <Row className="justify-content-md-center">
            <Col xs="8" sm="6" md="6">
                <input 
                    className = "search-input"
                    type="text" 
                    value={food} 
                    onChange={(e)=>setFood(e.target.value)} 
                    onKeyPress={(e) => {if(e.key=== 'Enter') sendSearchToApp(food);} }  
                    placeholder="Find Recipes..." /> 
            </Col> 
        </Row>  
    )
}
