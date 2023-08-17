var choices = require('../../config');
var downloadFunc = require('./download');
const myaction = function (project, args) {
    import('inquirer').then(res => {
        res.default.prompt([{
            type: 'list',
            name: 'frameWork',
            choices: choices.frameWork,
            message: '请输入一个框架',
        }]).then(answer => {
            //下载代码模版
            downloadFunc(choices.frameWorkUrl[answer.frameWork], project)
        })
    })
}

module.exports = myaction;