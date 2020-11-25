import getBrews from './functions/GetBrews'
import getCafes from './functions/GetCafes'

class cupOfJoeApi {

  static getCafes() {
    return getCafes()
  }
  
  static getBrews() {
    return getBrews()
  }
  
}

export default cupOfJoeApi