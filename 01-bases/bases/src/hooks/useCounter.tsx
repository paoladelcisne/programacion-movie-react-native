import { useState } from "react"

export const useCounters = () => {
  const [count, setCount] = useState(1)

  const increaseBy = (value: number) => {
    setCount(Math.max (count + value, 0));
  }

  return {
    // Properties
    count,

    // Actions
    increaseBy,
  }
}
