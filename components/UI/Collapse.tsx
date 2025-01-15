import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'

export default function Collapse({ content }: { content: string }) {
    return (
        <div className="w-full">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <dl className="space-y-6 divide-y divide-gray-900/10">
                        <Disclosure as="div" className="pt-6">
                            <dt>
                                <DisclosureButton className="group flex w-full items-start justify-between text-left text-slate-300">
                                    <span className="text-base/7 font-semibold">Read more about this event</span>
                                    <span className="ml-6 flex h-7 items-center">
                                        <PlusIcon aria-hidden="true" className="size-6 group-data-[open]:hidden" />
                                        <MinusIcon aria-hidden="true" className="size-6 group-[&:not([data-open])]:hidden" />
                                    </span>
                                </DisclosureButton>
                            </dt>
                            <DisclosurePanel as="dd" className="mt-6 pr-2 pl-4">
                                <p className="text-base/7 text-slate-200">{content}</p>
                            </DisclosurePanel>
                        </Disclosure>
                    </dl>
                </div>
            </div>
        </div>
    )
}
