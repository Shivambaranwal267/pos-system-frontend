import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CustomerForm from "./CustomerForm";

const customers = [
  {
    id: 1,
    fullName: "John Doe",
    phone: "123-456-7890",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    phone: "987-654-3210",
    email: "jane.smith@example.com",
  },
  {
    id: 3,
    fullName: "Alice Johnson",
    phone: "555-123-4567",
    email: "alice.j@example.com",
  },
  {
    id: 4,
    fullName: "Bob Brown",
    phone: "111-222-3333",
    email: "bob.b@example.com",
  },
];

const CustomerDialog = ({ showCustomerDialog, setShowCustomerDialog }) => {
  const [showCustomerForm, setShowCustomerForm] = useState(false);

  const handleSelectCustomer = (customer) => {
    console.log(customer);
    
    setShowCustomerDialog(false);
  };

  return (
    <Dialog open={showCustomerDialog} onOpenChange={setShowCustomerDialog}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Select Customer</DialogTitle>
        </DialogHeader>

        <div className="mb-4">
          <Input placeholder="Search Customer..." />
        </div>

        <div className="max-h-96 overflow-y-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Name</TableHead>
                <TableHead className="w-[150px]">Phone</TableHead>
                <TableHead className="w-[150px]">Email</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell>{customer.fullName}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>
                    <Button
                      variant={"outline"}
                      className="w-full"
                      onClick={handleSelectCustomer}
                    >
                      Select
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <CustomerForm
          showCustomerForm={showCustomerForm}
          setShowCustomerForm={setShowCustomerForm}
        />

        <DialogFooter>
          <Button onClick={() => setShowCustomerForm(true)}>
            Add New Customer
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomerDialog;
