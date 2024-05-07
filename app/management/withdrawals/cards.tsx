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
import { withdrawals } from "./data";

export function CardWrapper() {
  const totalWithdrawals = withdrawals.length;
  const totalWithdrawalAmount = withdrawals.reduce(
    (total, item) => total + item.amount,
    0
  );
  const totalCryptoWithdrawalAmount = withdrawals
    .filter((item) => item.method === "Crypto")
    .reduce((total, item) => total + item.amount, 0);
  const totalUSDTWithdrawalAmount = withdrawals
    .filter((item) => item.method === "USDT")
    .reduce((total, item) => total + item.amount, 0);

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">All Withdrawals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{totalWithdrawals}</div>
          <p className="text-xs text-muted-foreground">Number of Withdrawals</p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Withdrawal Amount
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${totalWithdrawalAmount}.00</div>
          <p className="text-xs text-muted-foreground">
            Total Withdrawal Amount
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-2">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Crypto Withdrawal Amount
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${totalCryptoWithdrawalAmount}.00
          </div>
          <p className="text-xs text-muted-foreground">
            Total Crypto Withdrawal Amount
          </p>
        </CardContent>
      </Card>
      <Card x-chunk="dashboard-01-chunk-3">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            USDT Withdrawal Amount
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${totalUSDTWithdrawalAmount}.00
          </div>
          <p className="text-xs text-muted-foreground">
            Total USDT Withdrawal Amount
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
