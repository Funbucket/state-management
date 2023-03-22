import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useAuthStore } from "@/stores/zustand/auth.store";
import { shallow } from "zustand/shallow";

const SignIn = () => {
  const { isAuthenticated, setToken, logout } = useAuthStore(
    (state) => ({
      isAuthenticated: state.isAuthenticated,
      setToken: state.setToken,
      logout: state.logout,
    }),
    shallow
  );

  const handleSignin = () => {
    setToken("12346789");
  };

  return (
    <>
      {isAuthenticated ? (
        <Button onClick={() => logout()}>Logout</Button>
      ) : (
        <form onSubmit={handleSignin}>
          <Stack spacing={3}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" name="email" required />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" required />
            </FormControl>
            <Button type="submit">Sign in</Button>
          </Stack>
        </form>
      )}
    </>
  );
};

export default SignIn;
