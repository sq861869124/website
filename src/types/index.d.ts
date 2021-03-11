declare interface IResponse<T> {
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
  const value: () => void;
  export default value;
}

declare module USER {
  interface IUser {
    avatar: string;
    email: string;
    id: string;
    name: string;
    nick: string;
    phone: string;
    token: string;
  }
}

declare module CONTACT {
  interface contactUs {
    realName: string;
    mobile: string;
    position: string;
    email: string;
    company: string;
    company_size: string;
    it_size: string;
    purpose: string;
  }
}

interface Window {
  _envs: {
    [k: string]: any
  }
}
