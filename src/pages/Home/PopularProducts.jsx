import React, { useRef } from "react";
import PropTypes from "prop-types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useProducts from "@/hooks/useProducts";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/utils/formatPrice";
import { calculateDiscount } from "@/utils/calculateDiscount";
import { Button } from "@/components/ui/button";
import { FaCartPlus } from "react-icons/fa6";
import { ModalProduct } from "@/components/shared/ModalProduct";

function PopularProducts(props) {
  const { data } = useProducts();

  const modalProductRef = useRef();



  const onOpenModalProduct = (item) => {
    modalProductRef.current.showModal(item);
  }

  return (
    <div>
      <h2 className="text-xl font-medium mb-6">TOP SẢN PHẨM BÁN CHẠY</h2>

      <Carousel>
        <CarouselContent className="-ml-8">
          {data.map((item) => (
            <CarouselItem
              className="basis-1/2 sm:basis-1/3 lg:basis-1/5 pl-8"
              key={item._id}
            >
              <div className="bg-white rounded-lg">
                <div onClick={() => onOpenModalProduct(item)} className="cursor-pointer">
                  <img
                    src={item.images[0]}
                    alt=""
                    className="w-full rounded-t-lg"
                  />
                </div>

                <div className="p-4">
                  <h4 className="line-clamp-2 font-medium text-sm mb-4">
                    {item.title}
                  </h4>
                  <div className="flex items-center mb-4">
                    <div className="flex-1">
                      <p className="font-medium text-red-500">
                        {formatPrice(item.salePrice)}
                      </p>
                      <p className="text-gray-500 line-through text-xs">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <div>
                      <Badge>
                        {calculateDiscount(item.price, item.salePrice)}%
                      </Badge>
                    </div>
                  </div>

                  <Button size="sm" variant="outline" onClick={() => onOpenModalProduct(item)}>
                    <FaCartPlus className="size-4" />
                    Thêm vào giỏ hàng
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/*         
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" /> */}
      </Carousel>







      <ModalProduct ref={modalProductRef} />
    </div>
  );
}

PopularProducts.propTypes = {};

export default PopularProducts;
