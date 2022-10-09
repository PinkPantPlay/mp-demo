const app = getApp();

Page({
    data: {
        walletBtnGroup: [
            {
                icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNiA2SDhDNi44OTU0MyA2IDYgNi44OTU0MyA2IDhWMTYiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTYgNDJIOEM2Ljg5NTQzIDQyIDYgNDEuMTA0NiA2IDQwVjMyIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTMyIDQySDQwQzQxLjEwNDYgNDIgNDIgNDEuMTA0NiA0MiA0MFYzMiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zMiA2SDQwQzQxLjEwNDYgNiA0MiA2Ljg5NTQzIDQyIDhWMTYiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjQgMTZWMzIiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMzIgMTZWMzIiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTYgMTZWMzIiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=',
                name: '付款',
                url: ''
            },
            {
                icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zOSA3SDlDNi4yMzg1OCA3IDQgOS4yMzg1OCA0IDEyVjM2QzQgMzguNzYxNCA2LjIzODU4IDQxIDkgNDFIMzlDNDEuNzYxNCA0MSA0NCAzOC43NjE0IDQ0IDM2VjEyQzQ0IDkuMjM4NTggNDEuNzYxNCA3IDM5IDdaIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xOCAxNUwyNCAyMUwzMCAxNSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNyAyM0gzMSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNyAyOUgzMSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNCAyM1YzNCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==',
                name: '充值',
                url: ''
            },
            {
                icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOCA2SDhDNi44OTU0MyA2IDYgNi44OTU0MyA2IDhWMThDNiAxOS4xMDQ2IDYuODk1NDMgMjAgOCAyMEgxOEMxOS4xMDQ2IDIwIDIwIDE5LjEwNDYgMjAgMThWOEMyMCA2Ljg5NTQzIDE5LjEwNDYgNiAxOCA2WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTggMjhIOEM2Ljg5NTQzIDI4IDYgMjguODk1NCA2IDMwVjQwQzYgNDEuMTA0NiA2Ljg5NTQzIDQyIDggNDJIMThDMTkuMTA0NiA0MiAyMCA0MS4xMDQ2IDIwIDQwVjMwQzIwIDI4Ljg5NTQgMTkuMTA0NiAyOCAxOCAyOFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTM1IDIwQzM4Ljg2NiAyMCA0MiAxNi44NjYgNDIgMTNDNDIgOS4xMzQwMSAzOC44NjYgNiAzNSA2QzMxLjEzNCA2IDI4IDkuMTM0MDEgMjggMTNDMjggMTYuODY2IDMxLjEzNCAyMCAzNSAyMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTQwIDI4SDMwQzI4Ljg5NTQgMjggMjggMjguODk1NCAyOCAzMFY0MEMyOCA0MS4xMDQ2IDI4Ljg5NTQgNDIgMzAgNDJINDBDNDEuMTA0NiA0MiA0MiA0MS4xMDQ2IDQyIDQwVjMwQzQyIDI4Ljg5NTQgNDEuMTA0NiAyOCA0MCAyOFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+',
                name: '管理',
                url: ''
            }
        ],
        amount: 200.0100,
        sticky_container: null,
        wallet_tabs: [
            {
                key: 'ticket',
                name: '门票'
            },
            {
                key: 'coupon',
                name: '优惠券'
            }
        ],
        wallet_tab_active_key: 'ticket'
    },
    onLoad: function (options) {
        this.setData({
            sticky_container: this.createSelectorQuery().select('.wallet_main_box')
        })
    },
    navTo(event) {
        const url = app.TOOL.event.data(event).url;
        app.TOOL.route.navigateTo(url);
    },
    switch_tab(event) {
        const key = app.TOOL.event.data(event).key;
        this.setData({
            wallet_tab_active_key: key
        })
    }
});
