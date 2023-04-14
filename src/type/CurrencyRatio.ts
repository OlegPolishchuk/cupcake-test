export interface CurrencyRatio {
  main: CurrencyRatioItem;
  secondary: CurrencyRatioItem
}

export interface CurrencyRatioItem {
  title: string;
  value: number[];
}