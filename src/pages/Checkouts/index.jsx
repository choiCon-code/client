import { getCart } from "@/api/cart";
import { checkout } from "@/api/order";
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
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
function Checkouts() {
  const [data, setData] = useState([]);
  const getCartData = () => {
    getCart().then((res) => {
      setData(res.data.data);
    });
  };
  const form = useForm()
  useEffect(() => {
    getCartData();
  }, []);
  const onSubmit = (item) => {
    checkout(item)
    .then((res) => {
      console.log(res.data);
      alert('Thanh toán thành công!'); 
    })
    .catch((e) => {
      alert(e.response.data.message);
    });
  }
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
          <div className="mt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        required={true}
                        placeholder="Full name"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        required={true}
                        placeholder="Email"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        required={true}
                        placeholder="Phone Number"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        required={true}
                        placeholder="Address"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className={"w-full"}>Thanh Toán</Button>
            </form>
          </Form>
        </div>
        </div>

        <div className="flex-1">
          {data.map((item) => {
            console.log(item);


            return (
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
                    <div className="flex-1"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Checkouts.propTypes = {};

export default Checkouts;
