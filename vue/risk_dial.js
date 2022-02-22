export const riskDial = {
    data() {
        return {
            hello: 'hello',
            activeStrategy: '',
            products: {
                noHedge: {
                    "delta": 1,
                    "downside": -1,
                    "equity": 1,
                    "hedge": 0.0,
                    "callSpreads": 0.0
                },
                growth: {
                    "delta": 0.85,
                    "downside": -0.24,
                    "equity": 0.88,
                    "hedge": 0.08,
                    "callSpreads": 0.04
                },
                prime: {
                    "delta": 0.65,
                    "downside": -0.17,
                    "equity": 0.88,
                    "hedge": 0.1,
                    "callSpreads": 0.02
                },
                traditional: {
                    "delta": 0.55,
                    "downside": -0.15,
                    "equity": 0.9,
                    "hedge": 0.1,
                    "callSpreads": 0.0
                }
            }
        }
    },
    methods:{
        toggleActive(strategy){
            this.activeStrategy = strategy;
        },
        drawChart() {
            bb.generate({
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
                  grid: {
                    y: {
                      lines: [
                        {
                          value: 0
                        }
                      ]
                    }
                  },
                  regions: [
                      {
                          axis: "x",
                          end: 0.5
                      }
                  ] 
            });
        },
        drawPieChart() {
            bb.generate({
                bindto: this.$refs["pieChart"],
                data: {
                  columns: [
                  ["data1", 30],
                  ["data2", 120]
                  ],
                  type: "pie", // for ESM specify as: pie()
                  onclick: function(d, i) {
                  console.log("onclick", d, i);
                 },
                  onover: function(d, i) {
                  console.log("onover", d, i);
                 },
                  onout: function(d, i) {
                  console.log("onout", d, i);
                 }
                },
            });
        }
    },
    computed: {
        growthActive() {
            return this.activeStrategy === "growth";
        },
        primeActive() {
            return this.activeStrategy === "prime";
        },
        tradActive() {
            return this.activeStrategy === "traditional";
        },
    },
    mounted() {
        this.drawChart();
        this.drawPieChart();
    }
};
