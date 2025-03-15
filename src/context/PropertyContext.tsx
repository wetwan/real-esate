/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { houseTypes } from "../types";
import { houseDatas } from "../data";

/* eslint-disable @typescript-eslint/no-empty-object-type */
type UseProperttInfo = {
  house: houseTypes[];
  setHouse: (house: houseTypes[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  fetchHouse: () => void;
};

const initContext: UseProperttInfo = {
  house: [],
  setHouse: () => {},
  isLoading: true,
  setIsLoading: () => {},
  fetchHouse: () => {},
};

export const PropertyContext = createContext<UseProperttInfo>(initContext);

const PropertyContextProvider = ({
  children,
}: {
  children?: ReactNode;
}): ReactElement => {
  const [house, setHouse] = useState<houseTypes[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchHouse = async () => {
    setHouse(houseDatas);
    console.log(houseDatas);
  };

  useEffect(() => {
    // setIsLoading(true);
    fetchHouse();
       setIsLoading(false);
  }, []);

  const value: UseProperttInfo = {
    house,
    setHouse,
    isLoading,
    setIsLoading,
    fetchHouse,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContextProvider;
