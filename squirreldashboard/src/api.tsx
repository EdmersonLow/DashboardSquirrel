import axios from "axios";

export async function getAllUsers() {
    const response = await axios.get("http://localhost:9999/backend/getAllUsers");
    console.log(response)
    return response;
}

export async function getAllModules() {
    const response = await axios.get("http://localhost:9999/backend/getModuleList");
    console.log(response)
    return response;
   
}
export async function getAllResults() {
    const response = await axios.get("http://localhost:9999/backend/getAllResults");
    console.log(response)
    return response;
   
}
export async function getAllTopics() {
    const response = await axios.get("http://localhost:9999/backend/getAllTopics");
    console.log(response)
    return response;
   
}

export async function getAllQuestions() {
    const response = await axios.get("http://localhost:9999/backend/getAllQuestions");
    console.log(response)
    return response;
   
}