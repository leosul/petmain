import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import './PetMainCard.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    media: {
        height: 350,
    },
});

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    return (
        <div className='main-card'>
            <div className='card-a'>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='/images/main/pet_main_pets.jpeg'
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                My Pets
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Your list of pets! Register your pets here to find the best PetMain Walker!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" component={Link} to='/pets'>
                            Go to My Pets
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div className='card-b'>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='/images/main/pet_main_become.jpeg'
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Become a PetMain
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                If you are passionate about animals and want to earn some money, become a PetMain.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Become a PetMain
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div className='card-c'>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image='/images/main/pet_main_walker_2.jpeg'
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Find The Best Walker
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Your list of pets! Register your pets here to find the best PetMain Walker!
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Find Walker
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}
