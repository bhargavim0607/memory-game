var flag=0;
var arr=[],check=[];
for(let i=0;i<36;i++){
    arr[i]=i+1;
    check[i]=i+1;
}
var ids=[]
function onload(){
    var set=[];
    var i=1;
    while(set.length!=check.length && i<=18){
        let count=1
        var a=Math.floor((Math.random() * 36) + 1);
        while(count<=2){
            if(arr.includes(a) & !set.includes(a)){
                document.getElementById(a+36).src=(i.toString()+".jfif").toString();
                var ind=arr.indexOf(a);
                arr[ind]=i;
                set.push(a);
                count++;
            }
            var b=Math.floor((Math.random() * 36) + 1);
            if(arr.includes(b) & !set.includes(b)){
                document.getElementById(b+36).src=(i.toString()+".jfif").toString();
                var ind=arr.indexOf(b);
                arr[ind]=i;
                set.push(b);
                count++;
            }
        }
        i++;
    }
    
    
    
}
function play(){
    document.getElementsByClassName('pb')[0].remove();
    document.getElementsByClassName('tiles')[0].style.visibility="visible";
}
let c=0;
let point=0;
function rot(id){
    if(c<2){
        document.getElementById(id).style.transform="rotateY(180deg)";
        ids.push(id);
        c++;
    }
    else{
        //setTimeout(function(){ console.log(c); }, 1000);
        if(arr[ids[0]-1]==arr[ids[1]-1]){
            point+=1;
            ids=[];
        }
        else{
            document.getElementById(ids[0]).style.transform="rotateY(0deg)";
            document.getElementById(ids[1]).style.transform="rotateY(0deg)";
            ids=[];
        }
        c=0;
    }
}