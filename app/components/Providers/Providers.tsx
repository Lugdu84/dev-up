import React from 'react'

type ProvidersProps = {
  children: React.ReactNode
  h1: string
  h2: string
}

export default function Providers({
  h1,
  h2,
  children,
}: ProvidersProps): React.ReactElement {
  return (
    <div className="w-[80%] h-auto flex flex-col mt-[200px] md:w-[40%] lg:w-[60%]">
      <h1 className="text-black mb-[5px] text-2xl font-black md:text-l xl:text-3xl">
        {h1}
      </h1>
      <h2 className="text-black text-lg">{h2}</h2>
      <div className="w-[100%] h-[120px] mt-[30px] flex flex-col justify-between">
        {children}
      </div>
    </div>
  )
}
