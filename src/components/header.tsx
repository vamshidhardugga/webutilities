'use client'

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { CommandDialog, CommandItem, CommandList } from '@/components/ui/command'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="border-b">
        <div className="container mx-auto p-2">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              className="cursor-pointer"
              onClick={() => {
                setOpen(!open)
              }}
            >
              <Menu />
            </Button>
            <CommandDialog open={open} showCloseButton={false} onOpenChange={() => setOpen(!open)}>
              <CommandList>
                <Link href="/" passHref>
                  <CommandItem className="m-1 cursor-pointer" onSelect={() => setOpen(false)}>
                    Home
                  </CommandItem>
                </Link>
              </CommandList>
            </CommandDialog>
            <ThemeToggle />
          </div>
        </div>
      </header>
    </>
  )
}
