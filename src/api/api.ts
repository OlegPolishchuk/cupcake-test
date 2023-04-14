import {Data} from "type/Data";
import {roundRates} from "utils";

const BASE_URL = 'http://localhost:3000/api/v1/';

export const fetchData = async (endPoint: string) => {
  try {
    const res = await fetch(`${BASE_URL}${endPoint}`);
    const data: Data = await res.json();

    return roundRates(data.rates);
  } catch (e) {
    console.log(e)
  }
}

export const pollData = async (endPoint: string, abort: AbortSignal) => {
  return await fetch(`${BASE_URL}${endPoint}/poll`, {
    signal: abort,
  })
}
