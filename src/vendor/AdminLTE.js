import './AdminLTE/dist/js/adminlte';
//import './AdminLTE/dist/css/AdminLTE.css';
//import './AdminLTE/dist/css/skins/skin-blue.css';

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
        this.layout.call($('body'), 'activate');
        //tree
        var tree = this.tree;
        $(AdminLTESelectors.tree).each(function () {
            tree.call($(this));
        })
        // this.controlSidebar parece que não precisa de init, pois só escuta o evento do botao
    }
}
