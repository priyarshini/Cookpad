import { useState, useEffect } from 'preact/hooks';
import './app.css'
import Home from './components/Home';
import { Recipe } from './interface/Recipe';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';

export function App() {

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
 // const [selecteRecipes, setSelectedRecipes] = useState(null);

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
    <>

    <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              
              <Typography variant="h6" color="inherit" component="div">
                <IconButton color="inherit" aria-label="menu" >
                C<CookieIcon /><CookieIcon />K PAD
              </IconButton>
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>

    <Home recipes={recipes} addRecipe={addRecipe} />
    
    </>

  )
}
