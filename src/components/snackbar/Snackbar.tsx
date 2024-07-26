import { Alert, Alert as MUIAlert, Snackbar as MUISnackbar, Stack } from '@mui/material';
import { forwardRef, SyntheticEvent } from 'react';
import { snackVar } from '../../constants/snack';
import { useReactiveVar } from '@apollo/client';
import { AlertProps } from '@mui/material/Alert/Alert';

const Snackbar = () => {
    const snack = useReactiveVar(snackVar);
    const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        snackVar(undefined);
    };

    return (
        <>
            {snack && (
                <Stack spacing={2} sx={{width: '100%'}}>
                    <MUISnackbar open={!!snack} autoHideDuration={6000} onClose={handleClose}>
                        <Alert
                            onClose={handleClose}
                            severity={snack?.type}
                            variant="filled"
                            sx={{width: '100%'}}
                        >
                            {snack.message}
                        </Alert>
                    </MUISnackbar>
                </Stack>
            )}
        </>

    );
}

export default Snackbar;
