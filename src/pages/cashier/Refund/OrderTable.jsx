import React from "react";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const orders = [
  {
    id: 1,
    createdAt: "Jul 8, 2025, 12:37 PM",
    customer: { fullName: "Pablo Pandey", phone: "1234567890" },
    paymentType: "CASH",
    totalAmount: 2500,
    status: "COMPLETED",
    items: [
      {
        id: 2,
        product: {
          image:
            "data:image/jpeg;base64,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",
          name: "Men black T-Shirt",
          sellingPrice: 499,
          sku: "SHRT-S-COTTON-BLU-20261",
        },
        quantity: 2,
      },
    ],
  },
];

const OrderTable = ({handleSelectOrder}) => {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Order ID</TableHead>
            <TableHead className="">Date/Time</TableHead>
            <TableHead className="">Customer</TableHead>
            <TableHead className="">Amount</TableHead>
            <TableHead className="">Payment Type</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.createdAt}</TableCell>
              <TableCell>{order.customer?.fullName}</TableCell>
              <TableCell>{order.totalAmount}</TableCell>
              <TableCell>{order.paymentType}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell className="text-right">
                <Button
                  onClick={() => handleSelectOrder(order)}
                >
                  select for return
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default OrderTable;
