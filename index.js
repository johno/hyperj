'use strict'

const foregroundColor = '#222'
const backgroundColor = '#ededed'
const borderColor = '#eee'
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
      color: ${foregroundColor} !important;
    }

    .tab_tab.tab_active {
      font-weight: 600;
      color: ${foregroundColor} !important;
      background-color: ${backgroundColor} !important;
    }

    .tab_tab.tab_active::before {
      border-bottom-color: ${backgroundColor} !important;
    }

		.term_fit:not(.term_term) {
			opacity: .7;
      background-color: '#f7f7f7';
		}

		.term_fit.term_active {
			opacity: 1;
			transition: opacity .1s ease-in-out;
			will-change: opacity;
      background-color: '#f7f7f7';
		}
  `
})
