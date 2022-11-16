import { createPath } from "react-router-dom"

//rendering week-days
const weekDaySessions = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D'
}

//initialising a link and an id
const [webLink] = window.location.href.split('?')
const id = parseInt(webLink.split('/')[4]) || 12 || 18

//the two following functions will fetch general user data
async function fetchMainInformation () {
  let response
  let data
  try {
    response = await fetch(`http://localhost:3000/user/${id}`)
    data = await response.json()
    return data.data
  } catch (err) {
  }
}

//the two following functions will fetch general activity data
async function fetchActivityInformation () {
  let response
  let data
  try {
    response = await fetch(`http://localhost:3000/user/${id}/activity`)
    data = await response.json()
    const result = new FetchActivityData(data.data)
    return result.data
  } catch (err) {
  }
}

//the two following functions will fetch general session data
async function fetchAverageSessionInformation () {
  let response
  let data
  try {
    response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    data = await response.json()
    const result = new FetchAverageSessionData(data.data)
    return result.data
  } catch (err) {
  }
}
//the two following functions will fetch general session data
async function fetchAveragePerformanceInformation () {
  let response
  let data
  try {
    response = await fetch(`http://localhost:3000/user/${id}/performance`)
    data = await response.json()
    const result = new FetchPerformanceData(data.data)
    return result
  } catch (err) {
  }
}

//FOLLOWING FUNCTIONS WILL BE CREATING A FORMAT TO DISPLAY TO THE USER 

/**the following function will fetch any users daily activity on the main chart
 * @returns Array[] - Returns the daily activity list which contains a date, kilograms and calories
 */

/** the following function will fetch user's sessions
 * @returns Array[] - Returns the daily activity list which contains the @weekDaySessions and session length
 */


/** the following function will fetch any users performance score on the radar chart 
 *  @returns Array[] - Returns the daily activity list which contains the @allActivies with kinds
 */

 class FetchActivityData {
  constructor(data) {
    this.id = data.id
    this.sessions = data.sessions 
  }

  get data(){
    let data = []
    for (let item of this.sessions) {
      const [yyyy, mm, dd] = item.day.split("-");

       data.push({
         day: `${dd}/${mm}`,
         kilogram: item.kilogram,
         calories: item.calories,
       })
     }
     return data
    }
  }

class FetchAverageSessionData {
  constructor(data) {
    this.id = data.id
    this.sessions = data.sessions
    const weekDaySessions = {
      1: 'L',
      2: 'M',
      3: 'M',
      4: 'J',
      5: 'V',
      6: 'S',
      7: 'D'
    }  
  }
  get data (){
    const userWeeklySessions = []
    for (let sess of this.sessions) {

      userWeeklySessions.push({
        day:weekDaySessions[sess.day],
        sessionLength: sess.sessionLength
      })
    }
    return userWeeklySessions
  }
}

class FetchPerformanceData {
  constructor(data) {
    const categories = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
    };

    for (const allActivities  in data.data) {
      data.data[allActivities].kind = categories[parseInt(allActivities) + 1]
    }

    this.data = Object.values(data.data).reverse()
  }
}


export { fetchMainInformation, fetchActivityInformation, fetchAverageSessionInformation,fetchAveragePerformanceInformation }