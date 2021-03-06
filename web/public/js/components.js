var aside = {
    template: '<aside id="aside" class="main-sidebar">\
    <section class="sidebar">\
        <div class="user-panel">\
            <div class="pull-left image">\
                <img src="/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">\
            </div>\
            <div class="pull-left info">\
                <p>User Name</p>\
                <a href="#"><i class="fa fa-circle text-success"></i> Online</a>\
            </div>\
        </div>\
        <form action="#" method="get" class="sidebar-form">\
            <div class="input-group">\
                <input type="text" name="q" class="form-control" placeholder="Search...">\
                <span class="input-group-btn">\
                    <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>\
                </span>\
            </div>\
        </form>\
        <ul class="sidebar-menu" data-widget="tree">\
            <li v-for="(v,i) in menu" class="treeview">\
                <a @click="load(v.url)" href="#">\
                            <span>{{v.text}}</span>\
                            <i class="fa fa-angle-left pull-right" v-if="v.children.length > 0"></i>\
                            </a>\
                <ul class="treeview-menu" v-if="v.children.length > 0">\
                    <li v-for="(vv,ii) in v.children">\
                        <a @click="load(vv.url)" href="#"><i class="fa fa-circle-o"></i>{{vv.text}}</a>\
                    </li>\
                </ul>\
            </li>\
        </ul>\
    </section>\
</aside>',
    props: ['menu'],
    data: function () {
        return {
            contentCache: {}
        }
    },
    methods: {
        load: function (url) {
            if (this.contentCache[url]) {
                this.$emit('c-click', this.contentCache[url]);
            }
            var vm = this;
            Vue.http.get(window.location.origin + url).then(function (data) {
                if (data.ok) {
                    vm.$emit('c-click', data.body);
                    vm.contentCache[url] = data.body;
                }
            });
            console.log(url);
        }
    }
}
var modalSuccess = {
    template : '<div class="modal fade" tabindex="-1" role="dialog">\
        <div class="modal-dialog" role="document">\
            <div class="modal-content">\
                <div class="modal-header">\
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\
                    <h4 class="modal-title">Modal title</h4>\
                </div>\
                <div class="modal-body">\
                    <p>{{text}}</p>\
                </div>\
                <div class="modal-footer">\
                    <button type="button" class="btn btn-success" data-dismiss="modal">OK</button>\
                </div>\
            </div>\
        </div>\
    </div>',
    props:['text']
}