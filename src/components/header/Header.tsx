import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Branding from './Branding';
import MobileNavigation from './mobile/MobileNavigation';
import MobileBranding from './mobile/MobileBranding';
import Navigation from './Navigation';
import Settings from './Settings';
import { useReactiveVar } from '@apollo/client';
import { authenticatedVar } from '../../constants/authenticated';
import { Page } from '../../interfaces/page';

const pages: Page[] = [{
    title: 'Home',
    path: '/'
}];

const unauthenticatedPages: Page[] = [{
    title: 'Login',
    path: '/login'
},
    {
        title: 'Signup',
        path: '/signup'
    }]

const Header = () => {
    const authenticated = useReactiveVar(authenticatedVar);
    const allPages = authenticated ? pages : unauthenticatedPages;
    return (
        <AppBar position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Branding/>
                    <MobileNavigation pages={allPages}/>
                    <MobileBranding/>
                    <Navigation pages={allPages}/>
                    {authenticated && <Settings/>}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
