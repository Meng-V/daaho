// PastEvents.tsx - New file
'use client'

import { useState } from 'react'
import { Button } from '@/components/customUI/Button'
import Modal from './Modal'
import Collapse from './customUI/Collapse'
import { EventsProps } from '@/types/index'

export function PastEvents({
  pastEvents
}: {
  pastEvents: EventsProps
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='flex flex-col rounded-3xl px-6 py-8 sm:px-8 border-2 border-teal-700 lg:py-8'>
      <div className=''>
        <p className="font-display text-lg font-bold tracking-tight text-teal-600">
          {pastEvents.date}
        </p>
        <h3 className="mt-5 font-display text-2xl text-white">{pastEvents.name}</h3>
        <p className='mt-4 text-base text-slate-400'>
          {pastEvents.location}
        </p>
      </div>

      <ul role="list" className='order-last flex flex-col gap-y-3'>
        {pastEvents.description && (
          <li className="flex">
            <Collapse content={pastEvents.description} />
          </li>
        )}
      </ul>
      <Modal
        pastEvent={pastEvents}
        controlState={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <Button
        onClick={() => setIsModalOpen(true)}
        variant={'outline'}
        color="slate"
        className="mt-8 no-underline bg-teal-100 font-semibold"
      >
        Read More
      </Button>
    </div>
  )
}