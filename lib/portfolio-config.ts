export interface PortfolioConfig {
  // Contact Information
  contact: {
    showEmail: boolean
    showPhone: boolean
    showLinkedIn: boolean
    showGitHub: boolean
    showLocation: boolean
  }

  // Education Section
  education: {
    showSection: boolean
    showFocus: boolean
    showAchievements: boolean
    showGPA: boolean
    showProfessionalCertifications: boolean
  }

  // Experience Section
  experience: {
    showSection: boolean
    showCompanyLogos: boolean
    showSalary: boolean
  }

  // Projects Section
  projects: {
    showSection: boolean
    showTechnologies: boolean
    showTimeline: boolean
    showTeamSize: boolean
    showVideos: boolean
  }

  // General Settings
  general: {
    showProfileImage: boolean
    showBio: boolean
    enableDarkMode: boolean
  }
}

// Master configuration - adjust these values to show/hide sections
export const portfolioConfig: PortfolioConfig = {
  contact: {
    showEmail: true,
    showPhone: false,
    showLinkedIn: true,
    showGitHub: false,
    showLocation: true,
  },

  education: {
    showSection: true,
    showFocus: false,
    showAchievements: true,
    showGPA: true,
    showProfessionalCertifications: false,
  },

  experience: {
    showSection: true,
    showCompanyLogos: true,
    showSalary: false, // Hidden by default for privacy
  },

  projects: {
    showSection: true,
    showTechnologies: true,
    showTimeline: true,
    showTeamSize: true,
    showVideos: true,
  },

  general: {
    showProfileImage: true,
    showBio: true,
    enableDarkMode: true,
  },
}

// Contact information (moved from contact-config.ts)
export const contactInfo = {
  email: "connorsessions@gmail.com",
  phone: "",
  linkedin: "https://www.linkedin.com/in/connor-sessions/",
  github: "",
  location: "Fullerton, CA",
}
