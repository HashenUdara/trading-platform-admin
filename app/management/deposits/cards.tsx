import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { deposits } from "./data";

export function CardWrapper() {
  // Calculate total number of deposits
  const totalDeposits = deposits.length;

  // Calculate total deposit amount
  const totalDepositAmount = deposits.reduce(
    (total, deposit) => total + deposit.amount,
    0
  );

  // Calculate total crypto deposit amount
  const totalCryptoDepositAmount = deposits
    .filter((deposit) => deposit.method === "Crypto")
    .reduce((total, deposit) => total + deposit.amount, 0);

  // Calculate total USDT deposit amount
  const totalUsdtDepositAmount = deposits
    .filter((deposit) => deposit.method === "USDT")
    .reduce((total, deposit) => total + deposit.amount, 0);

  // Now you can display these values on a card or wherever you need them
  console.log("Total Deposits:", totalDeposits);
  console.log("Total Deposit Amount:", totalDepositAmount);
  console.log("Total Crypto Deposit Amount:", totalCryptoDepositAmount);
  console.log("Total USDT Deposit Amount:", totalUsdtDepositAmount);

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">All Deposits</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalDeposits}</div>
          <p className="text-xs text-muted-foreground">Number of Deposits</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Deposit Amount</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalDepositAmount}.00</div>
          <p className="text-xs text-muted-foreground">Total Deposit Amount</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Crypto Deposit Amount
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${totalCryptoDepositAmount}.00
          </div>
          <p className="text-xs text-muted-foreground">
            Total Crypto Deposit Amount
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            USDT Deposit Amount
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalUsdtDepositAmount}.00</div>
          <p className="text-xs text-muted-foreground">
            Total USDT Deposit Amount
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
