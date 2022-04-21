var fromDate;
$('#fromDate').on('change',function(){
    fromDate = $(this).val();
    $('#toDate').prop('min',function(){
        return fromDate;
    })
})
var toDate;
$('#toDate').on('change',function(){
    toDate = $(this).val();
    $('#fromDate').prop('max',function(){
        return toDate;
    })
})

function calculate(){
    var adult = document.getElementById("Adults").value;
    var d1 = document.getElementById("fromDate").value;
    var d2 = document.getElementById("toDate").value;
    const dateOne = new Date(d1);
    const dateTwo = new Date(d2);
    const time = Math.abs(dateTwo-dateOne);
    const days = Math.ceil(time/(1000*60*60*24));
    document.getElementById("Total").value = 1000*days*adult;
}
