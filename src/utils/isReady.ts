import { useEffect, useState } from 'react'

export const useReady = () => {
  const [isReady, setIsReady] = useState(false)
  useEffect(() => {
    setIsReady(true)
  }, [])

  return isReady
}
