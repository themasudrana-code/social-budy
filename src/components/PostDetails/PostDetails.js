import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const {ShowDetails} = useParams();
    const [singlePost, setSinglePost] = useState({})
    const [comment, setComment] = useState([]);
    const {id, userId, title, body } = singlePost;
    
    useEffect(()=>{
        const api =`https://jsonplaceholder.typicode.com/posts/${ShowDetails}`;
        fetch(api)
        .then(res => res.json())
        .then(data => setSinglePost(data))
    },[])

        useEffect(() => {
            const url = `https://jsonplaceholder.typicode.com/comments?postId=${ShowDetails}`;
            fetch(url)
                .then(res => res.json())
                .then(data => setComment(data))
    }, []);
//card part
    const useStyles = makeStyles({
        root: {
          height:'300px',
          margin:'20px 10px',
          boxShadow: '5px 5px 10px grey',
          textAlign:'center',
          padding:'30px',
        },
        title: {
          fontSize: 14,
          color:'#424242',
          textAlign:'center',
          margin:'10px 0px',
          marginBottom:'20px'
        },
        pos: {
          marginBottom: 10,
        },
      });
    const classes = useStyles();
    return (
        <Container className='post-wrapper'>
            <Grid xs={10}>
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
                </Card>
            </Grid> 
                    {
                        comment.map(comment =>
                            <div className="comment-content">
                                <div className="comment-img">
                                <img src={`https://loremflickr.com/600/400?random=${Math.random() * 100}`} alt="" />
                                </div>
                                <div className="comment-info">
                                    <h6> {comment.name} </h6>
                                    <p>{comment.email} </p>
                                    <p>{comment.body} </p>
                                </div>
                            </div>
                        ) 
                    }
      </Container>
    );
};

export default PostDetails;