import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaBoxArchive } from "react-icons/fa6";
import { cn } from "@/lib/utils";

function Menu() {
  const location = useLocation();

  const items = [
    {
      name: "Dashboard",
      Icon: AiOutlineDashboard,
      path: "/admin",
    },
    {
      name: "Products",
      Icon: FaBoxArchive,
      path: "/admin/products",
    },
    {
      name: "Categories",
      Icon: FaBoxArchive,
      path: "/admin/categories",
    },
  ];

  return (
    <div className="w-[250px] font-medium text-sm shrink-0">
      {items.map((item) => {
        const isActive = item.path === location.pathname;

        return (
          <Link
            className={cn(
              `px-4 py-2 flex gap-2 text-gray-500 hover:text-gray-700 border-l-2 border-l-transparent`,
              {
                "bg-gray-200 text-gray-700 border-gray-700": isActive,
              }
            )}
            to={item.path}
            key={item.path}
          >
            <item.Icon className="size-4" />
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

Menu.propTypes = {};

export default Menu;
