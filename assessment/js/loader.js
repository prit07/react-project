var myLoader;
function Mydata()
{
    myLoader=setTimeout('shw()',500);
}
function shw()
{
    document.getElementById('loader').style='display:none';
    document.getElementById('main-content').style='display:block';
}