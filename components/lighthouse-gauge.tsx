'use client'

import { PieChart } from '@mui/x-charts/PieChart'

interface GaugeProps {
    score: number 
    label: string  
}

export default function LighthouseGauge({ score, label }: GaugeProps) {
    const remaining = 100 - score;

    const data = [
        { value: score, color: 'green' },      
        { value: remaining, color: 'dark' },  
    ];

    return (
        <div className="flex flex-col items-center justify-center p-4 rounded-xl relative">
            <div className="relative w-[160px] h-[160px] flex items-center justify-center">
                
                <PieChart
                    series={[
                        {
                            data: data,
                            innerRadius: 65,   
                            outerRadius: 75,   
                            paddingAngle: 0,   
                            startAngle: 0,     
                            endAngle: 360,
                        },
                    ]}
                    width={160}
                    height={160}
                    margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    sx={{
                        '& .MuiPieArc-root': {
                            stroke: 'none',
                        },
                        '& .MuiChartsLegend-root': {
                            display: 'none',
                        },
                    }}
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none">
                    <span className="text-4xl font-extrabold text-white tracking-tight leading-none">
                        {score}
                    </span>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase mt-1">
                        points
                    </span>
                </div>
            </div>

            <span className="text-xs font-mono font-black tracking-wider text-neutral-400 mt-4 uppercase">
                {label}
            </span>
        </div>
    )
}