import React from 'react';
export interface IContent{
  headShow: boolean
}
export const SiteContext = React.createContext<IContent>({
  headShow: true,
});
