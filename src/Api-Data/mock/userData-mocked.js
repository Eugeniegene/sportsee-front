import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./userData.js"

const [webLink] = window.location.href.split('?')
const id = parseInt(webLink.split('/')[4]) || 12


//mocks Data contained in JsonFile (main data)
async function fetchMainInformation () {
    const data = USER_MAIN_DATA.find(user => user.userId === id)
    return data.data
}

//mocks activity data contained in the Json file 
async function fetchActivityInformation () {
      const data = USER_ACTIVITY.find(user => user.userId === id)
      return data.data
}

//mocks session average data contained in the Json file
async function fetchAverageSessionInformation () {
      const data = USER_AVERAGE_SESSIONS.find(user => user.userId === id)
      return data.data
}

//mocks general performance data contained in the Json file
async function fetchAveragePerformanceInformation () {
      const data = USER_PERFORMANCE.find(user => user.userId === id)
      return data.data
}

export {fetchMainInformation, fetchActivityInformation, fetchAverageSessionInformation,fetchAveragePerformanceInformation}
