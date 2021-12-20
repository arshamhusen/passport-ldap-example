import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  CogIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserIcon,
} from '@heroicons/react/outline'
import SidebarComponent from '../components/container/sidebar/SidebarComponent'
import SidebarMobileComponent from '../components/container/sidebar/SidebarMobileComponent'
import AppContent from '../components/AppContent'



export default function DefaultLayout({ children }) {

  const [navigation] = useState([
    { name: 'Home', to: '/', icon: HomeIcon, current: true },
    { name: 'Users', to: '/users', icon: UserIcon, current: false, },



  ]);
  const [secondaryNavigation] = useState([
    { name: 'Settings', href: '#', icon: CogIcon },
    { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
    { name: 'Privacy', href: '#', icon: ShieldCheckIcon },



  ]);

  

  return (
    <>
      <div className="min-h-full">


        {/* Sidebar for Desktop & Mobile */}

        <SidebarComponent navigation={navigation} secondaryNavigation={secondaryNavigation}  />

        <div  className="lg:pl-64 flex flex-col flex-1" >
          <SidebarMobileComponent  navigation={navigation} secondaryNavigation={secondaryNavigation} />

          <main className="flex-1 pb-8">
          {children}
          </main>
        </div>
      </div>
    </>
  )
}
