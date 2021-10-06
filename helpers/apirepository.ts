import axios from "axios";
import Const from './const';

export default axios.create({baseURL: Const.BASE_URL});