import { useBar, useBazActions } from "@/stores/zustand/bazAtomicSelector";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

let renderCount = 0;
const BarCustomHook = () => {
  useEffect(() => {
    renderCount++;
  });

  const bar = useBar();
  const { increaseBar, initialize } = useBazActions();
  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 BarCustomHook컴포넌트입니다.</Heading>
        <Heading size="md">bar: {bar}</Heading>
        <Button onClick={() => increaseBar(1)}>changeBar</Button>
        <Text>{renderCount}번 렌더링외었습니다.</Text>
      </VStack>
      <Button onClick={() => initialize()}>initialize</Button>
    </HStack>
  );
};

export default BarCustomHook;
