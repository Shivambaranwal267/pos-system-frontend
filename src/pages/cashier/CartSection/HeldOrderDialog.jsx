import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const heldOrders = [
  {
    id: "34213",
    items: [1, 1, 1, 1],
    timeStamp: "2023-10-01T12:00:00Z",
    // customerName: "John Doe",
    // totalAmount: 2398.0,
  },
  {
    id: "34213",
    items: [1, 1, 1, 1],
    timeStamp: "2023-10-01T12:00:00Z",
  },
];

const handleResumeOrder = (order) => {
  console.log("Resuming order:", order);
};

const HeldOrderDialog = ({ showHeldOrdersDialog, setShowHeldOrdersDialog }) => {
  return (
    <Dialog open={showHeldOrdersDialog} onOpenChange={setShowHeldOrdersDialog}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Held Orders</DialogTitle>
        </DialogHeader>

        <div className="space-y-3">
          {heldOrders.map((order) => (
            <Card key={order.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Order ID: {order.id}</h3>
                    <p className="text-sm text-gray-600">
                      Items: {order.items.length}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {order.items.length} items - Time:{" "}
                      {new Date(order.timeStamp).toLocaleString()}
                    </p>
                  </div>

                  <Button size="sm" onClick={() => handleResumeOrder}>
                    <Play className="w-4 h-4 mr-1" />
                    Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* <DialogFooter>
          <Button
            variant="outline"
            onClick={() => setShowHeldOrdersDialog(false)}
          >
            Close
          </Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
};

export default HeldOrderDialog;
