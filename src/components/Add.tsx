import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

export default function Add() {
    const navigate = useNavigate();

    function addRecipe() {
        navigate("/");
      }

    return (
    <div style={{ margin: "10%"}}>

<h2> Add New Recipe</h2>
        <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField fullWidth label="Title" id="title" />
            <TextField  margin="normal" fullWidth label="Image URL " id="url" />
            <TextField fullWidth label="Incredients" id="incredients" />
            <TextField  margin="normal" fullWidth label="Instruction " id="instruction" />
            <Button variant="contained" onClick={addRecipe}>Save</Button>
        </Box>    
    </div>
  );
}