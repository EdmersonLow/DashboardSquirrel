import axios from "axios";

export async function getUserData() {
    const response = await axios.get("https://dummyjson.com/users");
    console.log(response)
    return response;
   
}
