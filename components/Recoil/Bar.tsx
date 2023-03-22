import { useEffect } from "react";
import { useBazSetter, useBazValue } from "@/stores/recoil/bazAtom";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";

let renderCount = 0;

const Bar = () => {
  useEffect(() => {
    renderCount++;
  });

  const baz = useBazValue();
  const setBaz = useBazSetter();

  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 Bar컴포넌트입니다.</Heading>
        <Heading size="md">bar: {baz.bar}</Heading>
        <Button onClick={() => setBaz({ ...baz, bar: baz.bar + 1 })}>chageBar</Button>
        <Text>{renderCount}번 렌더링되었습니다.</Text>
      </VStack>
    </HStack>
  );
};

export default Bar;
