const getMediaURL = mediaName => {
  return new URL(`../assets/${mediaName}`, import.meta.url).href
}

export default getMediaURL

export const getDateString = (daysFromToday = 0) => {
  const date = new Date()
  date.setDate(date.getDate() + daysFromToday)
  return date.toISOString().split("T")[0]
}
