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

//rendering all activities 
const allActivities = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
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
    return data.data
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
    return data.data
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
    return data.data
  } catch (err) {
  }
}

//FOLLOWING FUNCTIONS WILL BE CREATING A FORMAT TO DISPLAY TO THE USER 

/**the following function will fetch any users daily activity on the main chart
 * @returns Array[] - Returns the daily activity list which contains a date, kilograms and calories
 */
async function fetchDailyActivityById() {
  const  activity  = await fetchActivityInformation()
  const userDailyActivity = []

      for (let item of activity.sessions) {
       const [yyyy, mm, dd] = item.day.split("-");

        userDailyActivity.push({
          day: `${dd}/${mm}`,
          kilogram: item.kilogram,
          calories: item.calories,
        })
      }
      console.log(userDailyActivity)

      return userDailyActivity
}

/** the following function will fetch user's sessions
 * @returns Array[] - Returns the daily activity list which contains the @weekDaySessions and session length
 */
async function fetchSessionsId() {
  const  data  = await fetchAverageSessionInformation()
  const userWeeklySessions = []

      for (let sess of data.sessions) {
        userWeeklySessions.push({
          day: weekDaySessions[sess.day],
          sessionLength: sess.sessionLength
        })
      }

  return userWeeklySessions
}

/** the following function will fetch any users performance score on the radar chart 
 *  @returns Array[] - Returns the daily activity list which contains the @allActivies with kinds
 */
async function fetchUserPerformanceById() {
  const performance  = await fetchAveragePerformanceInformation()
  const userPerformanceData = []

      for (let perf of performance.data) {
        userPerformanceData.push({
          value: perf.value,
          kind: allActivities[perf.kind],
        })
      }
      
  return userPerformanceData
}



export { fetchMainInformation, fetchSessionsId, fetchDailyActivityById, fetchUserPerformanceById, fetchActivityInformation, fetchAverageSessionInformation,fetchAveragePerformanceInformation }