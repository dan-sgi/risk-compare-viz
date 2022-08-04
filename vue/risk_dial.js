export const riskDial = {
    data() {
        return {
            hello: 'hello',
            activeStrategy: 'flagship',
            gauge: undefined,
            products: {
                // noHedge: {
                //     "delta": 1,
                //     "downside": -1,
                //     "equity": 1,
                //     "hedge": 0.0,
                //     "callSpreads": 0.0,
                //     "pieChart": [
                //         ["Equity", 100],
                //         ["Hedge", 0],
                //         ["Call Spreads", 0]
                //     ],
                //     "region": {
                //         axis: "x",
                //         end: 0.5
                //     }
                // },
                growth: {
                    "delta": 0.85,
                    "downside": -0.24,
                    "equity": 0.88,
                    "hedge": 0.08,
                    "callSpreads": 0.04,
                    "color": "#719dd5",
                    "pieChart": [
                        ["Equity", 88],
                        ["Hedge", 8],
                        ["Call Spreads", 4]
                    ],
                    "dualPieChart": {
                        "holdings": [
                            {name: "Equity", value: 88, itemStyle: {color: '#73956F'}},
                            {name: "Hedge", value: 8, itemStyle: {color: '#F7A072'}},
                            {name: "Call Spreads", value: 4, itemStyle: {color: '#B8BEDD'}},
                        ],
                        "income": [{value: 1, name: 'Income', itemStyle: {color: '#78C0E0'}}]
                    },
                    "region": {
                        axis: "x",
                        start: 0.5,
                        end: 1.5
                    }
                },
                prime: {
                    "delta": 0.65,
                    "downside": -0.17,
                    "equity": 0.88,
                    "hedge": 0.1,
                    "callSpreads": 0.02,
                    "color": "#375d8e",
                    "pieChart": [
                        ["Equity", 88],
                        ["Hedge", 10],
                        ["Call Spreads", 2]
                    ],
                    "dualPieChart": {
                        "holdings": [
                            {name: "Equity", value: 88, itemStyle: {color: '#73956F'}},
                            {name: "Hedge", value: 10, itemStyle: {color: '#F7A072'}},
                            {name: "Call Spreads", value: 2, itemStyle: {color: '#B8BEDD'}},
                        ],
                        // "income": [],
                        "income": [{value: 1, name: 'No Income', itemStyle: {color: '#d3d3d3'}}]
                    },
                    "region": {
                        axis: "x",
                        start: 1.5,
                        end: 2.5
                    }
                },
                flagship: {
                    "delta": 0.55,
                    "downside": -0.15,
                    "color": "#670926",
                    "pieChart": [
                        ["Equity", 90],
                        ["Hedge", 10],
                        ["Call Spreads", 0]
                    ],
                    "dualPieChart": {
                        "holdings": [
                            {name: "Equity", value: 90, itemStyle: {color: '#73956F'}},
                            {name: "Hedge", value: 10, itemStyle: {color: '#F7A072'}},
                            //{name: "Call Spreads", value: 4},
                        ],
                        "income": [{value: 1, name: 'Income', itemStyle: {color: '#78C0E0'}}]
                    },
                    "region": {
                        axis: "x",
                        start: 2.5,
                        end: 3.5
                    },

                }
            }
        }
    },
    methods:{
        toggleActive(strategy){
            this.activeStrategy = strategy;
            this.redrawCharts();
        },
        toggleStrategy(params) {
            console.log(params['data']['name'])
            this.activeStrategy = params['data']['name'];
            this.redrawCharts();
        },
        // drawChart() {
        //     let barChart = bb.generate({
        //         bindto: this.$refs["chart"],
        //         data: {
        //             columns: [
        //             ["Return", 100, 85, 65, 55],
        //             ["Risk", -100, -24, -17, -15],
        //             ],
        //             type: "bar", // for ESM specify as: bar()
        //             groups: [
        //               [
        //                 "Return",
        //                 "Risk"
        //               ]
        //             ]
        //         },
        //         axis: {
        //             x: {
        //                 type: "category",
        //                 categories: [
        //                         "No Hedge",
        //                         "Growth",
        //                         "Prime",
        //                         "Flagship"
        //                     ]
        //             }
        //         },
        //         grid: {
        //             y: {
        //                 lines: [
        //                 {
        //                     value: 0
        //                 }
        //                 ]
        //             }
        //         },
                   
        //     });

        //     barChart.regions(
        //         [ this.products[this.activeStrategy]['region'] ]
        //       );
        // },
        // drawPieChart() {
        //     let cols = this.pieContent;
            
        //     bb.generate({
        //         bindto: this.$refs["pieChart"],
        //         data: {
        //           columns: cols,
        //           type: "pie", // for ESM specify as: pie()
        //         //   onclick: function(d, i) {
        //         //   console.log("onclick", d, i);
        //         //  },
        //         //   onover: function(d, i) {
        //         //   console.log("onover", d, i);
        //         //  },
        //         //   onout: function(d, i) {
        //         //   console.log("onout", d, i);
        //         //  }
        //         },
        //     });
        // },
        drawGaugeChart() {
            var chartDom = document.getElementById('gaugeChart');
            this.gauge = window.echarts.init(chartDom);
            var option;
            let active = this.activeStrategy;
            let colors = {
                prime: '#bee0ae',
                flagship: '#ffeea0',
                growth: '#f39f9d'
            }

            option = {
                radar: {
                    triggerEvent: true
                },
                series: [
                    {
                    type: 'gauge',
                    startAngle: 180,
                    endAngle: 0,
                    min: 0,
                    max: 1,
                    splitNumber: 6,
                    axisLine: {
                        lineStyle: {
                            width: 6,
                            color: [
                                // [0.33, '#FF6E76'],
                                // [0.66, '#FDDD60'],
                                // [1, '#58D9F9']
                                // orange: #fed2a1
                                [0.333, colors['prime']],
                                [0.666, colors['flagship']],
                                [.999, colors['growth']]
                            ]
                        }
                    },
                    progress: {
                        show: true,
                        overlap: true,
                        width: 40
                    },
                    pointer: {
                        show: false
                        
                    },
                    // pointer: {
                    //     icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
                    //     length: '12%',
                    //     width: 20,
                    //     offsetCenter: [0, '-60%'],
                    //     itemStyle: {
                    //       color: 'auto'
                    //     }
                    //   },
                    axisTick: {
                        length: 12,
                        distance: 40,
                        lineStyle: {
                        color: 'auto',
                        width: 2
                        }
                    },
                    splitLine: {
                        length: 20,
                        distance: 40,
                        lineStyle: {
                        color: 'auto',
                        width: 5
                        }
                    },
                    axisLabel: {
                        show: false
                    },
                    title: {
                        offsetCenter: [0, '-20%'],
                        fontSize: 30
                    },
                    detail: {
                        fontSize: 20,
                        offsetCenter: [0, '30%'],
                        color: colors[active],
                        valueAnimation: true,
                        formatter: function (value) {
                            return "Strategy: " + active.charAt(0).toUpperCase() + active.slice(1);
                        },
                        //color: 'auto'
                    },
                    data: [
                        
                        {
                            value: 0.333,
                            name: 'prime',
                            itemStyle: {
                                color: colors['prime']
                            },
                            title: {
                                show: false
                            }
                        },
                        {
                            value: 0.666,
                            name: 'flagship',
                            itemStyle: {
                                color: colors['flagship']
                            },
                            title: {
                                show: false
                            }
                        },
                        {
                            value: 0.999,
                            name: 'growth',
                            itemStyle: {
                                color: colors['growth']
                            },
                            title: {
                                show: false
                            }
                        }
                    ]
                    }
                ]
            };
            this.gauge.on('click', function (params) {
                console.log(params);
                window.vueApp.toggleStrategy(params);
            });

            option && this.gauge.setOption(option);
            // window.onresize = () => {this.gauge.resize()};
        },
        drawDualPie() {
            var chartD = document.getElementById('dualPie');
            var dualP = window.echarts.init(chartD);
            var option;

            option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b}: {c} ({d}%)'
                },
                
                series: [
                    {
                        name: 'Holding',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],
                        label: {
                            position: 'center',
                            fontSize: 15
                        },
                        labelLine: {
                            show: false
                        },
                        data: this.dualPieContent['income']
                    },
                    {
                        type: 'pie',
                        radius: ['45%', '60%'],
                        labelLine: {
                            length: 30
                        },
                        
                        data: this.dualPieContent['holdings']
                    }
                ]
            };

            option && dualP.setOption(option);
            window.onresize = () => {
                dualP.resize();
                this.gauge.resize();
            };
        },
        redrawCharts() {
            console.log('here')
            this.drawGaugeChart();
            this.drawDualPie();
            this.drawPieChart();
        },
        

    },
    computed: {
        growthActive() {
            return this.activeStrategy === "growth";
        },
        // noHedgeActive() {
        //     return this.activeStrategy === "noHedge"
        // },
        primeActive() {
            return this.activeStrategy === "prime";
        },
        tradActive() {
            return this.activeStrategy === "flagship";
        },
        dualPieContent() {
            return this.products[this.activeStrategy]['dualPieChart'];
        },
        pieContent() {
            return this.products[this.activeStrategy]['pieChart'];
        }
    },
    mounted() {
        window.vueApp = this;
        this.redrawCharts();
    }
};
