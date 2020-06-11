import { GLOBAL_CONFIG } from "../config"

export const GetInstruments = async (keyword) => {
    let request_url = `${GLOBAL_CONFIG.endpoints.instruments}/keyword=${keyword}`
    let response = await fetch(request_url)
    if (response.ok) {
        let json = await response.json();
        return json
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

