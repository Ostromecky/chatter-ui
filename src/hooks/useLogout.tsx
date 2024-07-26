import { API_URL } from '../constants/urls';
import { onLogout } from '../utils/logout';

const useLogout = () => {
    const logout = async () => {
        const res = await fetch(
            `${API_URL}/auth/logout`, {
                method: 'POST'
            }
        ).then((res) => {
            onLogout();
            return res;
        });

        if (!res.ok) {
            throw new Error('Failed to logout');
        }
    }

    return {logout};
}

export { useLogout };
