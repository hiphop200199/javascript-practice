<<<<<<< HEAD
//等DOM載完再開始執行
$(function () {
    let item1 = $(".item:first");//不是小孩，所以要用一般的篩選選擇器
    let item2 = $(".item:eq(1)");
    let form = $("form");//找到form元素
    item1.on("click", function () {
        alert("dont touch me!");
        item1.stop().animate({
            borderRadius: "50%",
            left: "10px"
        }, 1000, "linear", function () { alert("the animation is end!"); }); //給東西加上動畫
    });
    item2.hover(function () { item2.stop().animate({ opacity: "0.2" }, 1000) }, function () { item2.stop().animate({ opacity: "1" }, 1000) });
    form.submit(() => {
        alert($(":text").val());
        item1.css({ borderRadius: "0%" });



    });//要給form加上提交事件處理後，讀取input的輸入值

=======
//等DOM載完再開始執行
$(function () {
    let item1 = $(".item:first");//不是小孩，所以要用一般的篩選選擇器
    let item2 = $(".item:eq(1)");
    let form = $("form");//找到form元素
    item1.on("click", function () {
        alert("dont touch me!");
        item1.stop().animate({
            borderRadius: "50%",
            left: "10px"
        }, 1000, "linear", function () { alert("the animation is end!"); }); //給東西加上動畫
    });
    item2.hover(function () { item2.stop().animate({ opacity: "0.2" }, 1000) }, function () { item2.stop().animate({ opacity: "1" }, 1000) });
    form.submit(() => {
        alert($(":text").val());
        item1.css({ borderRadius: "0%" });



    });//要給form加上提交事件處理後，讀取input的輸入值

>>>>>>> 4a553a7 (增加scroll animate的筆記)
});