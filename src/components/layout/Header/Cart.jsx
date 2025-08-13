import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getCart, updateCartQty } from "@/api/cart";
import { formatPrice } from "@/utils/formatPrice";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Cart() {
  const [open, setOpen] = useState(false);

  const [data, setData] = useState([]);

  const getCartData = () => {
    getCart().then((res) => {
      setData(res.data.data);
    });
  }

  useEffect(() => {
    getCartData();
  }, []);

  useEffect(() => {
    if(open) {
      getCartData();
    }
  }, [open]);

  const onChangeCart = (cartId, value) => {
    console.log(cartId, value);

    updateCartQty(cartId, value).then(() => {
      getCartData();
    });
  }

  const total = data.reduce((total, item) => {
    return total + item.productId.salePrice * item.quantity;
  }, 0);


  return (
    <div className="my-auto ml-5">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <button className="flex">
            <FaCartArrowDown className="w-7 h-7 mr-2" />
            <span className="font-light">Giỏ hàng</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[400px]">
          <DropdownMenuLabel>Giỏ hàng</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div className="p-4">
            {data.length === 0 && <p className="text-sm text-center">Giỏ hàng trống</p>}
            {data.map(item => {
              return (
                <div key={item._id} className="flex gap-4 border-b mb-4 pb-4 last:border-b-0 last:pb-0 last:mb-0">
                  <div>
                    <img src={item.productId.images[0]} alt="" className="w-20" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm mb-2">{item.productId.title}</h4>
                    <div className="flex items-center">
                      <div className="flex-1">
                        <ChangeQuantity cartId={item._id} value={item.quantity} onChange={onChangeCart} />
                      </div>
                      <p className="font-medium text-red-500">{formatPrice(item.productId.salePrice * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {data.length > 0 && (
            <>
              <DropdownMenuSeparator />
              <div className="flex justify-between p-4">
                <p>TỔNG TIỀN:</p>
                <p>{formatPrice(total)}</p>
              </div>

              <div className="p-4">
                <Button asChild className="w-full" variant="warning">
                  <Link to="/checkouts">Thanh toán</Link>
                </Button>
              </div>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

function ChangeQuantity({ cartId, value, onChange }) {
  const [qty, setQty] = useState(value);

  const onMinus = () => {
    if(qty < 0) return;

    onChange(cartId, qty - 1);
    setQty(qty - 1);
  }

  const onPlus = () => {
    onChange(cartId, qty + 1);
    setQty(qty + 1);
  }

  return (
    <div className="flex">
      <button type="button" className="w-8 h-8 border flex items-center justify-center bg-gray-100 border-r-0 cursor-pointer" onClick={onMinus}>
        <FaMinus className="size-2" />
      </button>
      <Input className="w-[50px] text-center rounded-none focus:ring-0 focus:shadow-none focus:outline-none focus-visible:ring-0 h-8" readOnly value={qty} />
      <button type="button" className="w-8 h-8 border flex items-center justify-center bg-gray-100 border-l-0 cursor-pointer" onClick={onPlus}>
        <FaPlus className="size-2" />
      </button>
    </div>
  );
}

Cart.propTypes = {};

export default Cart;
