"use client";

import React from "react";
import { AppProgressProvider as ProgressProvider } from "@bprogress/next";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressProvider
        height="3px"
        color="#57975D"
        options={{ showSpinner: false }}
        shallowRouting
        delay={100}
      >
        {children}
      </ProgressProvider>
    </>
  );
};

export default React.memo(Provider);
