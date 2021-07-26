example1 = {
    "title": "Gosling Theme",
    "subtitle": "Using the gosling themes, you can easily apply styling to gosling visualizations",
    "arrangement": "vertical",
    "centerRadius": 0.6,
    "spacing": 40,
    "views": [
      {
        "arrangement": "horizontal",
        "spacing": 80,
        "views": [
          {
            "spacing": 0.1,
            "static": true,
            "layout": "circular",
            "alignment": "stack",
            "tracks": [
              {
                "title": "Whole Genome",
                "alignment": "overlay",
                "tracks": [
                  {"mark": "bar"},
                  {"mark": "brush", "x": {"linkingId": "middle"}}
                ],
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
                },
                "x": {"field": "start", "type": "genomic"},
                "xe": {"field": "end", "type": "genomic"},
                "y": {"field": "peak", "type": "quantitative"},
                "color": {"field": "sample", "type": "nominal"},
                "width": 500,
                "height": 130
              },
              {
                "alignment": "overlay",
                "data": {
                  "url": "https://raw.githubusercontent.com/vigsterkr/circos/master/data/5/segdup.txt",
                  "type": "csv",
                  "headerNames": ["id", "chr", "p1", "p2"],
                  "chromosomePrefix": "hs",
                  "chromosomeField": "chr",
                  "genomicFields": ["p1", "p2"],
                  "separator": " ",
                  "longToWideId": "id"
                },
                "opacity": {"value": 0.4},
                "tracks": [
                  {
                    "mark": "withinLink",
                    "x": {"field": "p1", "type": "genomic"},
                    "xe": {"field": "p1_2", "type": "genomic"},
                    "x1": {"field": "p2", "type": "genomic"},
                    "x1e": {"field": "P2_2", "type": "genomic"},
                    "stroke": {"value": "lightgray"},
                    "strokeWidth": {"value": 1}
                  }
                ],
                "width": 500,
                "height": 100
              }
            ]
          },
          {
            "xDomain": {"chromosome": "12"},
            "linkingId": "middle",
            "layout": "linear",
            "tracks": [
              {
                "title": "Ideogram",
                "alignment": "overlay",
                "data": {
                  "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
                  "type": "csv",
                  "chromosomeField": "Chromosome",
                  "genomicFields": ["chromStart", "chromEnd"]
                },
                "tracks": [
                  {
                    "dataTransform": [
                      {
                        "type": "filter",
                        "field": "Stain",
                        "oneOf": ["acen"],
                        "not": true
                      }
                    ],
                    "mark": "rect",
                    "stroke": {"value": "gray"},
                    "strokeWidth": {"value": 0.3}
                  },
                  {
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["acen"]},
                      {"type": "filter", "field": "Name", "include": "q"}
                    ],
                    "mark": "triangleRight",
                    "stroke": {"value": "gray"},
                    "strokeWidth": {"value": 0.3}
                  },
                  {
                    "dataTransform": [
                      {"type": "filter", "field": "Stain", "oneOf": ["acen"]},
                      {"type": "filter", "field": "Name", "include": "p"}
                    ],
                    "mark": "triangleLeft",
                    "stroke": {"value": "gray"},
                    "strokeWidth": {"value": 0.3}
                  },
                  {"mark": "brush", "x": {"linkingId": "detail"}}
                ],
                "color": {
                  "field": "Stain",
                  "type": "nominal",
                  "domain": [
                    "gneg",
                    "gpos25",
                    "gpos50",
                    "gpos75",
                    "gpos100",
                    "gvar",
                    "acen"
                  ]
                },
                "size": {"value": 18},
                "x": {"field": "chromStart", "type": "genomic"},
                "xe": {"field": "chromEnd", "type": "genomic"},
                "width": 500,
                "height": 50
              },
              {
                "alignment": "overlay",
                "title": "Genes",
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=gene-annotation",
                  "type": "beddb",
                  "genomicFields": [
                    {"index": 1, "name": "start"},
                    {"index": 2, "name": "end"}
                  ],
                  "valueFields": [
                    {"index": 5, "name": "strand", "type": "nominal"},
                    {"index": 3, "name": "name", "type": "nominal"}
                  ],
                  "exonIntervalFields": [
                    {"index": 12, "name": "start"},
                    {"index": 13, "name": "end"}
                  ]
                },
                "tracks": [
                  {
                    "dataTransform": [
                      {"type": "filter", "field": "type", "oneOf": ["gene"]},
                      {"type": "filter", "field": "strand", "oneOf": ["+"]}
                    ],
                    "mark": "triangleRight",
                    "x": {
                      "field": "end",
                      "type": "genomic",
                      "linkingId": "middle"
                    },
                    "size": {"value": 15},
                    "opacity": {"value": 0.8}
                  },
                  {
                    "dataTransform": [
                      {"type": "filter", "field": "type", "oneOf": ["gene"]}
                    ],
                    "mark": "text",
                    "text": {"field": "name", "type": "nominal"},
                    "x": {"field": "start", "type": "genomic"},
                    "xe": {"field": "end", "type": "genomic"},
                    "style": {"dy": -15},
                    "opacity": {"value": 0.8}
                  },
                  {
                    "dataTransform": [
                      {"type": "filter", "field": "type", "oneOf": ["gene"]},
                      {"type": "filter", "field": "strand", "oneOf": ["-"]}
                    ],
                    "mark": "triangleLeft",
                    "x": {"field": "start", "type": "genomic"},
                    "size": {"value": 15},
                    "style": {"align": "right"},
                    "opacity": {"value": 0.8}
                  },
                  {
                    "dataTransform": [
                      {"type": "filter", "field": "type", "oneOf": ["exon"]}
                    ],
                    "mark": "rect",
                    "x": {"field": "start", "type": "genomic"},
                    "size": {"value": 15},
                    "xe": {"field": "end", "type": "genomic"},
                    "opacity": {"value": 0.8}
                  },
                  {
                    "dataTransform": [
                      {"type": "filter", "field": "type", "oneOf": ["gene"]},
                      {"type": "filter", "field": "strand", "oneOf": ["+"]}
                    ],
                    "mark": "rule",
                    "x": {"field": "start", "type": "genomic"},
                    "strokeWidth": {"value": 3},
                    "xe": {"field": "end", "type": "genomic"},
                    "opacity": {"value": 0.8},
                    "style": {"linePattern": {"type": "triangleRight", "size": 5}}
                  },
                  {
                    "dataTransform": [
                      {"type": "filter", "field": "type", "oneOf": ["gene"]},
                      {"type": "filter", "field": "strand", "oneOf": ["-"]}
                    ],
                    "mark": "rule",
                    "x": {"field": "start", "type": "genomic"},
                    "strokeWidth": {"value": 3},
                    "xe": {"field": "end", "type": "genomic"},
                    "style": {"linePattern": {"type": "triangleLeft", "size": 5}},
                    "opacity": {"value": 0.8}
                  },
                  {"mark": "brush", "x": {"linkingId": "detail"}}
                ],
                "row": {
                  "field": "strand",
                  "type": "nominal",
                  "domain": ["+", "-"]
                },
                "color": {
                  "field": "strand",
                  "type": "nominal",
                  "domain": ["+", "-"],
                  "legend": true
                },
                "visibility": [
                  {
                    "operation": "less-than",
                    "measure": "width",
                    "threshold": "|xe-x|",
                    "transitionPadding": 10,
                    "target": "mark"
                  }
                ],
                "width": 520,
                "height": 100
              },
              {
                "title": "Chromosome",
                "alignment": "overlay",
                "tracks": [
                  {"mark": "bar"},
                  {"mark": "brush", "x": {"linkingId": "detail"}}
                ],
                "data": {
                  "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
                  "type": "multivec",
                  "row": "sample",
                  "column": "position",
                  "value": "peak",
                  "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
                  "binSize": 4
                },
                "x": {"field": "start", "type": "genomic"},
                "xe": {"field": "end", "type": "genomic"},
                "y": {"field": "peak", "type": "quantitative", "grid": true},
                "color": {"field": "sample", "type": "nominal", "legend": true},
                "width": 520,
                "height": 300
              }
            ]
          }
        ]
      },
      {
        "layout": "linear",
        "xDomain": {"chromosome": "12", "interval": [46000000, 60000000]},
        "linkingId": "detail",
        "tracks": [
          {
            "title": "Sequence",
            "layout": "linear",
            "xDomain": {"chromosome": "1", "interval": [3000000, 3000010]},
            "alignment": "overlay",
            "data": {
              "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=sequence-multivec",
              "type": "multivec",
              "row": "base",
              "column": "position",
              "value": "count",
              "categories": ["A", "T", "G", "C"],
              "start": "start",
              "end": "end"
            },
            "tracks": [
              {
                "mark": "bar",
                "y": {"field": "count", "type": "quantitative", "axis": "none"}
              },
              {
                "dataTransform": [
                  {"type": "filter", "field": "count", "oneOf": [0], "not": true}
                ],
                "mark": "text",
                "x": {"field": "start", "type": "genomic"},
                "xe": {"field": "end", "type": "genomic"},
                "color": {"value": "white"},
                "visibility": [
                  {
                    "operation": "less-than",
                    "measure": "width",
                    "threshold": "|xe-x|",
                    "transitionPadding": 30,
                    "target": "mark"
                  },
                  {
                    "operation": "LT",
                    "measure": "zoomLevel",
                    "threshold": 10,
                    "target": "track"
                  }
                ]
              }
            ],
            "x": {"field": "position", "type": "genomic"},
            "color": {
              "field": "base",
              "type": "nominal",
              "domain": ["A", "T", "G", "C"],
              "legend": true
            },
            "text": {"field": "base", "type": "nominal"},
            "style": {
              "textFontSize": 24,
              "textStrokeWidth": 0,
              "textFontWeight": "bold"
            },
            "width": 800,
            "height": 100
          },
          {
            "title": "Detail View",
            "data": {
              "url": "https://server.gosling-lang.org/api/v1/tileset_info/?d=cistrome-multivec",
              "type": "multivec",
              "row": "sample",
              "column": "position",
              "value": "peak",
              "categories": ["sample 1", "sample 2", "sample 3", "sample 4"],
              "binSize": 4
            },
            "alignment": "overlay",
            "tracks": [{"mark": "point"}, {"mark": "line"}],
            "x": {"field": "position", "type": "genomic"},
            "y": {"field": "peak", "type": "quantitative", "grid": true},
            "row": {"field": "sample", "type": "nominal"},
            "color": {"field": "sample", "type": "nominal", "legend": true},
            "width": 1104,
            "height": 240
          }
        ]
      }
    ]
  }