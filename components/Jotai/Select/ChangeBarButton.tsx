import { useBazState } from "@/stores/jotai/bazSelectAtom";
import { Button } from "@chakra-ui/react";

const ChangeFooButton = () => {
  const [baz, setBaz] = useBazState();

  return <Button onClick={() => setBaz({ ...baz, bar: baz.bar + 1 })}>changeBar</Button>;
};

export default ChangeFooButton;
