const timeConversion = (str) => {
    // extract 'AM'/'PM' from the string
    const modifier = str.slice(-2)
    // extract the string without AM/PM
    const timeWithoutModifier = str.substring(0, 8)
    // split hr/min/sec into an array
    let [hour, minute, second] = timeWithoutModifier.split(':')
    // the only exceptional case is the hour at 12, make hour to '00'
    if (hour === '12') {
        hour = '00'
    }
    // 12AM already becomes 00AM. 12PM(now 00PM) needs to be converted to 12PM
    if (modifier === 'PM') {
        // hour is still a string, needs to be converted to a number
        hour = parseInt(hour) + 12
        
    }
    return `${hour}:${minute}:${second}`
}

// timeConversion('07:05:45PM') // return '19:05:45'
// timeConversion('12:05:45PM') // return '12:05:45'
// timeConversion('12:01:00AM') // return '00:01:00'

console.log(timeConversion('07:05:45PM')) // return '19:05:45'
console.log(timeConversion('12:05:45PM')) // return '12:05:45'
console.log(timeConversion('12:01:00AM')) // return '00:01:00'
console.log(timeConversion('04:01:22PM')) // return '00:01:00'