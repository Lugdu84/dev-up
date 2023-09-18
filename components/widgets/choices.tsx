export default function AllChoices() {
    return <div>{Choices.map((
      return <Choice   />
  ))}</div>
}

// Component Choice


type Dev = {
    title: string
    image: string
    description: string[]
}

const DEVS: Dev[] = [
    {
        title: 'aprenant',
        image: 'https://nextjs.org/static/images/nextjs-logo-light.svg',
        description: ['The React Framework for Production']
    },
    {
        title: 'junior',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        description: ['A JavaScript library for building user interfaces']
    },
]
