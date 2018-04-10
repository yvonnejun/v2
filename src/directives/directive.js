/*
*author: junyang
*/
import Vue from 'vue'

/**
 * 定义全局聚焦指令
 * 
 */
// 方法一：
// Vue.directive('autoFocus', function (el) { // 实测通过v-autoFocus调用后，这个全局指令是有效果的
//     console.log(el);
//     // console.log(b);
//     el.focus(); // 这个对于一般的原生DOM元素是有效果的，对于elementui的DOM元素(其实是个DOM组合)无效
//     el.onclick = () => { // 这个对elementui的DOM元素是生效的
//         alert('elementui元素是可点击的');
//     }
// })
// 方法二：
// Vue.directive('autoFocus', {
//     bind:function(el, binding){
//         console.log(el);
//         console.log(binding); // 这样写，binding才有效
//         el.focus();
//     }
// })
// 方法三--封装一下
// 1、定义全局指令回调集
const globalCallback = { // Ⅱ、回调封装再升级--回调封装到对象中
    autoFocusCallback: {
       bind(el, binding) {
            console.log(el);
            console.log(binding); // 这样写，binding才有效
            el.focus();
        } 
    },
    autoClickCallback: {
       bind(el, binding) {
            el.onclick = () => { // 这个对elementui的DOM元素是生效的
                alert('elementui元素是可点击的');
            }
        } 
    },
    dragCallback: {
       bind(el, binding) {
            // 光标按下时
            el.onmousedown = (e) => { 
                // 获取光标点击处与事件源左上角的距离
                const disX = e.clientX - el.offsetLeft;
                const disY = e.clientY - el.offsetTop;
                // 光标移动时
                document.onmousemove = (e) => {
                    // 拿到移动后div左上角的位置
                    const l = e.clientX - disX;
                    const t = e.clientY - disY;
                    // 将左上角的位置值进行动态赋值
                    el.style.left = l + 'px';
                    el.style.top = t + 'px';

                }
                // 光标松开后，解绑
                document.onmouseup = (e) => {
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
            }
        } 
    },
}
// 2、注册全局指令
const directiveTypes = []
directiveTypes.push(
    {
        directiveName: 'autoFocus', 
        callback: globalCallback.autoFocusCallback
    },
    {
        directiveName: 'autoClick', 
        callback: globalCallback.autoClickCallback
    },
    {
        directiveName: 'drag', 
        callback: globalCallback.dragCallback
    },
);

// const autoFocusCallback = { // Ⅰ、回调单独拎出来写
//     bind:function(el, binding){
//         console.log(el);
//         console.log(binding); // 这样写，binding才有效
//         el.focus();
//     }
// }
// const autoClickCallback = {
//     bind:function(el, binding){
//         el.onclick = () => { // 这个对elementui的DOM元素是生效的
//             alert('elementui元素是可点击的');
//         }
//     }
// }
// 3、全局封装指令
for(let i = 0, len = directiveTypes.length; i < len; i++) {
    Vue.directive(directiveTypes[i].directiveName, directiveTypes[i].callback)
}




