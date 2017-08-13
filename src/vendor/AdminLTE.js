import './AdminLTE/dist/js/adminlte'

const AdminLTESelectors = {
    pushMenuButton: '[data-toggle="push-menu"]',
    tree: '[data-widget="tree"]'
};

/* global $ */
export default class AdminLTE {
    constructor () {
        this.pushMenu = $.fn.layout;
        this.layout = $.fn.layout;
        this.tree = $.fn.tree;
        this.controlSidebar = $.fn.controlSidebar;
    }

    init() {
        this.pushMenu.call($(AdminLTESelectors.pushMenuButton));
        this.layout.call($('body'), 'init');
        //tree
        $(AdminLTESelectors.tree).each(function () {
            this.tree.call($(this));
        })
        // this.controlSidebar parece que não precisa de init, pois só escuta o evento do botao
    }
}
