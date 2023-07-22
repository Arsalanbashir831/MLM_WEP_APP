import React from 'react';
import Box from '../widgets/Box';
// import mostSoldProducts from '../data/ProductsData';


const Home = ({team,products,tutorials,mostSoldProducts}) => {
  return (
    <div className="col-span-4">
      <div className="flex flex-col md:flex-row text-center gap-11 mx-auto">
        <Box  title="Team" number={team} />
        <Box title="Tutorials" number={tutorials} />
        <Box title="Products" number={products} />
      </div>

      <div className="my-6 font-extrabold">
        <h2 className="text-center">Most Sold Products</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="border-collapse w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">CC</th>
            </tr>
          </thead>
          <tbody>
            {mostSoldProducts.map((product) => (
              <tr key={product._id} className="border-t">
                <td className="border px-4 py-2">{product._id}</td>
                <td className="border px-4 py-2">{product.prodName}</td>
                <td className="border px-4 py-2">{product.cc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
