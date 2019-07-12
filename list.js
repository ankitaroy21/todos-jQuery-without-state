function callAll() {
    let allVar = document.querySelectorAll('li')
    for( let i=0; i < allVar.length; i++ ) {
		$(allVar[i]).show();
	} 
}
function callAct() {
    let actVar = $( "li" ).filter( ".checked" )
    for( let i=0; i < actVar.length; i++ ) {
		$(actVar[i]).hide();
	} 
}
function callCom() {
    let comVar = $("li").not('.checked')
    for( let i=0; i < comVar.length; i++ ) {
		$(comVar[i]).hide();
	} 
}
function addCheck() {
    let checkBtn=$('<input type="checkbox" >');
    return checkBtn;
}
function addClose() {
    let closeBtn=$('<span><strong>X</strong></span>');
    return closeBtn;
}
function addNote(valueOf){
    let newNote=$('<li></li>');
    $(newNote).html(valueOf);
    let newCheck=addCheck();
    let closeBtn=addClose();
    $(newNote).prepend(newCheck);
    $(newCheck).click(function(){
        $(newNote).toggleClass('checked');
    });
    $(newNote).append(closeBtn);
    $(closeBtn).click(function(){
        $(newNote).hide();
    });
    $("#myList").append(newNote);
}

$(document).ready(function(){
    $("#root").keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            let valueOf=event.target.value;
            if(valueOf!='') {
                addNote(valueOf);
            }
            $("#root").val("");
        }
    });
    $('#root').keydown(function(e){
        if(e.which == 27){
            $("#root").val("");
        }
    });
    $("#checkAll").click(function(){
        $('li').addClass('checked');
        $('input').prop('checked', true);
        $('#uncheckAll').prop('checked', false);
        $(this).hide();
        $("#showMe").hide();
        $("#uncheckAll").show();
        $("#hideMe").show();
    });
    $("#uncheckAll").click(function(){
        $('li').removeClass('checked');
        $('input').prop('checked', false);
        $('#checkAll').prop('checked', false);
        $(this).hide();
        $("#hideMe").hide();
        $("#checkAll").show();
        $("#showMe").show();
    });
});