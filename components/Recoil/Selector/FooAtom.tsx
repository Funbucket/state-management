import { useEffect } from "react";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useFooSetter, useFooValue } from "@/stores/recoil/fooAtom";

let renderCount = 0;
const FooAtom = () => {
  useEffect(() => {
    renderCount++;
  });

  const { foo } = useFooValue();
  const setFoo = useFooSetter();

  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 FooAtom컴포넌트입니다.</Heading>
        <Heading size="md">Foo: {foo}</Heading>
        <Button onClick={() => setFoo({ foo: foo + "p" })}>chageFoo</Button>
        <Text>{renderCount}번 렌더링되었습니다.</Text>
      </VStack>
    </HStack>
  );
};

export default FooAtom;
