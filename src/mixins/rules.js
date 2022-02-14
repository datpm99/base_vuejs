export default {
    data() {
        return {
            rulePassword: {
                required: true,
                regex: '^[0-9a-zA-Z]{8,16}$',
            }
        }
    }
}