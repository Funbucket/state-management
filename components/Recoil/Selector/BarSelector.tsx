import { useEffect } from "react";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useBarSelectorSetter, useBarSelectorValue } from "@/stores/recoil/barSelector";

let renderCount = 0;

const BarSelector = () => {
  useEffect(() => {
    renderCount++;
  });

  const bar = useBarSelectorValue();
  const setBar = useBarSelectorSetter();

  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 BarSelector컴포넌트입니다.</Heading>
        <Heading size="md">bar: {bar}</Heading>
        <Button onClick={() => setBar(10)}>chageBar</Button>
        <Text>{renderCount}번 렌더링되었습니다.</Text>
      </VStack>
    </HStack>
  );
};

export default BarSelector;
