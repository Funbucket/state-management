import Bar from "@/components/Recoil/Bar";
import Foo from "@/components/Recoil/Foo";
import BarAtom from "@/components/Recoil/Selector/BarAtom";
import FooAtom from "@/components/Recoil/Selector/FooAtom";
import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import BarSelector from "@/components/Recoil/Selector/BarSelector";
import FooSelector from "@/components/Recoil/Selector/FooSelector";

const Recoil = () => {
  return (
    <VStack gap={10}>
      <HStack border="2px" padding={2}>
        <Bar />
        <Foo />
      </HStack>
      <VStack border="2px" padding={2}>
        <HStack>
          <BarAtom />
          <FooAtom />
        </HStack>
        <HStack>
          <BarSelector />
          <FooSelector />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Recoil;
