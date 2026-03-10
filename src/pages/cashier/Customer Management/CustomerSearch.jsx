import React from "react";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <Button className="py-5">
          <PlusIcon className="h-4 w-4 mr-2" />Add New
        </Button>
      </div>
    </div>
  );
};

export default CustomerSearch;
