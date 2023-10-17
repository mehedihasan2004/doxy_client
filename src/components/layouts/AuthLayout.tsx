import { ReactElement, ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode | ReactElement }) => {
  return <div className="max-w-[1444px] mx-auto md:mx-2">{children}</div>;
};

export default AuthLayout;
