'use client'

import SkeletonBox from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface iSkeleton {
  height?: number
  count?: number
  marginBottom?: number
}

export const Skeleton = ({
  height = 40,
  count = 4,
  marginBottom = 30,
}: iSkeleton) => {
  const a = 'a'

  return (
    <SkeletonBox height={height} count={count} style={{ marginBottom, width: '100%' }} />
  )
}
