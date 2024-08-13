import axios from "axios";
import { baseURL } from "../constant";

export const baseApi =  axios.create({baseURL});