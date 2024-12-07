import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Recipe } from '../interface/Recipe';
import AddIcon from '@mui/icons-material/Add';

export default function Home(props: any) {

      return (
          <><Button style={{ float: 'right' }} variant="outlined" startIcon={<AddIcon />} onClick={props.addRecipe}>Add Recipe</Button><h1>SIMPLE RECIPES MADE FOR
          <i> real, actual, everyday life.</i></h1><Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4}>
              {props.recipes.map((recipe: Recipe, index: number) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                    <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
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
