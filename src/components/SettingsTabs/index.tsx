'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabsItem } from './TabsItem'

export function SettingsTabs() {
  return (
    <>
      <Tabs.Root>
        <Tabs.List className='mt-6 flex w-full items-center gap-4 border-b border-zinc-200'>
          <TabsItem value='tab1' title='My details' isSelected />
          <TabsItem value='tab2' title='Profile' />
          <TabsItem value='tab3' title='Password' />
          <TabsItem value='tab4' title='Team' />
          <TabsItem value='tab5' title='Plan' />
          <TabsItem value='tab6' title='Billing' />
          <TabsItem value='tab7' title='Email' />
          <TabsItem value='tab8' title='Notifications' />
          <TabsItem value='tab9' title='Integrations' />
          <TabsItem value='tab10' title='API' />
        </Tabs.List>
      </Tabs.Root>
    </>
  )
}