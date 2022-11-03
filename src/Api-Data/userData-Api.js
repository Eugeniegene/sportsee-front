import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./userData.js"

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

const [webLink, search] = window.location.href.split('?')
const id = parseInt(webLink.split('/')[4]) || 12
const mocked = search === 'mocked'

//identifies following response and data
let response
let data

//the two following functions will fetch general user data
async function fetchMainInformation () {
  if (mocked) {
    const data = USER_MAIN_DATA.find(user => user.userId === id)
    return data.keyData
  }

  try {
    response = await fetch(`http://localhost:3000/user/${id}`)
    data = await response.json()
    return data.data.keyData
  } catch (err) {
  }
}

async function fetchMainUserInformation () {
  if (mocked) {
    const data = USER_MAIN_DATA.find(user => user.userId === id)
    return data.userInfos
  }
  try {
    response = await fetch(`http://localhost:3000/user/${id}`)
    data = await response.json()
    return data.data.userInfos
  } catch (err) {
  }
}


//the two following functions will fetch general activity data
async function fetchActivityInformation () {
  if (mocked) {
    const data = USER_ACTIVITY.find(user => user.userId === id)
    return data.data
  }
  try {
    response = await fetch(`http://localhost:3000/user/${id}/activity`)
    data = await response.json()
    return data.data
  } catch (err) {
  }
}

//the two following functions will fetch general session data
async function fetchAverageSessionInformation () {
  if (mocked) {
    const data = USER_AVERAGE_SESSIONS.find(user => user.userId === id)
    return data.data
  }
  try {
    response = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    data = await response.json()
    return data.data
  } catch (err) {
  }
}
//the two following functions will fetch general session data
async function fetchAveragePerformanceInformation () {
  if (mocked) {
    const data = USER_PERFORMANCE.find(user => user.userId === id)
    return data.data
  }
  try {
    response = await fetch(`http://localhost:3000/user/${id}/performance`)
    data = await response.json()
    return data.data
  } catch (err) {
  }
}

async function fetchInformationScore () {
  if (mocked) {
    const data = USER_MAIN_DATA.find(user => user.userId === id)
    const scoreData = fetchUserScoreById({ data: data })
    
    return scoreData.data
  }
  try {
    response = await fetch(`http://localhost:3000/user/${id}`)
    data = await response.json()
    const scoreData = fetchUserScoreById({ data: data.data })
    return scoreData.data
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

//the following function will fetch any users performance score on the radar chart 
async function fetchUserScoreById() {
  let score
    if (data.todayScore === undefined) {
      score = data.score
    } else {
      score = data.todayScore
    }
    const newScoreData = []
    newScoreData.push({
      userId: data.userId,
      todayScore: score * 100
    })
    newScoreData.push({
      userId: data.userId,
      todayScore: 100,
      fill: '#ffffff00'
    })

  return newScoreData
}


export { fetchMainInformation, fetchMainUserInformation, fetchSessionsId, fetchDailyActivityById, fetchUserPerformanceById, fetchUserScoreById, fetchActivityInformation, fetchAverageSessionInformation,fetchAveragePerformanceInformation, fetchInformationScore }