export default {
    data() {
        return {
            modalVisible: true,
        }
    },
    methods: {
        openModal() {
            this.modalVisible = true;
        },
        closeModal() {
            this.modalVisible = false;
        },
    }
}