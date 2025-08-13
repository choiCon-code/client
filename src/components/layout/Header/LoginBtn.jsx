import React from "react";
import PropTypes from "prop-types";
import { FaRegUser } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { Link } from 'react-router-dom'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.email("Email ko hợp lệ"),
  password: z.string("Vui lòng nhập mật khẩu"),
});

function LoginBtn() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="my-4 flex cursor-pointer text-sm">
            <FaRegUser className="w-7 h-7 my-auto mx-2" />
            <span className="flex-col my-auto font-light">
              Đăng nhập/Đăng ký
              <span className="flex">
                Tài khoản của tôi
                <MdKeyboardArrowDown className="my-1 mx-1" />
              </span>
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 rounded-[5px]" align="start">
          <div className="p-4">
            <div className="border-b text-center pb-4 mb-4">
              <h2 className="text-xl text-gray-700 pb-2 font-medium">
                Đăng nhập tài khoản
              </h2>
              <p className="text-gray-500 text-sm">
                Nhập email và mật khẩu của bạn:
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Mật khẩu" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="w-full" variant="warning" size="lg">Đăng nhập</Button>
              </form>
            </Form>

            <div className="mt-4 text-gray-500 text-sm">
              <p>Khách hàng mới? <Link to="/register" className="text-yellow-600">Tạo tài khoản</Link></p>
              <p>Quên mật khẩu? <Link to="/forgot-password" className="text-yellow-600">Khôi phục mật khẩu</Link></p>
            </div>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

LoginBtn.propTypes = {};

export default LoginBtn;
