import { Container, createTheme, CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ApolloProvider } from "@apollo/client";
import client from "./constants/apollo-client";
import Guard from './components/auth/Guard';
import Header from './components/header/Header';
import Snackbar from './components/snackbar/Snackbar';
import ChatList from './components/chat-list/ChatList';
import './App.css';
import { usePath } from './hooks/usePath';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

function App() {
    const {path} = usePath();
    const showChatList = path === '/' || path.includes('chat');
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <Header/>
                <Guard>
                    {showChatList ? (
                        <Grid
                            container sx={{
                            height: 'calc(100vh - 68.5px)',
                            overflow: 'hidden',
                        }}
                        >
                            <Grid item md={3}>
                                <ChatList/>
                            </Grid>
                            <Grid
                                item md={9}
                                sx={{
                                    height: '100%',
                                    padding: '24px'
                                }}
                            >
                                <div className="scrollable-wrapper">
                                    <Routes/>
                                </div>
                            </Grid>
                        </Grid>
                    ) : (
                        <Routes/>
                    )}
                </Guard>
                <Snackbar/>
            </ThemeProvider>
        </ApolloProvider>
    )
}


const Routes = () => {
    return (
        <Container sx={{height: '100%'}}>
            <RouterProvider router={router}/>
        </Container>
    )
}

export default App;
