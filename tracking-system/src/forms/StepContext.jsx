import React, { useState, useContext } from "react";
import { Register } from "../pages/public/Register";

export const multiStepContext = React.createContext();
export const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}>
        <Register />
      </multiStepContext.Provider>
    </div>
  );
};
