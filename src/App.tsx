import { ThemeProvider } from 'styled-components';
import { Button } from './components/Button/button';
import { defaultTheme } from './styles/themes/default';
export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<h1>Hello world</h1>
			<Button />
		</ThemeProvider>
	);
}
