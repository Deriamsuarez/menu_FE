import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Stack } from '@mui/material';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { useNavigate } from 'react-router-dom';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));


const OrdersCardInCart = ({setCartState, product}) => {
    const [expanded, setExpanded] = useState(false);

    const navigate = useNavigate()

    const showMore = () => {
        navigate('/orders')
        setCartState({right: false})
    }

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'success.main' }} aria-label="recipe">
                        D
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <AccessAlarmIcon />
                    </IconButton>
                }
                title="Orden #1"
                subheader="SubTotal: $4,000"
            />

            <CardActions disableSpacing>
                <Typography variant='subtitle1'>
                    Mas detalles
                </Typography>
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

                    <Stack w='140px'>
                        <List sx={{ width: '220px', bgcolor: 'background.paper' }}>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LocalMallOutlinedIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Sushi pollo" secondary="$1,000 × 3 = $3,000" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LocalMallOutlinedIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Hamburguesa" secondary="$450 × 2 = $900" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LocalMallOutlinedIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Pina Colada" secondary="$700 × 2 = $1,400" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <LocalMallOutlinedIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Hamburguesa" secondary="$450 × 2 = $900" />
                            </ListItem>
                        </List>
                        <Divider />
                        <Button onClick={showMore} sx={{marginTop: '1em'}} variant='outlined' color='success'>Ver mas</Button>
                    </Stack>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default OrdersCardInCart