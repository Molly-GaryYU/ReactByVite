export interface DataItem {
  name: string;
  imgComponent: JSX.Element;
  id: number;
}

declare module 'data.tsx' {
  const value: DataItem[][];
  export default value;
}