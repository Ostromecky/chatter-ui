import router from '../routes';
import client from '../constants/apollo-client';
import { authenticatedVar } from '../constants/authenticated';

export const onLogout = () => {
    authenticatedVar(false);
    router.navigate('/login');
    client.resetStore().catch(console.error);
}
