'use client'

import { useState } from 'react'
import { Level } from '@prisma/client'
import { useRouter } from 'next/navigation'
import Checkbox from '../ui/checkbox'
import { Label } from '../ui/label'

export default function LevelsCheckbox() {
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const levels = [
    { name: Level.NEWBIE, text: 'Futur apprenant', checked: false },
    { name: Level.APPRENTICE, text: 'Apprenant', checked: false },
    { name: Level.JUNIOR, text: 'Junior', checked: false },
  ]
  const router = useRouter()

  const handleLevelChange = (level: string) => {
    let newSelectedLevels: string[] = []
    const updateParams = 'tutos'
    if (selectedLevels.includes(level)) {
      newSelectedLevels = selectedLevels.filter((l) => l !== level)
    } else {
      newSelectedLevels = [...selectedLevels, level]
    }

    // Mettre à jour les cases à cocher sélectionnées
    setSelectedLevels(newSelectedLevels)

    if (newSelectedLevels.length === 0) {
      router.push(updateParams)
    } else {
      router.push(
        `${updateParams}?levels=${newSelectedLevels.join('&levels=')}`,
      )
    }
  }
  return (
    <div className="flex flex-col w-full gap-2">
      <h2 className="text-xl font-semibold">Votre niveau</h2>
      <div className="flex flex-row sm:flex-col gap-2">
        {levels.map((level) => (
          <div className="flex gap-2" key={level.name}>
            <Checkbox
              name={level.name}
              defaultChecked={level.checked}
              onCheckedChange={() => handleLevelChange(level.name)}
            />
            <Label>{level.text}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}
