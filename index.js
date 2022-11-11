const parseCloze = /{{c(?<c>[0-9]+)::(?<answer>.*?)(?:::(?<hint>.*?))?}}/g

module.exports = function cloze (str) {
  // Get an iterable list of all matches for the regexp
  const matches = str.matchAll(parseCloze)
  // Parse the string from left to right
  let index = 0
  const result = []
  for (const match of matches) {
    // If there is anything in the string before this capture group, add that
    // chunk of the string to the result
    if (match.index !== index) {
      result.push(str.substring(index, match.index))
      index = match.index
    }
    const groups = match.groups
    // Convert the cloze identifier to a Number
    groups.c = Number(groups.c)
    // Add all matched captures to the result as an object
    result.push({ ...groups })
    // Advance the index to the end of our match
    index += match[0].length
  }
  // If there is anything left at the end of the string, add that to the result
  if (str.length !== index) {
    result.push(str.substring(index))
  }
  return result
}
