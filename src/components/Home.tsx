import {Button, Card, CardActions, CardContent, CardMedia, Collapse, IconButton, IconButtonProps, List, styled, Typography } from '@mui/material';
import { Recipe } from '../interface/Recipe';
import React from 'preact/compat';
import AddIcon from '@mui/icons-material/Add';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    variants: [
      {
        props: ({ expand }) => !expand,
        style: {
          transform: 'rotate(0deg)',
        },
      },
      {
        props: ({ expand }) => !!expand,
        style: {
          transform: 'rotate(180deg)',
        },
      },
    ],
  }));

export default function Home(props: any) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

      return (
        <div>
          <Button style={{ float: 'right' }} variant="outlined" startIcon={<AddIcon />} onClick={props.addRecipe}>Add Recipe</Button>
                <h1>SIMPLE RECIPES MADE FOR
                <i> real, actual, everyday life.</i></h1>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {props.recipes.map((recipe: Recipe) => (
                       <> 
    <Card sx={{ maxWidth: 345 }}>
        
      <CardMedia
        component="img"
        height="194"
        image={recipe.imgURL}
        alt={recipe.title}
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div">
      {recipe.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {"Ingredients : " + recipe.ingredients}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
          <Typography sx={{ marginBottom: 2 }}>
            { recipe.instructions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
                       
                     </>
                    ))}
                </List>
    
        </div>
    
      )
    }
