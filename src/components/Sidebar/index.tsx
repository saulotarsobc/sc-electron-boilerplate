import { Group } from "@mantine/core";

interface SideBarProps {}

const SideBar = ({}: SideBarProps) => {
  return (
    <Group w={300} bg={"blue"} p="md" h={"100vh"}>
      SideBar
    </Group>
  );
};

export default SideBar;
