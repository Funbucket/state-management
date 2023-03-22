import { useEffect } from "react";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useBarSetter, useBarValue } from "@/stores/recoil/barAtom";

let renderCount = 0;

const BarAtom = () => {
  useEffect(() => {
    renderCount++;
  });

  const { bar } = useBarValue();
  const setBar = useBarSetter();

  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 BarAtom컴포넌트입니다.</Heading>
        <Heading size="md">bar: {bar}</Heading>
        <Button onClick={() => setBar({ bar: bar + 1 })}>chageBar</Button>
        <Text>{renderCount}번 렌더링되었습니다.</Text>
      </VStack>
    </HStack>
  );
};

export default BarAtom;
