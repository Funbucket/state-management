import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";

// total store import
import { useBazStore } from "@/stores/zustand/baz.store";

let renderCount = 0;
const Foo = () => {
  useEffect(() => {
    renderCount++;
  });

  // CASE 1: 전체 store 구독
  // const { foo, increaseFoo } = useBazStore();

  // CASE 2: selector 이용
  const { foo, increaseFoo } = useBazStore((state) => ({
    foo: state.foo,
    increaseFoo: state.increaseFoo,
  }));

  return (
    <VStack border="2px" padding="2" gap={3}>
      <Heading size="lg">이것은 Foo컴포넌트입니다.</Heading>
      <Heading size="md">foo: {foo}</Heading>
      <Button onClick={() => increaseFoo("1")}>changeFoo</Button>
      <Text>{renderCount}번 렌더링외었습니다.</Text>
    </VStack>
  );
};

export default Foo;
