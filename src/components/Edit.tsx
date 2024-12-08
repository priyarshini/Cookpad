import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Recipe } from '../interface/Recipe';

export default function Edit() {

    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState<Recipe>();
    const sample : Recipe = 
    {
      "id": 1,
      "title": "Spaghetti Bolognese",
      "instructions": "Cook pasta according to package instructions. Prepare sauce with ground beef, tomato sauce, and spices. Combine cooked pasta and sauce. Serve with grated Parmesan.",
      "ingredients": "Spaghetti, Ground Beef and Tomato Sauce",
      "imgURL": "https://www.themealdb.com/images/ingredients/Lime.png"
    }
      
    useEffect(()=> {setRecipe(sample);
     console.log('loaded recipe:', recipe);
   },[])

     //   useEffect(()=> {axios.get("https://jsonplaceholder.typicode.com/posts")
      //   .then(res=> setRecipes(sample)).catch(error=> console.log(error))
      // },[])

    function editRecipe() {
        navigate("/");
      }

    return (
    <div style={{ margin: "10%"}}>

        <h2> Edit Recipe</h2>

        <Box sx={{ width: 500, maxWidth: '100%' }} component="form">
            <TextField variant="filled" fullWidth label="Title" id="title" defaultValue={recipe?.title} slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}/>
            <TextField  variant="filled"  margin="normal" fullWidth label="Image URL " id="url"  defaultValue={recipe?.imgURL} slotProps={{
            inputLabel: {
              shrink: true,
            },
          }} />
            <TextField  variant="filled" fullWidth label="Incredients" id="incredients"  defaultValue={recipe?.ingredients} slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}/>
            <TextField  variant="filled" margin="normal" fullWidth label="Instruction " id="instruction"  defaultValue={recipe?.instructions} slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}/>
            <Button variant="contained" onClick={editRecipe}>Save</Button>
        </Box>    
    </div>
  );
}
