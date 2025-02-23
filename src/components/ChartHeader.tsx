import React from "react"
import { CardHeader } from "./ui/card"

const ChartHeader = ({
  title,
  subheader1,
  subheader2,
}: {
  title: string
  subheader1: string
  subheader2: string
}) => {
  return (
    <CardHeader>
      <div className="flex justify-between items-center text-gray-600 w-full">
        <h1>{title}</h1>
        <div className="flex justify-end items-center gap-4">
          <h1>{subheader1}</h1>
          <h1>{subheader2}</h1>
        </div>
      </div>
    </CardHeader>
  )
}

export default ChartHeader
