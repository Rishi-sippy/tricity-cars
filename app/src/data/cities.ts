export const cities = {
  kharar: {
    name: 'Kharar',
    areas: ['Sunny Enclave', 'Landran Road', 'Gillco Valley'],
    h1: 'Self Drive Cars in Kharar',
    keyword: 'get a car on rent in kharar'
  },
  chandigarh: {
    name: 'Chandigarh',
    areas: ['Sector 17', 'Sector 22', 'IT Park'],
    h1: 'Self Drive Cars in Chandigarh',
    keyword: 'self drive cars in chandigarh'
  },
  zirakpur: {
    name: 'Zirakpur',
    areas: ['VIP Road', 'Baltana', 'Ambala Highway'],
    h1: 'Self Drive Cars in Zirakpur',
    keyword: 'self drive cars in zirakpur'
  },
  mohali: {
    name: 'Mohali',
    areas: ['Phase 7', 'Airport Road', 'Sector 70'],
    h1: 'Self Drive Cars in Mohali',
    keyword: 'self drive cars in mohali'
  }
} as const

// 🔑 THIS IS THE KEY FIX
export type CitySlug = keyof typeof cities
export type CityData = (typeof cities)[CitySlug]
