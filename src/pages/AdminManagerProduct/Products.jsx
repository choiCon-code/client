import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAdminProducts } from "@/api/admin";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/utils/formatPrice";
import { format } from 'date-fns';


function Products(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAdminProducts().then((res) => {
      setData(res.data.data);
    });
  }, []);

  return (
    <div>
      <Table className="border">
        <TableHeader>
          <TableRow className="[&>th]:border-r last:border-r-0">
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Images</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Created</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item._id}
              className="[&>td]:border-r last:border-r-0"
            >
              <TableCell className="font-medium text-wrap">
                <p title={item.title}>{item.title.substring(0, 40)}...</p>
              </TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>
                <img src={item.images[0]} alt="" className="w-10 h-10" />
              </TableCell>
              <TableCell className="">
                {item.category.name}
              </TableCell>
              <TableCell>
                <p>Price: {formatPrice(item.price)}</p>
                <p>Sale: {formatPrice(item.salePrice)}</p>
              </TableCell>
              <TableCell>{format(new Date(item.createdAt), 'dd/MM/yyyy HH:mm')}</TableCell>
              <TableCell>
                <Button>Sửa</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

Products.propTypes = {};

export default Products;
