import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

const WizardContext = createContext<WizardContextType>({
  activeStep: 0,
  maxSteps: 0,
  next: () => {},
  prev: () => {},
});

interface WizardState {
  activeStep: number;
  maxSteps: number;
}

interface WizardAction {
  type: "next" | "prev";
}

interface WizardContextType {
  activeStep: number;
  maxSteps: number;
  next: () => void;
  prev: () => void;
}

const reducer = (state: WizardState, action: WizardAction) => {
  switch (action.type) {
    case "next":
      return {
        ...state,
        activeStep: Math.min(state.activeStep + 1, state.maxSteps - 1),
      };
    case "prev":
      return {
        ...state,
        activeStep: Math.max(state.activeStep - 1, 0),
      };
    default:
      return state;
  }
};

export const WizardProvider = ({
  children,
  maxSteps,
}: {
  children: React.ReactNode;
  maxSteps: number;
}) => {
  const [state, dispatch] = useReducer(reducer, {
    activeStep: 0,
    maxSteps,
  });

  const next = useCallback(() => {
    dispatch({ type: "next" });
  }, [dispatch]);

  const prev = useCallback(() => {
    dispatch({ type: "prev" });
  }, [dispatch]);

  return (
    <WizardContext.Provider
      value={useMemo(
        () => ({
          activeStep: state.activeStep,
          maxSteps: state.maxSteps,
          next,
          prev,
        }),
        [state.activeStep, state.maxSteps, next, prev]
      )}
    >
      {children}
    </WizardContext.Provider>
  );
};

export const useWizard = () => {
  return useContext(WizardContext);
};
