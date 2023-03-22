import { Flex } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";

const CommonLayout = ({ children }: PropsWithChildren) => {
  return (
    <Container align="center" justify="center">
      {children}
    </Container>
  );
};

export default CommonLayout;

const Container = styled(Flex)`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;
