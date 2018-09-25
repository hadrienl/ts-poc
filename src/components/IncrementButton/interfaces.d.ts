export interface IIncrementButton {
  text: string,
  readonly initialValue?: number,
  onChange?: {
    (count: number): any;
  }
}
