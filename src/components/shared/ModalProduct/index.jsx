import { addToCart } from "@/api/cart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { cn } from "@/lib/utils";
import { calculateDiscount } from "@/utils/calculateDiscount";
import { formatPrice } from "@/utils/formatPrice";
import { useImperativeHandle, useState } from "react";
import { Link } from "react-router-dom";

export function ModalProduct({ ref }) {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(null);

  useImperativeHandle(ref, () => ({
    showModal: (item) => {
      setProduct(item);
      setOpen(true);
    },
  }));

  const onAddToCart = () => {
    addToCart({
      productId: product._id,
      quantity: 1,
    }).then((r) => {
      setOpen(false);
      alert('Thêm giỏ hàng thành công!');
    }).catch(e => {
      if(e.status === 401) {
        alert('Vui lòng đăng nhập');
        return;
      }


      alert(e.message);
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="md:max-w-[768px]">
        {product && (
          <>
            <div className="flex gap-8">
              <div className="flex-1">
                <img src={product.images[0]} alt="" />
              </div>
              <div className="flex-1">
                <h2 className="font-medium">{product.title}</h2>
                <p className="text-sm mb-4">
                  <span className="text-gray-600">Tình trạng: </span>
                  <span
                    className={cn({
                      "text-yellow-500": product.status === "Active",
                      "text-red-500": product.status != "Active",
                    })}
                  >
                    {product.status === 'Active' ? 'Còn hàng' : 'Hết hàng'}
                  </span>
                </p>

                <div className="flex mb-4">
                  <div className="flex-1">
                    <p className="font-medium text-red-500 text-lg">
                      {formatPrice(product.salePrice)}
                    </p>
                    <p className="text-gray-500 line-through">
                      {formatPrice(product.price)}
                    </p>
                  </div>
                  <div>
                    <Badge>
                      {calculateDiscount(product.price, product.salePrice)}%
                    </Badge>
                  </div>
                </div>

                <Button size="lg" variant="destructive" className="w-full" onClick={onAddToCart}>Thêm vào giỏ</Button>
                <Link to={`/products/${product.slug}`} className="text-sm">Chi tiết sản phẩm</Link>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
