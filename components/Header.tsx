'use client'

import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'

import { Button } from '@/components/customUI/Button'
import { HeaderContainer } from './customUI/HeaderContainer'
import Logo from "@/images/logos/logo_n.png"
import { NAV_LINKS } from '@/constant/StaticInfo'

import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'



function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-sm text-slate-800 hover:bg-orange-200 hover:text-slate-600 hover:font-semibold"
    >
      {children}
    </Link>
  )
}


function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2 text-sm">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-leave:duration-100 data-enter:ease-out data-leave:ease-in"
      >
        {NAV_LINKS.map((link) => (
          <MobileNavLink key={link.href} href={link.href}>
            {link.name}
          </MobileNavLink>
        ))}
        <hr className="m-2 border-slate-300/40" />
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-10 bg-orange-50">
      <HeaderContainer>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" aria-label="Home">
              <Image className="h-24 w-auto" src={Logo} alt={'DAAHO Logo'} />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
            </div>
            <Button variant="outline" color="red" href="/">Submit<span className='hidden lg:inline'>&nbsp;a collection</span></Button>
            <Button href="/contact" color="red">
              <span>
                Contact<span className="hidden lg:inline">&nbsp;us</span>
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </HeaderContainer>
    </header>
  )
}
