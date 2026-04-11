const getMediaURL = mediaName => {
  return new URL(`../assets/${mediaName}`, import.meta.url).href
}

export default getMediaURL