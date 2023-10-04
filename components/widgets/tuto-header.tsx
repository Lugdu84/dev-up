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
        <ul>
          {levels.map((level: Level) => (
            <li key={level} className="mr-2">
              {level}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between">
        <ul className="w-4/5 flex mt-2 mb-4">
          {tags.map((tag: string) => (
            <li key={tag} className="mr-2">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
