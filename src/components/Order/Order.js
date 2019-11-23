import React from 'react';
import { Link } from 'react-router-dom';
import { Button, CardContent, Card  } from '@material-ui/core';


const Order = (props) => {    
    let data = {
        name: "",
        gender: ""
    }

    if(props.location.data) {
        data = props.location.data[0];
    }

    console.log(data);
    
    return (
        <Card>
            <CardContent style={{padding: "20px", display: "block"}}>
                <Link to={{
                        pathname: "/char",
                        data: [{
                            name: data.name,
                            gender: data.gender,
                            order: "jedi"
                        }]
                    }}>
                    <Button variant="contained" color="primary" style={{width: "200px", height: "200px"}}>Jedi</Button>
                </Link>

                <Link to={{
                        pathname: "/char",
                        data: [{
                            name: data.name,
                            gender: data.gender,
                            order: "sith"
                        }]
                    }}>
                    <Button variant="contained" color="secondary" style={{width: "200px", height: "200px", marginLeft: "100px"}}>Sith</Button>
                </Link>
            </CardContent>
        </Card>
    );
}   

export default Order;