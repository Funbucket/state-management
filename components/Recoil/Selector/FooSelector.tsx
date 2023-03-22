import { useEffect } from "react";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useFooSelectorSetter, useFooSelectorValue } from "@/stores/recoil/fooSelector";

let renderCount = 0;

const BarSelector = () => {
  useEffect(() => {
    renderCount++;
  });

  const foo = useFooSelectorValue();
  const setFoo = useFooSelectorSetter();

  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 FooSelector컴포넌트입니다.</Heading>
        <Heading size="md">bar: {foo}</Heading>
        <Button onClick={() => setFoo("p")}>chageBar</Button>
        <Text>{renderCount}번 렌더링되었습니다.</Text>
      </VStack>
    </HStack>
  );
};

export default BarSelector;
