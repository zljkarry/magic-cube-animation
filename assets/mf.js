var arr = document.querySelectorAll(".box-page");
//遍历六个面中的每一个面
for (var n = 0; n < arr.length; n++) {
    //外层循环行
    for (var r = 0; r < 3; r++) {
        //内层循环行
        for (var c = 0; c < 3; c++) {
            //创建元素
            var divs = document.createElement("div");
            divs.style.cssText = "width: 100px;height:100px;border:2px solid #fff;box-sizing: border-box;background-image:url(assets/images/" + n + ".jpg);position:absolute;";
            arr[n].appendChild(divs);
            //小框位置定位
            divs.style.left = c * 100 + "px";
            divs.style.top = r * 100 + "px";
            //图像位置偏移
            divs.style.backgroundPositionX = -c * 100 + "px";
            divs.style.backgroundPositionY = -r * 100 + "px";
        }
    }
}

