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