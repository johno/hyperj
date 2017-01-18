const foregroundColor = '#222'
const backgroundColor = 'rgba(253, 253, 253, .8)'
const tabBackgroundColor = 'rgba(240, 240, 240, .3)'
const borderColor = '#f1f1f1'
const cursorColor = 'rgb(244, 66, 173, .4)'

const colors = {
	black: foregroundColor,
	red: '#e7040f',
	green: '#19a974',
	yellow: '#ffd700',
	blue: '#357edd',
	magenta: '#ff41b4',
	cyan: '#96ccff',
	white: '#f1f1f1',
	lightBlack: '#686868',
	lightRed: '#ff725c',
	lightGreen: '#9eebcf',
	lightYellow: '#fbf1a9',
	lightBlue: '#96ccff',
	lightMagenta: '#ffa3d7',
	lightCyan: '#96ccff',
	lightWhite: '#f1f1f1'
}

module.exports.decorateConfig = config => Object.assign({}, config, {
  colors,
	cursorColor,
	backgroundColor,
	borderColor,
	foregroundColor,

  css: `
    ${config.css}

    .tab_tab,
    .tabs_title {
      opacity: .7;
      color: ${foregroundColor} !important;
      background-color: ${tabBackgroundColor} !important;
    }

    .tab_tab.tab_active,
    .tabs_title {
      font-weight: 600;
    }

    .tab_tab.tab_active {
      background-color: ${backgroundColor} !important;
      border-color: ${backgroundColor} !important;
    }

		.term_fit:not(.term_term) {
			opacity: .7;
		}

		.term_fit.term_active,
    .tab_tab.tab_active,
    .tabs_title {
			opacity: 1;
		}
  `
})

module.exports.onWindow = browserWindow => browserWindow.setVibrancy('light')
