import React, { FC } from "react";

interface authLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: FC<authLayoutProps> = ({ children }) => {
  return (
    <main className="h-full flex flex-col justify-center items-center">
      {children}
    </main>
  );
};

export default AuthLayout;
