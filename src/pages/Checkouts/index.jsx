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
          <Form>
            <form className="grid gap-4" action="">
              <Input className="boder-1 border-amber-300 rounded-none h-10"></Input>
              <div className="flex gap-4">
                <Input className="flex-1 boder-1 border-amber-300 rounded-none h-10"></Input>
                <Input className="w-[300px] boder-1 border-amber-300 rounded-none h-10"></Input>
              </div>
              <Input className="boder-1 border-amber-300 rounded-none h-10"></Input>
            </form>
          </Form>
        </div>




        
        <div className="flex-1">
          {data.map((item) => {
              <div
                key={item._id}
                className="flex gap-4 border-b mb-4 pb-4 last:border-b-0 last:pb-0 last:mb-0"
              >
                <div>
                  <img src={item.productId.images[0]} alt="" className="w-20" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm mb-2">{item.productId.title}</h4>
                  <div className="flex items-center">
                    <div className="flex-1">
                      <ChangeQuantity
                        cartId={item._id}
                        value={item.quantity}
                        onChange={onChangeCart}
                      />
                    </div>
                  </div>
                </div>
              </div>
          })}
        </div>
      </div>
    </div>
  );
}

Checkouts.propTypes = {};

export default Checkouts;
