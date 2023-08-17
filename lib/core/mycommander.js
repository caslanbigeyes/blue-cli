const myaction = require('./action');
const mycommander = function (program) {
    console.log(program,'program')
    program.command('create <project> [Other...]').alias('crt').description('创建项目').action(myaction);
}
module.exports = mycommander;