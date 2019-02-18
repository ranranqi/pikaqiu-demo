!function(){
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 60
                break
            case 'fast':
                duration = 20
                break
        }
    })
    var duration = 60
    function writeCode(prefix, code , fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        var id = setTimeout(function run(){
            n += 1
            container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css')
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                id = setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        },duration)
    }
    let code = `
    /*
     * 首先，画皮卡丘的皮
     */

    .preview {
        background: #FFE600;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .wrapper {
        height: 178px;
        width: 100%;
        position: relative;
    }

    /*
     * 然后，画皮卡丘的鼻子
     */ 

    .nose {
        border: 11px solid #000;
        border-radius: 50%;
        width: 11px;
        position: absolute;
        left: 50%;
        top: 26px;
        margin-left: -11px;
        border-color: #000 transparent transparent;
    }

    /*
     * 画皮卡丘的眼睛
     */

    .eye {
        width: 47px;
        height: 47px;
        background: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 3px solid #010101;
    }

    /*
     * 画皮卡丘的左眼
     */

    .eye.left {
        right: 50%;
        margin-right: 68px;
    }

    /*
     * 画皮卡丘的右眼
     */

    .eye.right {
        left: 50%;
        margin-left: 68px;
    }

    /*
     * 画皮卡丘的眼珠子
     */

    .eye::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #FFFFFF;
        border: 3px solid #010101;
        position: absolute;
        left: 3px;
        top: -2px;
    }

    /*
     * 画皮卡丘的脸
     */

    .face {
        width: 68px;
        height: 68px;
        background: #FF0000;
        position: absolute;
        border-radius: 50%;
        border: 3px solid #010101;
    }

    /*
     * 把画皮卡丘的脸放在正确的位置
     */

    .face.left {
        right: 50%;
        margin-right: 92px;
        top: 84px;
    }
    .face.right {
        left: 50%;
        margin-left: 92px;
        top: 84px;
    }

    /*
    * 画皮卡丘的上嘴唇
    */
   
    .upperLip {
        width: 65px;
        height: 29px;
        border: 3px solid #000;
        position: absolute;
        top: 47px;
        background: #FFE600;
    
    }
    .upperLip.left {
        border-bottom-left-radius: 70px 28px;
        border-top: none;
        border-right: none;
        right: 50%;
        transform: rotate(-28deg);
    }
    .upperLip.right {
        border-bottom-right-radius: 70px 28px;
        border-top: none;
        border-left: none;
        left: 50%;
        transform: rotate(27deg);
    }

    .lowerLip-wrapper {
        width: 110px;
        height: 127px;
        position: absolute;
        bottom: -10px;
        right: 50%;
        margin-right: -55px;
        overflow: hidden;
    }
    /*
     * 画皮卡丘的下嘴唇
     */

    .lowerLip {
        width: 160px;
        height: 900px;
        border: 3px solid #010101;
        border-radius: 70%;
        background: #9B000A;
        position: absolute;
        bottom: 0;
        right: 50%;
        margin-right: -80px;
        overflow: hidden;
    }
    
    /*
     * 画皮卡丘的小舌头
     */

    .lowerLip::after {
        content: '';
        display: block;
        position: absolute;
        left: 50%;
        margin-left: -55px;
        bottom: 0;
        width: 110px;
        height: 110px;
        background: #FF485F;
        border-radius: 50%;
    }

    /*
     * 我画完了，好看吗
     */
    ` 
    writeCode('', code)
}.call()