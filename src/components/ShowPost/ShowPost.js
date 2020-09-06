import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './ShowPost.css'
import { Link } from 'react-router-dom';

const ShowPost = (props) => {
    const {userId,id,title,body} = props.post;

    
    const useStyles = makeStyles({
        root: {
          height:'380px',
          margin:'20px 10px',
          boxShadow: '5px 5px 10px grey',
          textAlign:'justify',
          
        },
        title: {
          fontSize: 14,
          color:'#3F51B5',
          textAlign:'center',
          margin:'10px 0px'
        },
        pos: {
          marginBottom: 10,
        },
      });
    const classes = useStyles();
    return (
      <Container>
      <Grid xs={6} className='post_content'>
          <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} gutterBottom>
                  <h4>{title}</h4>
                </Typography>
                <Typography variant="h5" component="h2">
                  <p>{body}</p>
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  <span>User Id :{userId}</span>
              </Typography>
              </CardContent>
              <CardActions>
                <Link className='post-btn' to ={`/post/${id}`}>
                      <Button variant="contained" color="primary" > READ MORE</Button>
                </Link>
                
              </CardActions>
          </Card>
        
        </Grid>
      </Container>
    )};

export default ShowPost;