import { Button, FormControlLabel, FormGroup, InputBase, Modal, Paper, Stack, Switch, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useCreateChat } from '../../../hooks/useCreateChat';
import { UNKNOWN_ERROR_MESSAGE } from '../../../constants/errors';

interface ChatListAddProps {
    open: boolean;
    handleClose: () => void;
}

const ChatListAdd = ({open, handleClose}: ChatListAddProps) => {
    const [isPrivate, setIsPrivate] = useState(false);
    const [error, setError] = useState<string>('');
    const [name, setName] = useState<string | undefined>('');
    const [createChat] = useCreateChat();

    const onClose = () => {
        setError('')
        setName('')
        setIsPrivate(false)
        handleClose()
    }
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,

                }}
            >
                <Stack spacing={2}>
                    <Typography variant="h6" component='h2'>Add Chat</Typography>
                    <FormGroup>
                        <FormControlLabel
                            label="Private"
                            style={{width: 0}} control={<Switch
                            defaultChecked={isPrivate}
                            value={isPrivate}
                            onChange={(event) => setIsPrivate(event.target.checked)}
                        />}
                        />

                    </FormGroup>
                    {
                        isPrivate ? (
                            <Paper sx={{p: '2px 4px', display: 'flex', alignItems: 'center'}}>
                                <InputBase sx={{ml: 1, flex: 1}} placeholder='Search Users'/>
                                <IconButton sx={{p: '10px'}}>
                                    <SearchIcon/>
                                </IconButton>
                            </Paper>
                        ) : (
                            <TextField
                                label='Name' error={!!error} helperText={error}
                                onChange={(event) => setName(event.target.value)}
                            />
                        )
                    }
                    <Button
                        variant='outlined' onClick={async () => {
                        if (!name?.length) {
                            setError('Chat name is required.');
                            return;
                        }

                        try {
                            await createChat({
                                variables: {
                                    createChatInput: {
                                        isPrivate,
                                        name: name || undefined
                                    }
                                }
                            })
                            onClose();
                        } catch (err) {
                            setError(UNKNOWN_ERROR_MESSAGE)
                        }

                    }}
                    >Save</Button>
                </Stack>
            </Box>
        </Modal>
    )
}

export default ChatListAdd;