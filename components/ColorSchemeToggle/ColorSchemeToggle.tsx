"use client";

import {
  Button,
  Group,
  useMantineColorScheme,
  ActionIcon,
} from "@mantine/core";
import { Moon, Sun, Phone } from "feather-icons-react";

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center">
      <ActionIcon onClick={() => setColorScheme("light")}>
        <Sun />
      </ActionIcon>
      <ActionIcon onClick={() => setColorScheme("dark")}>
        <Moon />
      </ActionIcon>
      <ActionIcon onClick={() => setColorScheme("auto")}>
        <Phone />
      </ActionIcon>
    </Group>
  );
}
