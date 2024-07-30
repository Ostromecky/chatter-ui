import List from '@mui/material/List';
import ChatListItem from './chat-list-item/ChatListItem';
import ChatListHeader from './chat-list-header/ChatListHeader';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';
import { useState } from 'react';
import ChatListAdd from './chat-list-add/ChatListAdd';
import { useGetChats } from '../../hooks/useGetChats';

const ChatList = () => {
    const [chatListAddVisible, setChatListAddVisible] = useState(false);
    const {data} = useGetChats();

    return (
        <>
            <Stack>
                <ChatListAdd open={chatListAddVisible} handleClose={() => setChatListAddVisible(false)}/>
                <ChatListHeader handleAddChat={() => setChatListAddVisible(true)}/>
                <Divider/>
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                        overflow: 'auto',
                        maxHeight: '90vh'
                    }}
                >

                    {
                        data?.chats.map((chat) => (
                            <ChatListItem name={chat.name}/>
                        ))
                    }
                </List>
            </Stack>
        </>
    );
}


export default ChatList;
