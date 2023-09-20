import IconFooter from '@/components/bases/icon-footer'
import { FOOTER } from '@/lib/constants'
import Logo from '@/components/bases/logo'
import FooterLink from '@/components/bases/footer-link'

export default function Footer() {
  return (
    <footer className="border-t border-border pt-8 pb-4 cursor-default">
      <div className="container flex flex-col md:flex-row items-start justify-center md:justify-between gap-8">
        <div className="max-w-xs flex flex-col gap-4">
          <Logo hasSession color="black" />
          <p className="text-foreground/80 order-2 text-sm">
            DEVUP est une plateforme d&apos;assistance avant et après le début
            de votre carrière en développement.
          </p>
        </div>
        <div className="flex flex-col gap-4 order-2">
          <p className="font-semibold uppercase text-foreground/80">Liens</p>
          <ul className="flex flex-col justify-center gap-2 text-sm md:justify-end order-2">
            {FOOTER.navigate.map(({ label, href }) => (
              <FooterLink key={label} label={label} href={href} />
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-4 order-2">
          <p className="font-semibold uppercase text-foreground/80">Social</p>
          <ul className="flex items-center">
            {FOOTER.icons.map(({ icon, href }) => (
              <IconFooter key={icon} icon={icon} href={href} />
            ))}
          </ul>
        </div>
      </div>
      <p className="container mt-4 text-center text-sm text-muted-foreground">
        {FOOTER.copyright}
      </p>
    </footer>
  )
}
