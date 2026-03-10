import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Pause } from "lucide-react";
import PaymentDialog from "./PaymentDialog";

const PaymentSection = ({ CartItems = [1] }) => {
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);

  return (
    <div className="p-4 flex flex-1 flex-col justify-end">
      <div className="space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-600 dark:text-green-200">
            {899}$
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Total Amount
          </p>
        </div>
        <div className="space-y-3">
          <div>
            <Button
              onClick={() => setShowPaymentDialog(true)}
              disabled={CartItems.length === 0}
              className="w-full py-3 text-lg font-semibold"
            >
              <CreditCard className="w-5 h-5 mr-2" />
              Process Payment
            </Button>
          </div>

          <div>
            <Button
              variant={"outline"}
              disabled={CartItems.length === 0}
              className="w-full py-3 text-lg font-semibold"
            >
              <Pause className="w-5 h-5 mr-2" />
              Hold Order
            </Button>
          </div>
        </div>
      </div>

      <PaymentDialog
        showPaymentDialog={showPaymentDialog}
        setShowPaymentDialog={setShowPaymentDialog}
      />
      
    </div>
  );
};

export default PaymentSection;
