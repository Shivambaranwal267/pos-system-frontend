import React from "react";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";

const CustomerCard = ({ customer }) => {
  return (
    <div
      key={customer.id}
      className={`p-4 cursor-pointer hover:bg-accent transition-colors`}
    //   onClick={() => onSelectCustomer(customer)
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-medium">
            {customer.fullName || "Unknown Customer"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {customer.phone || "N/A"}
          </p>
          <p className="text-sm text-muted-foreground">
            {customer.email || "N/A"}
          </p>
        </div>
        <Badge variant="outline" className="flex items-center gap-1">
          <StarIcon className="h-3 w-3" />
          {customer.loyaltyPoints || 0} pts
        </Badge>
      </div>
    
    </div>
  );
};

export default CustomerCard;
