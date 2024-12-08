import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Recipe } from '../interface/Recipe';
import AddIcon from '@mui/icons-material/Add';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const sample : Recipe[]=  [
    {
      "id": 1,
      "title": "Spaghetti Bolognese",
      "instructions": "Cook pasta according to package instructions. Prepare sauce with ground beef, tomato sauce, and spices. Combine cooked pasta and sauce. Serve with grated Parmesan.",
      "ingredients": "Spaghetti, Ground Beef and Tomato Sauce",
      "imgURL": "https://www.themealdb.com/images/ingredients/Lime.png"
    },
    {
      "id": 2,
      "title": "Chicken Salad",
      "instructions": "Grill chicken breast until fully cooked. Chop lettuce, cucumber, and tomatoes. Combine grilled chicken and chopped vegetables in a bowl. Toss with olive oil and your favorite dressing.",
      "ingredients": "Lettuce, Chicken Breast and Olive Oil",
      "imgURL": "https://www.themealdb.com/images/ingredients/Lime.png"
    }
  ]
  const [recipes, setRecipes] = useState<Recipe[]>([]);

 useEffect(()=> {setRecipes(sample);
  console.log('loaded recipes:', recipes);
},[])

//   useEffect(()=> {axios.get("https://jsonplaceholder.typicode.com/posts")
//   .then(res=> setRecipes(sample)).catch(error=> console.log(error))
// },[recipes])
  
function addRecipe(){
  setRecipes(prevState => [...prevState,{
    id: prevState.length+1,
    title: "Chicken Salad",
    instructions: "Grill chicken breast until fully cooked. Chop lettuce, cucumber, and tomatoes. Combine grilled chicken and chopped vegetables in a bowl. Toss with olive oil and your favorite dressing.",
  ingredients: "Lettuce, Chicken Breast and Olive Oil",
    imgURL: "https://www.themealdb.com/images/ingredients/Lime.png"

  }])
}

      return (
          <><Button style={{ float: 'right' }} variant="outlined" startIcon={<AddIcon />} component={Link} to="/add" >Add Recipe</Button><h1>SIMPLE RECIPES MADE FOR
          <i> real, actual, everyday life.</i></h1><Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              {recipes.map((recipe: Recipe, index: number) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea component={Link} to={`/recipe/${recipe.id}`}> 
                      <CardMedia
                        component="img"
                        height="194"
                        image={recipe.imgURL}
                        alt={recipe.title} />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {recipe.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {"Ingredients : " + recipe.ingredients}
                        </Typography>
                      </CardContent>
                      </CardActionArea>

                    </Card>
                </Grid>
              ))}
            </Grid>
          </Box></>
    
      )
    }
