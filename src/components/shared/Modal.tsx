'use client'

import { useRouter } from 'next/navigation'

import { Dialog, DialogContent } from 'components/ui/dialog'

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  const handleOnOpenChange = (open: boolean) => {
    if (!open) {
      router.back()
    }
  }

  return (
    <Dialog open onOpenChange={handleOnOpenChange}>
      <DialogContent className="max-w-7xl !rounded-sm border-none p-0">{children}</DialogContent>
    </Dialog>
  )
}
