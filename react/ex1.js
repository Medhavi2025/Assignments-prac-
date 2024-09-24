import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Import child component (ProductCard)

const ProductCardList = () => {
    const [products, setProducts] = useState([]); // State for storing fetched products
    const [loading, setLoading] = useState(true); // Loading state

    // Fetch data when the component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data); // Update products state with fetched data
                setLoading(false); // Set loading to false after fetching
            } catch (error) {
                console.error("Error fetching products:", error);
                setLoading(false); // Stop loading even if there is an error
            }
        };
        fetchProducts();
    }, []); // Empty dependency array ensures this runs once on component mount

    return (
        <div className="product-list">
            {loading ? (
                <p>Loading...</p> // Display loading message
            ) : (
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} /> // Render ProductCard for each product
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductCardList;
