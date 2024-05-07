import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function LoginForm() {
  return (
    <div className=" flex justify-center h-screen items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Administration</CardTitle>
          <CardDescription>
            Please login as an admin to get access for Management Dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4"></CardContent>
        <CardFooter className="flex justify-center items-center">
          <SignedOut>
            <SignInButton mode="modal">
              <Button className="w-full">Sign in</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Link href={"/management/users"}>
              <Button className="mt-4 w-full">
                Continue to Admin Dashboard
              </Button>
            </Link>
          </SignedIn>
        </CardFooter>
      </Card>
    </div>
  );
}
