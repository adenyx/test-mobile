import React from 'react'

import { TIconName } from '../types'
const ArrowLeft = require('../assets/icons/arrow-left.svg').default
const ArrowRight = require('../assets/icons/arrow-right.svg').default
const Cart = require('../assets/icons/cart.svg').default
const Profile = require('../assets/icons/profile.svg').default
const Search = require('../assets/icons/search.svg').default
const Favorites = require('../assets/icons/favorites.svg').default
const Home = require('../assets/icons/home.svg').default

export const Icon = ({
  name,
  width = '24',
  height = '24',
  color = '#000000',
}: {
  name: TIconName
  width?: number | string
  height?: number | string
  color?: string
}) => {
  switch (name.toLowerCase()) {
    case 'arrow-left':
      return <ArrowLeft width={width} height={height} color={color} />
    case 'arrow-right':
      return <ArrowRight width={width} height={height} color={color} />
    case 'profile':
      return <Profile width={width} height={height} color={color} />
    case 'search':
      return <Search width={width} height={height} color={color} />
    case 'cart':
      return <Cart width={width} height={height} color={color} />
    case 'favorites':
      return <Favorites width={width} height={height} color={color} />
    case 'home':
      return <Home width={width} height={height} color={color} />

    default:
      return null
  }
}
