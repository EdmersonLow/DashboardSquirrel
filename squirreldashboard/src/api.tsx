import axios from "axios";

export async function getUserData() {
    const response = await axios.get("https://dummyjson.com/users");
    console.log(response)
    return response;
   
}

export async function getChoices() {
    const response = await axios.get("https://dummyjson.com/users");
    console.log(response)
    return response;
   
}
export async function getUserResults() {
    const response = await axios.get("https://dummyjson.com/users");
    console.log(response)
    return response;
   
}
export async function getModules() {
    const response = await axios.get("https://dummyjson.com/users");
    console.log(response)
    return response;
   
}
export async function getQuestion() {
    const response = await axios.get("https://dummyjson.com/users");
    console.log(response)
    return response;
   
}