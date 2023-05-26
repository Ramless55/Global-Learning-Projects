import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GithubCard = (props) => {
  const goToGitHub = () => {
    window.open(props.data.html_url, '_blank')
  }

  const eraseCard = () => {
    const index = props.information.findIndex(card => card.name === props.data.name)

    props.setData((prev) => {
      const newArray = [...prev]
      newArray.splice(index, 1)
      return newArray
    })
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="user image"
        height="300"
        image={props.data.avatar_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.data.bio}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={goToGitHub} size="small">Go to GitHub</Button>
        <Button onClick={eraseCard} size="small">Delete</Button>
      </CardActions>
    </Card>

  )
}

export default GithubCard
