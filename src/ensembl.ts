const NOMINAL_COLOR = ['#E79F00', '#029F73', '#0072B2', '#CB7AA7', '#D45E00', '#57B4E9', '#EFE441' /*'#000000'*/];

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
        titleColor: 'black',
        subtitleColor: 'gray',
        mousePositionColor: '#000000'
    },

    track: {
        titleColor: 'black',
        titleBackground: 'white',
        outline: 'black',
        outlineWidth: 1
    },

    legend: {
        background: 'white',
        backgroundOpacity: 0.7,
        labelColor: 'black',
        backgroundStroke: '#DBDBDB',
        tickColor: 'black'
    },

    axis: {
        tickColor: 'black',
        labelColor: 'black',
        baselineColor: 'black',
        gridColor: '#E3E3E3',
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