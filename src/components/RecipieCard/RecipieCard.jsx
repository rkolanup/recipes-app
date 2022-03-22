import React from 'react';
import {Row ,Card, Button} from 'react-bootstrap';
import './RecipieCard.css';

export default function RecipieCard({data}) {
    return (
        <Row xs={1} md={2} lg={3} className="recipe-rows">
            {Array.from({ length: 3 }).map((_, idx) => (
                data.hits && data.hits.map((item, cardKey)=>          
                    <Card key={cardKey} className = "recipe-card" bg='dark'>
                        <Card.Img variant="top" className="recImage" src={item.recipe.image} alt={item.recipe.label} />
                        <Card.Body>
                            <Card.Title className = "recipe-label">{item.recipe.label}</Card.Title>
                            <Card.Text>
                                <ul className="recipe-list-style">
                                    <li>Calories: {Math.round(item.recipe.calories)}</li>
                                    <li>Source: {item.recipe.source}</li>
                                    {item.recipe.dietLabels.map((lable, lableKey)=>
                                        <li key={lableKey}>{lable}</li>
                                    )}
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="recipe-footer">
                            <Button href={item.recipe.url} target = "_blank" variant="secondary" className="recipe-button">View Recipe</Button>
                        </Card.Footer>
                    </Card>))
                )
            }    
        </Row>
    )
}
