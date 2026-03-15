import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

const shiftData = {
  paymentSummaries: [
    {
      type: "CASH",
      totalAmount: 2999,
      transactionCount: 6,
    },
    {
      type: "CARD",
      totalAmount: 3499,
      transactionCount: 8,
    },
    {
      type: "UPI",
      totalAmount: 48499,
      transactionCount: 38,
    },
  ],
  totalSales: 69999,
};

const PaymentSummaryCard = () => {
  return (
    <Card>
      <CardContent>
        <h2 className="text-2xl font-semibold mb-4">Payment Summary</h2>
        <div className="space-y-4">
          {shiftData.paymentSummaries.map((payment) => (
            <div key={payment.type} className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <CreditCard />
              </div>

              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-medium">{payment.type}</span>
                  <span className="font-bold">₹ {payment.totalAmount}</span>
                </div>

                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{payment.transactionCount} transactions</span>
                  <span>
                    {(
                      (payment.totalAmount / shiftData.totalSales) *
                      100
                    ).toFixed(1)}
                    %
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentSummaryCard;
