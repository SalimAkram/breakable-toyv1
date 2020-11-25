import addToFavorites from './functions/AddToFavorites'
import getBrews from './functions/GetBrews'
import getCafes from './functions/GetCafes'
import getRoasts from './functions/GetRoasts'
import getUsers from './functions/GetUsers'
import addBrewMethod from './functions/AddBrewMethod'
import addRoast from './functions/AddRoast'

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