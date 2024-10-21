import * as React from 'react';
import StyledAvatar from '../mypage/Sidebar/StyledAvatar';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
//import CardMedia from '@mui/material/CardMedia';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';

const MyFavoriteTracks = () => {
  return (
    <>
      <div>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <StyledAvatar />
              <ListItemText primary="Artist/Username" />
            </ListItemButton>
          </ListItem>
        </List>
      </div>
      <Divider textAlign="left">Hear the tracks you’ve liked:</Divider>
      <br />
      <div className="likedList">
        <Card sx={{ maxWidth: 200 }}>
          <CardMedia component="img" height="200" image="" alt="Album cover" />
          <CardContent>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
            <Typography>Singer name - song title</Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MyFavoriteTracks;
