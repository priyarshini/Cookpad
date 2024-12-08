import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Recipe } from '../interface/Recipe';

export default function Add() {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [imgURL, setImgURL] = useState('');
    const [instruction, setInstruction] = useState('');
    const [incredients, setIncredients] = useState('');
    function addRecipe() {
        navigate("/");
      }

    return (
    <div style={{ margin: "10%"}}>

<h2> Add New Recipe</h2>
<form onSubmit={addRecipe}>
        <Box sx={{ width: 500, maxWidth: '100%' }}>
            <TextField fullWidth label="Title" id="title" value={title} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(event.target.value);
        }}/>
            <TextField  margin="normal" fullWidth label="Image URL " id="url"  value={imgURL} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setImgURL(event.target.value);
        }}/>
            <TextField fullWidth label="Incredients" id="incredients"  value={incredients} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setIncredients(event.target.value);
        }}/>
            <TextField  margin="normal" fullWidth label="Instruction " id="instruction"  value={instruction} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setInstruction(event.target.value);
        }}/>
            <Button variant="contained" onClick={addRecipe}>Save</Button>
        </Box>    
        </form>
    </div>
  );
}
