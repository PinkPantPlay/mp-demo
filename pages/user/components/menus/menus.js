Component({
    properties: {
        list: {
            type: Array,
            default: []
        }
    },
    data: {},
    methods: {
        jump(event) {
            const path = event.currentTarget.dataset.path;
            wx.navigateTo({
                url: path
            })
        }
    }
});
