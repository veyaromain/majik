import React from 'react'

interface MountainSeparatorProps {
  className?: string
  color?: 'tomato' | 'basil' | 'curry' | 'white'
}

const MountainSeparator: React.FC<MountainSeparatorProps> = ({ 
  className = '', 
  color = 'white' 
}) => {
  const colorClasses = {
    tomato: 'fill-tomato-500',
    basil: 'fill-basil-500', 
    curry: 'fill-curry-400',
    white: 'fill-white'
  }

  return (
    <div className={`w-full ${className}`}>
      <svg
        viewBox="0 0 1200 50"
        className="w-full h-[50px]"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 L0,35 Q120,15 240,25 Q360,35 480,20 Q600,5 720,15 Q840,25 960,10 Q1080,20 1200,30 L1200,50 Z"
          className={colorClasses[color]}
        />
      </svg>
    </div>
  )
}

export default MountainSeparator