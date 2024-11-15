import { useGetMe } from '../../hooks/useGetMe';
import React, { useEffect } from 'react';
import { excludedRoutes } from '../../constants/excluded-routes';
import { authenticatedVar } from '../../constants/authenticated';
import { snackVar } from '../../constants/snack';
import { UNKNOWN_ERROR_SNACK_MESSAGE } from '../../constants/errors';

interface GuardProps {
    children: React.JSX.Element;
}

const Guard = ({children}: GuardProps) => {
    const {data: user, error} = useGetMe();

    useEffect(() => {
        if (user) {
            authenticatedVar(true)
        }
    }, [user])

    useEffect(() => {
        if (error) {
            if (error.networkError) {
                snackVar(UNKNOWN_ERROR_SNACK_MESSAGE)
            }
        }
    }, [error]);

    return (
        <>
            {
                excludedRoutes.includes(window.location.pathname) ? children : user && children
            }
        </>
    );
}

export default Guard
