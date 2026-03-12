import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const shiftData = {
  cashier: {
    fullName: "pablo Pandey",
  },

  shiftStart: "2022-01-01 12:00:00",
  shiftEnd: "",
};

const ShiftInformation = () => {
  return (
    <Card>
      <CardContent>
        <h2 className="text-2xl font-semibold mb-4">Shift Information</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Cashier: </span>
            <span className="font-medium">{shiftData.cashier.fullName}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Shift Start: </span>
            <span className="font-medium">{shiftData.shiftStart}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Shift End: </span>
            <span className="font-medium">
              {shiftData.shiftEnd ? shiftData : "ongoing"}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">duration: </span>
            <span className="font-medium">{"8 hours"}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShiftInformation;
