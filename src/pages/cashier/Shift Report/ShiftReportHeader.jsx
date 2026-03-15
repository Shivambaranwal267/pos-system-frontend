import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ShiftReportHeader = () => {
  return (
    <div className="p-4 bg-card border-b">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shift Summary</h1>

        <Button variant="destructive">
          <ArrowRight /> End Shift & Logout
        </Button>
      </div>
    </div>
  );
};

export default ShiftReportHeader;
