
/* eslint-disable react-refresh/only-export-components */


import {
  createContext,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { agentType, houseTypes } from "../types";
import { agentData, houseDatas } from "../data";

type UseProperttInfo = {
  house: houseTypes[];
  setHouse: (house: houseTypes[]) => void;
  agent: agentType[];
  setAgent: (agent: agentType[]) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  fetchHouse: () => void;
  fetchAgent: () => void;
};

const initContext: UseProperttInfo = {
  house: [],
  setHouse: () => {},
  agent: [],
  setAgent: () => {},
  isLoading: true,
  setIsLoading: () => {},
  fetchHouse: () => {},
  fetchAgent: () => {},
};

export const PropertyContext = createContext<UseProperttInfo>(initContext);

const PropertyContextProvider = ({
  children,
}: {
  children?: ReactNode;
}): ReactElement => {
  const [house, setHouse] = useState<houseTypes[]>([]);
  const [agent, setAgent] = useState<agentType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchHouse = async () => {
    setHouse(houseDatas);
  };
  const fetchAgent = async () => {
    setAgent(agentData);
  };

  useEffect(() => {
    // setIsLoading(true);
    fetchHouse();
    fetchAgent();
    setIsLoading(false);
  }, []);

  const value: UseProperttInfo = {
    house,
    setHouse,
    isLoading,
    setIsLoading,
    fetchHouse,
    agent,
    setAgent,
    fetchAgent,
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};

export default PropertyContextProvider;
