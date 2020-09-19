import fetch from "node-fetch";
import {RequestInit, Response} from "node-fetch";

interface HTTPRequest {
    URL: string,
    Options: RequestInit, // method, body, headers, credentials, ..
}

interface HTTPResponse {
    Status: number
    Body: string
    Err: string // network error
}

async function DoHTTP(r: HTTPRequest): Promise<HTTPResponse> {
    try {
        let w = {} as HTTPResponse;
        let resp: Response = await fetch(r.URL, r.Options);
        w.Status = resp.status;
        w.Body = await resp.text();
        w.Err = "";
        return w
    } catch (err) {
        return {Err: `catch ${err}`} as HTTPResponse;
    }
}

if ("main") {
    let url0 = "https://httpbin.org/post"; // a server that echoes post request
    // let url0 = "https://google.com/should-be-not-found";

    let respPromise = DoHTTP({
        URL: url0,
        Options: {
            timeout: 3000, // milliseconds
            method: "POST",
            body: JSON.stringify({
                "username": "username0",
                "password": "password0",
            }, null, "\t"),
        }
    });

    respPromise.then(function (w: HTTPResponse) {
        console.log("err: ", w.Err);
        console.log("status: ", w.Status);
        console.log("body: ", w.Body)
    })
}
