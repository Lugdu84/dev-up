import Banner from '@/components/widgets/banner'
import Description from '@/components/widgets/description'
// import UserCategorie from '@/components/widgets/user-categorie'

export default async function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <Description />
      {/* <UserCategorie /> */}
    </div>
  )
}
