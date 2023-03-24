import { useEffect, useState } from 'react';
import { ProductModel } from '../../models/Product';
import { QuantityInput } from '../QuantityInput/QuantityInput';
import { RemoveButton } from '../RemoveButton/RemoveButton';
import { ProductCardSmallContainer } from './ProductCardSmall.styles';

interface ProductCardProps {
	product: ProductModel;
}

export function ProductCardSmall({ product }: ProductCardProps) {
	return (
		<ProductCardSmallContainer>
			<div id='smallCard'>
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
		</ProductCardSmallContainer>
	);
}
