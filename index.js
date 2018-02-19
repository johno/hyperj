const foregroundColor = '#111'
const backgroundColor = '#fff'
const tabBackgroundColor = '#fff'
const borderColor = '#fafafa'
const cursorColor = 'rgb(244, 66, 173, .4)'

module.exports.decorateConfig = config => Object.assign({}, config, {
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
      transition: opacity .1s ease-in-out;
      will-change: opacity;
    }
  `
})
