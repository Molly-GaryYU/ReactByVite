declare module '*.png' {
    const value: string;
    export default value;
}

// 声明 .jpg 文件模块
declare module '*.jpg' {
    const value: string;
    export default value;
}

// 声明 .jpeg 文件模块
declare module '*.jpeg' {
    const value: string;
    export default value;
}

// 声明 .svg 文件模块
declare module '*.svg' {
    const value: string;
    export default value;
}

declare module '*.css' {
    const value: string;
    export default value;
}

declare module '*.sass' {
    const value: { [className: string]: string };
    export default value;
}
declare module '*.scss' {
    const value: { [className: string]: string };
    export default value;
}