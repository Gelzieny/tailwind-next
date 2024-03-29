'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface TabsItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabsItem({ value, title, isSelected = false }: TabsItemProps) {
  return (
    <>
      <Tabs.Trigger
        className='relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700'
        value={value}
      >
        <span>{title}</span>
        {isSelected && (
          <motion.div layoutId='activeTab'
            className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
          />
        )}
      </Tabs.Trigger>
    </>
  )
}