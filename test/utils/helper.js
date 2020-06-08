import FileSystem, { fstat } from 'fs'
const axeSource = require('axe-core').source


function runAccessibilityTest(fileName) {
    const fileDelimiter = ','
    fileName = fileName.split('.')[0] + '_' + getDateTime() + '.csv'
    browser.execute(axeSource)
    const options = { runOnly: { type: 'tag', values: ['wcag2aa'] } }
    let results = browser.executeAsync(function (options, done) {
        axe.run((err, results) => {
            if (err) done(err)
            done(results)
        })
    }, options)

    var violationsToWrite = []

    if (results.violations.length > 0) {
        var indexOfViolation = 0
        for (var i in results.violations) {
            var description = '"' + results.violations[i].description.replace(/\n/g, ':') + '"'
            var help = results.violations[i].help
            var helpUrl = results.violations[i].helpUrl
            var id = results.violations[i].id

            if (results.violations[i].nodes.length > 0) {
                for (var j in results.violations[i].nodes) {
                    var failureSummary = '"' + results.violations[i].nodes[j].failureSummary.replace(/\n/g, ':') + '"'
                    var html = '"' + results.violations[i].nodes[j].html.replace(/"/g, "'") + '"'
                    var impact = results.violations[i].nodes[j].impact

                    var violationToInsert = description + fileDelimiter + impact + fileDelimiter + html + fileDelimiter + failureSummary + fileDelimiter + id + fileDelimiter + help + fileDelimiter + helpUrl
                    if (violationsToWrite.indexOf(violationToInsert) === -1) {
                        violationsToWrite[indexOfViolation] = violationToInsert
                    }

                    indexOfViolation = indexOfViolation + 1
                }
            }
        }
    }

    WriteViolations(violationsToWrite, fileName, fileDelimiter)
    return results
}

function WriteViolations(violationsData, fileName, fileDelimiter) {
    var dir = './results/a11y/'

    if(!FileSystem.existsSync(dir)){
        FileSystem.mkdirSync(dir, {recursive: true})
    }

    var headerLine = "description" + fileDelimiter + "impact" + fileDelimiter + "html" + fileDelimiter + "failureSummary" + fileDelimiter + "id" + fileDelimiter + "help" + fileDelimiter + "helpUrl"
    violationsData.unshift(headerLine)
    violationsData.forEach(element => {
        FileSystem.appendFileSync(dir + fileName, element)
        FileSystem.appendFileSync(dir + fileName, '\n')
        FileSystem.mkdirSync
    })
}

function getDateTime() {
    var currentdatetime = new Date()
    var currDay = currentdatetime.getDate().toString()
    var currMonth = (currentdatetime.getMonth() + 1).toString()
    var currYear = currentdatetime.getFullYear().toString()
    var currHour = currentdatetime.getHours().toString()
    var currMin = currentdatetime.getMinutes().toString()
    var currSeconds = currentdatetime.getSeconds().toString()

    return currYear + currMonth + currDay + currHour + currMin + currSeconds
}

module.exports = {
    runAccessibilityTest,
}