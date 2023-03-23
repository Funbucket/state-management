import { useBazReset, useBazValue, useBazSetter, useBazState } from "@/stores/jotai/bazAtom";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

let renderCount = 0;
const Bar = () => {
  useEffect(() => {
    renderCount++;
  });

  // const  [baz, setBaz] = useBazState();
  const { bar, foo } = useBazValue();
  const setBaz = useBazSetter();
  const resetBaz = useBazReset();

  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 Bar컴포넌트입니다.</Heading>
        <Heading size="md">bar: {bar}</Heading>
        <Button onClick={() => setBaz({ foo, bar: bar + 1 })}>changeBar</Button>
        <Text>{renderCount}번 렌더링되었습니다.</Text>
      </VStack>
      <Button onClick={() => resetBaz()}>initialize</Button>
    </HStack>
  );
};

export default Bar;
