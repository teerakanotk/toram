"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    name: "Shortsword",
    type: "2HS",
    status: {
      atk: 10,
      stability: 80,
      def: undefined,
      potential: 2,
      trade: true,
      other: ["Hello World", "This is Next.js", "Enjoy Coding!"],
    },
    obtain: "Pico",
  },
  {
    name: "Shortsword",
    type: "2HS",
    status: {
      atk: 10,
      stability: 80,
      def: undefined,
      potential: 2,
      trade: true,
      other: [],
    },
    obtain: "Pico",
  },
];

export function EquipCard() {
  return (
    <div className="grid lg:grid-cols-2 gap-4">
      <Card className={"grid grid-cols-[1fr_2fr] rounded-sm"}>
        <CardHeader className={"flex items-center justify-center"}>
          <CardTitle className={"grid justify-center items-center"}>
            <div className="w-32 lg:w-24 h-32 lg:h-24 border-2 border-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-sm">No Image</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center">
          <p className="text-4xl lg:text-2xl">Card Content</p>
        </CardContent>
      </Card>

      <Card className={"grid grid-cols-[1fr_2fr] rounded-sm"}>
        <CardHeader className={"flex items-center justify-center"}>
          <CardTitle className={"grid justify-center items-center"}>
            <div className="w-32 lg:w-24 h-32 lg:h-24 border-2 border-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-sm">No Image</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center">
          <p className="text-4xl lg:text-2xl">Card Content</p>
        </CardContent>
      </Card>
    </div>
  );
}
