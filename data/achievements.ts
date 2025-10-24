export type Achievement = {
  id: string
  date: string        // e.g., 'March 2022'
  position: string    // e.g., 'Champions'
  tournament: string  // e.g., 'NCCA Nationals'
  location: string    // e.g., 'Houston, Texas'
  image?: string      // e.g., '/achievements/ncca-nationals-2022.jpg'
  team: string[]      // top performers / full team
}

export const achievements: Achievement[] = [
  {
    id: 'ncca-nationals-2022',
    date: 'March 2022',
    position: 'Champions',
    tournament: 'NCCA Nationals',
    location: 'Houston, Texas',
    image: '/achievements/ncca-nationals-2022.jpg',
    team: [
      'Adi Keshava Reddy','Adi Batra','Aurangzai Baig','Hammad','Ankul Gupta','Jayesh Chawala'
    ],
  },
  {
    id: 'ncca-regionals-2023',
    date: 'Nov 2023',
    position: 'Champions',
    tournament: 'NCCA Regionals',
    location: 'El Monte, Los Angeles',
    image: '/achievements/ncca-regionals-2023.jpg',
    team: [
      'Adi Keshava Reddy','Maanas Lalwani','Evin Hewageegna','Yashasvi Gautom','Aadi Pathak','Vihaan Phal',
      'Ayush Singh','Yuvraj Bhatia','Tanishqq Mishra','Raj Vyas','Bharat Kumar','Ishan Jha'
    ],
  },
  {
    id: 'ncca-regionals-2024',
    date: 'Nov 2024',
    position: 'Champions',
    tournament: 'NCCA Regionals',
    location: 'El Monte, Los Angeles',
    image: '/achievements/ncca-regionals-2024.jpg',
    team: [
      'MAANAS LALWANI (C)','EVIN HEWAGEEGANA (VC)','AADI PATHAK','AMOGH DAGAR','PRAVAR CHAUHAN','VIHAAN PHAL',
      'ADI KESHAVA REDDY (WK)','YASH GAUTOM','ADITYA BATRA','PRAJITH REDDY','VED AGARWAL','AMOGH DESAI',
      'SHIVAM SINGH','ANSHUL KAMBLE','SHAMIN MOHAMMAD','AARAV KAPOOR'
    ],
  },
  {
    id: 'aca-t20-div-c-2024',
    date: 'May 2024',
    position: 'Champions',
    tournament: 'ACA T-20 Division C',
    location: 'Phoenix, Arizona',
    image: '/achievements/aca-t20-divc-2024.jpg',
    team: [
      'Aadi Pathak','Aarav Kapoor','Adi Keshava Reddy','Aditya Batra','Alok Rajpurohit','Ayush Singh',
      'Devansh Bhansali','Hari Kiran Revanur','Maanas Lalwani','Muhammad Salman','Nimit Rohit',
      'Pravar Chauhan','Shamin Naushad M','Tanishqq Mishra','Viraj Jadhav','Yeain Shukla',
      'Yeshwanth Sangishetty','Yuvraj Bhatia'
    ],
  },
  {
    id: 'aca-t20-div-b-2024-25',
    date: '2024-2025',
    position: 'Runners Up',
    tournament: 'ACA Division B T20',
    location: 'Phoenix, AZ',
    team: [
      'Maanas Lalwani (C)','Evin Hewageegana (VC)','Aadi Pathak','Adi Keshava Reddy','Pravar Chauhan',
      'Aarav Kapoor','Amogh Dagar','Yuvraj Bhatia','Aditya Batra','Prajith Reddy',
      'Abhishek Aggarwal','Anshul Kaithakkal','Shamin Naushad','Abdul Rehman','Keshava Olagappa',
      'Udit Shahi','Varun','Snehith','Krishna'
    ],
  },
]

