const app = getApp();
Page({
    data: {
        cards: [
            {
                icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjkiIHk9IjgiIHdpZHRoPSIzMCIgaGVpZ2h0PSIzNiIgcng9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTE4IDRWMTAiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMzAgNFYxMCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNiAxOUwzMiAxOSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNiAyN0wyOCAyNyIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNiAzNUgyNCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==',
                name: '订单',
                key: 'order',
                url: '',
                nums: 10
            },
            {
                icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00IDhIMTFDMTEgOCAxMiAxMyAxNyAxM0MyMiAxMyAyMyA4IDIzIDhINDRWNDBIMjNDMjMgNDAgMjIgMzUgMTcgMzVDMTIgMzUgMTEgNDAgMTEgNDBINFY4WiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNyAxOVYyMSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNyAyN0wxNyAyOSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNSAyMUgzNiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNSAyN0gzNiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==',
                name: '门票',
                key: 'ticket',
                url: '/pages/user/wallet/index?id=ticket',
                nums: 35
            },
            {
                icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjQiIHk9IjEwIiB3aWR0aD0iNDAiIGhlaWdodD0iMzAiIHJ4PSIyIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTE0IDZWMTQiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjUgMjNMMTQgMjMiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMzQgMzFMMTQgMzEiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMzQgNlYxNCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==",
                name: '课程',
                key: 'course',
                url: '/pages/user/wallet/index?id=course',
                nums: 20
            },
            {
                icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuOTgyIDExLjk2ODlMMzEuNzg0NiA0TDM2LjM5NyAxMS45ODg5TDE3Ljk4MiAxMS45Njg5WiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik00IDE0QzQgMTIuODk1NCA0Ljg5NTQzIDEyIDYgMTJINDJDNDMuMTA0NiAxMiA0NCAxMi44OTU0IDQ0IDE0VjQyQzQ0IDQzLjEwNDYgNDMuMTA0NiA0NCA0MiA0NEg2QzQuODk1NDMgNDQgNCA0My4xMDQ2IDQgNDJWMTRaIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zNS4yNSAzM0g0NFYyM0gzNS4yNUMzMi4zNTA1IDIzIDMwIDI1LjIzODYgMzAgMjhDMzAgMzAuNzYxNCAzMi4zNTA1IDMzIDM1LjI1IDMzWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNDQgMTYuNVY0MC41IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+',
                name: '钱包',
                key: 'wallet',
                url: '/pages/user/wallet/index',
                nums: 0
            },
        ],
        menus: [
            [
                {
                    icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGNsaXAtcGF0aD0idXJsKCNpY29uLTFmYjRhZDA3MzUzZTRmMzgpIj48cGF0aCBkPSJNNDIgMjBWMzlDNDIgNDAuNjU2OSA0MC42NTY5IDQyIDM5IDQySDlDNy4zNDMxNSA0MiA2IDQwLjY1NjkgNiAzOVY5QzYgNy4zNDMxNSA3LjM0MzE1IDYgOSA2SDMwIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTE2IDIwTDI2IDI4TDQxIDciIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJpY29uLTFmYjRhZDA3MzUzZTRmMzgiPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0iIzMzMyIvPjwvY2xpcFBhdGg+PC9kZWZzPjwvc3ZnPg==',
                    name: '核销查验',
                    path: ''
                },
                {
                    icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00NCA1SDMuOTk5OThWMTdINDRWNVoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTMuOTk5OTggNDEuMDMwMUwxNi4xNzU2IDI4LjcyOTNMMjIuNzU0OSAzNS4wMzAxTDMwLjc5ODIgMjdMMzUuMjc4NiAzMS4zNjgiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNDQgMTYuMTcxOVY0Mi4xNzE5IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTMuOTk5OTggMTYuMTcxOVYzMC4xNzE5IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTEzLjAxNTUgNDNINDQiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTcgMTFIMzgiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNOS45OTk5OCAxMC45OTY2SDExIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+',
                    name: '统计分析',
                    path: ''
                }
            ],
            [
                {
                    icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00LjUwMzI2IDE2LjM2NjFMMTIuNTE1OCA3LjY3MTc3QzEyLjkwOSA3LjI0NTIgMTMuNDgwNyA3IDE0LjA4MjEgN0gzMy45MTc5QzM0LjUxOTMgNyAzNS4wOTEgNy4yNDUyIDM1LjQ4NDIgNy42NzE3N0w0My40OTY3IDE2LjM2NjFDNDQuMTgwOSAxNy4xMDg0IDQ0LjE2NTkgMTguMjEyNSA0My40NjE4IDE4LjkzODNMMjQuNzQ5OSA0MC4xNDk5QzI0LjM1MTggNDAuNjAxMiAyMy42NDgyIDQwLjYwMTIgMjMuMjUwMSA0MC4xNDk5TDQuNTM4MiAxOC45MzgzQzMuODM0MTUgMTguMjEyNSAzLjgxOTE1IDE3LjEwODQgNC41MDMyNiAxNi4zNjYxWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNiAyMEwyNCAyOUwzMiAyMCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==',
                    name: 'VIP会员',
                    path: ''
                },
                {
                    icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01LjgxODM2IDYuNzI3MjlWMTRIMTMuMDkxMSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik00IDI0QzQgMzUuMDQ1NyAxMi45NTQzIDQ0IDI0IDQ0VjQ0QzM1LjA0NTcgNDQgNDQgMzUuMDQ1NyA0NCAyNEM0NCAxMi45NTQzIDM1LjA0NTcgNCAyNCA0QzE2LjU5OCA0IDEwLjEzNTEgOC4wMjExMSA2LjY3Njc3IDEzLjk5ODEiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjQuMDA1IDEyTDI0LjAwMzggMjQuMDA4OEwzMi40ODMyIDMyLjQ4ODIiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=',
                    name: '门票流水',
                    path: ''
                },
                {
                    icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00MSA0NFYyMEg3VjQ0SDQxWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNCA0NFYyMCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik00MSA0NEg3IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHJlY3QgeD0iNCIgeT0iMTIiIHdpZHRoPSI0MCIgaGVpZ2h0PSI4IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNiA0TDI0IDEyTDMyIDQiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=',
                    name: '赠礼',
                    path: ''
                }
            ],
            [
                {
                    icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjQiIHk9IjIxIiB3aWR0aD0iMzEiIGhlaWdodD0iMjAiIHJ4PSIyIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIvPjxyZWN0IHg9IjIwIiB5PSIyNyIgd2lkdGg9IjkiIGhlaWdodD0iOCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxjaXJjbGUgY3g9IjI3IiBjeT0iMTMiIHI9IjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48Y2lyY2xlIGN4PSIxMyIgY3k9IjEzIiByPSI1IiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTM1IDM1TDQ0IDM5VjIzTDM1IDI3IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+',
                    name: '直播',
                    path: ''
                }
            ]
        ]
    },
    onLoad: function (options) {

    },
    navTo(event) {
        const url = app.TOOL.event.data(event).url;
        app.TOOL.route.navigateTo(url);
    }
});
