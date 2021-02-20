import getBrews from './Functions/GetBrews'
import getCafes from './Functions/GetCafes'
import getRoasts from './Functions/GetRoasts'
import getUsers from './Functions/GetUsers'
import cafeSearch from './Functions/CafeSearch'
import addToFavorites from './Functions/AddToFavorites'
import addBrewMethod from './Functions/AddBrewMethod'
import addRoast from './Functions/AddRoast'

class cupOfJoeApi {

  static getCafes() {
    return getCafes()
  }
  
  static getBrews() {
    return getBrews()
  }

  static getRoasts() {
    return getRoasts()
  }

  static getUsers(id) {
    return getUsers(id)
  }

  static cafeSearch(search) {
    return cafeSearch(search)
  }

  static addBrewMethod(brewMethodFromForm) {
    return addBrewMethod(brewMethodFromForm)
  }

  static addToFavorites(favoriteRoast) {
    return addToFavorites(favoriteRoast)
  }

  static addRoast(roastData) {
    return addRoast(roastData)
  }
}

export default cupOfJoeApi