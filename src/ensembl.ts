const NOMINAL_COLOR = ['#CD9B1D', '#8A668B', '#40E0D0', '#D9D9D9', '#FF6969', '#666666', '#FAC902','#FE0000','#CC96CD' /*'#000000'*/];

const EnsemblThemeMarkCommonStyle = {
    color: NOMINAL_COLOR[0],
    size: 1,
    stroke: 'black',
    strokeWidth: 0,
    opacity: 1,
    nominalColorRange: NOMINAL_COLOR,
    quantitativeSizeRange: [2, 6]
};

export const ensembl = {
    base: 'ensembl',

    root: {
        background: 'white',
        titleColor: '#353535',
        subtitleColor: '#494949',
        mousePositionColor: '#000000'
    },

    track: {
        titleColor: 'white',
        titleBackground: '#7B8BAF',
        outline: '#7B8BAF',
        outlineWidth: 1
    },

    legend: {
        background: '#7B8BAF',
        backgroundOpacity: 1,
        labelColor: 'white',
        backgroundStroke: 'white',
        tickColor: '#4f4f4f'
    },

    axis: {
        tickColor: '#4f4f4f',
        labelColor: 'white',
        baselineColor: 'black',
        gridColor: '#7B8BAF',
        gridStrokeWidth: 1
    },

    markCommon: {
        ...EnsemblThemeMarkCommonStyle
    },
    point: {
        ...EnsemblThemeMarkCommonStyle,
        size: 3
    },
    rect: {
        ...EnsemblThemeMarkCommonStyle
    },
    triangle: {
        ...EnsemblThemeMarkCommonStyle
    },
    area: {
        ...EnsemblThemeMarkCommonStyle
    },
    line: {
        ...EnsemblThemeMarkCommonStyle
    },
    bar: {
        ...EnsemblThemeMarkCommonStyle
    },
    rule: {
        ...EnsemblThemeMarkCommonStyle,
        strokeWidth: 1
    },
    link: {
        ...EnsemblThemeMarkCommonStyle,
        strokeWidth: 1
    },
    text: {
        ...EnsemblThemeMarkCommonStyle,
        textAnchor: 'middle',
        textFontWeight: 'normal'
    },
    brush: {
        ...EnsemblThemeMarkCommonStyle,
        color: 'gray',
        opacity: 0.3,
        stroke: 'black',
        strokeWidth: 1
    }
}
