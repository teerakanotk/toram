"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SKILL } from "@/data/skill";

function Skill({ type }) {
  const filter = SKILL.filter((item) => item.type === type);

  return (
    <div className="grid lg:grid-cols-2 gap-4">
      {filter.length > 0 ? (
        <>
          {filter.map((item, index) => (
            <Card className={"py-0"} key={index}>
              <Link
                href={item.href}
                className="hover:bg-accent/40 hover:text-accent-foreground"
              >
                <div className="flex flex-row p-2">
                  {item.image ? (
                    <div className="flex items-center justify-center p-2">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={50}
                        height={50}
                        className="rounded-md"
                      />
                    </div>
                  ) : (
                    <div className="w-[58px] h-[58px] bg-gray-200 flex items-center justify-center rounded-md">
                      <span className="text-gray-500"></span>
                    </div>
                  )}

                  <CardHeader className="flex items-center w-full">
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                </div>
              </Link>
            </Card>
          ))}
        </>
      ) : null}
    </div>
  );
}

export { Skill };
