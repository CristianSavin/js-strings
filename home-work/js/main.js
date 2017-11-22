/* CREATE OBJECT AND SAVE USER DATA */

let user_data = {
    avatar : "http://wicklownews.net/wp-content/uploads/2015/08/Minion.jpg" ,
    inputs_value : function(){
        var el = document.querySelector('form');
        var matches = el.querySelectorAll('input[name]');
        document.write(`<table border="1px">`);
        for(var i=0; i< matches.length; i++){
            document.write(`
                <tr>
                    <td> 
                        <span class="bold">${matches[i].name}</span> 
                    </td>
                    <td> 
                        <span class="red">${matches[i].value}</span>
                    </td>
                </tr>
            `);
        }
        document.write(`<tr>
                    <td colspan="2"> 
                        <img src="${this.avatar}" alt="">
                    </td>
            </tr>`);
        document.write(`</table>`);
    }
};

