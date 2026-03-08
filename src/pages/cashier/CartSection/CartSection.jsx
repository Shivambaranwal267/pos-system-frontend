import React, { useState } from "react";
import { ShoppingCart, Pause, Trash2 } from "lucide-react";
import { Button } from "../../../components/ui/button";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import HeldOrderDialog from "./HeldOrderDialog";

const cartItems = [
  {
    name: "Men SLim Fit Checkered Spread Collar Casual Shirt (Pack of 2)",
    sku: "SHRT_S_COTTON_BLACK_2025",
    quantity: 2,
    sellingPrice: 799,
  },
  {
    name: "Men SLim Fit Checkered Spread Collar Casual Shirt (Pack of 2)",
    sku: "SHRT_S_COTTON_BLACK_2025",
    quantity: 2,
    sellingPrice: 799,
  },
];

const CartSection = () => {
  const [showHeldOrdersDialog, setShowHeldOrdersDialog] = useState(false);

  return (
    <>
      <div className="border-r w-2/5 flex flex-col bg-card ">
        {/* /// ---------------Cart Header ------------- /// */}
        <div className="p-4 border-b bg-muted">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold flex items-center">
              <ShoppingCart />
              Cart ({3}) item
            </h2>
            <div className="flex space-x-2">
              <Button
                onClick={() => setShowHeldOrdersDialog(true)}
                variant={"outline"}
                size={"sm"}
                className={``}
              >
                <Pause className="w-4 h-4 mr-1" />
                Held
              </Button>
              <Button variant={"outline"} size={"sm"} className={``}>
                <Trash2 className="w-4 h-4 mr-1" />
                Clear
              </Button>
            </div>
          </div>
        </div>

        {/* /// ---------------Cart Body ------------- /// */}
        <div className="p-4 space-y-3">
          {cartItems.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>

        {/* /// ---------------Cart Summary ------------- /// */}

        <CartSummary />
      </div>
      <HeldOrderDialog
        showHeldOrdersDialog={showHeldOrdersDialog}
        setShowHeldOrdersDialog={setShowHeldOrdersDialog}
      />
    </>
  );
};

export default CartSection;
