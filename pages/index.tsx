import { Button, HStack, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const { push } = useRouter();

  return (
    <VStack gap={5}>
      <HStack gap={30}>
        <Button onClick={() => push("recoil")}>recoil</Button>
        <Button onClick={() => push("zustand")}>zustand</Button>
        <Button onClick={() => push("jotai")}>jotai</Button>
      </HStack>
      <HStack gap={30}>
        <Button onClick={() => push("auth/recoil")}>auth/recoil</Button>
        <Button onClick={() => push("auth/zustand")}>auth/zustand</Button>
        <Button onClick={() => push("auth/jotai")}>auth/jotai</Button>
      </HStack>
    </VStack>
  );
}
