import React from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const Sidebar = ({ navItems, onClose }) => {
  return (
    <div className="w-64 border-r border-border bg-disebar p-4 flex flex-col h-full relative">
      <div className="text-xl font-bold text-sidebar-foreground">
        POS SYSTEM
      </div>

      <Button>
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Sidebar;
