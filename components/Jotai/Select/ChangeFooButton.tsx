import { useBazState } from "@/stores/jotai/bazSelectAtom";
import { Button } from "@chakra-ui/react";

const ChangeFooButton = () => {
  const [baz, setBaz] = useBazState();

  return <Button onClick={() => setBaz({ ...baz, foo: baz.foo + "1" })}>changeFoo</Button>;
};

export default ChangeFooButton;
