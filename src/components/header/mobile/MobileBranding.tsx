import Typography from '@mui/material/Typography';
import * as React from 'react';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import router from '../../../routes';

const MobileBranding = () => {
 return (
     <>
         <QuestionAnswerIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
         <Typography
             variant="h5"
             noWrap
             component="a"
             onClick={() => router.navigate('/')}
             sx={{
                 mr: 2,
                 display: {xs: 'flex', md: 'none'},
                 flexGrow: 1,
                 fontFamily: 'monospace',
                 fontWeight: 700,
                 cursor: 'pointer',
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

export default MobileBranding;
