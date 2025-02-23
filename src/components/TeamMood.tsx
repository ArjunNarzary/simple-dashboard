import React from "react"
import EmojiSlider from "./EmojiSlider"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { IModeItem } from "@/interface"
import { TEAM_MOODS } from "@/utils/constant"
import { Card, CardContent } from "./ui/card"

const TeamMood = () => {
  return (
    <Card className="p-4 rounded-sm">
      <h1 className="mb-2 text-xl">Team Moods</h1>
      <CardContent className="px-0 py-1 space-y-4">
        {TEAM_MOODS.map((mood: IModeItem) => (
          <RenderMoodCard key={mood.id} {...mood} />
        ))}
      </CardContent>
    </Card>
  )
}

export default TeamMood

const RenderMoodCard = ({ name, designation, image, mood }: IModeItem) => {
  return (
    <div>
      <div className="flex justify-start items-center gap-2">
        <Avatar className="size-9">
          <AvatarImage src={image} />
          <AvatarFallback>
            {name.substring(0, 2).toLocaleUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-md">{name}</h1>
          <h3 className="text-sm leading-3">{designation}</h3>
        </div>
      </div>
      <EmojiSlider initVal={mood} />
    </div>
  )
}
