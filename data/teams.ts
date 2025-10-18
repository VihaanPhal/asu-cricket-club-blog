export const teamLogos: Record<string, string> = {
  'ASU CC': '/teams/asu.jpg',
  'ACC Mambas': '/teams/acc-mambas.jpg',
  // Add more here later (e.g., 'PHX Strikers': '/teams/phx-strikers.jpg')
}
export function getTeamLogo(name: string, fallback: string = '/teams/opponent.jpg') {
  return teamLogos[name] ?? fallback
}

