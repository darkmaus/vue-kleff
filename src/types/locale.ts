// Type definitions for locale data structure

export interface TeamMember {
  emoji: string
  name: string
  role: string
  description: string
}

export interface Achievement {
  icon: string
  title: string
  description: string
  year: string
}

export interface Stat {
  number: string
  label: string
}

export interface StatItem {
  icon: string
  text: string
}

export interface AudienceItem {
  icon: string
  text: string
}

export interface Event {
  frequency: string
  name: string
  description: string
}

export interface Community {
  icon: string
  text: string
}

export interface CollaborationCategory {
  title: string
  items: string[]
}

export interface Platform {
  name: string
  followers: string
}

export interface MediaOutlet {
  text: string
}

export interface GameCategory {
  title: string
  games: string[]
}

export interface ContactLink {
  icon: string
  text: string
  url: string
}

export interface AboutPageData {
  heroTitle: string
  heroSubtitle: string
  story: {
    title: string
    subtitle: string
    paragraph1: string
    paragraph2: string
    paragraph3: string
    imagePlaceholder: string
  }
  mission: {
    title: string
    description: string
  }
  vision: {
    title: string
    description: string
  }
  values: {
    title: string
    list: string[]
  }
  team: {
    title: string
    subtitle: string
    members: TeamMember[]
  }
  achievements: {
    title: string
    subtitle: string
    list: Achievement[]
  }
  stats: {
    list: Stat[]
  }
  join: {
    title: string
    description: string
    contactBtn: string
    gamesBtn: string
  }
}

export interface PressKitData {
  heroTitle: string
  heroSubtitle: string
  whoWeAre: {
    title: string
    description: string
    stats: StatItem[]
  }
  targetAudience: {
    title: string
    items: AudienceItem[]
  }
  events: {
    title: string
    frequency: string
    event: string
    description: string
    list: Event[]
  }
  communities: {
    title: string
    list: Community[]
  }
  collaborations: {
    title: string
    categories: CollaborationCategory[]
  }
  socialReach: {
    title: string
    platform: string
    followers: string
    platforms: Platform[]
  }
  mediaPresence: {
    title: string
    viewArticles: string
    outlets: MediaOutlet[]
  }
  whatWeOffer: {
    seeking: {
      title: string
      items: string[]
    }
    providing: {
      title: string
      items: string[]
    }
  }
  gallery: {
    title: string
    placeholder: string
    viewGallery: string
  }
  recommendedGames: {
    title: string
    categories: GameCategory[]
  }
  location: {
    title: string
    venue: string
    address: string
    description: string
  }
  contact: {
    title: string
    links: ContactLink[]
  }
  cta: {
    question1: string
    callToAction: string
  }
}

export interface LocaleData {
  nav: {
    home: string
    about: string
    pressKit: string
    games: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  games: {
    title: string
    subtitle: string
    playerCount: string
    duration: string
    difficulty: string
    difficultyLevels: {
      easy: string
      medium: string
      hard: string
    }
  }
  about: {
    title: string
    subtitle: string
    description: string
    mission: string
    missionText: string
    values: string
    valuesList: string[]
  }
  aboutPage: AboutPageData
  pressKit: PressKitData
  contact: {
    title: string
    subtitle: string
  }
} 