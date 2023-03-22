import Bar from "@/components/Zotai/Bar";
import BarSelect from "@/components/Zotai/Select/BarSelect";
import Foo from "@/components/Zotai/Foo";
import FooSelect from "@/components/Zotai/Select/FooSelect";
import { HStack, VStack } from "@chakra-ui/react";
import BarFocus from "@/components/Zotai/focus/BarFocus";
import FooFocus from "@/components/Zotai/focus/FooFocus";

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
