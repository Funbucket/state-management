import { useBazSetter, useBazValue } from "@/stores/recoil/bazAtom";
import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import React, { useEffect } from "react";

let renderCount = 0;
const Foo = () => {
  useEffect(() => {
    renderCount++;
  });

  const baz = useBazValue();

  const setBaz = useBazSetter();

  return (
    <VStack border="2px" padding="2" gap={3}>
      <Heading size="lg">이것은 Foo컴포넌트입니다.</Heading>
      <Heading size="md">foo: {baz.foo}</Heading>
      <Button onClick={() => setBaz({ ...baz, foo: baz.foo + "1" })}>changeFoo</Button>
      <Text>{renderCount}번 렌더링외었습니다.</Text>
    </VStack>
  );
};

export default Foo;
