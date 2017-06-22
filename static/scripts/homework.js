$(document).ready(function() {

    var $modals = $('.modal');
    var $addModal = $('.add-modal');
    var $editModal = $('.edit-modal');

    $('.btn-add').on('click', function(e) {
        e.preventDefault();
        populateModalForm($addModal, {
            title: 'Hinzufügen',
            closeLabel: 'Schließen',
            submitLabel: 'Hinzufügen',
        });
        $addModal.modal('show');
    });

    $('.btn-edit').on('click', function(e){
        e.preventDefault();
		var entry = $(this).attr('href');
		$.getJSON(entry, function(result) {
			if((!result.courseId)||(result.courseId && result.courseId.length<=2)){result.private = true;}
			populateModalForm($editModal, {
				action: entry,
				title: 'Bearbeiten',
				closeLabel: 'Schließen',
				submitLabel: 'Speichern',
				fields: result
			});
			$editModal.modal('show');
        });
    });

    $modals.find('.close, .btn-close').on('click', function() {
        $modals.modal('hide');
    });

    function ajaxForm(element, after){
        const submitbutton = element.find('[type=submit]')[0];
        submitbuttontext = submitbutton.innerHTML || submitbutton.value;
        submitbutton.innerHTML = submitbuttontext+' <div class="loadingspinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'
        submitbutton.disabled = true;
        
        const url     = element.attr("action");
        const method  = element.attr("method");
        // update value of ckeditor instances
        ckeditorInstance = element.find('textarea.customckeditor').attr("id");
        if(ckeditorInstance) CKEDITOR.instances[ckeditorInstance].updateElement(); 
        const content = element.serialize();
        $.ajax({
            type: method,
            url: url,
            data: content,
            context: element
        }).done(function(r) {
            submitbutton.innerHTML = submitbuttontext;
            submitbutton.disabled = false;
            if(after) after(this);
        });
    }

    // Bewertung speichern
    $('.evaluation #comment form').on("submit",function(e){
        if(e) e.preventDefault();
        ajaxForm($(this));
        return false;
    });
    
    // Kommentar erstellen
    $('.evaluation #student-comment form[action="/homework/comment"]').on("submit",function(e){
        if(e) e.preventDefault();
        ajaxForm($(this),function(t){
            $(t).parent().prev().append('<li class="comment"><b class="name">Ich</b><pre>'+$(t).find("textarea")[0].value+'</pre></li>');
            $(t).find("textarea")[0].value = "";
        });
        return false;
    });
    
    // Kommentar löschen
    $('.evaluation #student-comment ul.comments form').on("submit",function(e){
        if(e) e.preventDefault();
        if(confirm("Kommentar endgültig löschen?")){
            ajaxForm($(this),function(t){
                console.log($(t).closest("li.comment"));
                $(t).closest("li.comment").remove();
            });
        }
        return false;
    });
    
    $('#sortselection').on('change', function(e){
        window.location = window.location.pathname + "?sort=" + escape( $('#sortselection').val());
    });
});