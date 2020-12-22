export const sendStandardNotification = async (title, body) => {
  const payload = {
    notification: { title, body },
    data: { title, body },
    to: '/topics/general',
    android: {
      priority: 'high',
      notification: {
        click_action: "MAIN_ACTIVITY"
      }
    }
  }

  return await sendNotification(payload)
}

export const sendSilentNotification = async (title, body) => {
  const payload = {
    data: { title, body },
    to: '/topics/general',
    android: {
      priority: 'high',
      notification: {
        click_action: "MAIN_ACTIVITY"
      }
    }
  }

  return await sendNotification(payload)
}

const sendNotification = async (payload) => {
  return await fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Key=AAAARgZfxl8:APA91bG9klRaXrX7uA_ikakD8CKiD4SdWSgtze8hDSGPJxObOT2NF4d45BduXVZ73t5WChzhgTA-a5irRrXtYYHw_4Fgd9E7-eiChOUqOfpwYmIgd1flc3X0JhGykcvD8vgThSVxDGh7`
    },
    body: JSON.stringify(payload)
  });
}