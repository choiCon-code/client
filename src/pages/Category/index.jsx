import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams, Link } from "react-router-dom";
import { getCategoriesApi, getCategoryBySlug } from "@/api/category";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

function Category() {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getCategoryBySlug(slug).then((res) => {
      setCategory(res.data.data);
    });
  }, []);
  useEffect(() => {
    getCategoriesApi().then((res) => {
      setData(res.data.data);
    });
  }, []);
  return (
    <div className="container mx-auto">
      <Accordion
        type="multiple"
        className="w-[300px] mt-5 bg-white px-3"
      >
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-base">Danh mục sản phẩm</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="flex flex-col gap-4">
              {data.map((item) => (
                  <Link
                    to={`/category/${item.slug}`}
                    className="block "
                    key={item._id}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-base">Nhà cung cấp</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Khác</Label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="terms-2" defaultChecked />
                <div className="grid gap-2">
                  <Label htmlFor="terms-2">Dell</Label>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="terms-2" defaultChecked />
                <div className="grid gap-2">
                  <Label htmlFor="terms-2">AMD</Label>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="terms-2" defaultChecked />
                <div className="grid gap-2">
                  <Label htmlFor="terms-2">pc</Label>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-base">Lọc giá</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Dưới 5.000.000đ</Label>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="terms-2" defaultChecked />
                <div className="grid gap-2">
                  <Label htmlFor="terms-2">5.000.000đ - 10.000.000đ</Label>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="terms-2" defaultChecked />
                <div className="grid gap-2">
                  <Label htmlFor="terms-2">10.000.000đ - 15.000.000đ</Label>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="terms-2" defaultChecked />
                <div className="grid gap-2">
                  <Label htmlFor="terms-2">15.000.000đ - 20.000.000đ</Label>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="terms-2" defaultChecked />
                <div className="grid gap-2">
                  <Label htmlFor="terms-2">Trên 20.000.000đ</Label>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

Category.propTypes = {};

export default Category;
