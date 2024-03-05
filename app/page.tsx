"use client";

import Button from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const navigation = useRouter();

  const handleClick = () => {
    navigation.push("/board-page");
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Juru</h1>
      <Button onClick={handleClick}>Start</Button>
    </div>
  );
}
