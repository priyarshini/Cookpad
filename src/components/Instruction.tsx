import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Recipe } from '../interface/Recipe';
import { useState, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Instruction(){

    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();
    const sample : Recipe = 
          {
            "id": 1,
            "title": "Spaghetti Bolognese",
            "instructions": "Cook pasta according to package instructions. Prepare sauce with ground beef, tomato sauce, and spices. Combine cooked pasta and sauce. Serve with grated Parmesan.",
            "ingredients": "Spaghetti, Ground Beef and Tomato Sauce",
            "imgURL": "https://www.themealdb.com/images/ingredients/Lime.png"
          }
        const [recipe, setRecipe] = useState<Recipe>();
      
       useEffect(()=> {setRecipe(sample);
        console.log('loaded recipe:', recipe);
      },[])
      
      //   useEffect(()=> {axios.get("https://jsonplaceholder.typicode.com/posts")
      //   .then(res=> setRecipes(sample)).catch(error=> console.log(error))
      // },[])


      function deleteRecipe(){
        // axios.delete("https://jsonplaceholder.typicode.com/posts")
      //   .then(res=> setRecipes(sample)).catch(error=> console.log(error))
      // },[recipes])
      navigate("/");
      }
      
            return (
              <div>
              <h1><i>{recipe?.title}</i></h1>
              <Button style={{ float: 'right' }} startIcon={<EditIcon />} component={Link} to={`/edit/${recipe?.id}`}></Button>
              <Button style={{ float: 'right' }}  startIcon={<DeleteIcon />} onClick={deleteRecipe}></Button>
          
              <Divider/>
              <Grid container spacing={6}>
                <Grid item xs={6}>
                  <img src={recipe?.imgURL} alt={recipe?.title} style={{ width: '100%' }} />
                </Grid>
                <Grid item xs={6}>
                <Typography variant="h6" >
                  {"Ingredients : " + recipe?.ingredients}
                </Typography>
                <Typography variant="body1" gutterBottom>{"Method : " + recipe?.instructions}
      </Typography>
                </Grid>
                </Grid>
                </div>
                )
        }