function changea()
{
    let valu="1234567890ABCDEF";
    let cons="#";
    for(let i=0;i<6;i++)
    {
         cons=cons+valu[Math.floor(Math.random()*16)];
        
    }
    //  document.getElementById("body").style.backgroundColor=cons;
    return cons;
};
// console.log(change());
function change()
{
    document.body.style.backgroundColor=changea();
}