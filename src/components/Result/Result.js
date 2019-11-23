import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, CardContent, Card } from '@material-ui/core';

import Image from '../Image/Image';
import api from '../../service/api';


const Result = (props) => { 

    const [char, setChar] = useState({});
    let name = '';

    useEffect(() => {
        if(props.location.data) {
            name = props.location.data[0].charName;
        }

        async function loadChar() {
            const response = await api.get(`/?search=${name}`);
            debugger
            setChar(response.data.results[0]);
        }
        loadChar();
    }, []);

    
    return (
        <Card>
            <CardContent style={{padding: "20px", display: "grid"}}>
                
            </CardContent>
        </Card>
    );
}   

export default Result;