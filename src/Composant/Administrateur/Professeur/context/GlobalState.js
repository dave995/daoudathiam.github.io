import React, { createContext, useReducer } from 'react';

import appReducer from './AppReducer';

const initialState = {
  employees: [
    {
      id: 1,
      name: "Khalifa Fall",
      location: "Bakeli",
      designation: "dev"
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const addEmployee = (employee) => {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee
    });
  }

  const editEmployee = (employee) => {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee
    });
  }

  const removeEmployee = (id) => {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        addEmployee,
        editEmployee,
        removeEmployee
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};