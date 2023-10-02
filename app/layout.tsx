"use client";

import "@mantine/core/styles.css";
import { useUserData } from "@/lib/hooks";
import {
  MantineProvider,
  ColorSchemeScript,
  AppShell,
  Burger,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { theme } from "../theme";
import { UserContext } from "@/lib/context";
import { ColorSchemeToggle } from "@/components/ColorSchemeToggle/ColorSchemeToggle";
import { SideNav } from "@/components/SideNav/SideNav";

// export const metadata = {
//   title: "Mantine Next.js template",
//   description: "I am using Mantine with Next.js!",
// };

export default function RootLayout({ children }: { children: any }) {
  const [opened, { toggle }] = useDisclosure();
  const userData = useUserData();

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <UserContext.Provider value={userData}>
          <MantineProvider theme={theme}>
            <AppShell
              header={{ height: 60 }}
              navbar={{
                width: 300,
                breakpoint: "sm",
                collapsed: { mobile: !opened },
              }}
              padding="md"
            >
              <AppShell.Header
                p={"md"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="sm"
                  size="sm"
                />
                <Title order={3}>Harmonic.</Title>
                <ColorSchemeToggle />
              </AppShell.Header>

              <AppShell.Navbar p="md">
                <SideNav />
              </AppShell.Navbar>

              <AppShell.Main>{children}</AppShell.Main>
            </AppShell>
          </MantineProvider>
        </UserContext.Provider>
      </body>
    </html>
  );
}
