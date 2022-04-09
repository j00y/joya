import React, { useState } from "react";
import { NAMEPageContext } from "./NAMEPageContext";
import { NAMEPageLayout } from "./NAMEPageLayout";

export const NAMEPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <NAMEPageContext.Provider value={{ isLoading }}>
      <NAMEPageLayout />
    </NAMEPageContext.Provider>
  );
};
