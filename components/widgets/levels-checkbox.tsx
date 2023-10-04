'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ALL_LEVELS, ALL_TAGS } from '@/lib/constants'
import Checkbox from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { ScrollArea } from '@/components/ui/scroll-area'

type Params = {
  [key: string]: string[]
}

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
    if (type === 'levels') {
      const newSelectedLevels = updateSelect(name, selectedLevels)
      setSelectedLevels(newSelectedLevels)
    } else {
      const newSelectedTags = updateSelect(name, selectedTags)
      setSelectedTags(newSelectedTags)
    }
  }

  useEffect(() => {
    updateRouter(updateParams, { levels: selectedLevels, tags: selectedTags })
  }, [selectedLevels, selectedTags])

  return (
    <div className="flex flex-col w-full gap-2">
      <h2 className="text-xl font-semibold">Votre niveau</h2>
      <div className="flex flex-row sm:flex-col gap-2">
        {ALL_LEVELS.map((level) => (
          <div className="flex gap-2" key={level.name}>
            <Checkbox
              name={level.name}
              onCheckedChange={() => handleLevelChange(level.name, 'levels')}
            />
            <Label htmlFor={level.name}>{level.text}</Label>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <h4 className="mb-2 text-l font-semibold">Catégories</h4>
        <ScrollArea className="h-72 w-full rounded-md">
          <div className="pr-4 flex flex-col gap-2">
            {ALL_TAGS.map((tag) => (
              <div className="flex gap-2" key={tag.name}>
                <Checkbox
                  name={tag.name}
                  onCheckedChange={() => handleLevelChange(tag.name, 'tags')}
                />
                <Label htmlFor={tag.name}>{tag.text}</Label>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
