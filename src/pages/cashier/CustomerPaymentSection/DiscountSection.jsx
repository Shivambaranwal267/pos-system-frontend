import React, { useState } from "react";
import { User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const DiscountSection = () => {
  const [discount, setDiscount] = useState(0);

  const handleDiscountChange = (e) => {
    const value = e.target.value;
    setDiscount({ ...discount, value });
  };

  return (
    <div className="p-4 border-b">
      <h2 className="mb-3 flex text-lg font-semibold items-center">
        <User className="w-5 h-5 mr-2" /> Customer
      </h2>
      <div className="space-y-3">
        <Input
          placeholder="Enter discount amount"
          type="number"
          value={discount}
          onChange={handleDiscountChange}
        />
        <div>
          <Button className="flex-1"
            onClick={() => setDiscount({ ...discount, type: "percentage" })}
            variant={discount.type === "percentage" ? "default" : "outline"}
          >
            %
          </Button>
          <Button className="flex-1"
            onClick={() => setDiscount({ ...discount, type: "fixed" })}
            variant={discount.type === "fixed" ? "default" : "outline"}
          >
            $
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection;
