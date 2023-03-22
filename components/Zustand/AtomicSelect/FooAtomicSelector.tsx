import { useFoo, useBazActions } from "@/stores/zustand/bazAtomicSelector";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

let renderCount = 0;
const FooCustomHook = () => {
  useEffect(() => {
    renderCount++;
  });
  const foo = useFoo();
  const { increaseFoo } = useBazActions();
  return (
    <VStack border="2px" padding="2" gap={3}>
      <Heading size="lg">이것은 FooCustomHook컴포넌트입니다.</Heading>
      <Heading size="md">foo: {foo}</Heading>
      <Button onClick={() => increaseFoo("1")}>changeBar</Button>
      <Text>{renderCount}번 렌더링외었습니다.</Text>
    </VStack>
  );
};

export default FooCustomHook;
