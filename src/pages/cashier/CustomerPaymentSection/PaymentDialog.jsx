import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const paymentMethods = [
  { id: 1, name: "Card", Key: "CARD" },
  { id: 2, name: "Upi", key: "UPI" },
  { id: 3, name: "Cash", key: "CASH" },
];

const PaymentDialog = ({ showPaymentDialog, setShowPaymentDialog }) => {

  const [paymentMethod, setPaymentMethod] = useState("CARD");

  return (
    <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Payment</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="text-center">
            <h1 className="text-lg font-bold text-green-600 dark:text-green-200"> {899} $</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">Amount to be paid</p>
          </div>
          <div className="space-y-5">
            {paymentMethods.map((method) => (
              <Button
                onClick={() => setPaymentMethod(method.key)}
                variant={paymentMethod == method.key ? "default" : "outline"}
                key={method.id}
                className="w-full text-left"
              >
                {method.name}
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
