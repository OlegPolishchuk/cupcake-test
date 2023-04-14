export interface Data {
  base: string;
  date: string;
  timestamp: number;
  rates: Rates

}

export interface Rates {
  EUR: number;
  RUB: number;
  USD: number;
}