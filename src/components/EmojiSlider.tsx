import { useState } from "react"

const EmojiSlider = ({ initVal }: { initVal: number }) => {
  const [value, setValue] = useState(initVal)

  // Define emojis based on slider range
  const getEmoji = (val: number): string => {
    if (val === 0) return "😡"
    if (val < 20) return "😢"
    if (val < 40) return "😟"
    if (val < 60) return "😐"
    if (val < 80) return "😊"
    return "😃"
  }

  return (
    <div className="flex flex-col items-center justify-center mt-2 px-1">
      <div className="relative w-full">
        {/* Emoji Controller */}
        <div
          className="absolute text-2xl -top-[.10rem] transition-transform duration-300 pointer-events-none"
          style={{ left: `calc(${value}% - 12px)` }}
        >
          {getEmoji(value)}
        </div>
        {/* Slider Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          className="w-full appearance-none bg-gray-300 h-1 rounded-full focus:outline-none cursor-pointer"
        />
      </div>
    </div>
  )
}

export default EmojiSlider
