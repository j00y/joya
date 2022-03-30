exports.capitalize = (word) => {
    const result = word.split('')
    result[0] = result[0].toUpperCase()
    return result.join('')
}