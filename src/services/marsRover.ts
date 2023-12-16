import { API_KEY } from "../utils/apiKey";

export type RoverData = {
  rover: string;
  earthDate: string;
  page: number;
};

export type RoverCamera = {
  full_name: string;
  name: string;
}

type RoverInfo = {
  cameras: RoverCamera[];
  id: number;
  landing_date: string;
  launch_date: string;
  max_date: string;
  max_sol: number;
  name: string;
  status: string;
  total_photos: number;
};

type RoverPhotos = {
  camera: {
    full_name: string;
    id: number;
    name: string;
    rover_id: number;
  };
  earth_date: string;
  id: number;
  img_src: string;
  rover: RoverInfo;
  sol: number;
}[];

export const getRoverPhotos = async ({rover, earthDate, page}: RoverData) => {

  const getRoverPhotos = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${earthDate}&page=${page}&api_key=${API_KEY}`
  );
  const roverPhotosJson = await getRoverPhotos.json() as RoverPhotos;
  return roverPhotosJson;
  //pesquisa as fotos do rover selecionado no dia selecionado
};
