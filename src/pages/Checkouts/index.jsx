import { getCart } from "@/api/cart";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Checkouts() {
  const [ data, setData ] = useState([]);
  const getCartData = () => {
      getCart().then((res) => {
        setData(res.data.data);
      });
    }
  
    useEffect(() => {
      getCartData();
    }, []);
  return (
    <div className="container mx-auto mt-10">
      <div className="flex">
        <div className="flex-1">
          <h1 className="text-2xl">
            TTGShop - Phụ kiện Game Thủ |Tư vấn Build PC| giá rẻ -
            www.ttgshop.vn
          </h1>
          <p className="font-medium">Thông tin giao hàng</p>
          <span className="font-medium text-gray-500">
            Bạn đã có tài khoản?<Link to="#">Đăng nhập</Link>
          </span>
          
        </div>
      </div>
    </div>
  );
}

Checkouts.propTypes = {};

export default Checkouts;
