import { ProductModel } from '../../models/Product';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { QuantityInput } from '../QuantityInput/QuantityInput';
import { ProductCardFullContainer } from './ProductCardFull.style';

interface ProductCardProps {
	product: ProductModel;
}
export function ProductCardFull({ product }: ProductCardProps) {
	return (
		<ProductCardFullContainer>
			<img
				src={`/src/assets/${product.productImgSrc}`}
				alt={product.displayName}
			/>
			<div id='product'>
				<div id='tags'>
					{product.tags &&
						product.tags.map(tag => {
							return (
								<span key={tag} id='tag'>
									{tag}
								</span>
							);
						})}
				</div>
				<div id='info'>
					<span id='displayName'>{product.displayName}</span>
					<span id='description'>{product.description}</span>
				</div>
				<div id='cardFooter'>
					<span>
						R$<strong>{product.listPrice}</strong>
					</span>
					<div>
						<QuantityInput />
						<AddToCartButton />
					</div>
				</div>
			</div>
		</ProductCardFullContainer>
	);
}
