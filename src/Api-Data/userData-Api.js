const weekDaySessions = {
  1: 'L',
  2: 'M',
  3: 'M',
  4: 'J',
  5: 'V',
  6: 'S',
  7: 'D'
}

const allActivities = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
}

const [webLink] = window.location.href.split('?')
const id = parseInt(webLink.split('/')[4]) || 12

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

//the following function will fetch any users daily activity on the main chart
async function fetchDailyActivityById() {
  const  activity  = await fetchActivityInformation()
  const userDailyActivity = []

      for (let item of activity.sessions) {
        const newDay = new Date(item.day)
        newDay.getDay()

        userDailyActivity.push({
          day: `${newDay.getDate()}`,
          kilogram: item.kilogram,
          calories: item.calories,
        })
      }

      return userDailyActivity
}

// the following function will fetch user's sessions
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

//the following function will fetch any users performance score on the radar chart 
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