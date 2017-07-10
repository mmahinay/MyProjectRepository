// JavaScript source code
console.log('test');
//var s = document.getElementById("progressbars");
//console.log(s.options[s.selectedIndex].value);

var data = {
    buttons: 3,
    buttonvalue: [-25, -10, 10, 25],
    totalBars: 3,
    defaultbarvalue: 50,
    limit: 230
};

var lines =  "<select name='progressbars'
                    <option value='p1'>#progress1</option>
                    <option value='p2'>#progress2</option>
                    <option value='p3'>#progress3</option>
             </select>"

document.getElementById("progressArea").innerHTML = lines;
                

/*

buttons	
The amount of buttons to display and what value they increment or decrement 
the selected bar. Randomly generates between 4 and 6 buttons.

bars	
The number of progress bars to display and their default values. 
Randomly generates between 2 and 5 progress bars.

limit
The equivalent to 100% of each bar. 
For example, the bar should be 100% filled when the progress hits 230.

*/