import { AppShell, Text, useMantineTheme } from '@mantine/core';

import { BottomBar } from '@/components/BottomBar/BottomBar';
import { SideBar } from '@/components/SideBar/SideBar';
import { TopBar } from '@/components/TopBar/TopBar';

function App() {
  const theme = useMantineTheme();
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<SideBar />}
      footer={<BottomBar />}
      header={<TopBar />}
    >
      <Text>{process.env.APP_NAME}</Text>
    </AppShell>
  );
}

export default App;
