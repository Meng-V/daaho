'use client'

import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { EventsProps } from '@/types/index'
import Image from 'next/image'

export default function Modal(
    {
        pastEvent,
        controlState,
        onClose,
    }: {
        pastEvent: EventsProps
        controlState: boolean
        onClose: () => void
    }
) {
    return (
        <Dialog
            open={controlState}
            onClose={onClose}
            className="relative z-10"
        >
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
            />

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all 
                        data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in 
                        my-8 sm:w-4/5 lg:w-2/3 2xl:w-1/2 sm:p-6 data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                    >

                        <div className="mt-3 text-center sm:mt-5">
                            <DialogTitle as="h3" className="text-xl font-bold text-gray-800">
                                {pastEvent.name}
                            </DialogTitle>
                            <div className="mt-4">
                                {pastEvent.imageURL &&
                                    <div className='flex justify-center'>
                                        <Image src={pastEvent.imageURL} alt={pastEvent.name} width={600} height={500} />
                                    </div>
                                }
                                <p className="text-gray-600 mt-8 text-start sm:mx-8">
                                    {pastEvent.description}
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 sm:mt-6 justify-center flex">
                            <button
                                type="button"
                                onClick={onClose}
                                className="w-[100px] rounded-md bg-teal-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                            >
                                Go back
                            </button>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    )
}
