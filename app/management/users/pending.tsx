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
import { all, pending } from "./users";
const Pending = () => {
  return (
    <>
      <Card x-chunk="dashboard-06-chunk-0">
        <CardHeader>
          <CardTitle>Pending Users</CardTitle>
          <CardDescription>
            Manage your products and view their sales performance.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>email</TableHead>
                <TableHead className="hidden md:table-cell">status</TableHead>
                <TableHead className="hidden md:table-cell">Mobile</TableHead>
                <TableHead className="hidden md:table-cell">
                  Created at
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pending.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium py-6">
                    {item.name}
                  </TableCell>
                  <TableCell className="font-medium">{item.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{item.status}</Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.mobile}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item.created_at}
                  </TableCell>
                  <TableCell className="hidden  space-x-3 md:table-cell">
                    <Button variant={"secondary"}>View Docs</Button>
                    <Button variant={"secondary"}>Verify</Button>
                    <Button variant={"destructive"}>Delete</Button>
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

export default Pending;
