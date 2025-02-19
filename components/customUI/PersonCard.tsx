'use client'

import { useState } from 'react'

interface PersonCardProps {
    name: string
    title: string
    description: string
    imageUrl: string
}

export default function PersonCard({ name, title, description, imageUrl }: PersonCardProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="relative overflow-hidden w-full h-96 rounded-lg shadow-lg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-300 ease-in-out"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)'
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-opacity-50 z-10" />

            {/* Content Container */}
            <div className={`relative z-20 h-full flex flex-col justify-end p-4 transition-all duration-300 ease-in-out ${isHovered ? 'bg-black/75' : 'bg-transparent'}`}>
                {/* Description (hidden by default) */}
                <div
                    className={`text-white transition-all duration-300 ease-in-out ${isHovered ? 'opacity-100 transform translate-y-12' : 'opacity-0 transform translate-y-full'
                        }`}
                >
                    <p className="text-sm">{description}</p>
                </div>

                {/* Name and Title */}
                <div
                    className={`bg-black/30 rounded-3xl p-3 transition-all duration-300 ease-in-out ${isHovered ? 'bg-transparent transform translate-y-[100%]' : ''
                        }`}
                >
                    <h4 className="text-white text-2xl font-bold">{name}</h4>
                    <p className={`text-white text-lg ${isHovered ? 'translate-y-[150px]' : ''}`}>{title}</p>
                </div>
            </div>
        </div>
    )
}

