var k = document.getElementById('komfort')
var f = document.getElementById('free_tran')
var m = document.getElementById('more')

k.onclick = function(){
    document.getElementById('serv2').style.display='block';
    document.getElementById('serv1').style.display='none';
    document.getElementById('serv3').style.display='none';
}
f.onclick = function(){
    document.getElementById('serv1').style.display='block';
    document.getElementById('serv2').style.display='none';
    document.getElementById('serv3').style.display='none';
}
m.onclick = function(){
    document.getElementById('serv3').style.display='block';
    document.getElementById('serv1').style.display='none';
    document.getElementById('serv2').style.display='none';
} 
