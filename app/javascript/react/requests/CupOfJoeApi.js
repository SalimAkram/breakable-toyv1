import getBrews from './Functions/GetBrews'
import getCafes from './Functions/GetCafes'
import getRoasts from './Functions/GetRoasts'
import getUsers from './Functions/GetUsers'
import cafeSearch from './Functions/CafeSearch'
import addToFavorites from './Functions/AddToFavorites'
import addBrewMethod from './Functions/AddBrewMethod'
import addRoast from './Functions/AddRoast'
import editBrew from './Functions/EditBrew'
import deleteBrew from './Functions/DeleteBrew'
import updateBrew from './Functions/UpdateBrew'
import getBrew from './Functions/GetBrew'

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

  static editBrew(id) {
    return editBrew(id)
  }

  static deleteBrew(id) {
    return deleteBrew(id)
  }

  static updateBrew(updatedBrew) {
    return updateBrew(updatedBrew)
  }

  static getBrew(url) {
    return getBrew(url)
  }
}

export default cupOfJoeApi