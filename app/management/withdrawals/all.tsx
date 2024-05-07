import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleUser, MoreHorizontal, User } from "lucide-react";
import Image from "next/image";
import { withdrawals } from "./data";

const All = () => {
  return (
    <>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>All Withdrawals</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Withdrawal ID</TableHead>
                <TableHead>Created User</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead className="hidden md:table-cell">Status</TableHead>
                <TableHead className="hidden md:table-cell">Method</TableHead>
                <TableHead className="hidden md:table-cell">
                  Withdrawal Date
                </TableHead>
                <TableHead className="hidden md:table-cell">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {withdrawals.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium py-6">
                    {item.withdrawalId}
                  </TableCell>
                  <TableCell className="font-medium">
                    {item.createdUser}
                  </TableCell>
                  <TableCell>${item.amount}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={"default"}
                      className={
                        item.method === "Crypto"
                          ? "bg-blue-600/30 border border-blue-700"
                          : item.method === "USDT"
                          ? "bg-green-600/30 border border-green-700"
                          : "bg-gray-600/30 border border-gray-700"
                      }
                    >
                      {item.method}
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.withdrawalDate}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.notes}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default All;
