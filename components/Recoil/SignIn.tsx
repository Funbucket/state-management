import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useAuthSetter, useAuthValue } from "@/stores/recoil/authAtom";

const SignIn = () => {
  const { isAuthenticated } = useAuthValue();
  const setAuth = useAuthSetter();

  function handleSignin() {
    setAuth({
      isAuthenticated: true,
      token: "123456789",
    });
  }

  function handleLogout() {
    setAuth({
      isAuthenticated: false,
      token: null,
    });
  }
  return (
    <>
      {isAuthenticated ? (
        <Button onClick={handleLogout}>Logout</Button>
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
