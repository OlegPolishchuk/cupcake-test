import {useEffect, useState} from "react";
import {Data, Rates} from "type/Data";
import {subscribe} from "utils";
import {fetchData} from "api/api";

export const useFetchData = (endpoint: string) => {
  const [data, setData] = useState<Rates | null>(null);

  useEffect(() => {
    fetchData(endpoint)
      .then(res => res && setData(res))
  }, [])

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      await subscribe(endpoint, setData, signal)
    })()

    return () => {
      console.log('unmount')
      controller.abort();
    }
  }, [])

  return data
}