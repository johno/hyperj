const foregroundColor = 'rgb(17, 17, 17)'
const backgroundColor = 'rgb(255, 255, 255)'
const tabBackgroundColor = 'rgb(255, 255, 255)'
const borderColor = 'rgb(250, 250, 250)'
const cursorColor = 'rgba(244, 66, 173, .4)'

module.exports.decorateConfig = config => Object.assign({}, config, {
	cursorColor,
	backgroundColor,
	borderColor,
	foregroundColor,

  css: `
    ${config.css}
  `
})
