import { useBarValue, useBazReset } from "@/stores/jotai/bazSelectAtom";
import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import ChangeBarButton from "./ChangeBarButton";

let renderCount = 0;
const BarSelect = () => {
  useEffect(() => {
    renderCount++;
  });

  const bar = useBarValue();

  const resetBaz = useBazReset();

  return (
    <HStack>
      <VStack border="2px" padding="2" gap={3}>
        <Heading size="lg">이것은 BarSelect컴포넌트입니다.</Heading>
        <Heading size="md">bar: {bar}</Heading>
        <ChangeBarButton />
        <Text>{renderCount}번 렌더링되었습니다.</Text>
      </VStack>
      <Button onClick={() => resetBaz()}>initialize</Button>
    </HStack>
  );
};

export default BarSelect;
