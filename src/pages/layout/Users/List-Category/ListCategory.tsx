// import React from 'react';
// import { useGetCategorysQuery } from '../../../../api/category';
// import { ICategory } from '../../../../interfaces/category';
// import { Link } from 'react-router-dom';

// const ListCategory = () => {
//   const { data: categoryData } = useGetCategorysQuery();

//   return (
//     <div className="flex flex-wrap my-10">
//       {categoryData?.data?.map((category: ICategory) => (
//         <div key={category._id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
//           <div className="border rounded-lg overflow-hidden">
//             <Link to={`/category/${category._id}`}>
//               <img alt={category.name} src={category.image} className="w-full h-[180px] object-cover" />
//             </Link>
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2">
//                 <Link to={`/category/${category._id}`}>{category.name}</Link>
//               </h3>
//               <Link to={`/category/${category._id}`} className="text-red-500 hover:font-bold hover:text-red-600">
//                 Chi Tiết Danh Mục
//               </Link>
//               <div className="mt-2">
//                 <span className="text-sm font-medium text-gray-500">Số sản phẩm: </span>
//                 <span className="text-sm">7</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ListCategory;

import React from 'react';
import { IProduct } from '../../../../interfaces/product';
import { useGetCategorysQuery } from '@/api/category';
import { useGetProductsQuery } from '@/api/product';
import { useEffect, useState } from "react";
import { ICategory } from '../../../../interfaces/category';
import Item from "../../../../components/item/item"

const ListCategory = () => {
  const { data: productData } = useGetProductsQuery();
  const { data: categoryData } = useGetCategorysQuery();
  const [dataSourceToRender, setDataSourceToRender] = useState<IProduct[]>([]);
  const [searchResult, setSearchResult] = useState<IProduct[]>([]);
  useEffect(() => {
    if (productData) {
      const updatedDataSource = productData?.products.map((product: IProduct) => ({
        ...product,
      }));
      setDataSourceToRender(updatedDataSource);
      setSearchResult(updatedDataSource);
    }
  }, [productData]);
  console.log(productData);
  
  let filteredData = dataSourceToRender 


  const onHandleClick = ({ target: { value } }: any) => {
    console.log(value);
    console.log("Initial dataSourceToRender:", dataSourceToRender);

    if (Array.isArray(filteredData)) {
      filteredData = filteredData.filter(
        (itemm) => String(itemm.categoryId) == String(value)
      );
      console.log("Filtered data:", filteredData);

      if (filteredData.length >= 1) {
        setDataSourceToRender(filteredData);
      } else {
        setDataSourceToRender([...searchResult]);
      }
    };
  }
  return (

    <div className='mt-10'>
      <div>
        <select
          onChange={onHandleClick}
          className="form-select-product "
        >
          <option selected disabled>
            Thương hiệu
          </option>
          {categoryData?.data?.map((category: ICategory) => {
            return <option value={category.name}>{category.name}</option>;
          })}
        </select>
      </div>
      <div className='flex'>
        {dataSourceToRender?.map((product) => {
          const cateName = categoryData?.data.find(
            (cate: any) => cate._id == product.categoryId
          )?.name;
          return (
            <div key={product._id}>
              <Item product={product} />
            </div>
          )
        })}

      </div>
    </div>
  )
};

export default ListCategory;



