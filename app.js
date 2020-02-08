const yargs = require('yargs')
const tools = require('./tools')

yargs.command({
    command: 'sum',
    describe: 'gather general weather information about location',
    builder: {
        location: {
            describe: 'Name of location',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        tools.summary(argv.location)
    }
})

yargs.parse()

