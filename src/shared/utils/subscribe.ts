import {pollData} from "api/api";
import {Data, Rates} from "type/Data";
import {roundRates} from "utils";

export const subscribe = async (endpoint: string, setter: (data: Rates) => void, signal: AbortSignal) => {
  try {
    let response = await pollData(endpoint, signal);

    if (response.status === 404) {
      return
    }

    if (response.status == 502) {
      await subscribe(endpoint, setter, signal);
    }
    if (response.status != 200) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await subscribe(endpoint, setter, signal);

    } else {
      let message = await response.json() as Data;
      const {rates} = message;

      const data: Rates = roundRates(rates);

      setter(data)

      await subscribe(endpoint, setter, signal);
    }
  } catch (e) {
    throw new Error(`Failed to fetch data from ${endpoint}, ${e}`);
  }
}


