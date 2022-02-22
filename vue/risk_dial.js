export const riskDial = {
    data() {
        return {
            hello: 'hello',
            activeStrategy: 'noHedge',
            products: {
                noHedge: {
                    "delta": 1,
                    "downside": -1,
                    "equity": 1,
                    "hedge": 0.0,
                    "callSpreads": 0.0,
                    "pieChart": [
                        ["Equity", 100],
                        ["Hedge", 0],
                        ["Call Spreads", 0]
                    ],
                    "region": false,
                },
                growth: {
                    "delta": 0.85,
                    "downside": -0.24,
                    "equity": 0.88,
                    "hedge": 0.08,
                    "callSpreads": 0.04,
                    "pieChart": [
                        ["Equity", 88],
                        ["Hedge", 8],
                        ["Call Spreads", 4]
                    ],
                    "region": {
                        axis: "x",
                        end: 0.5
                    }
                },
                prime: {
                    "delta": 0.65,
                    "downside": -0.17,
                    "equity": 0.88,
                    "hedge": 0.1,
                    "callSpreads": 0.02,
                    "pieChart": [
                        ["Equity", 88],
                        ["Hedge", 10],
                        ["Call Spreads", 2]
                    ],
                    "region": {
                        axis: "x",
                        start: 0.5,
                        end: 1.5
                    }
                },
                traditional: {
                    "delta": 0.55,
                    "downside": -0.15,
                    "pieChart": [
                        ["Equity", 90],
                        ["Hedge", 10],
                        ["Call Spreads", 0]
                    ],
                    "region": {
                        axis: "x",
                        start: 1.5,
                        end: 2.5
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
        drawChart() {
            let barChart = bb.generate({
                bindto: this.$refs["chart"],
                data: {
                    columns: [
                    ["Return", 85, 65, 55],
                    ["Risk", -24, -17, -15],
                    ],
                    type: "bar", // for ESM specify as: bar()
                    groups: [
                      [
                        "Return",
                        "Risk"
                      ]
                    ]
                },
                axis: {
                    x: {
                        type: "category",
                        categories: [
                                "Growth",
                                "Prime",
                                "Traditional"
                            ]
                    }
                },
                grid: {
                    y: {
                        lines: [
                        {
                            value: 0
                        }
                        ]
                    }
                },
                   
            });

            if (this.activeStrategy !== 'noHedge') {
                barChart.regions(
                  [ this.products[this.activeStrategy]['region'] ]
                );
            }
        },
        drawPieChart() {
            let cols = this.pieContent;
            
            bb.generate({
                bindto: this.$refs["pieChart"],
                data: {
                  columns: cols,
                  type: "pie", // for ESM specify as: pie()
                //   onclick: function(d, i) {
                //   console.log("onclick", d, i);
                //  },
                //   onover: function(d, i) {
                //   console.log("onover", d, i);
                //  },
                //   onout: function(d, i) {
                //   console.log("onout", d, i);
                //  }
                },
            });
        },
        redrawCharts() {
            this.drawChart();
            this.drawPieChart();
        }

    },
    computed: {
        growthActive() {
            return this.activeStrategy === "growth";
        },
        noHedgeActive() {
            return this.activeStrategy === "noHedge"
        },
        primeActive() {
            return this.activeStrategy === "prime";
        },
        tradActive() {
            return this.activeStrategy === "traditional";
        },
        pieContent() {
            return this.products[this.activeStrategy]['pieChart'];
        }
    },
    mounted() {
        this.redrawCharts();
    }
};
