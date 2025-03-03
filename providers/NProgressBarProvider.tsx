"use client";

import React from "react";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const NProgressBarProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      {children}
      <ProgressBar
        height="3px"
        color="#57975D"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </React.Fragment>
  );
};

export default React.memo(NProgressBarProvider);
