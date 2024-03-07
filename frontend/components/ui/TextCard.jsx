'use client'
import { Card, CardBody } from "@nextui-org/card";

export default function TextCard({ text }) {
    return (
        <Card className="bg-white">
        <CardBody className="overflow-visible justify-center py-2">
          <h1 className="text-black text-center font-medium text-9xl">{text}</h1>
        </CardBody>
      </Card>
    )
}