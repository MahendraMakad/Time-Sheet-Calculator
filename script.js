function calculateTime() {
    // for day1
    let hours=0,minutes=0;
    for(let i=1;i<=7;i++)
    {
        id = "day"+i;
        let str= dayTime(id);
        str = str.split(":");
        hours += parseInt(str[0]);
        minutes += parseInt(str[1]);
    }
    hours += minutes/60;
    minutes = minutes%60;
    hours = parseInt(hours,10);
    minutes = parseInt(minutes,10);
    let time = hours+":"+minutes;
    document.getElementById("result").innerHTML=time;
}


function dayTime(id)
{
    let startTime = document.getElementById("start"+"-"+id).value;
    let endTime = document.getElementById("end"+"-"+id).value;
    // convert string to time
    startWork = startTime.split(":");
    endWork = endTime.split(":");
    const startWorkDate = new Date(0, 0, 0, startWork[0], startWork[1], 0);
    const endWorkDate = new Date(0, 0, 0, endWork[0], endWork[1], 0);
    let diffFinal = endWorkDate.getTime() - startWorkDate.getTime();

    let breakHours = document.getElementById("breakh"+"-"+id).value;
    let breakMinutes = document.getElementById("breakm"+"-"+id).value;
    let break1 = breakHours * 1000 * 3600 + breakMinutes * 1000 * 60;
    diffFinal -= break1;
    let hours = Math.floor(diffFinal / 1000 / 60 / 60);
    diffFinal -= hours * 1000 * 60 * 60;
    let minutes = Math.floor(diffFinal / 1000 / 60);
    hours = parseInt(hours,10);
    minutes = parseInt(minutes,10);
    let time = hours + ":" + minutes;
    document.getElementById("output"+"-"+id).value = time;
    return time;
}

function clearAll()
{
    for(let i=1;i<=7;i++)
    {
        id = "output"+"-"+"day"+i;
        document.getElementById(id).value="00.00";
    }
    document.getElementById("result").innerHTML="00.00";
}