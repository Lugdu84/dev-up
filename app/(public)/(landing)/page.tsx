import Banner from '@/components/widgets/banner'
import Description from '@/components/widgets/description'

export default async function Home() {
  return (
    <main className="flex flex-col">
      <Banner />
      <Description />
    </main>
  )
}
