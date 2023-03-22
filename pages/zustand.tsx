import Bar from "@/components/Zustand/Bar";
import BarAtomicSelector from "@/components/Zustand/AtomicSelect/BarAtomicSelector";
import BarShallow from "@/components/Zustand/Shallow/BarShallow";
import Foo from "@/components/Zustand/Foo";
import FooAtomicSelector from "@/components/Zustand/AtomicSelect/FooAtomicSelector";
import FooShallow from "@/components/Zustand/Shallow/FooShallow";
import { HStack, VStack } from "@chakra-ui/react";

const Zustand = () => {
  return (
    <VStack gap={10}>
      <HStack border="2px" padding={2}>
        <Bar />
        <Foo />
      </HStack>
      <HStack border="2px" padding={2}>
        <BarShallow />
        <FooShallow />
      </HStack>
      <HStack border="2px" padding={2}>
        <BarAtomicSelector />
        <FooAtomicSelector />
      </HStack>
    </VStack>
  );
};

export default Zustand;
