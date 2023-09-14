import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NavButtons() {
  return (
    <Link href="/login" className="hidden md:flex">
      <Button>Se Connecter</Button>
    </Link>
  )
}
