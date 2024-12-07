import { useState, useEffect } from 'preact/hooks';
import './app.css'
import Home from './components/home';
import { Recipe } from './interface/Recipe';

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
    <Home recipes={recipes} addRecipe={addRecipe}/>

  )
}
