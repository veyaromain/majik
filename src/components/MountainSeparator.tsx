import React from 'react'

interface MountainSeparatorProps {
  className?: string
  fromColor?: string
  toColor?: string
  direction?: 'normal' | 'reverse'
}

const MountainSeparator: React.FC<MountainSeparatorProps> = ({ 
  className = '', 
  fromColor = '#EDE5CC',
  toColor = 'rgba(255, 255, 255, 0.5)',
  direction = 'normal'
}) => {
  return (
    <div className={`w-full ${className}`} style={{ transform: direction === 'reverse' ? 'scaleY(-1)' : 'none' }}>
      <svg
        viewBox="0 0 1200 80"
        className="w-full h-[80px]"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`mountainGradient-${Math.random()}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
        
        {/* Silhouette principale des Alpes avec de nombreux pics pointus */}
        <path
          d="M0,80 L0,65 
             L50,45 L80,25 L110,40 L140,15 L170,35 L200,10 L230,30 L260,5 L290,25 L320,20 L350,35 L380,12 L410,28 L440,8 L470,22 L500,18 L530,32 L560,6 L590,24 L620,14 L650,38 L680,16 L710,26 L740,11 L770,29 L800,7 L830,21 L860,17 L890,33 L920,9 L950,27 L980,13 L1010,31 L1040,19 L1070,36 L1100,23 L1130,39 L1160,28 L1200,42 
             L1200,80 Z"
          fill={toColor}
        />
        
        {/* Couche de montagnes en arrière-plan pour plus de profondeur */}
        <path
          d="M0,80 L0,70 
             L60,55 L120,40 L180,50 L240,35 L300,45 L360,30 L420,40 L480,25 L540,35 L600,20 L660,30 L720,15 L780,25 L840,10 L900,20 L960,5 L1020,15 L1080,25 L1140,35 L1200,45 
             L1200,80 Z"
          fill={toColor}
          opacity="0.6"
        />
        
        {/* Troisième couche pour encore plus de réalisme */}
        <path
          d="M0,80 L0,75 
             L100,65 L200,55 L300,60 L400,50 L500,55 L600,45 L700,50 L800,40 L900,45 L1000,35 L1100,40 L1200,50 
             L1200,80 Z"
          fill={toColor}
          opacity="0.3"
        />
      </svg>
    </div>
  )
}

export default MountainSeparator