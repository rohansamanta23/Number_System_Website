let num = 'bin';
var display = $('.display');
$("#nums").change(function(){
    $(".op-set").removeClass("hidden_output");
    num = $(this).val();
    $("#" + num + "_set").addClass("hidden_output");
    $("textarea").html('');
    checkDisplay();
});

$(".enter_btn").click(function(){
    if(checkDisplay()){
        randomAns();
    }
});

display.keypress(function(e){
    if((e.key=='Enter')&&(checkDisplay())){
        randomAns();
    }
});

$(".reset_btn").click(function(){
    display.val('');
    $("textarea").html('');
    checkDisplay();
});

$('.display').keyup(checkDisplay);

function checkDisplay(){
    var check;
    const dis_val = display.val();
    const val = dis_val === undefined ? '' : String(dis_val);
    if(num=='bin'){
        const bin_check = /^[01]*$/;
        if(!(bin_check.test(val))){
            showError();
            check = false;
        }else{
            noError();
            check = true;
        }
    }if(num=='oct'){
        const bin_check = /^[0-7]*$/;
        if(!(bin_check.test(val))){
            showError();
            check = false;
        }else{
            noError();
            check = true;
        }
    }if(num=='dec'){
        const bin_check = /^[0-9]*$/;
        if(!(bin_check.test(val))){
            showError();
            check = false;
        }else{
            noError();
            check = true;
        }
    }if(num=='hex'){
        const bin_check = /^[0-7a-fA-F]*$/;
        if(!(bin_check.test(val))){
            showError();
            check = false;
        }else{
            noError();
            check = true;
        }
    }
    if(check){
        return true;
    }else{
        return false;
    }
}

function errorMsg(){
    var msg;
    if(num == 'bin'){
        msg = 'binary';
    }
    if(num == 'oct'){
        msg = 'octal';
    }
    if(num == 'dec'){
        msg = 'decimal';
    }
    if(num == 'hex'){
        msg = 'hexa-decimal';
    }
    return 'This is not a ' + msg + ' number!';
}

let toastBox = document.getElementById('toastBox');
function showError(){
    const errorLogo = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" class="warning_svg" width="24"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>';
    const cencelBtn = '<svg class="cencel_btn" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m336-280-56-56 144-144-144-143 56-56 144 144 143-144 56 56-144 143 144 144-56 56-143-144-144 144Z"/></svg>';
    $(".enter_btn").prop('disabled', true);
    display.css("background","rgba(253, 193, 193, 0.8)");
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = errorLogo + errorMsg() + cencelBtn;
    toast.style.color = "red";
    toastBox.appendChild(toast);
    $(".toast").hide().fadeIn();
    $('.cencel_btn').click(function(){
        removeToast();
    });
    setTimeout(() => {
        removeToast();
    }, 5000);
    function removeToast(){
        // toast.remove();
    }
}

function noError(){
    $(".enter_btn").prop('disabled', false);
    display.css("background","hsl(182, 11%, 80%)")
}

function converter(){
    let ans = display.val();
    var dec;
    if(num!='dec'){
        if(num == 'bin'){
            dec = parseInt(ans,2);
        }
        if(num == 'oct'){
            dec = parseInt(ans,8);
        }
        if(num == 'hex'){
            dec = parseInt(ans,16);
        }
        $("#decop").html(dec);
    }else{
        dec = parseInt(ans,10);
    }
    
    if(num!='bin'){
        let bin = dec.toString(2);
        $("#binop").html(bin);
    }
    
    if(num!='oct'){
        let oct = dec.toString(8);
        $("#octop").html(oct);
    }

    if(num!='hex'){
        var hex = dec.toString(16);
        $("#hexop").html(hex);
    }
}

function randomAns() {
    var count=0;
    var interval = setInterval(() => {
        console.log("hit");
        if(count > 5){
            clearInterval(interval);
            converter();
            return;
        }
        var randomNumber = Math.floor(Math.random()*99999999);
        $("textarea").html(randomNumber);
        count++;
    }, 50);
}