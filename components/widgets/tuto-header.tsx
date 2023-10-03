import { Level } from '@prisma/client'
import React from 'react'

type tutoHeaderProps = {
  title: string
  levels: Level[]
  tags: string[]
}

export default function TutoHeader({ title, levels, tags }: tutoHeaderProps) {
  return (
    <>
      <div className="w-full flex justify-between">
        <h2 className="font-bold">{title}</h2>
        <h3>{levels}</h3>
      </div>
      <ul className="w-full flex mt-2 mb-4">
        <li className="mr-2">{tags}</li>
      </ul>
    </>
  )
}
