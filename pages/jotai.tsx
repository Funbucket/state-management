import Bar from "@/components/Jotai/Bar";
import BarSelect from "@/components/Jotai/Select/BarSelect";
import Foo from "@/components/Jotai/Foo";
import FooSelect from "@/components/Jotai/Select/FooSelect";
import { HStack, VStack } from "@chakra-ui/react";
import BarFocus from "@/components/Jotai/focus/BarFocus";
import FooFocus from "@/components/Jotai/focus/FooFocus";

const Jotai = () => {
  return (
    <VStack gap={10}>
      <HStack border="2px" padding={2}>
        <Bar />
        <Foo />
      </HStack>
      <HStack border="2px" padding={2}>
        <BarSelect />
        <FooSelect />
      </HStack>
      <HStack border="2px" padding={2}>
        <BarFocus />
        <FooFocus />
      </HStack>
    </VStack>
  );
};

export default Jotai;
