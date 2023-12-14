import { API_KEY } from "../utils/apiKey";

type CloseApproachData = {
  close_approach_date: string;
  close_approach_date_full: string;
  epoch_date_close_approach: number;
  miss_distance: {
    astronomical: string;
    kilometers: string;
    lunar: string;
    miles: string;
  };
  orbiting_body: string;
  relative_velocity: {
    kilometers_per_hour: string;
    kilometers_per_second: string;
    miles_per_hour: string;
  };
};

type EstimatedDiameter = {
  feet: {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
  };
  kilometers: {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
  };
  meters: {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
  };
  miles: {
    estimated_diameter_max: number;
    estimated_diameter_min: number;
  };
};

export type AsteroidObject = {
  absolute_magnitude_h: number;
  close_approach_data: CloseApproachData[];
  estimated_diameter: EstimatedDiameter;
  id: string;
  is_potentially_hazardous_asteroid: boolean;
  is_sentry_object: boolean;
  links: {
    self: string;
  };
  name: string;
  nasa_jpl_url: string;
  neo_reference_id: string;
};

export type JsonNeows = {
  element_count: number;
  links: {
    next: string;
    previous: string;
    self: string;
  };
  near_earth_objects: { [date: string]: AsteroidObject[] };
} | null;

export const getNeows = async (startDate: string) => {
  const getEndDate = () => {
    let result = new Date(startDate);
    const rawEndDate = result.setDate(result.getDate() + 7);
    const endDate = new Date(rawEndDate);

    return `${endDate.getFullYear()}-${
      endDate.getMonth() + 1
    }-${endDate.getDate()}`;
  };

  const getNeows = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${getEndDate()}&api_key=${API_KEY}`
  );

  const jsonNeows: JsonNeows = await getNeows.json();
  if(jsonNeows) return jsonNeows.near_earth_objects[startDate];
};
