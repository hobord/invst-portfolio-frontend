import { GLOBAL_CONFIG } from "../config"

const GetInstruments = async (keyword) => {
    let request_url = `${GLOBAL_CONFIG.endpoints.instruments}?keyword=${keyword}`
    let response = await fetch(request_url)
    if (response.ok) {
        let json = await response.json().catch(reason => alert(reason));
        return json
    } else {
        const msg =  await response.text()
        alert("HTTP-Error: " + response.status + ", " + msg);
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
        const msg =  await response.text()
        alert("HTTP-Error: " + response.status + ", " + msg);
    }
}
const CreateInstruments = async (newInstrument) => {
    let request_url = `${GLOBAL_CONFIG.endpoints.instruments}`
    let response = await fetch(request_url, {
        method: "post",
        body: JSON.stringify(newInstrument)
    })
    if (response.ok) {
        let json = await response.json().catch(reason => alert(reason));
        return json
    } else {
        const msg =  await response.text()
        alert("HTTP-Error: " + response.status + ", " + msg);
    }
}
export default {
    GetInstruments,
    DeleteInstrument,
    CreateInstruments
}