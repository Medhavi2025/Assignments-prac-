// Q2
import React from 'react';
import './ProductCard.css'; // Import CSS for basic styling

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <p className="product-description">
                {product.description.length > 100
                    ? `${product.description.substring(0, 100)}...`
                    : product.description}
            </p>
        </div>
    );
};

export default ProductCard;
