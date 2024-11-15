import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItemButton } from '@mui/material';
import router from '../../../routes';
import { Chat } from '../../../gql/graphql';


interface ChatListItemProps {
    chat: Chat;
}

const ChatListItem = ({chat}: ChatListItemProps) => {

    return (
        <>
            <ListItem alignItems="flex-start" disablePadding>
                <ListItemButton
                    onClick={() => {
                        router.navigate(`/chat/${chat._id}`);
                    }}
                >
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={chat.name}
                        secondary={
                            <>
                                <Typography
                                    sx={{display: 'inline'}}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </>
                        }
                    />
                </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li"/>
        </>
    )
}

export default ChatListItem;
