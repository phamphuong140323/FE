import React from 'react';
import { useGetCategorysQuery } from '../../../../api/category';
import { ICategory } from '../../../../interfaces/category';
import { Link } from 'react-router-dom';

const ListCategory = () => {
  const { data: categoryData } = useGetCategorysQuery();

  return (
    <div className="flex flex-wrap my-10">
      {categoryData?.data?.map((category: ICategory) => (
        <div key={category._id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
          <div className="border rounded-lg overflow-hidden">
            <Link to={`/category/${category._id}`}>
              <img alt={category.name} src={category.image} className="w-full h-[180px] object-cover" />
            </Link>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">
                <Link to={`/category/${category._id}`}>{category.name}</Link>
              </h3>
              <Link to={`/category/${category._id}`} className="text-red-500 hover:font-bold hover:text-red-600">
                Chi Tiết Danh Mục
              </Link>
              <div className="mt-2">
                <span className="text-sm font-medium text-gray-500">Số sản phẩm: </span>
                <span className="text-sm">7</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListCategory;
