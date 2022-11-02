import { useState } from "react";
import { red } from "@mui/material/colors";
import CardMedia from "@mui/material/CardMedia";
import { MdFavorite, MdBugReport } from "react-icons/md";
import { Card, CardHeader, Avatar, CardContent, Typography, CardActions, IconButton } from "@mui/material";

interface IPostOwner {
    id: string
    title: string
    firstName: string
    lastName: string
    picture: string
}
export interface IBlogPost {
    id: string
    image: string
    likes: number
    owner: IPostOwner
    publishDate: string
    tags: Array<string>
    text: string
}

export default function MuiCard({id, image, likes, owner, publishDate, tags, text}:IBlogPost) {
    const [newLike, setNewLike] = useState(false)
    const [testError, setTestError] = useState<boolean>(false)

    const clientError = () => {
        throw new Error(`Error on card ${id}, from user ${owner.firstName} ${owner.lastName}`)
    }

    const handleLikeClick = () => {
        setNewLike(!newLike)
    }

    return (
    <Card sx={{ width: 230, position: 'relative' }}>
        <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                <img src={owner.picture} alt={`${owner.title}`} />
            </Avatar>
        }
        title={`${owner.firstName} ${owner.lastName}`}
        subheader={new Date(publishDate).toDateString()}
        />
        <CardMedia
            component="img"
            height="194"
            image={image}
            alt='post image'
        />
        <CardContent>
        <Typography variant="body2" color="text.secondary" style={{minHeight: 72}}>
            {text}
        </Typography>
        </CardContent>
        <CardActions disableSpacing style={{ display: 'flex', justifyContent: 'space-between'}}>
        <IconButton 
            aria-label="add to favorites"
            onClick={handleLikeClick}
        >
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <MdFavorite 
                    color={newLike ? 'red' : 'grey' }
                />
                <span style={{ marginLeft: 5, fontSize: 12 }}> { newLike ? (likes + 1) : likes } </span>
            </div>
        </IconButton>

        <IconButton 
            aria-label="add to favorites"
            onClick={() => setTestError(true)}
        >
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <span style={{marginRight: 5, fontSize: 12}}> Test Client Error </span>
                <MdBugReport />
            </div>
        </IconButton>
        </CardActions>
        {testError ? clientError() : null}
    </Card>
    );
}