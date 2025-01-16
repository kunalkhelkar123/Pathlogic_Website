import React, { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const records = [
  { month: 'JUNE', year: '2023', students: 167 },
  { month: 'MAY', year: '2023', students: 150 },
  { month: 'APRIL', year: '2023', students: 130 },
  { month: 'MARCH', year: '2023', students: 145 },
  { month: 'FEBRUARY', year: '2023', students: 138 },
]

export default function PlacementRecords() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= records.length ? 0 : prevIndex + 1
    )
  }, [records.length])

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? records.length - 1 : prevIndex - 1
    )
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      next();
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(intervalId);
  }, [next]);

  return (
    <div className="relative w-full bg-gradient-to-br from-orange-500 to-orange-600 px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-white">
          Recent Placement Records
        </h1>
        
        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-0 z-10 rounded-full bg-white p-2 shadow-lg transition hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-orange-500" />
          </button>

          <div className="flex gap-6 overflow-hidden">
            {[-1, 0, 1].map((offset) => {
              const index = (currentIndex + offset + records.length) % records.length
              const record = records[index]
              
              return (
                <div
                  key={record.month + record.year}
                  className={`transform transition-all duration-300 ${
                    offset === 0 ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                  }`}
                >
                  <div className="w-72 rounded-lg bg-white p-6 shadow-lg">
                    <div className="mb-4 text-center">
                      <h2 className="text-3xl font-semibold text-gray-600">
                        {record.month}
                      </h2>
                      <p className="text-2xl text-orange-500">{record.year}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-5xl font-bold text-orange-500">
                        {record.students}
                      </p>
                      <p className="mt-2 text-sm text-gray-600">
                        Students Recruited
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <button
            onClick={next}
            className="absolute right-0 z-10 rounded-full bg-white p-2 shadow-lg transition hover:bg-gray-100"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-orange-500" />
          </button>
        </div>
      </div>
    </div>
  )
}
