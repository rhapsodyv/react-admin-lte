const AdminLTESelectors = {
    pushMenuButton: '[data-toggle="push-menu"]'
};

/* global $ */
export default class AdminLTE {
    constructor () {
        this.pushMenu = $.fn.layout;
        this.layout = $.fn.layout;
    }

    init() {
        this.pushMenu.call($(AdminLTESelectors.pushMenuButton));
        this.layout.call($('body'), 'init');
    }
}
