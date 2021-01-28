import React, { createContext, useReducer, useContext } from "react";
import { initialOperationState } from "../../constants";

import { operationReducer } from "./operationReducer";
import { Dispatch, OperationProviderProps, State } from "./types";

const OperationStateContext = createContext<State | undefined>(undefined);
const OperationDispatchContext = createContext<Dispatch | undefined>(undefined);

export const OperationProvider: React.FC<OperationProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(operationReducer, initialOperationState);

  return (
    <OperationStateContext.Provider value={state}>
      <OperationDispatchContext.Provider value={dispatch}>
        {children}
      </OperationDispatchContext.Provider>
    </OperationStateContext.Provider>
  );
};

export const useOperationState = () => {
  const context = useContext(OperationStateContext);
  if (context === undefined) {
    throw new Error("useOperationState must be used within OperationProvider");
  }
  return context;
};

export const useOperationDispatch = () => {
  const context = useContext(OperationDispatchContext);
  if (context === undefined)
    throw new Error(
      "useOperationDispatch must be used within OperationProvider"
    );
  return context;
};
