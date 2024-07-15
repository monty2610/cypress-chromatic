
 import React, { useEffect, useState } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?sort=asc');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        
      {products.map(product => (
        <div key={product.id} className="border p-5 flex flex-col">
          <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
          <h3 className="text-lg font-bold">{product.title}</h3>
          <p className="text-gray-800">${product.price}</p>
          <div className="flex">
            <span className="text-sm text-gray-600">{product.rating.rate} / 5</span>
            <span className="text-xs text-gray-500 ml-2">({product.rating.count} reviews)</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
