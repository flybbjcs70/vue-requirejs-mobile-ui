define(function() {
    return function module(moduleName) {

        return {
            data: function() {
                return {
                    pickerValue1: "",
                    pickerValue2: "2017-01-12",
                    pickerValue3: "",
                    pickerValue4: "",
                    pickerValue5: "10:12"
                }
            },
            methods: {
                picker1: function() { this.$refs.picker1.open(); },
                picker2: function() { this.$refs.picker2.open(); },
                picker3: function() { this.$refs.picker3.open(); },
                picker4: function() { this.$refs.picker4.open(); },
                picker5: function() { this.$refs.picker5.open(); }
            }

        }
    }
})