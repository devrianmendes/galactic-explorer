import { API_KEY } from "../utils/apiKey";

type DonkyData = {
    service: string;
    startDate: string;
    endDate: string;
}

// export const getDonky = async ({service, startDate, endDate}: DonkyData) => {
    export const getDonky = async () => {

    // const getDonky = await fetch(`https://api.nasa.gov/DONKI/${service}?startDate=${startDate}&endDate=${endDate}&api_key=DEMO_KEY`);
    // const getDonky = await fetch(`https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2023-12-01&endDate=2023-12-02&api_key=${API_KEY}`);
    const getDonky = await fetch(`https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=${API_KEY}`) // informações sobre o rover
    const donkyJson = await getDonky.json();
    console.log(donkyJson)
}