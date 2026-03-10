import React, { useState } from "react";
import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";
import CustomerDialog from "./CustomerDialog";

let selectedCustomer = {
  fullName: "John Doe",
  phone: "123-456-7890",
};

selectedCustomer = null;

const CustomerSection = () => {

  const [showCustomerDialog, setShowCustomerDialog] = useState(false);

  return (
    <div className="p-4 border-b">
      <h2 className="mb-3 flex text-lg font-semibold items-center">
        <User className="w-5 h-5 mr-2" /> Customer
      </h2>
      {selectedCustomer ? (
        <Card
          className={`border-green-400 bg-green-50 dark:bg-green-800 dark:border-green-800`}
        >
          <CardContent className="flex items-center justify-between p-3 gap-5">
            <div>
              <h3 className="font-medium text-green-800 dark:text-green-200">
                {selectedCustomer.fullName}
              </h3>
              <p className="text-sm text-green-600 dark:text-green-300">
                {selectedCustomer.phone}
              </p>
            </div>
            <div>
              <Button
                variant={"outline"}
                //   size={"small"}
                className={`mt-2 w-full`}
              >
                <Edit />
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="">
          {/* <p className="text-sm text-muted-foreground">
            No customer selected, Please select a customer to proceed.
          </p> */}
          <Button onClick={() => setShowCustomerDialog(true)}
           variant={"outline"} className="w-full py-5">Select Customer</Button>
        </div>
      )}
      <CustomerDialog
        showCustomerDialog={showCustomerDialog}
        setShowCustomerDialog={setShowCustomerDialog}
      />
    </div>
  );
};

export default CustomerSection;
