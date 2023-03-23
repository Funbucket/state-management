import { useBazValue, useBazSetter } from "@/stores/jotai/bazAtom";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";

let renderCount = 0;
const Foo = () => {
  const { bar, foo } = useBazValue();
  const setBaz = useBazSetter();

  useEffect(() => {
    renderCount++;
  });

  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 Foo컴포넌트입니다.</Heading>
        <Heading size="md">foo: {foo}</Heading>
        <Button onClick={() => setBaz({ foo: foo + "1", bar })}>changeFoo</Button>
        <Text>{renderCount}번 렌더링되었습니다.</Text>
      </VStack>
    </HStack>
  );
};

export default Foo;
