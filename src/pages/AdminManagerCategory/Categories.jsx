import React from 'react'
import PropTypes from 'prop-types'
import useAdminCategories from '@/hooks/useAdminCategories'
import { format } from 'date-fns';
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
import { Button } from "@/components/ui/button";

function Categories() {
  const { data } = useAdminCategories();

  return (
    <div>
      <Table className="border">
        <TableHeader>
          <TableRow className="[&>th]:border-r last:border-r-0">
            <TableHead>Name</TableHead>
            <TableHead>Banner</TableHead>
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
                <p title={item.name}>{item.name}</p>
              </TableCell>
              <TableCell>
                <img src={item.banner} alt="" className="h-10" />
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
  )
}

Categories.propTypes = {}

export default Categories
