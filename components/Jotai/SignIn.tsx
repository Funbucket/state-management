import { useAuthAtom } from "@/stores/jotai/authAtom";
import { Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";

const SignIn = () => {
  const [auth, setAuth] = useAuthAtom();

  const handleSignin = () => {
    setAuth("12346789");
  };

  return (
    <>
      {auth.isAuthenticated ? (
        <Button onClick={() => setAuth(null)}>Logout</Button>
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
