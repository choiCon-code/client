import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MdFormatListBulleted } from "react-icons/md";
import { Link } from "react-router-dom";
import { getCategoriesApi } from "@/api/category";

function BottomMenuCategories() {
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(true);

  const onToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    getCategoriesApi().then(res => {
      setData(res.data.data);
    });
  }, []);

  return (
    <div className="absolute top-0 left-0 shadow-lg max-w-[250px]">
      <div
        className="flex items-center w-[250px] max-w-[250px] py-2.5 px-4 cursor-pointer"
        onClick={onToggle}
      >
        <MdFormatListBulleted className="w-6 h-6" />
        <h4 className="font-medium ml-2">Danh mục sản phẩm</h4>
      </div>
      {open && (
        <div className="bg-white">
          {data.map(item => (
            <Link
              to={`/category/${item.slug}`}
              className="px-4 py-2 block border-l-3 border-l-transparent hover:bg-gray-200 hover:border-l-yellow-500 text-sm"
              key={item._id}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

BottomMenuCategories.propTypes = {};

export default BottomMenuCategories;
