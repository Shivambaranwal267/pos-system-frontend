import React from "react";
import CustomerCard from "./CustomerCard";

const customers = [
  {
    id: 1,
    fullName: "John Doe",
    phone: "1234567890",
    email: "johndoe@gmail.com",
    loyalityPoints: 150,
    totalOrders: 10,
    totalSpent: 1000,
    averageOrderValue: 3960,
  },
  {
    id: 2,
    fullName: "Jane Smith",
    phone: "9876543210",
    email: "janesmith@gmail.com",
    loyalityPoints: 250,
    totalOrders: 20,
    totalSpent: 2000,
    averageOrderValue: 3050,
  },
  {
    id: 3,
    fullName: "Rahul Sharma",
    phone: "9123456780",
    email: "rahul.sharma@yahoo.com",
    loyalityPoints: 350,
    totalOrders: 30,
    totalSpent: 3000,
    averageOrderValue: 450,
  },
  {
    id: 4,
    fullName: "Priya Patel",
    phone: "9988776655",
    email: "priya.patel@gmail.com",
    loyalityPoints: 100,
    totalOrders: 40,
    totalSpent: 4000,
    averageOrderValue: 2000,
  },
  {
    id: 5,
    fullName: "Michael Johnson",
    phone: "8877665544",
    email: "michael.j@outlook.com",
    loyalityPoints: 50,
    totalOrders: 40,
    totalSpent: 3000,
    averageOrderValue: 4490,
  },
];

const CustomerList = ({ setSelectedCustomer }) => {
  return (
    <div className="flex-1 overflow-auto">
      <div className="divide-y">
        {customers.map((customer) => (
          <CustomerCard
            className="cursor-pointer hover:bg-accent"
            // onClick={() => {
            //   console.log("Selected Customer: ", customer);
            //   setSelectedCustomer(customer);
            // }}
            setSelectedCustomer={setSelectedCustomer}
            key={customer.id}
            customer={customer}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
