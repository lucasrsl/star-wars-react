import React from 'react';
import { Link } from 'react-router-dom';
import { TextField, Select, FormControl, 
    MenuItem, InputLabel, Button,
    CardContent, CardActions, Card  } from '@material-ui/core';

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const User = () => {
    const [name, setName] = React.useState('');
    const [gender, setGender] = React.useState('');

    const handleChange = function(event) {
        if(event.target.name === "name") {
            setName(event.target.value);
        } else {
            setGender(event.target.value);
        }
    };

    return (
        <Card>
            <CardContent style={{padding: "20px", display: "grid"}}>
                <TextField label="Nome" value={name} name="name" onChange={handleChange}></TextField>
                <FormControl style={{margin: "15px 0"}}>
                    <InputLabel id="demo-controlled-open-select-label">Gênero</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        value={gender}
                        onChange={handleChange}
                        style={{width: "100%"}}
                        name="gender">
                    <MenuItem value={"m"}>Homem</MenuItem>
                    <MenuItem value={"w"}>Mulher</MenuItem>
                    </Select>
                </FormControl>
            </CardContent>
            <CardActions style={{float: "right"}}>
                <Link to={{
                        pathname: "/order",
                        data: [{
                            name: name,
                            gender: gender
                        }]
                    }}>
                    <Button color="primary">Seguir <ArrowForwardIcon style={{marginLeft: "5px"}} /> </Button>
                </Link>
            </CardActions>
        </Card>
    );
}

export default User;