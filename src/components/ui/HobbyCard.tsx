"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useState, ReactNode } from "react";

interface HobbyCardProps {
  title: string;
  icon: IconProp;
  description: ReactNode;
}

export function HobbyCard({ title, icon, description }: HobbyCardProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="p-4 border rounded-xl text-center"
            onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
        >
            <FontAwesomeIcon 
                icon={icon} 
                width={100} 
                className="mx-auto" 
                style={{ fontSize: '100px' }} 
            />
            <p className="text-center mt-2.5">{title}</p>
            {isHovered && (
                <div className="relative mt-2 p-2 bg-gray-800 text-white rounded shadow-lg">
                    {description}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8 border-b-gray-800"></div>
                </div>
            )}
        </div>
    );
}
