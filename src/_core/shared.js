import { history } from "../App";
import { TOKEN_CYBERSOFT, USER_LOGIN } from "../utils/setting";

export const logOut = () => {
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(TOKEN_CYBERSOFT);
    history.push('/dangnhap');
    window.location.reload()
}