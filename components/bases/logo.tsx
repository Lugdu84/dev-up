import Link from 'next/link'

export default function Logo() {
  return (
    <Link
      href="/"
      className="font-semibold uppercase text-foreground text-xl  hover:underline underline-offset-4 order-2 md:order-1"
    >
      DEVUP
    </Link>
  )
}
