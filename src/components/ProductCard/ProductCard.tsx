import { useEffect, useState } from 'react';
import { ProductModel } from '../../models/Product';
import { QuantityInput } from '../QuantityInput/QuantityInput';
import { RemoveButton } from '../RemoveButton/RemoveButton';
import { ProductCardContainer } from './ProductCard.styles';

interface ProductCardProps {
	product: ProductModel;
	fullCard: boolean;
}

export function ProductCard({ product, fullCard }: ProductCardProps) {
	return (
		<ProductCardContainer>
			<div id='product'>
				<img
					src={`/src/assets/${product.productImgSrc}`}
					alt={product.displayName}
				/>
				<div id='details'>
					<span>{product.displayName}</span>
					<div id='actions'>
						<QuantityInput />
						<RemoveButton />
					</div>
				</div>
			</div>
			<strong id='price'>{`R$ ${product.listPrice}`}</strong>
		</ProductCardContainer>
	);
}
