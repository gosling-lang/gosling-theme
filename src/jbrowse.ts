const NOMINAL_COLOR = ['#3A62FE', '#F85353', '#DCA326', '#03BF06', '#BABABA'/*'#000000'*/];

const JBrowseThemeMarkCommonStyle = {
    color: NOMINAL_COLOR[0],
    size: 1,
    stroke: 'black',
    strokeWidth: 0,
    opacity: 1,
    nominalColorRange: NOMINAL_COLOR,
    quantitativeSizeRange: [2, 6]
};

export const jbrowse = {
    base: 'jbrowse',

    root: {
        background: 'white',
        titleColor: 'black',
        subtitleColor: 'gray',
        mousePositionColor: '#000000'
    },

    track: {
        titleColor: 'white',
        titleBackground: '#0B243F',
        outline: 'black',
        outlineWidth: 1
    },

    legend: {
        background: '#732162',
        backgroundOpacity: 0.7,
        labelColor: 'black',
        backgroundStroke: '#black',
        tickColor: 'black'
    },

    axis: {
        tickColor: 'black',
        labelColor: 'black',
        baselineColor: 'black',
        gridColor: '#c5d5d9',
        gridStrokeWidth: 1
    },

    markCommon: {
        ...JBrowseThemeMarkCommonStyle
    },
    point: {
        ...JBrowseThemeMarkCommonStyle,
        size: 3
    },
    rect: {
        ...JBrowseThemeMarkCommonStyle
    },
    triangle: {
        ...JBrowseThemeMarkCommonStyle
    },
    area: {
        ...JBrowseThemeMarkCommonStyle
    },
    line: {
        ...JBrowseThemeMarkCommonStyle
    },
    bar: {
        ...JBrowseThemeMarkCommonStyle
    },
    rule: {
        ...JBrowseThemeMarkCommonStyle,
        strokeWidth: 1
    },
    link: {
        ...JBrowseThemeMarkCommonStyle,
        strokeWidth: 1
    },
    text: {
        ...JBrowseThemeMarkCommonStyle,
        textAnchor: 'middle',
        textFontWeight: 'normal'
    },
    brush: {
        ...JBrowseThemeMarkCommonStyle,
        color: '#c5d5d9',
        opacity: 0.3,
        stroke: 'black',
        strokeWidth: 1
    }
}
