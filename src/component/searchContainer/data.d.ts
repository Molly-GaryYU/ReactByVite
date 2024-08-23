declare module 'data.jsx' {
    const value: DataItem[];
    export default value;
}
export interface DataItem {
    name: string;
    img: boolean;
    imgComponent: JSX.Element;
    introduce: string;
    introduceOrNot: boolean
}