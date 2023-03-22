import { useBazStore } from "@/stores/zustand/bazShallow";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

let renderCount = 0;
const BarShallow = () => {
  useEffect(() => {
    renderCount++;
  });

  const { bar, increaseBar, initialize } = useBazStore(
    (state) => ({
      bar: state.bar,
      increaseBar: state.increaseBar,
      initialize: state.initialize,
    }),
    shallow
  );

  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 BarShallow컴포넌트입니다.</Heading>
        <Heading size="md">bar: {bar}</Heading>
        <Button onClick={() => increaseBar(1)}>changeBar</Button>
        <Text>{renderCount}번 렌더링외었습니다.</Text>
      </VStack>
      <Button onClick={() => initialize()}>initialize</Button>
    </HStack>
  );
};

export default BarShallow;
