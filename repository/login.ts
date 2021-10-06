import apirepository from "helpers/apirepository";
import Const from '../helpers/const';

class LoginRepository {
    static async doLogin(email: String, password: String) {
        try {
            const response = await apirepository.post(Const.LOGIN_PATH);
        } catch (error) {
            
        }
    }
}


export default LoginRepository;