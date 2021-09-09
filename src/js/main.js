$(document).ready(function() {
    //прикрепляем клик по заголовкам acc-head
    $('#accordeon .acc-head').on('click', f_acc);
  });
  
function f_acc(){
// открываем или скрываем блок под заголовоком, по которому кликнули
    $(this).next().slideToggle(500);
}