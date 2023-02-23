import React, { createContext, useContext } from "react";

export const GoogleMapCtx = createContext({});

const GoogleMapCtxProvider = () => {
  return <GoogleMapCtx.Provider value={{}}></GoogleMapCtx.Provider>;
};

export default GoogleMapCtxProvider;
export const useGoogleMapCtx = () => useContext(GoogleMapCtx);
