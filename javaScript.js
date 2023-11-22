let y=1;
for(let i=1;i<=9;i++){

    let fatherDiv=document.createElement("div");
    document.getElementById('mother').appendChild(fatherDiv);
    fatherDiv.setAttribute('id','father'+i);
    fatherDiv.setAttribute('class','fatherDiv');
    for(let x=1;x<=9;x++)
    {
        let childDiv=document.createElement("div");
        document.getElementById('father'+i).appendChild(childDiv);
        childDiv.setAttribute('id','child'+x+''+y);
        childDiv.setAttribute('class','childDiv')
        let bold=document.createElement("b");
        document.getElementById('child'+x+''+y).appendChild(bold);
        bold.setAttribute('id',x+''+y);
        document.getElementById(x+''+y).innerHTML=Math.floor(Math.random() * 9) + 1;
        y++;
    }
}
