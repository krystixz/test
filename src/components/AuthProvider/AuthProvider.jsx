"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;
