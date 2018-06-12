// rgb(43, 0, 1) 50
//rgb(107, 21, 39) 40
//rgb(175, 46, 90) 30
//rgb(229, 109, 83) 25
//rgb(234, 164, 62) 20
//rgb(235, 215, 53) 15
//rgb(190, 228, 61) 10
//rgb(89, 208, 73) 5
//rgb(75, 182, 152) 0
//rgb(62, 121, 198) -5
//rgb(85, 78, 177) -10

let color_wrapper = $('.color-wrapper');

let title;

//颜色池
let color_pool = ["rgb(43, 0, 1)",
    "rgb(107, 21, 39)",
    "rgb(175, 46, 90)",
    "rgb(229, 109, 83)",
    "rgb(234, 164, 62)",
    "rgb(235, 215, 53)",
    "rgb(190, 228, 61)",
    "rgb(89, 208, 73)",
    "rgb(75, 182, 152)"];

//阈值池
let ColorThreshold = [50,40,30,25,20,15,10,5,0];


function ColorBar() {

}

//设置颜色池
ColorBar.prototype.setColorPool = function (param) {
    color_pool = param;
};

//设置阈值池
ColorBar.prototype.setColorThreshold = function (param) {
    ColorThreshold = param;
};
//设置标题
ColorBar.prototype.setTitle = function (param) {
    title = param;
};

//生成colorbar
ColorBar.prototype.generateColorBar = function (param) {

    const color_length = color_pool.length;
    const Threshold_length =  ColorThreshold.length;

    let length = 0;
    let Threshold_Text;

    if( color_length > Threshold_length)
        length = Threshold_length;
    else if(color_length < Threshold_length)
        length = color_length;
    else if (color_length === Threshold_length)
        length = color_length;

    generateSpan("text_black",title,"#ffffff");

    for(let i = 0; i < length;i++){
        if(ColorThreshold[i] < param)
            generateSpan("text_black",ColorThreshold[i],color_pool[i]);
        else
            generateSpan("text_white",ColorThreshold[i],color_pool[i]);
    }


};

//生成颜色条函数
function generateSpan(type,value,color){

    let span_one;

    if(type === "text_white")
        span_one = $('<span class = "color-one text_white">'+ value + '</span>');
    else
        span_one = $('<span class = "color-one text_black">'+ value + '</span>');

    span_one.css('background-color',color);
    span_one.appendTo(color_wrapper);

}