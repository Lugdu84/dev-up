import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-semibold uppercase text-foreground text-lg hover:underline underline-offset-4"
    >
      DEVUP
    </Link>
  )
}
