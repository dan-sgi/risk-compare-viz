Vue.createApp({
    el: "#risk_dial",
    data() {
        return {
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
});