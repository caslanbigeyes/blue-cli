var downLoad = require('download-git-repo');
var ora = require('ora');
var chalk = require('chalk');
const spinner = ora().start();
const downloadFunc = (url, project) => {
    spinner.color = 'yellow';
    spinner.text = '代码正在下载';
    downLoad('direct:' + url, `./test/${project}`, { clone: true }, (err) => {
        if (!err) {
            spinner.succeed('结束')
            console.log(chalk.blue('哈哈哈,恭喜您终于下载完成了'))
        }
    })
}

module.exports = downloadFunc;