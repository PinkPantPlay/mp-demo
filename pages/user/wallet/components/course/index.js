Component({
    properties: {},
    data: {
        show_time_list: false
    },
    methods: {
        handleTimeShowChange() {
            this.setData({
                show_time_list: !this.data.show_time_list
            })
        }
    }
});
