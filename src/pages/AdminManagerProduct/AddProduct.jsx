import { Button } from "@/components/ui/button";
import { FiPlus } from "react-icons/fi";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill-new";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import useAdminCategories from "@/hooks/useAdminCategories";
import { createProduct } from "@/api/admin";
import { toast } from "sonner";

export function AddProduct() {
  const { data: categories } = useAdminCategories();

  const form = useForm();
  const onSubmit = (data) => {
    const images = data.images.split("\n").filter((item) => item);

    createProduct({
      title: data.title,
      description: data.description,
      images: images,
      category: data.category,
      price: data.price,
      salePrice: data.salePrice
    }).then((r) => {
      toast.success("Thêm sản phẩm thanh cong");
    }).catch(e => {
      toast.error('Có lỗi ko thể thêm sản phẩm');
    })

  };

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="warning">
            <FiPlus size="4" />
            Thêm sản phẩm
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[768px] max-h-screen overflow-y-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <DialogHeader>
                <DialogTitle>Thêm sản phẩm</DialogTitle>
                <DialogDescription>
                  Nhập thông tin sản phẩm để thêm.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="title"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="category"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Select
                          defaultValue={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Chọn category" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((item) => (
                              <SelectItem value={item._id}>
                                {item.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="price"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="salePrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sale Price</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="images"
                rules={{ required: true }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Images</FormLabel>
                    <FormControl>
                      <Textarea {...field} className="min-h-25" />
                    </FormControl>
                    <FormDescription>
                      Nhập mỗi dòng một hình ảnh
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mb-20">
                <FormField
                  control={form.control}
                  name="description"
                  rules={{ required: true }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <ReactQuill
                          theme="snow"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Hủy</Button>
                </DialogClose>
                <Button type="submit">Thêm sản phẩm</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
