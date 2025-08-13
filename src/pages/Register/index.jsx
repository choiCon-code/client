import React, { useState } from "react";
import Menu from "./Menu";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Link, useHistory } from "react-router-dom";
import { registerApi } from "@/api/auth";
import { useUserStore } from "@/stores/useUser";

const formSchema = z.object({
  firstName: z.string("Vui lòng nhập họ của bạn"),
  lastName: z.string("Vui lòng nhập tên của bạn"),
  gender: z.enum(["male", "female"], "Vui lòng chọn giới tính"),
  birthday: z.string("Vui lòng nhập ngày sinh"),
  email: z.email("Email ko hợp lệ"),
  password: z.string("Vui lòng nhập mật khẩu"),
});

function Register() {
  const history = useHistory();
  
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserStore();


  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    registerApi(data)
      .then((res) => {
        setUser(res.data.data);
        setIsLoading(false);
        history.push('/');
      })
      .catch((e) => {
        alert(e.response.data.message);
        setIsLoading(false);
      });
  };

  return (
    <div className="container mx-auto pt-10">
      <div className="max-w-2xl bg-white p-10 mx-auto">
        <Menu />
        <div className="mt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="First name"
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
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Last name"
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
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex"
                      >
                        <FormItem className="flex items-center gap-3">
                          <FormControl>
                            <RadioGroupItem value="male" />
                          </FormControl>
                          <FormLabel className="font-normal">Nam</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center gap-3">
                          <FormControl>
                            <RadioGroupItem value="famale" />
                          </FormControl>
                          <FormLabel className="font-normal">Nữ</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="birthday"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="dd-mm-yyyy"
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
                      <Input placeholder="Email" className="h-11" {...field} />
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
                      <Input
                        placeholder="Mật khẩu"
                        className="h-11"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex gap-8 items-center">
                <Button variant="warning" size="lg" disabled={isLoading}>
                  {isLoading ? (
                    <AiOutlineLoading3Quarters className="animate-spin" />
                  ) : (
                    "Đăng ký"
                  )}
                </Button>
                <div>
                  <p className="text-sm text-gray-500">
                    Bạn đã có tài khoản?
                    <Link to="/login">
                      <span className="text-blue-600"> Đăng nhập</span>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

Register.propTypes = {};

export default Register;
