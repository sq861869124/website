declare interface IResponse<T>{
  success: boolean;
  err: {
    code: string;
    msg: string;
  };
  data: T
}
declare module 'resolve-pathname';
declare module '@terminus/marked';
declare module 'highlight.js/lib/highlight.js';
declare module 'highlight.js/lib/languages/*' {
  const value: ()=>void;
  export default value;
}

interface Window {
  _envs: {
    [k: string]: any
  }
}
