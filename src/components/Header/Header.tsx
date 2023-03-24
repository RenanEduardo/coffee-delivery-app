import { ShoppingCartButton } from '../../components/ShoppingCartButton/ShoppingCartButton';
import { HeaderContainer } from './Header.styles';
import Logo from '../../assets/Logo.png';
import { MapPin } from '@phosphor-icons/react';

export function Header() {
	return (
		<HeaderContainer>
			<img src={Logo} />
			<div>
				<div id='location'>
					<MapPin weight='fill' size={22} />
					<span>Porto Alegre - RS</span>
				</div>
				<ShoppingCartButton />
			</div>
		</HeaderContainer>
	);
}
