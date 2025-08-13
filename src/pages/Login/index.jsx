import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { z } from "zod";
import Menu from "./Menu";

import { loginApi } from "@/api/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/stores/useUser";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useHistory } from "react-router-dom";

const formSchema = z.object({
  email: z.email("Email ko hợp lệ"),
  password: z.string("Vui lòng nhập mật khẩu"),
});

function Login() {
  const history = useHistory();
  
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useUserStore();


  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);

    loginApi(data)
      .then((res) => {
        console.log(res.data);
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
                    "Đăng nhập"
                  )}
                </Button>
                <div>
                  <p className="text-sm text-gray-500">
                    Bạn chưa có tài khoản?
                    <Link to="/register">
                      <span className="text-blue-600"> Đăng ký</span>
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

Login.propTypes = {};

export default Login;
