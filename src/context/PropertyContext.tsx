/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { createContext, ReactElement, ReactNode } from "react";

/* eslint-disable @typescript-eslint/no-empty-object-type */
type UseProperttInfo = {};

const initContext: UseProperttInfo = {}



export const PropertyContext = createContext<UseProperttInfo>(initContext);


const PropertyContextProvider = ({
    children,
  }: {
    children?: ReactNode;
  }): ReactElement => {

    const value: UseProperttInfo = {}

    return (
      <PropertyContext.Provider value={value}>
        {children}
      </PropertyContext.Provider>
    );
  }


  export default PropertyContextProvider;