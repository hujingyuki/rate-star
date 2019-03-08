/** @format */

module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: '组件名称:'
    },
    space: {
      type: 'list',
      message: '选择组件命名空间:',
      choices: [
        {
          name: 'edu',
          value: 'edu'
        },
        {
          name: 'stc',
          value: 'stc'
        }
      ]
    },
    ctype: {
      type: 'list',
      message: '选择组件类型:',
      choices: [
        {
          name: 'UI组件',
          value: 'ui'
        },
        {
          name: '业务组件',
          value: 'app'
        }
      ]
    },
    description: {
      type: 'string',
      required: false,
      message: '组件描述:',
      default: 'This is a niubility component.'
    },
    author: {
      type: 'string',
      message: '作者:',
      default: 'Admin'
    },
    autoInstall: {
      type: 'list',
      message: '项目创建完成后否自动执行 `npm install` ?',
      choices: [
        {
          name: 'Yes, use NPM',
          value: 'npm',
          short: 'npm'
        },
        {
          name: 'Yes, use Yarn',
          value: 'yarn',
          short: 'yarn'
        },
        {
          name: 'No, I will handle that myself',
          value: false,
          short: 'no'
        }
      ]
    }
  },
  filters: {
    'meta.js': 'false'
  }
}
