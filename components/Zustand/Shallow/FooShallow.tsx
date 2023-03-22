import { useBazStore } from "@/stores/zustand/bazShallow";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

let renderCount = 0;
const FooShallow = () => {
  useEffect(() => {
    renderCount++;
  });

  const { foo, increaseFoo } = useBazStore(
    (state) => ({
      foo: state.foo,
      increaseFoo: state.increaseFoo,
    }),
    shallow
  );

  return (
    <VStack border="2px" padding="2" gap={3}>
      <Heading size="lg">이것은 FooShallow컴포넌트입니다.</Heading>
      <Heading size="md">foo: {foo}</Heading>
      <Button onClick={() => increaseFoo("1")}>changeBar</Button>
      <Text>{renderCount}번 렌더링외었습니다.</Text>
    </VStack>
  );
};

export default FooShallow;
