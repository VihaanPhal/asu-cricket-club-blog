export const tournaments = {
  'aca-platinum-2025-26': 'ACA Platinum T20 2025-2026',
  'aca-winter-2025-26': 'ACA Winter Flurry 2025-2026',
  'ncca-regionals-2025': 'NCCA Regionals 2025',
  'ncca-nationals-2026': 'NCCA Nationals 2026',
  'ccl-regionals-2025': 'CCL Regionals 2025',
  'ccl-nationals-2026': 'CCL Nationals 2026',
} as const
export type TournamentKey = keyof typeof tournaments
export const tourName = (k: TournamentKey) => tournaments[k]

export const acaTeams = {
  platinumT20: [
    'ACC Vipers','Dragons','Stallions','Falcons','KCC Cavaliers','KCC Kings',
    'PHX Strikers','Spartans','Yoddhas Cricket Club'
  ],
  winterFlurry: [
    'ACC Mambas','AZ 11 Warriors','AZ Lions','AZ Vikings','Fighters CC','KCC Royals','PHXC Wolfpacks'
  ],
}

export const acaGrounds = [
  'Anderson Chandler','ASU Tempe Ground','ASU Ground 1','ASU Ground 2','Bogle Jr High','Buffalo Ridge Park',
  'Cactus Park - East','Cactus Park - West','Chaparral','DFT','Grovers','Humphrey','Legacy 1','Legacy 2',
  'QueenCreek','Tucson','Mariposa','Glendale','Gilbert','Paloma','Paradise Cove','PV Park','Pecos 6','Pecos 7',
  'Pima1','Pima2','Pioneer 1','Pioneer 2','Roadrunner NW','Sandpiper','Sereno N','Snedigar','SV Junior High',
  'Tucson APL Ground','TurtleRock','Turtlerock 2','Vista Canyon','Willis'
]

