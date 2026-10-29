import {
  Switch,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import classes from "./ColorSchemeToggle.module.css";

export function CustomThemeSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  return (
    <Switch
      aria-label="Dark mode"
      checked={checked}
      onChange={(event) => onChange(event.currentTarget.checked)}
      size="md"
      withThumbIndicator={false}
      onLabel={<IconMoon size={18} aria-hidden="true" />}
      offLabel={<IconSun size={16} aria-hidden="true" />}
      classNames={{ track: classes.track, thumb: classes.thumb }}
      vars={() => ({ root: { "--switch-width": "50px" } })}
    />
  );
}

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const colorScheme = useComputedColorScheme("dark");

  return (
    <CustomThemeSwitch
      checked={colorScheme === "dark"}
      onChange={(value) => setColorScheme(value ? "dark" : "light")}
    />
  );
}
