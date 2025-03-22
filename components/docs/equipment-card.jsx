"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { equipment } from "@/data/db";

const EquipmentCard = ({ category }) => {
  const equipmentList = equipment.filter((item) => item.type === category);
  if (equipmentList.length === 0) return null;

  return (
    <div className="flex flex-col gap-4">
      {equipmentList.map((item) => (
        <Card
          key={item.id}
          className="h-full flex lg:flex-row lg:p-4 rounded-xl"
        >
          {/* Image */}
          <div className="min-w-[150px] max-h-[180] flex justify-center">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.name}
                width={150}
                height={180}
              />
            ) : (
              <div className="w-[150px] h-[180px] flex items-center justify-center bg-gray-100 text-gray-500">
                No Image
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col w-full h-full">
            <CardHeader>
              <CardTitle
                className={"block lg:flex lg:items-center lg:justify-between"}
              >
                <p className="text-2xl">{item.name}</p>
              </CardTitle>
            </CardHeader>

            <Tabs defaultValue="status" className={"my-2"}>
              <div className="flex justify-center items-center">
                <TabsList className="w-[95%] grid grid-cols-2">
                  <TabsTrigger value="status" className={"cursor-pointer"}>
                    Status
                  </TabsTrigger>
                  <TabsTrigger value="obtain" className={"cursor-pointer"}>
                    Obtain
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Status tab */}
              <TabsContent value="status">
                <CardContent>
                  {item.status?.atk ? (
                    <>
                      Base ATK: {item.status.atk} ({item.status.stability}%)
                    </>
                  ) : null}
                  {item.status?.def ? (
                    <div>Base DEF: {item.status.def}</div>
                  ) : null}
                </CardContent>

                <CardFooter>
                  {item.status?.description && (
                    <div className="mt-4">
                      {item.status.description.split("\n").map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  )}
                </CardFooter>
              </TabsContent>

              {/* Obtain tab */}
              <TabsContent value="obtain">
                <CardContent className={"flex flex-col gap-y-3"}>
                  {item.obtain?.npc && (
                    <div>
                      <span className="text-yellow-600">[NPC]</span>
                      <span> </span>
                      <span>Blacksmith</span>
                    </div>
                  )}
                  {item.obtain?.smith && (
                    <div>
                      <span className="text-green-600">[Player]</span>
                      <span> </span>
                      <span>Smith Skill</span>
                    </div>
                  )}

                  {item.obtain?.monster.name ? (
                    <div className="gap-2">
                      <Link
                        href={`/docs/monster/${item.obtain.monster.name}`}
                        className="text-blue-800"
                      >
                        {item.obtain.monster.name} (Lv{" "}
                        {item.obtain.monster.level})
                      </Link>
                    </div>
                  ) : null}
                </CardContent>
              </TabsContent>
            </Tabs>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default EquipmentCard;
