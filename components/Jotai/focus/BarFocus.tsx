import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useBarValue, useBarIncrease, useBazReset } from "@/stores/jotai/bazFocus";
import { useEffect } from "react";

let renderCount = 0;
const BarFocus = () => {
  useEffect(() => {
    renderCount++;
  });

  const bar = useBarValue();
  const increaseBar = useBarIncrease();
  const resetBaz = useBazReset();
  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 Bar컴포넌트입니다.</Heading>
        <Heading size="md">bar: {bar}</Heading>
        <Button onClick={() => increaseBar(100)}>changeBar</Button>
        <Text>{renderCount}번 렌더링되었습니다.</Text>
      </VStack>
      <Button onClick={() => resetBaz()}>initialize</Button>
    </HStack>
  );
};

export default BarFocus;
