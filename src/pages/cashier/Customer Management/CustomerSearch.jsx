import React from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const CustomerSearch = () => {
  return (
    <div className="p-4 border-b">
      <div className="flex gap-2">
        <div className="relative flex-1">
          {/* <SearchIcon/> */}
          <Input
            placeholder="Search customer..."
            type={"text"}
            className="py-5"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerSearch;
