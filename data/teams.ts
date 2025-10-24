export const teamLogos: Record<string, string> = {
  // ASU
  'ASU CC': '/teams/ASUCC.jpg',
  'ASU': '/teams/ASUCC.jpg',
  
  // ACA Winter Flurry Teams
  'ACC Mambas': '/teams/vipers.jpg',
  'AZ 11 Warriors': '/teams/AZ11warriors.jpg',
  'AZ Lions': '/teams/AZLions.jpg',
  'AZ Vikings': '/teams/AZVikings.jpg',
  'Fighters CC': '/teams/FightersCC.jpeg',
  'KCC Royals': '/teams/KCC.jpg',
  'PHXC Wolfpacks': '/teams/PHXCWolfpacks.jpg',
  
  // ACA Platinum T20 Teams
  'ACC Vipers': '/teams/vipers.jpg',
  'Dragons': '/teams/Dragons.jpg',
  'AZ Stallions': '/teams/Stallions.jpg',
  'Stallions': '/teams/Stallions.jpg',
  'Falcons': '/teams/Falcons.jpg',
  'KCC Cavaliers': '/teams/KCC.jpg',
  'KCC Kings': '/teams/KCC.jpg',
  'PHX Strikers': '/teams/PHXStrikers.jpg',
  'Spartans': '/teams/Spartans.jpg',
  'Yoddhas Cricket Club': '/teams/Yoddhas.jpg',
  'Yoddhas': '/teams/Yoddhas.jpg',
  
  // NCCA/College Teams
  'UArizona': '/teams/asu.png',
  'University of Arizona': '/teams/asu.png',
  'UCLA': '/teams/asu.png',
  'NAU': '/teams/asu.png',
  'Northern Arizona University': '/teams/asu.png',
}

export function getTeamLogo(name: string, fallback: string = '/teams/ASUCC.jpg') {
  return teamLogos[name] ?? fallback
}

