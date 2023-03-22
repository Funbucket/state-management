import { useBarValue, useBazReset, useFooValue } from "@/stores/jotai/bazSelectAtom";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import ChangeFooButton from "./ChangeFooButton";

let renderCount = 0;
const FooSelect = () => {
  useEffect(() => {
    renderCount++;
  });

  const foo = useFooValue();

  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 Foo컴포넌트입니다.</Heading>
        <Heading size="md">foo: {foo}</Heading>
        <ChangeFooButton />
        <Text>{renderCount}번 렌더링되었습니다.</Text>
      </VStack>
    </HStack>
  );
};

export default FooSelect;
