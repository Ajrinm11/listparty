originalArray=[];

function submit()
{
    var disArray=[];

    for (var a = 1; a <= 4; a++)
    {
        var name=document.getElementById("name_of_the_student_"+a).value;
        originalArray.push(name);
    }

    var len=originalArray.length;

    for (var i=0; i < len; i++)
    {
        disArray.push("<h4>NAME - "+ originalArray[i]+"</h4>");

    }

    document.getElementById("display_name_with_commas").innerHTML=disArray;

    var rc=disArray.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=rc;

    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting()
{
    originalArray.sort();

    var sortArray=[];

    var len=originalArray.length;

    for (var i=0; i < len; i++)
    {
        sortArray.push("<h4>NAME - "+ originalArray[i]+"</h4>");

    }
    var rc=sortArray.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=rc;


}