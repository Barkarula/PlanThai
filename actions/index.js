const PLANTS_DATA = [
  {
    id: '1',
    name: 'The Shawshank Redemption',
    releaseYear: 1994,
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    rating: 4.8,
    genre: 'phuket',
    image: 'https://images.unsplash.com/photo-1541093113199-a2e9d84e903f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80',
    cover: 'https://images.unsplash.com/photo-1583255883728-526738ad4d20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
    longDesc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
  },
  {
    id: '2',
    name: 'The Dark Knight',
    releaseYear: 2008,
    description: 'When ability to fight injustice.',
    rating: 4.7,
    genre: 'bangkok, lamphun, phuket',
    image: 'https://images.unsplash.com/photo-1446071103084-c257b5f70672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=331&q=80',
    cover: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    longDesc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
  },
  {
    id: '3',
    name: 'The Dark Knight',
    releaseYear: 2008,
    description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    rating: 4.7,
    genre: 'krabi, phuket, lamphun',
    image: 'https://images.unsplash.com/photo-1508726295872-0b87b9999406?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80',
    cover: 'https://images.unsplash.com/photo-1532211387405-12202cb81d7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    longDesc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
  },
  {
    id: '4',
    name: 'The Dark Knight',
    releaseYear: 2008,
    description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    rating: 4.0,
    genre: 'krabi, phuket, lamphun, bangkok',
    image: 'https://images.unsplash.com/photo-1447875569765-2b3db822bec9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    cover: 'https://images.unsplash.com/photo-1589485807646-3cd3d885326d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    longDesc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
  },
  {
    id: '5',
    name: 'The Dark Knight',
    releaseYear: 2008,
    description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    rating: 4.9,
    genre: 'krabi, lamphun',
    image: 'https://images.unsplash.com/photo-1556647944-11bc0d4e0c4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    cover: 'https://images.unsplash.com/32/RgJQ82pETlKd0B7QzcJO_5912578701_92397ba76c_b.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
    longDesc: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
  }
]

const CATEGORY_DATA = [
  {id: 'c-1', name: 'phuket'},
  {id: 'c-2', name: 'bangkok'},
  {id: 'c-3', name: 'krabi'},
  {id: 'c-4', name: 'lamphun'}
]
// phuket Krabi Lamphun

// 1. getCategories function
// 2. get categories in index page
// 3. provide categories to sidemenu
// 4. in sidemenu iterate categories and display them

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA)
      // reject('Cannot fetch Data')
    }, 50)
  })
}

export const getPlants = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(PLANTS_DATA)
      // reject('Cannot fetch Data')
    }, 1000)
  })
}

export const createPlant = (plant) => {
  plant.id = Math.random().toString(36).substr(2, 7)
  return new Promise((resolve, reject) => {
    PLANTS_DATA.push(plant)
    setTimeout(() => resolve(plant), 100)
  })
}

export const getPlantById = (id) => {
  return new Promise((resolve, reject) => {
    const plantIndex = PLANTS_DATA.findIndex(m => m.id === id)
    const plant = PLANTS_DATA[plantIndex]
    setTimeout(() => resolve(plant), 100)
  })
}