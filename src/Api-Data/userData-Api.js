import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "./userData.js"

const allActivities = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
}

export class APIMock {
  fetchAllActivitiesID(userId) {
    const listedActivities = []
    for (let user of USER_PERFORMANCE) {
      if (user.userId === userId) {
        for (let item of user.data) {
          listedActivities.push({
            activity: allActivities[item.kind],
            value: item.value,
          })
        }
        return listedActivities
      }
    }
    for (let key in listedActivities) {
      listedActivities.push({
        activity: listedActivities[key],
        value: 0,
      })
    }
    return listedActivities;
  }
}
export class APIMockSessions {
  fetchSessionsAverageID(userId){
    const weekDays = [
      {
        1: 'L',
        2: 'M',
        3: 'M',
        4: 'J',
        5: 'V',
        6: 'S',
        7: 'D'
      }
    ]
    for (let user of USER_AVERAGE_SESSIONS) {
      if (user.userId === userId) {
        for (let selectSession in user.sessions) {
          weekDays[selectSession].sessionLength =
            user.sessions[selectSession].sessionLength
        }
      }
    }
    return weekDays
  }
}
export class APIMockActivity {
  fetchActivityId(userId){
    const userActivity = []
    for (let user of USER_ACTIVITY) {
      if (user.userId === userId) {
        for (let item of user.sessions) {
          const [mm, dd] = item.day.split("-")

          userActivity.push({
            day: `${dd}/${mm}`,
            kilogram: item.kilogram,
            calories: item.calories,
          })
        }
        return userActivity
      }
    }
  }
}
  export class APIMockName {
  fetchNameId(userId){
    for (let user of USER_MAIN_DATA) {
      if (user.id === userId) {
        return user.userInfos.firstName
      }
    }
    return "unknown user"
  }
}
export class APIMockKey {
  fetchKeyDataId(userId) {
    for (let user of USER_MAIN_DATA) {
      if (user.id === userId) {
        return user.keyData
      }
    }
    return {
      calorieCount: null,
      proteinCount: null,
      carbohydrateCount: null,
      lipidCount: null,
      }
    }
  }
  export class APIMockDaily {
  fetchDailyScoreId(userId) {
    for (let user of USER_MAIN_DATA) {
      if (user.id === userId) {
        return user.todayScore
      }
    }
    return 0;
  }
}