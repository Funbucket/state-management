import dynamic from "next/dynamic";

const SignIn = dynamic(() => import("@/components/Zustand/SignIn"), { ssr: false });

const Signin = () => {
  return <SignIn />;
};

export default Signin;
