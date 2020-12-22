
/**
 * Send a "standard" notification
 * 
 * @param {String} title  - Notification title
 * @param {String} body   - Notification body message 
 */
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

/**
 * Send a silent notification (data only)
 * 
 * @param {String} title  - Notification title
 * @param {String} body   - Notification body message 
 */
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

/**
 * Helper function to send notification message to FCM
 * 
 * @param {object} Payload to send 
 */
const sendNotification = async (payload) => {
  // The server key authorization must be store in a separate file (.env) to security reason
  // For the purpose of this app it's good enough :) 
  return await fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Key=AAAARgZfxl8:APA91bG9klRaXrX7uA_ikakD8CKiD4SdWSgtze8hDSGPJxObOT2NF4d45BduXVZ73t5WChzhgTA-a5irRrXtYYHw_4Fgd9E7-eiChOUqOfpwYmIgd1flc3X0JhGykcvD8vgThSVxDGh7`
    },
    body: JSON.stringify(payload)
  });
}