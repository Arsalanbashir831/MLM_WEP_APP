import { Delete, Edit } from '@mui/icons-material';
import axios from 'axios';
import React, { useState } from 'react';

// const productData = [
//     { prodName: 'Product1',category: 'Category1',cc:"10" },
//     { prodName: 'Product2',category: 'Category2',cc:"20" }
// ];

const Products = ({productData}) => {
    const [products, setProducts] = useState([...productData]);
    const [newProduct, setNewProduct] = useState({ prodName: '', cc: '', category: '' ,company_id:localStorage.getItem('id')});
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewProduct((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleAddProduct = () => {
        setProducts((prevState) => [...prevState, newProduct]);
       axios.post('http://localhost:3000/product/addProduct',newProduct)
        setIsDialogOpen(false);
    };
    const openDialog = () => {
        setIsDialogOpen(true);
    };
    const closeDialog = () => {
        setIsDialogOpen(false);
    };
    return (
        <div className="col-span-4">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Products</h2>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={openDialog}
                >
                    Add
                </button>
            </div>

            <table className="border-collapse w-full">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Category</th>
                        <th className="px-4 py-2">CC</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index} className="border-t">
                            <td className="border px-4 py-2">{product.prodName}</td>
                            <td className="border px-4 py-2">{product.category}</td>
                            <td className="border px-4 py-2">{product.cc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isDialogOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                    <div className="bg-white rounded p-8 w-80">
                        <h2 className="text-2xl font-bold mb-4">Add Product</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    type="text"
                                    id="name"
                                    name="prodName"
                                    value={newProduct.prodName}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                                   CC
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    type="text"
                                    id="price"
                                    name="cc"
                                    value={newProduct.cc}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-bold mb-2" htmlFor="category">
                                    Category
                                </label>
                                <input
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    type="text"
                                    id="category"
                                    name="category"
                                    value={newProduct.category}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    type="button"
                                    onClick={handleAddProduct}
                                >
                                    Add
                                </button>
                                <button
                                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-2"
                                    type="button"
                                    onClick={closeDialog}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Products;
