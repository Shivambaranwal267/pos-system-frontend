import React from "react";
import CustomerSearch from "./CustomerSearch";
import CustomerList from "./CustomerList";
import CustomerDetails from "./CustomerDetails";
import PurchaseHistory from "./PurchaseHistory";

const CustomerLookup = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 bg-card border-b">
        <h1 className="text-2xl font-bold">Customer Management</h1>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/3 border-r flex flex-col">
          <CustomerSearch />
          <CustomerList />
        </div>

        <div className="w-2/3 flex flex-col overflow-y-auto">
          <CustomerDetails />
          <PurchaseHistory />
        </div>
        
      </div>
    </div>
  );
};

export default CustomerLookup;
