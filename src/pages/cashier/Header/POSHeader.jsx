import { AlignJustify } from "lucide-react";
import React from "react";
import { Button } from "../../../components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";

const POSHeader = () => {
  return (
    <div className="bg-card border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <Button>
            <AlignJustify />
          </Button>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-foreground">POS Terminal</h1>
          <p className="text-sm text-muted-foreground">Create new Order</p>
        </div>
        <div className="flex items-center space-x-2">
          {/* <Badge variant="outline" className="text-xs">
            F1: Search | F2: Discount | F3: Customer | Ctrl+Enter: Payment
          </Badge> */}

          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default POSHeader;
