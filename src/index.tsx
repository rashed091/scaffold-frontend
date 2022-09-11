import React from 'react';
import { render } from 'react-dom';
import { MantineProvider } from '@mantine/core';
import App from './App';

render(
	<React.StrictMode>
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
			theme={{
				breakpoints: {
					xs: 500,
					sm: 800,
					md: 1000,
					lg: 1200,
					xl: 1400,
				},
			}}
		>
			<App />
		</MantineProvider>
	</React.StrictMode>,
	document.getElementById('root'));
