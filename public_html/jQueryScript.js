/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
   $("button").click(function(){
       $("#toDoList").append("<li onclick=$(this).remove()>"+ $("#input")[0].value +"</li>");
   }) ; 
});

