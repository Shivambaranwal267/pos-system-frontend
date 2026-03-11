import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusIcon, StarIcon, UserIcon } from "lucide-react";

const CustomerDetails = ({ customer }) => {
  // if (!customer) {
  //   return (
  //     <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
  //       <UserIcon className="h-4 w-4 mr-1" />
  //       <p className="mt-4">No customer selected</p>
  //     </div>
  //   );
  // }

  return (
    <div className="p-4">
      <div className="flex justify-between items-start mb-6">
        <div className="">
          <h2>{customer.fullName}</h2>
          <p className="text-sm text-gray-600">{customer.phone}</p>
          <p className="text-sm text-gray-600">{customer.email}</p>
        </div>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" /> Add Points
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Loyality Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <StarIcon className="h-4 w-4 mr-1 text-yellow-500" />
              <span>{customer.loyalityPoints}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <StarIcon className="h-4 w-4 mr-1 text-yellow-500" />
              <span>{customer.totalOrders}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <StarIcon className="h-4 w-4 mr-1 text-yellow-500" />
              <span>{customer.totalSpent}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div>
        <Card>
          <CardHeader>
            <CardTitle>Average Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-bold text-muted-foreground">
              {customer.averageOrderValue} $
            </p>
          </CardContent>
        </Card>
      </div>

    </div>
  );
};

export default CustomerDetails;
