import { GLOBAL_CONFIG } from "../config"

const GetInstruments = async (keyword) => {
    let request_url = `${GLOBAL_CONFIG.endpoints.instruments}/?keyword=${keyword}`
    let response = await fetch(request_url)
    if (response.ok) {
        let json = await response.json().catch(reason => alert(reason));
        return json
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

const DeleteInstrument = async (id) => {
    let request_url = `${GLOBAL_CONFIG.endpoints.instruments}/${id}`
    let response = await fetch(request_url, {
        method: "DELETE"
    })
    if (response.ok) {
        let json = await response.json().catch(reason => alert(reason));
        return json
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

export default {
    GetInstruments,
    DeleteInstrument
}