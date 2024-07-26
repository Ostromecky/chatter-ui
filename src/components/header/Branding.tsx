import Typography from '@mui/material/Typography';
import * as React from 'react';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import router from '../../routes';

const Branding = () => {
    return (
        <>
            <QuestionAnswerIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>
            <Typography
                variant="h6"
                noWrap
                component="a"
                onClick={() => router.navigate('/')}
                sx={{
                    mr: 2,
                    display: {xs: 'none', md: 'flex'},
                    fontFamily: 'monospace',
                    cursor: 'pointer',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                CHATTER
            </Typography>
        </>
    )
}

export default Branding;
