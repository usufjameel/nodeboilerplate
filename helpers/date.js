exports.getDateInUTCFormat = () => {
    return (new Date()).toUTCString()
}

exports.getDateFromUTCString = (dateString) => {
    return new Date(dateString)
}

exports.isDateEquals = (dateString1, dateString2) => {
    let date1 = this.getDateFromUTCString(dateString1)
    let date2 = this.getDateFromUTCString(dateString2)
    return date1 === date2
}

exports.isDateGreater = (dateString1, dateString2) => {
    let date1 = this.getDateFromUTCString(dateString1)
    let date2 = this.getDateFromUTCString(dateString2)
    return date1 > date2
}

exports.isDateSmaller = (dateString1, dateString2) => {
    let date1 = this.getDateFromUTCString(dateString1)
    let date2 = this.getDateFromUTCString(dateString2)
    return date1 < date2
}

exports.compareDate = (dateString1, dateString2) => {
    let date1 = this.getDateFromUTCString(dateString1)
    let date2 = this.getDateFromUTCString(dateString2)
    return date1 === date2 ? 0 : (date1 > date2 ? 1 : -1)
}

exports.convertDateToUTCString = (date) => {
    let separator = date.includes('-') ? '-' : '/'
    let parts = date.split(separator)
    return new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2])).toUTCString()
}

exports.getDateDifferenceInDays = (dateString1, dateString2) => {
    let date1 = new Date(dateString1)
    let date2 = new Date(dateString2)
    let diff = (date1.getTime() - date2.getTime()) / (1000 * 3600 * 24)
    if (diff < 1 && diff > 0)
        diff = 0
    return Math.ceil(diff)
}

exports.getDateDifferenceInWeeksFloat = (dateString1, dateString2) => {

}

exports.secondsDiff = (d1, d2) => {
    return Math.floor((d2 - d1) / 1000);
}

exports.minutesDiff = (d1, d2) => {
    return Math.floor(this.secondsDiff(d1, d2) / 60)
}

exports.hoursDiff = (d1, d2) => {
    return Math.floor(this.minutesDiff(d1, d2) / 60)
}

exports.daysDiff = (d1, d2) => {
    return Math.floor(this.hoursDiff(d1, d2) / 24)
}

exports.weeksDiff = (d1, d2) => {
    return Math.floor(this.daysDiff(d1, d2) / 7)
}

exports.yearsDiff = (d1, d2) => {
    let date1 = new Date(d1)
    let date2 = new Date(d2)
    return date2.getFullYear() - date1.getFullYear()
}

exports.monthDiff = (d1, d2) => {
    let date1 = new Date(d1)
    let date2 = new Date(d2)
    let d1Year = date1.getFullYear()
    let d2Year = date2.getFullYear()
    let d1Month = date1.getMonth() + 1
    let d2Month = date2.getMonth() + 1

    if(d1Year === d2Year){
        return d2Month-d1Month
    }else{
        let yearDiff = d2Year - d1Year
        let totalmonths = yearDiff * 12
        return totalmonths + d2Month - d1Month
    }
}

exports.getDayFromDate = (dateString) => {
    return new Date(dateString).getDate()
}
