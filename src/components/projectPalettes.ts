export type ProjectCardPalette = {
  canvas: string
  canvasBorder: string
  accentTerracotta: string
  accentSage: string
  accentGold: string
  ink: string
  mutedText: string
  tagBg: string
  tagBorder: string
  tagBgExpanded: string
  tagBorderExpanded: string
  overlayGradient: string
  baseShadow: string
  expandedShadow: string
  dimmedShadow: string
  ctaText: string
  ctaShadow: string
  sectionBackground: string
  sectionBorder: string
  sectionShadow: string
  sectionLine: string
}

export const projectCardPalettes: Record<'light' | 'dark', ProjectCardPalette> = {
  light: {
    canvas: '#cbcbbf',
    canvasBorder: '#9b9b8f',
    accentTerracotta: '#8b7355',
    accentSage: '#6b8e71',
    accentGold: '#a89968',
    ink: '#2a2a24',
    mutedText: '#5a5a52',
    tagBg: '#dbd9cd',
    tagBorder: 'rgba(151, 147, 130, 0.55)',
    tagBgExpanded: 'rgba(107, 142, 113, 0.16)',
    tagBorderExpanded: 'rgba(107, 142, 113, 0.42)',
    overlayGradient: 'linear-gradient(145deg, rgba(203, 203, 191, 1) 40%, rgba(255, 255, 250, 0.55) 100%)',
    baseShadow: '0 18px 48px -38px rgba(30, 24, 18, 0.42)',
    expandedShadow: '0 48px 110px -58px rgba(30, 24, 18, 0.5)',
    dimmedShadow: '0 16px 42px -42px rgba(30, 24, 18, 0.28)',
    ctaText: '#f6f2ea',
    ctaShadow: '0 12px 24px -18px rgba(139, 115, 85, 0.55)',
    sectionBackground: 'linear-gradient(135deg, #f5f3f0 0%, #d9d9cd 68%)',
    sectionBorder: 'rgba(168, 153, 104, 0.35)',
    sectionShadow: '0 46px 120px -80px rgba(42, 42, 36, 0.35)',
    sectionLine: 'linear-gradient(90deg, transparent, #8b7355, transparent)',
  },
  dark: {
    canvas: 'rgba(38, 38, 33, 0.92)',
    canvasBorder: 'rgba(99, 96, 83, 0.75)',
    accentTerracotta: '#c9aa7c',
    accentSage: '#84b297',
    accentGold: '#d2b567',
    ink: '#f1ede3',
    mutedText: '#d3cab7',
    tagBg: 'rgba(132, 178, 151, 0.18)',
    tagBorder: 'rgba(132, 178, 151, 0.4)',
    tagBgExpanded: 'rgba(132, 178, 151, 0.26)',
    tagBorderExpanded: 'rgba(132, 178, 151, 0.6)',
    overlayGradient: 'linear-gradient(145deg, rgba(38, 38, 33, 0.95) 40%, rgba(82, 76, 63, 0.75) 100%)',
    baseShadow: '0 20px 58px -40px rgba(0, 0, 0, 0.55)',
    expandedShadow: '0 48px 118px -56px rgba(0, 0, 0, 0.65)',
    dimmedShadow: '0 18px 60px -50px rgba(0, 0, 0, 0.48)',
    ctaText: '#1e1b15',
    ctaShadow: '0 16px 30px -16px rgba(201, 170, 124, 0.55)',
    sectionBackground: 'linear-gradient(135deg, rgba(18, 18, 15, 0.95) 0%, rgba(52, 51, 44, 0.92) 65%)',
    sectionBorder: 'rgba(210, 181, 103, 0.32)',
    sectionShadow: '0 46px 140px -90px rgba(0, 0, 0, 0.65)',
    sectionLine: 'linear-gradient(90deg, transparent, rgba(201, 170, 124, 0.8), transparent)',
  },
}
