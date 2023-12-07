import { API_KEY } from "../utils/apiKey";

export type ApodProps = {
  date?: string;
  endDate?: string;
  count?: boolean;
};

export type ApodCountResponse = {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
};

export const getApod = async ({ date, endDate, count }: ApodProps) => {
  const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&`;

  if (count) {
    date = undefined;
    endDate = undefined;
    const get = await fetch(`${BASE_URL}count=10`);
    const response = (await get.json()) as ApodCountResponse[];
    return response;
  }

  if (date && !endDate && !count) {
    console.log(date, "date no if do date");
    const get = await fetch(`${BASE_URL}date=${date}`);
    const response = (await get.json()) as ApodCountResponse;
    return response;
  }

  const get = await fetch(`${BASE_URL}start_date=${date}&end_date=${endDate}`);
  const response = (await get.json()) as ApodCountResponse[];
  return response;
};
