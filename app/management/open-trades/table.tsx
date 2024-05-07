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

const OpenTrades = () => {
  // Function to generate a random number between min and max
  function getRandomNumber(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  // Function to generate a random date within the last 30 days
  function getRandomDate(): string {
    const currentDate = new Date();
    const randomDays = getRandomNumber(1, 30);
    const randomMs = randomDays * 24 * 60 * 60 * 1000;
    return new Date(currentDate.getTime() - randomMs).toISOString();
  }

  // Generate 100 dummy items
  const dummyItems: {
    "Trade ID": number;
    "Trade Type": string;
    "Trade Size": any;
    "Entry Price": string;
    "Profit/Loss": string;
    Status: string;
    "Open Time": string;
    "Close Time": string | null;
    Duration: number;
  }[] = Array.from({ length: 100 }, (_, index) => ({
    "Trade ID": index + 1,
    "Trade Type": Math.random() < 0.5 ? "Buy" : "Sell",
    "Trade Size": Math.ceil(getRandomNumber(1, 100)),
    "Entry Price": getRandomNumber(1, 100).toFixed(2),
    "Profit/Loss": (Math.random() * 100 - 50).toFixed(2),
    Status: Math.random() < 0.8 ? "Open" : "Closed",
    "Open Time": getRandomDate(),
    "Close Time": Math.random() < 0.8 ? null : getRandomDate(),
    Duration: Math.ceil(getRandomNumber(1, 30)),
  }));

  // Calculate total sell and buy amounts
  const totalSellAmount = dummyItems.reduce((total, item) => {
    if (item["Trade Type"] === "Sell") {
      return (
        total + parseFloat(item["Trade Size"]) * parseFloat(item["Entry Price"])
      );
    }
    return total;
  }, 0);

  const totalBuyAmount = dummyItems.reduce((total, item) => {
    if (item["Trade Type"] === "Buy") {
      return (
        total + parseFloat(item["Trade Size"]) * parseFloat(item["Entry Price"])
      );
    }
    return total;
  }, 0);

  return (
    <>
      <div className=" grid  gap-4 grid-cols-1 lg:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Sell Amount</CardDescription>
            <CardTitle className="text-3xl pb-6">
              ${totalSellAmount.toFixed(2)}
            </CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Buy Amount</CardDescription>
            <CardTitle className="text-3xl pb-6">
              ${totalBuyAmount.toFixed(2)}
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Open Trades</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Trade ID</TableHead>
                <TableHead>Trade Type</TableHead>
                <TableHead>Trade Size</TableHead>
                <TableHead>Entry Price</TableHead>
                <TableHead>Profit/Loss</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Open Time</TableHead>
                <TableHead>Close Time</TableHead>
                <TableHead>Duration</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {dummyItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium py-6">
                    {item["Trade ID"]}
                  </TableCell>
                  <TableCell className="font-medium">
                    {item["Trade Type"]}
                  </TableCell>
                  <TableCell>${item["Trade Size"]}</TableCell>
                  <TableCell>${item["Entry Price"]}</TableCell>
                  <TableCell
                    className={
                      parseFloat(item["Profit/Loss"]) >= 0
                        ? "text-green-600"
                        : "text-red-600"
                    }
                  >
                    ${item["Profit/Loss"]}
                  </TableCell>

                  <TableCell>
                    <Badge variant="outline">{item.Status}</Badge>
                  </TableCell>
                  {/* <TableCell>
                   
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
                  </TableCell> */}

                  <TableCell className="hidden md:table-cell">
                    {item["Open Time"]}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item["Close Time"]}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.Duration}
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

export default OpenTrades;
