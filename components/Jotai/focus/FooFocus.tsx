import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useFooIncrease, useBazReset, useFooValue } from "@/stores/jotai/bazFocus";
import { useEffect } from "react";

let renderCount = 0;
const FooFocus = () => {
  useEffect(() => {
    renderCount++;
  });

  const foo = useFooValue();
  const increaseFoo = useFooIncrease();

  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 Foo컴포넌트입니다.</Heading>
        <Heading size="md">foo: {foo}</Heading>
        <Button onClick={() => increaseFoo("P")}>changeBar</Button>
        <Text>{renderCount}번 렌더링되었습니다.</Text>
      </VStack>
    </HStack>
  );
};

export default FooFocus;
