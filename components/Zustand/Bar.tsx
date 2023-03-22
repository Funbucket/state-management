import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

// total store import
import { useBazStore } from "@/stores/zustand/baz.store";

let renderCount = 0;
const Bar = () => {
  useEffect(() => {
    renderCount++;
  });

  // CASE 1: 전체 store 구독
  // const { bar, increaseBar } = useBazStore();

  // CASE 2: selector 이용
  const { bar, increaseBar, initialize } = useBazStore((state) => ({
    bar: state.bar,
    increaseBar: state.increaseBar,
    initialize: state.initialize,
  }));

  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 Bar컴포넌트입니다.</Heading>
        <Heading size="md">bar: {bar}</Heading>
        <Button onClick={() => increaseBar(1)}>changeBar</Button>
        <Text>{renderCount}번 렌더링되었습니다.</Text>
      </VStack>
      <Button onClick={() => initialize()}>initialize</Button>
    </HStack>
  );
};

export default Bar;
