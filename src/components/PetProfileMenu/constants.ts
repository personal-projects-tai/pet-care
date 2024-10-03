export type TabType = 'information' | 'health' | 'nutrition' | 'activities'
interface Tab {
  id: TabType
  text: string
}

export const tabs = [
  {
    text: 'pet_profile.menu.menu_options.health_card',
    route: '/dashboard/pet-profile'
  },
  {
    text: 'pet_profile.menu.menu_options.nutrition',
    route: '/dashboard/pet-profile/nutrition'
  },
  {
    text: 'pet_profile.menu.menu_options.activities',
    route: '/dashboard/pet-profile/activities'
  }
]

export const mobileTabs: Tab[] = [
  {
    id: 'information',
    text: 'pet_profile.menu.menu_options.information'
  },
  {
    id: 'health',
    text: 'pet_profile.menu.menu_options.health_card'
  },
  {
    id: 'nutrition',
    text: 'pet_profile.menu.menu_options.nutrition'
  },
  {
    id: 'activities',
    text: 'pet_profile.menu.menu_options.activities'
  }
]
