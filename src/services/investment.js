import { GLOBAL_CONFIG } from "../config"

export const GetInvestments = async (keyword) => {
    let request_url = `${GLOBAL_CONFIG.endpoints.investments}/keyword=${keyword}`
    let response = await fetch(request_url)
    if (response.ok) {
        let json = await response.json();
        return json
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

