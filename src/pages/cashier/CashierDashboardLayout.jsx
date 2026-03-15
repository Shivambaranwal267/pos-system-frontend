import React, { useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import { ReceiptIcon, RotateCcw, Clock, ShoppingCart } from "lucide-react";
import { Outlet } from "react-router";

const navItems = [
  {
    path: "/cashier",
    icon: <ShoppingCart size={20} />,
    label: "POS Terminal",
  },
  {
    path: "/cashier/orders",
    icon: <Clock size={20} />,
    label: "Order History",
  },
  {
    path: "/cashier/returns",
    icon: <RotateCcw size={20} />,
    label: "Returns/Refund",
  },
  {
    path: "/",
    icon: <ReceiptIcon size={20} />,
    label: "Shift Summary",
  },
];

const CashierDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen b-background">
      {sidebarOpen && <div className="fixed inset-0 bg-black/40"></div>}

      <div
        className={`fixed z-30 h-full transition-transform duration-200
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar navItems={navItems} onClose={() => setSidebarOpen(false)} />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default CashierDashboardLayout;
