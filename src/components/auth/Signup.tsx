import Auth from "./Auth";
import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import { useCreateUser } from '../../hooks/useCreateUser';
import { useState } from 'react';
import { extractErrorMessage } from '../../utils/errors';
import { useLogin } from '../../hooks/useLogin';
import { UNKNOWN_ERROR_MESSAGE } from '../../constants/errors';

const Signup = () => {
    const [createUser] = useCreateUser()
    const [error, setError] = useState('')
    const {login} = useLogin();

    const handleSignup = async ({email, password}: { email: string, password: string }) => {
        try {
            await createUser({
                variables: {
                    createUserInput: {
                        email,
                        password
                    }
                }
            })
            setError('');
            await login({email, password});
        } catch (err) {
            const errorMessage = extractErrorMessage(err);
            if (errorMessage) {
                setError(errorMessage);
                return;
            }
            setError(UNKNOWN_ERROR_MESSAGE);
        }
    }

    return (
        <Auth
            error={error}
            submitLabel="Signup" onSubmit={(credentials) => handleSignup(credentials)}
        >
            <Link to={'/login'} style={{alignSelf: 'center'}}>
                <MUILink>Login</MUILink>
            </Link>
        </Auth>
    );
}

export default Signup;
