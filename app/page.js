import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2>New Learning</h2>
      <Button>Test Button</Button>
      <UserButton />
    </div>
  );
}
