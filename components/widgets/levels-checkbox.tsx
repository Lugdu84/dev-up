'use client'

import { useState } from 'react'
import { Level } from '@prisma/client'
import { useRouter } from 'next/navigation'
import Checkbox from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'

type Params = {
  [key: string]: string[]
}

const tempTags = [
  { name: 'javascript', text: 'Javascript', checked: false },
  { name: 'react', text: 'React', checked: false },
  { name: 'nextjs', text: 'NextJS', checked: false },
  { name: 'typescript', text: 'TypeScript', checked: false },
  { name: 'frontend', text: 'Frontend', checked: false },
  { name: 'backend', text: 'Backend', checked: false },
]

const levels = [
  { name: Level.NEWBIE, text: 'Futur apprenant', checked: false },
  { name: Level.APPRENTICE, text: 'Apprenant', checked: false },
  { name: Level.JUNIOR, text: 'Junior', checked: false },
]

export default function LevelsCheckbox() {
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const router = useRouter()
  const updateParams = 'tutos'

  const updateSelect = (name: string, selectedTab: string[]) => {
    let newTab: string[] = []
    if (selectedTab.includes(name)) {
      newTab = selectedTab.filter((l) => l !== name)
    } else {
      newTab = [...selectedTab, name]
    }
    return newTab
  }

  const updateRouter = (baseURL: string, params: Params) => {
    let url = baseURL
    const queryParams: string[] = []
    Object.keys(params).forEach((key) => {
      if (params[key].length > 0) {
        queryParams.push(`${key}=${params[key].join(`&${key}=`)}`)
      }
    })
    if (queryParams.length > 0) {
      url += `?${queryParams.join('&')}`
    }
    router.push(url)
  }

  const handleLevelChange = (name: string, type: string) => {
    // let newSelectedLevels: string[] = []
    // const updateParams = 'tutos'
    // if (selectedLevels.includes(level)) {
    //   newSelectedLevels = selectedLevels.filter((l) => l !== level)
    // } else {
    //   newSelectedLevels = [...selectedLevels, level]
    // }
    if (type === 'levels') {
      const newSelectedLevels = updateSelect(name, selectedLevels)
      setSelectedLevels(newSelectedLevels)
    } else {
      const newSelectedTags = updateSelect(name, selectedTags)
      setSelectedTags(newSelectedTags)
    }
  }

  updateRouter(updateParams, { levels: selectedLevels, tags: selectedTags })

  return (
    <div className="flex flex-col w-full gap-2">
      <h2 className="text-xl font-semibold">Votre niveau</h2>
      <div className="flex flex-row sm:flex-col gap-2">
        {levels.map((level) => (
          <div className="flex gap-2" key={level.name}>
            <Checkbox
              name={level.name}
              defaultChecked={level.checked}
              onCheckedChange={() => handleLevelChange(level.name, 'levels')}
            />
            <Label>{level.text}</Label>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h4 className="mb-2 text-l font-semibold">Catégories</h4>
        <ScrollArea className="h-72 w-full rounded-md">
          <div className="pr-4 flex flex-col gap-2">
            {tempTags.map((tag) => (
              <div className="flex gap-2" key={tag.name}>
                <Checkbox
                  name={tag.name}
                  defaultChecked={tag.checked}
                  onCheckedChange={() => handleLevelChange(tag.name, 'tags')}
                />
                <Label>{tag.text}</Label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
