﻿// 20200203_v2
javascript: (function(f, dd) {
    dd = document.createElement("script");
    dd.src = "//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
    dd.onload = function() {
        f(jQuery.noConflict(true))
    };
    document.body.appendChild(dd)
})(function($) {
    //const ncMain = document.getElementsByClassName('MainContainer')[0]
    //const myCmtSet = document.getElementsByClassName('CommentInput-textarea')[0];
    //const myCmdSet = document.getElementsByClassName('CommentCommandInput')[0];
    //const myExtUrl = chrome.extension.getURL('');
    var $ = function (id){return (typeof id =='string')?document.getElementById(id):id;};
    var myDrg = 'F';
    var mySldVal = '0';
    var myRep = false;
    var myTab = false;
    var myLin = false;
    var myKey = false;
    var myTimer
    myOnload();



    /*----------------------------------------------------------------------------------------------------
    [起動]
    ----------------------------------------------------------------------------------------------------*/
    function myOnload() {
        // プレイヤーサイズチェック
        // console.log(document.body.className)
        // ニコニコ
        var n = document.getElementsByClassName('MainContainer')[0];
        var v = document.getElementsByClassName('VideoPlayer')[0];
        // メイン
        var a = document.createElement('div');
        a.id = 'myEmtMain';
        a.innerHTML = '[ - ]Main';
        a.addEventListener('click', function () { myEmtHeadClick(a); }, false);
        n.after(a);
        myCSSMain(a);
        // メイン中身
        var b = document.createElement("div");
        b.id = "myEmtMainSub";
        b.innerHTML = '' +
            '<div style = "padding:2px 0;">' +
            '<input id="myCmdClear" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="Del" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myCmdWhite" class="myCmdC" type="button" value=" " style="background-color:#FFFFFF;" />' +
            '<input id="myCmdRed" class="myCmdC" type="button" value=" " style="background-color:#FF0000;" />' +
            '<input id="myCmdPink" class="myCmdC" type="button" value=" " style="background-color:#FF8080;" />' +
            '<input id="myCmdOrange" class="myCmdC" type="button" value=" " style="background-color:#FFC000;" />' +
            '<input id="myCmdYellow" class="myCmdC" type="button" value=" " style="background-color:#FFFF00;" />' +
            '<input id="myCmdGreen" class="myCmdC" type="button" value=" " style="background-color:#00FF00;" />' +
            '<input id="myCmdCyan" class="myCmdC" type="button" value=" " style="background-color:#00FFFF;" />' +
            '<input id="myCmdBlue" class="myCmdC" type="button" value=" " style="background-color:#0000FF;" />' +
            '<input id="myCmdPurple" class="myCmdC" type="button" value=" " style="background-color:#C000FF;" />' +
            '<input id="myCmdBlack" class="myCmdC" type="button" value=" " style="background-color:#000000;" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myCmdWhite2" class="myCmdC" type="button" value=" " style="background-color:#CCCC99;" />' +
            '<input id="myCmdRed2" class="myCmdC" type="button" value=" " style="background-color:#CC0033;" />' +
            '<input id="myCmdPink2" class="myCmdC" type="button" value=" " style="background-color:#FF33CC;" />' +
            '<input id="myCmdOrange2" class="myCmdC" type="button" value=" " style="background-color:#FF6600;" />' +
            '<input id="myCmdYellow2" class="myCmdC" type="button" value=" " style="background-color:#999900;" />' +
            '<input id="myCmdGreen2" class="myCmdC" type="button" value=" " style="background-color:#00CC66;" />' +
            '<input id="myCmdCyan2" class="myCmdC" type="button" value=" " style="background-color:#00CCCC;" />' +
            '<input id="myCmdBlue2" class="myCmdC" type="button" value=" " style="background-color:#3399FF;" />' +
            '<input id="myCmdPurple2" class="myCmdC" type="button" value=" " style="background-color:#6633CC;" />' +
            '<input id="myCmdBlack2" class="myCmdC" type="button" value=" " style="background-color:#666666;" />' +
            '</div>' +
            '<div style = "padding:2px 0;">' +
            '<input id="myCmdbig" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="B" />' +
            '<input id="myCmdmedium" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="M" />' +
            '<input id="myCmdsmall" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="S" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myCmdue" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="U" />' +
            '<input id="myCmdNaka" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="N" />' +
            '<input id="myCmdshita" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="S" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myCmdDefont" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="D" />' +
            '<input id="myCmdgothic" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="G" />' +
            '<input id="myCmdmincho" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="M" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myCmdender" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="end" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myCmdfull" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="full" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myCmdPatissier" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="pts" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myCmdSage" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="sage" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myCmdIyayo" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="184" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myInvisible" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="Inv" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myCmtClear" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="Cdel" />' +
            '</div>' +
            '<div style = "padding:2px 0;">' +
            '<SELECT id="mySeekMode" disabled class="ActionButton TagEnterEditingButton TagContainer-editButton" SIZE=1>' +
            '<option value="1" "selected">Timer' +
            '<option value="2">Seek' +
            '</SELECT>' +
            '<input id="mySeekTime" class="myCmd" type="text" size=2 value="1000" /><label for="mySeekTime" class="VideoUploadDateMeta-title">秒/1000</label>' +
            '<input id="mySeekVideo" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="実行" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myBR" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="<BR>" />' +
            '</div>';
        a.after(b);
        myCSSSub(b);
        $("myCmdClear").addEventListener("click", function () { myCmdClick(20, ""); }, false);
        $("myCmdWhite").addEventListener("click", function () { myCmdClick(0, "white"); }, false);
        $("myCmdRed").addEventListener("click", function () { myCmdClick(0, "red"); }, false);
        $("myCmdPink").addEventListener("click", function () { myCmdClick(0, "pink"); }, false);
        $("myCmdOrange").addEventListener("click", function () { myCmdClick(0, "orange"); }, false);
        $("myCmdYellow").addEventListener("click", function () { myCmdClick(0, "yellow"); }, false);
        $("myCmdGreen").addEventListener("click", function () { myCmdClick(0, "green"); }, false);
        $("myCmdCyan").addEventListener("click", function () { myCmdClick(0, "cyan"); }, false);
        $("myCmdBlue").addEventListener("click", function () { myCmdClick(0, "blue"); }, false);
        $("myCmdPurple").addEventListener("click", function () { myCmdClick(0, "purple"); }, false);
        $("myCmdBlack").addEventListener("click", function () { myCmdClick(0, "black"); }, false);
        $("myCmdWhite2").addEventListener("click", function () { myCmdClick(0, "white2"); }, false);
        $("myCmdRed2").addEventListener("click", function () { myCmdClick(0, "red2"); }, false);
        $("myCmdPink2").addEventListener("click", function () { myCmdClick(0, "pink2"); }, false);
        $("myCmdOrange2").addEventListener("click", function () { myCmdClick(0, "orange2"); }, false);
        $("myCmdYellow2").addEventListener("click", function () { myCmdClick(0, "yellow2"); }, false);
        $("myCmdGreen2").addEventListener("click", function () { myCmdClick(0, "green2"); }, false);
        $("myCmdCyan2").addEventListener("click", function () { myCmdClick(0, "cyan2"); }, false);
        $("myCmdBlue2").addEventListener("click", function () { myCmdClick(0, "blue2"); }, false);
        $("myCmdPurple2").addEventListener("click", function () { myCmdClick(0, "purple2"); }, false);
        $("myCmdBlack2").addEventListener("click", function () { myCmdClick(0, "black2"); }, false);
        $("myCmdbig").addEventListener("click", function () { myCmdClick(1, "big"); }, false);
        $("myCmdmedium").addEventListener("click", function () { myCmdClick(1, "medium"); }, false);
        $("myCmdsmall").addEventListener("click", function () { myCmdClick(1, "small"); }, false);
        $("myCmdue").addEventListener("click", function () { myCmdClick(2, "ue"); }, false);
        $("myCmdNaka").addEventListener("click", function () { myCmdClick(2, "naka"); }, false);
        $("myCmdshita").addEventListener("click", function () { myCmdClick(2, "shita"); }, false);
        $("myCmdDefont").addEventListener("click", function () { myCmdClick(3, "defont"); }, false);
        $("myCmdgothic").addEventListener("click", function () { myCmdClick(3, "gothic"); }, false);
        $("myCmdmincho").addEventListener("click", function () { myCmdClick(3, "mincho"); }, false);
        $("myCmdender").addEventListener("click", function () { myCmdClick(4, "ender"); }, false);
        $("myCmdfull").addEventListener("click", function () { myCmdClick(5, "full"); }, false);
        $("myCmdPatissier").addEventListener("click", function () { myCmdClick(6, "patissier"); }, false);
        $("myCmdSage").addEventListener("click", function () { myCmdClick(7, "sage"); }, false);
        $("myCmdIyayo").addEventListener("click", function () { myCmdClick(8, "184"); }, false);
        $("myInvisible").addEventListener("click", function () { myCmdClick(9, "invisible"); }, false);
        $("myCmtClear").addEventListener("click", myCmtClearClick, false);
        if (myGetCookie('myMainDisp') == "false") {
            b.style.display = "none";
            a.innerHTML = '[ + ]Main';
        }

        // ボックス
        var c = document.createElement('div');
        c.id = 'myEmtBox';
        c.innerHTML = '[ - ]Box';
        c.addEventListener('click', function () { myEmtHeadClick(c); }, false);
        b.after(c);
        myCSSMain(c);
        // ボックス中身
        var d = document.createElement('div');
        d.id = 'myEmtBoxSub';
        d.innerHTML = '' +
            '<div style="padding:2px 0;">' +
            '<textarea id="myTxtIpt" style="width: 100%; height: 200px;"></textarea>' +
            '</div>' +
            '<div style="padding:2px 0;">' +
            '<label for="myCmdChkA">逆から</label>' +
            // '     ' +
            '<input id="myCmdChkA" type="checkbox" />' +
            // '     ' +
            // '<span id="myKomekin"><label for="myCmdChkB">コメ禁</label>' +
            // '     ' +
            // '<input id="myCmdChkB" type="checkbox" checked />' +
            '     ' +
            '<input id="myCmdBoxA" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="1行セット" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myCmdBoxB" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="全行投下" />' +
            '<div style="margin:50px; display: inline;"></div>' +
            '<input id="myCmdBoxC" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="クリア" />' +
            '<div style="margin:20px; display: inline;"></div>' +
            // '<input id="myCmdBoxIpt" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="レイヤ読込" />' +
            '</div>' +
            '';
        c.after(d);
        myCSSSub(d);
        $("myCmdBoxA").addEventListener("click", function () { myBoxIpt(0); }, false);
        $("myCmdBoxB").addEventListener("click", function () { myBoxIpt(1); }, false);
        $("myCmdBoxC").addEventListener("click", function () { $("myTxtIpt").value = ""; }, false);
        if (myGetCookie('myBoxDisp') == "false") {
            d.style.display = "none";
            c.innerHTML = '[ + ]Box';
        }

        // 上部トレーサー部
        var e = document.createElement('div');
        e.id = 'myEmtTrace';
        e.innerHTML = '[ - ]Trace';
        e.addEventListener('click', function () { myEmtHeadClick(e); }, false);
        n.before(e);
        myCSSMain(e);
        // トレ中身
        var f = document.createElement('div');
        f.id = 'myEmtTraceSub';
        f.innerHTML = '' +
            '<div style="padding:2px 0;">' +
            '<input id="myTxtExpALL" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="全出力" />' +
            '<input id="myTxtExpALLT" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="等幅全出力" />' +
            '<input id="myTxtExpOne" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="選択出力" />' +
            '<input id="myTxtExpOneT" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="等幅選択出力" />' +
            '<input id="myTxtTabMode" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="TabM" />' +
            '<input id="myTxtLinMode" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="線画M" />' +
            '<label class="VideoUploadDateMeta-title">画面サイズ</label>' +
            '<input id="myVideoSizeM" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="中" />' +
            '<input id="myVideoSizeL" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="大" />' +
            '</div>' +
            '<div style="padding:2px 0;">' +
            '<select id="myTrcSel" class="myCmd">' +
            '<option value="big_ue_ender_full_gothic_W17_L9">big ender 9</option>' +
            '<option value="big_ue_ender_full_gothic_W18_L10_臨">big ender 10 臨</option>' +
            '<option value="big_ue_ender_full_gothic_W20_L11_臨">big ender 11 臨</option>' +
            '<option value="big_ue_ender_full_gothic_W22_L12_臨">big ender 12 臨</option>' +
            '<option value="big_ue_ender_full_gothic_W25_L13_臨">big ender 13 臨</option>' +
            '<option value="big_ue_ender_full_gothic_W29_L15_臨">big ender 15 臨</option>' +
            '<option value="big_ue_ender_full_gothic_W31_L16_臨">big ender 16 臨</option>' +
            '<option value="big_ue_full_gothic_W34_L16">big 16</option>' +
            '<option value="medium_ue_ender_full_gothic_W24_L14">medium ender 14</option>' +
            '<option value="medium_ue_ender_full_gothic_W34_L19_臨">medium ender 19 臨</option>' +
            '<option value="medium_ue_full_gothic_W40_L26">medium 26</option>' +
            '<option value="small_ue_ender_full_gothic_W37_L21">small ender 21</option>' +
            '<option value="small_ue_ender_full_gothic_W37_L22">small ender 22</option>' +
            '<option value="small_ue_gothic_W46_L38">small 38</option>' +
            '<option value="medium_shita_full_gothic_W50_C22">medium shita W50</option>' +
            '<option value="small_ue_full_gothic_W37_L2_C9">small ue W37 L2</option>' +
            '<option value="small_shita_full_gothic_W37_L2_C9">small shita W37 L2</option>' +
            '<option value="Tokome_small_ue_gothic_W68_L38">Tokome_small 38</option>' +
            '</select>' +
            '<input id="myTrcAdd" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="追加" />' +
            '<input id="myTrcUSN" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="shita" />' +
            '<input id="myTrcGM" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="mincho" />' +
            '<input id="myTrcUp" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="上へ" />' +
            '<input id="myTrcDw" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="下へ" />' +
            '<input id="myTrcTxtDisp" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="非表示" />' +
            '<input id="myTrcTxtDispALL" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="一括非表示" />' +
            '<input id="myTrcDel" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="削除" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myTrcGrdDisp" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="グリッド" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<label id="myTrcFileL" class="ActionButton TagEnterEditingButton TagContainer-editButton" for="myTrcFile">画像読込' +
            '<input id="myTrcFile" type="file" style="display:none;" />' +
            '</label>' +
            '<input id="myTrcImgDisp" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="非表示" />' +
            '<div style="margin:10px; display: inline;"></div>' +
            '<input id="myTrcRepMode" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="置換M" />' +
            '<input id="myTrcColor" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="文字色変更" />' +
            '</div>' +
            '<select id="myTrcSel2" class="" size="2" style="height:200px; width:320px; padding:4px 8px; margin:2px 20px 2px 0; border:none; float:left;"></select>' +
            '<div style="float:left;">' +
            '<div style="position:relative; padding:2px 0;">' +
            '<label class="VideoUploadDateMeta-title">FONT SIZE</label>' +
            '<input id="myFontSize" class="myCmd" type="text" value="0" style="width: 50px;">' +
            '<input id="myFontSizeU" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="▲" />' +
            '<input id="myFontSizeD" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="▼" />' +
            '<label class="VideoUploadDateMeta-title">LINE HEIGHT</label>' +
            '<input id="myLineHeight" class="myCmd" type="text" value="0" style="width: 50px;">' +
            '<input id="myLineHeightU" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="▲" />' +
            '<input id="myLineHeightD" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="▼" />' +
            '</div>' +
            '<div style="position:relative; padding:2px 0;">' +
            '<label class="VideoUploadDateMeta-title">TOP</label>' +
            '<input id="myTop" class="myCmd" type="text" value="0" style="width: 50px;">' +
            '<input id="myTopU" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="▲" />' +
            '<input id="myTopD" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="▼" />' +
            '<label class="VideoUploadDateMeta-title">LEFT</label>' +
            '<input id="myLeft" class="myCmd" type="text" value="0" style="width: 50px;">' +
            '<input id="myLeftL" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="◀" />' +
            '<input id="myLeftR" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="▶" />' +
            '</div>' +
            '<div style="position:relative; padding:2px 0;">' +
            '<label class="VideoUploadDateMeta-title">transform</label>' +
            '<input id="myTransY" class="myCmd" type="text" value="0" style="width: 50px;">' +
            '<input id="myTransYU" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="▲" />' +
            '<input id="myTransYD" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="▼" />' +
            '<input id="myTransX" class="myCmd" type="text" value="0" style="width: 50px;">' +
            '<input id="myTransXU" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="◀" />' +
            '<input id="myTransXD" class="ActionButton TagEnterEditingButton TagContainer-editButton" type="button" value="▶" />' +
            '</div>' +
            '<div id="slider1" style="position:relative; width:255px; height:28px;">' +
            '<div style="background:#ddd; height:3px; border:1px inset #aaa; position:relative; top:16px; font-size:0px;"></div>' +
            '<input id="slider2" class="myCmd" type="button" value="R" style="position:absolute; height:20px; display:block; border-radius: 12px; border:none; cursor:pointer;">' +
            '<input id="myTxtR" disabled class="myCmd" type="text" value="0" style="position:absolute; left:280px; width: 50px;">' +
            '</div>' +

            '<div id="slider3" style="position:relative; width:255px; height:28px;">' +
            '<div style="background:#ddd; height:3px; border:1px inset #aaa; position:relative; top:16px; font-size:0px;"></div>' +
            '<input id="slider4" class="myCmd" type="button" value="G" style="position:absolute; height:20px; display:block; border-radius: 12px; border:none; cursor:pointer;">' +
            '<input id="myTxtG" disabled class="myCmd" type="text" value="0" style="position:absolute; left:280px; width: 50px;">' +
            '</div>' +

            '<div id="slider5" style="position:relative; width:255px; height:28px">' +
            '<div style="background:#ddd; height:3px; border:1px inset #aaa; position:relative; top:16px; font-size:0px;"></div>' +
            '<input id="slider6" class="myCmd" type="button" value="B" style="position:absolute; height:20px; display:block; border-radius: 12px; border:none; cursor:pointer;">' +
            '<input id="myTxtB" disabled class="myCmd" type="text" value="0" style="position:absolute; left:280px; width: 50px;">' +
            '</div>' +
            '</div>' +
            '<div style = "clear:both;"></div>' +
            '';

        e.after(f);
        myCSSSub(f);
        // myCSSLvl($('myTrcFileL'));
        // $("myTrcFile").addEventListener("change" , function(){myTrcFileChange(何某か);} , false);
        if (myGetCookie('myTraceDisp') == "false") {
            f.style.display = "none";
            e.innerHTML = '[ + ]Trace';
        }
        // 画像とグリッド
        var g = document.createElement("img");
        g.id = "myGrd";
        g.style.cssText = '' +
            'position: absolute;' +
            'top: 0px;' +
            'left: 0px;' +
            'width: 100%;' +
            'height: 100%;' +
            'border:none;' +
            'z-index: 3;' +
            'display: none;';
        g.src = "";
        v.after(g);

        var h = document.createElement("canvas");
        h.id = "myImg";
        h.style.cssText = '' +
            'position: absolute;' +
            'top: 0px;' +
            'left: 0px;' +
            'width: 100%;' +
            'height: 100%;' +
            'border:none;' +
            'z-index: 55;' +
            'display: none;';
        h.src = "";
        g.after(h);

        var z = document.getElementsByClassName('myCmd');
        for (var i = 0; i < z.length; ++i) {
            myCSSCmd(z[i]);
        }
        var y = document.getElementsByClassName('myCmdC');
        for (var i = 0; i < y.length; ++i) {
            myCSSCmdC(y[i]);
        }
        var x = document.getElementsByClassName('myCmdChk');
        for (var i = 0; i < x.length; ++i) {
            myCSSCmdChk(x[i]);
        }

    }
    // メニュー表示非表示
    function myEmtHeadClick(a) {
        var b = $(a.id + 'Sub');
        var c = a.id.slice(5);
        if (b.style.display == 'none') {
            b.style.display = 'block';
            a.innerHTML = '[ - ]' + c;
            mySetCookie('my' + c + 'Disp', 'true');
        } else {
            b.style.display = 'none';
            a.innerHTML = '[ + ]' + c;
            mySetCookie('my' + c + 'Disp', 'false');
        }
    }
    /*----------------------------------------------------------------------------------------------------
    [CSS設定]
    ----------------------------------------------------------------------------------------------------*/
    function myCSSMain(a) {
        a.style.cssText = '' +
            'font-size:13px;' +
            'color:#FFFFFF;' +
            'text-align:left;' +
            'background-color:#333333;' +
            'margin:0px;' +
            'padding:4px 10px;' +
            'cursor:pointer;' +
            'display: block;' +
            '';
    }
    function myCSSSub(a) {
        a.style.cssText = '' +
            'font-size:13px;' +
            'color:#000000;' +
            'text-align:left;' +
            'margin:0px 0px;' +
            'padding:0px 0px;' +
            'display: block;' +
            // 'border : solid 1px #FFFFFF;' +
            '';
    }
    function myCSSCmd(a) {
        var b = '' +
            // 'width: auto;' +
            'height: 24px;' +
            'padding:4px 8px;' +
            'border-radius: 12px;' +
            'text-align: center;' +
            'font-size: 13px;' +
            'border:none;' +
            'margin:0;' +
            '';
        switch (a.type) {
            case 'button':
                b = b + '' +
                    'cursor:pointer;' +
                    'background-color:#999999;' +
                    'color:#FFFFFF;' +
                    '';
                break;
            case 'select-one':
                'cursor:pointer;' +
                    '';
                break;
        }
        a.style.cssText = a.style.cssText + " " + b;
    }
    function myCSSCmdChk(a) {
        // チェック用
        var b = '' +
            'width: auto;' +
            'height: 24px;' +
            'padding:4px 8px;' +
            'border-radius: 12px;' +
            'text-align: center;' +
            'font:"";' +
            'font-size: 13px;' +
            'border:solid;' +
            'border-width:2px;' +
            'border-color:#999999;' +
            'cursor:pointer;' +
            'margin:0 0;' +
            'color:#FFFFFF;' +
            '';
        a.style.cssText = a.style.cssText + ' ' + b;
    }
    function myCSSCmdC(a) {
        // 色な
        var b = '' +
            'width: auto;' +
            'height: 24px;' +
            'padding:4px 8px;' +
            'border-radius: 12px;' +
            'text-align: center;' +
            'font-size: 13px;' +
            'border:solid;' +
            'border-width:2px;' +
            'border-color:#999999;' +
            'cursor:pointer;' +
            'margin:2px 0;' +
            '';
        a.style.cssText = a.style.cssText + ' ' + b;
    }
    function myCSSLvl(emt) {
        emt.style.cssText = '' +
            'width: auto;' +
            'height: 24px;' +
            'padding:4px 8px;' +
            'background-color:#999999;' +
            'border-radius: 12px;' +
            'text-align: center;' +
            'color:#FFFFFF;' +
            'font-size: 13px;' +
            'border:none;' +
            'line-height:0' +
            'cursor:pointer;' +
            'margin:0;' +
            '';
    }
    /*----------------------------------------------------------------------------------------------------
    [コマンドクリック関連]
    ----------------------------------------------------------------------------------------------------*/
    function myCmdClick(a, b) {
        // 全角を半角へとかすればいいと思うね
        var f = document.getElementsByClassName('CommentCommandInput')[0];
        var c = f.value.toLowerCase().split(" ");
        if (c[0] === undefined) { return; }

        var d = ['', '', '', '', '', '', '', '', '', ''];
        var e = '';
        // コマンド分解
        // 不細工
        // ニコニコは最初が優先みたいだがこっちは最後
        for (var i = 0; i < c.length; i++) {
            switch (c[i]) {
                case 'white':
                case 'red':
                case 'pink':
                case 'orange':
                case 'yellow':
                case 'green':
                case 'cyan':
                case 'blue':
                case 'purple':
                case 'black':
                case 'white2':
                case 'red2':
                case 'pink2':
                case 'orange2':
                case 'yellow2':
                case 'green2':
                case 'cyan2':
                case 'blue2':
                case 'purple2':
                case 'black2':
                case 'niconicowhite':
                case 'truered':
                case 'passionorange':
                case 'madyellow':
                case 'elementalgreen':
                case 'marineblue':
                case 'nobleviolet':
                    d[0] = c[i];
                    break;
                case 'big':
                case 'medium':
                case 'small':
                    d[1] = c[i];
                    break;
                case 'ue':
                case 'naka':
                case 'shita':
                    d[2] = c[i];
                    break;
                case 'defont':
                case 'gothic':
                case 'mincho':
                    d[3] = c[i];
                    break;
                case 'ender':
                    d[4] = c[i];
                    break;
                case 'full':
                    d[5] = c[i];
                    break;
                case 'patissier':
                    d[6] = c[i];
                    break;
                case 'sage':
                    d[7] = c[i];
                    break;
                case '184':
                    d[8] = c[i];
                    break;
                case 'invisible':
                    d[9] = c[i];
                    break;
                default:
                    if (c[i].slice(0, 1) == '#') { d[0] = c[i]; }
                    // alert('無効なコマンド')
                    break;
            }
        }

        switch (a) {
            case 0:
            case 1:
            case 2:
            case 3:
                d[a] = b;
                break;
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                if (d[a] === '') { d[a] = b; } else { d[a] = ''; }
                break;
            case 20:
                d.length = 0;
                e = '';
                break;
        }

        for (var m = 0; m < d.length; m++) {
            if (d[m] !== '') {
                e = e + ' ' + d[m];
            }
        }
        f.value = e.slice(1);
        f.dispatchEvent(new Event("input", { "bubbles": !0 }));
        // mySetCmd(niIT, myCmtCmd);
    }
    /*----------------------------------------------------------------------------------------------------
    [コメントクリアクリック]
    ----------------------------------------------------------------------------------------------------*/
    function myCmtClearClick() {
        var a = document.getElementsByClassName('CommentInput-textarea')[0];
        a.value = '';
        a.dispatchEvent(new Event("input", { "bubbles": !0 }));
    }
    /*----------------------------------------------------------------------------------------------------
    [シークというかいまんとこタイマー]
    ----------------------------------------------------------------------------------------------------*/
    $('mySeekVideo').onclick = function () {
        // ActionButton ControllerButton PlayerPlayButton
        // ActionButton ControllerButton PlayerPauseButton
        var t = $('mySeekTime').value.match(/^[0-9]+$/);

        document.getElementsByClassName("PlayerPlayButton")[0].dispatchEvent(new MouseEvent("click", { "view": window, "bubbles": !0, "cancelable": !0 }));
        setTimeout(function () { document.getElementsByClassName("PlayerPauseButton")[0].dispatchEvent(new MouseEvent("click", { "view": window, "bubbles": !0, "cancelable": !0 })); }, t);
    };
    /*----------------------------------------------------------------------------------------------------
    [改行置換とA0]
    ----------------------------------------------------------------------------------------------------*/
    $('myBR').onclick = function () {
        var a = $("myTxtIpt").value.replace(/[\xA0]/gi, "[a0]");
        a = a.replace(/[\n]/g, "<br>");
        $("myTxtIpt").value = a;
    }
    /*----------------------------------------------------------------------------------------------------
    [ゴシック明朝切り替え]
    ----------------------------------------------------------------------------------------------------*/
    $('myTrcGM').onclick = function () {
        if ($('myTrcSel2').value === "") { return; }
        var a = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var b = $('myTrcSel2').getElementsByTagName('option')[$('myTrcSel2').value.split(" ")[0] - 1];
        if ($('myTrcGM').value == 'gothic') {
            $('myTrcGM').value = 'mincho';
            b.text = b.text.replace(/mincho/g, "gothic");
            a.style.fontFamily = "游ゴシック,SimHei,Arial,ＭＳ Ｐゴシック,sans-serif";
        } else {
            $('myTrcGM').value = 'gothic';
            b.text = b.text.replace(/gothic/g, "mincho");
            a.style.fontFamily = "游明朝,SimSun,Arial,ＭＳ Ｐゴシック,游ゴシック,serif";
        }
    }
    /*----------------------------------------------------------------------------------------------------
    [入力]
    ----------------------------------------------------------------------------------------------------*/
    function myBoxIpt(a) {
        if ($("myTxtIpt").value === "") { return; }
        var c = $('myEmtBox');
        c.innerHTML = c.innerHTML.slice(0, 8) + '　　　　　info---' + 'セット中...';
        // メインルーチンを止めたい
        // mySeekTimer();

        var d = $('myTxtIpt').value;

        if (d.indexOf("[", 0) === 0) {
            if (d.indexOf("]", 0) != -1) {
                var e = d.indexOf("]", 0);
                if (d.slice(1, 3) == 'tm') {
                    var f = d.slice(3, e).match(/^[0-9]+$/);
                    if (f > 3001) { f = 3000; }
                    document.getElementsByClassName("PlayerPlayButton")[0].dispatchEvent(new MouseEvent("click", { "view": window, "bubbles": !0, "cancelable": !0 }));
                    $('myEmtBox').innerHTML = $('myEmtBox').innerHTML.slice(0, 8) + '　　　　　info---' + '再生中';
                    setTimeout(function () {
                        document.getElementsByClassName("PlayerPauseButton")[0].dispatchEvent(new MouseEvent("click", { "view": window, "bubbles": !0, "cancelable": !0 }));
                        $('myEmtBox').innerHTML = $('myEmtBox').innerHTML.slice(0, 8) + '　　　　　info---' + '停止中';
                    }, f);
                    $('myTxtIpt').value = d.slice(e + 1);
                }
            }
        }


        if (a === 0) {
            // if ($("myCmdChkB").checked){
            // if (myNumCheck(val) == false) { return; }
            // myInnerText("myDivCmtStat", "Wait…");
            if ((location.href).substr(-13) == "owner_comment") {
                setTimeout(myBoxIptS, 1000);
            } else {
                setTimeout(myBoxIptS, 6000);
            }
            // } else {
            // 	myBoxIptS(1);
            // }
        } else if (a === 1) {
            // 連続投下は危ないのでコメ禁モード使う
            // 投コメ来たら投コメモードで考える
            // 初回即実行なので75停止時、クリア効かなくて暴走する
            clearInterval(myTimer);
            if ((location.href).substr(-13) == "owner_comment") {
                // 投コメモード
                myTimer = setInterval((function b() { myBoxIptS(0, 250); return b; }()), 500);
            } else {
                myTimer = setInterval((function b() { myBoxIptS(0, 2000); return b; }()), 6000);
            }
        }
    }
    // ----------------------------------------------------------------------------------------------------
    function mySeekTimer() {
        var a = $('myTxtIpt').value;
        // タイマーが含まれるか調査
        if (a.indexOf("[", 0) === 0) {
            if (a.indexOf("]", 0) != -1) {
                var b = a.indexOf("]", 0);
                if (a.slice(1, 3) == 'tm') {
                    var c = a.slice(3, b).match(/^[0-9]+$/);
                    if (c > 3001) { c = 3000; }
                    document.getElementsByClassName("PlayerPlayButton")[0].dispatchEvent(new MouseEvent("click", { "view": window, "bubbles": !0, "cancelable": !0 }));
                    $('myEmtBox').innerHTML = $('myEmtBox').innerHTML.slice(0, 8) + '　　　　　info---' + '再生中';
                    setTimeout(function () {
                        document.getElementsByClassName("PlayerPauseButton")[0].dispatchEvent(new MouseEvent("click", { "view": window, "bubbles": !0, "cancelable": !0 }));
                        $('myEmtBox').innerHTML = $('myEmtBox').innerHTML.slice(0, 8) + '　　　　　info---' + '停止中';
                    }, c);
                    $('myTxtIpt').value = a.slice(b + 1);
                }
            }
        }
    }

    function myBoxIptS(g, p) {
        // 文字列を改行でスプリット
        var c = $('myTxtIpt').value.split(/[\n\r]/g);
        var e = document.getElementsByClassName('CommentCommandInput')[0];
        var f = document.getElementsByClassName('CommentInput-textarea')[0];
        var h = $('myEmtBox');

        var a, m, n;
        // 逆からチェック
        if ($("myCmdChkA").checked) {
            a = c[c.length - 1];
            m = 0;
            n = 1;
        } else {
            a = c[0];
            m = 1;
            n = 0;
        }

        // 文字列操作
        // myValueIpt = myTagChange(myValueIpt);
        a = a.replace(/\[A0\]/gi, '\u00A0');
        a = a.replace(/\[SP\]/gi, '\u3000');
        a = a.replace(/\[00\]/gi, '\u2000');
        a = a.replace(/\[01\]/gi, '\u2001');
        a = a.replace(/\[02\]/gi, '\u2002');
        a = a.replace(/\[03\]/gi, '\u2003');
        a = a.replace(/\[04\]/gi, '\u2004');
        a = a.replace(/\[05\]/gi, '\u2005');
        a = a.replace(/\[06\]/gi, '\u2006');
        a = a.replace(/\[0A\]/gi, '\u200A');
        a = a.replace(/\[0B\]/gi, '\u200B');
        a = a.replace(/\[TB\]/gi, '\u0009');

        a = a.replace(/\<BR\>/gi, '\n');

        // コマンドが含まれるか調査
        if (a.indexOf("[", 0) === 0) {
            if (a.indexOf("]", 0) != -1) {
                var j = a.indexOf("]", 0);
                var b = a.slice(1, j);
                a = a.slice(j + 1);
                e.value = b;
                e.dispatchEvent(new Event("input", { "bubbles": !0 }));
            }
        }

        // if (76 <= a.length) {
        // 	clearInterval(myTimer);
        // 	h.innerHTML = h.innerHTML.slice(0, 8) + '　　　　　info---' + '75文字を超えています(' + a.length + ')';
        // 	return;
        // } else {
        h.innerHTML = h.innerHTML.slice(0, 8) + '　　　　　info---' + '(' + a.length + ')';
        // }

        // コマンドがあればセット
        if (b) {
            // b = b + Array(128).join('\u2003')
            b = b + "　"
            e.value = b;
            e.dispatchEvent(new Event("input", { "bubbles": !0 }));
        }


        f.value = a;
        f.dispatchEvent(new Event("input", { "bubbles": !0 }));

        // 投下
        if (g === 0) {
            setTimeout(function () { document.getElementsByClassName("CommentPostButton")[0].dispatchEvent(new MouseEvent("click", { "view": window, "bubbles": !0, "cancelable": !0 })); }, p);
        } else {
            h.innerHTML = h.innerHTML.slice(0, 8) + '　　　　　info---' + '1行セット終了(' + a.length + ')';
        }

        // 次のコメントが無ければ終了
        if (c[1] === undefined || c[1] == "") {
            var c
            $('myTxtIpt').value = "";
            if (g === 0) {
                setTimeout(function () { $('myEmtBox').innerHTML = $('myEmtBox').innerHTML.slice(0, 8) + '　　　　　info---' + '全行投下完了(' + a.length + ')'; }, 2000);
                clearInterval(myTimer);
            }
            return;
        }
        var d = "";
        // 次コメントのセット
        for (var i = m; i < c.length - n; i++) {
            if (i == m) {
                d = c[i];
            } else {
                d = d + '\n' + c[i];
            }
        }
        $('myTxtIpt').value = d;
        if (g === 0) {
            setTimeout(function () { mySeekTimer(); }, 3000);
        }
    }
    /*----------------------------------------------------------------------------------------------------
    [Trace]
    ----------------------------------------------------------------------------------------------------*/
    $('myVideoSizeM').onclick = function () {
        $('middle').dispatchEvent(new MouseEvent("click", { "view": window, "bubbles": !0, "cancelable": !0 }));
    };
    $('myVideoSizeL').onclick = function () {
        $('large').dispatchEvent(new MouseEvent("click", { "view": window, "bubbles": !0, "cancelable": !0 }));
    };
    /*----------------------------------------------------------------------------------------------------
    [画像]
    ----------------------------------------------------------------------------------------------------*/
    // 読み込み
    $('myTrcFile').onchange = function (e) {

        //canvasの情報取得
        var canvas = document.getElementById('myImg');

        //canvasのオブジェクトのタイプ(2dデータ)を宣言
        var ctx = canvas.getContext("2d");

        // 選択されたファイルを取得
        var file = this.files[0];

        // 画像ファイル以外は処理中止
        if (!file.type.match(/^image\/(png|jpeg|gif)$/)) return;

        //インスタンス生成2つ
        var image = new Image();
        var reader = new FileReader();

        // File APIを使用し、ローカルファイルを読み込む
        reader.onload = function (evt) {

            // 画像がloadされた後に、canvasに描画する
            image.onload = function () {
                //canvasのエリアのクリア
                ctx.clearRect(0, 0, 0, 0);

                //canvasサイズを(640,360)に設定
                canvas.width = 640;
                canvas.height = 360;

                //canvasに読み込んだ画像を表示
                ctx.drawImage(image, 0, 0, 640, 360);

            }
            image.src = reader.result;
        }
        // ファイルを読み込み、データをBase64でエンコードされたデータURLにして返す
        reader.readAsDataURL(file);
        if ($('myImg').style.display == "none") {
            $('myImg').style.display = "";
            $('myTrcImgDisp').value = "非表示";
        }
        $('myTrcImgDisp').style.display = "";
    };
    // 表示
    $('myTrcImgDisp').onclick = function () {
        if ($('myImg').style.display === "") {
            $('myImg').style.display = "none";
            $('myTrcImgDisp').value = "表示";
        } else {
            $('myImg').style.display = "";
            $('myTrcImgDisp').value = "非表示";
        }
    };
    /*----------------------------------------------------------------------------------------------------
    [上下]
    ----------------------------------------------------------------------------------------------------*/
    var myTrcUD = function (b, g) {
        // aを上に上げる
        var a = $('myTrcSel2').getElementsByTagName('option');
        // セレクタ選択中の名前
        var c = a[b].value.split(" ")[1] + " " + a[b].value.split(" ")[2];
        var d = $("myTxt" + (b + 1));
        // 上の名前
        var e = a[b - 1].value.split(" ")[1] + " " + a[b - 1].value.split(" ")[2];
        var f = $("myTxt" + b);
        // エレメント入れ替え
        f.before(d);
        // エレメントID変更
        d.id = ("myTxt" + (b));
        f.id = ("myTxt" + (b + 1));
        // セレクトの入れ替え
        $('myTrcSel2').insertBefore(a[b], a[b - 1]);
        // セレクタ名前の変更
        a[b - 1].text = b + " " + c;
        a[b].text = (b + 1) + " " + e;
        // テキスト選択
        if (g == 'u') {
            d.focus();
        } else {
            f.focus();
        }
    };
    // [上]
    $('myTrcUp').onclick = function () {
        if ($('myTrcSel2').value === "") { return; }
        if ($('myTrcSel2').value.split(" ")[0] == 1) { return; }
        var b = parseInt($('myTrcSel2').value.split(" ")[0] - 1);
        myTrcUD(b, "u");
    };
    // [下]
    $('myTrcDw').onclick = function () {
        if ($('myTrcSel2').value === "") { return; }
        if ($('myTrcSel2').value.split(" ")[0] == $('myTrcSel2').length) { return; }
        var b = parseInt($('myTrcSel2').value.split(" ")[0]);
        myTrcUD(b, "d");
    };
    /*----------------------------------------------------------------------------------------------------
    [削除] 
    ----------------------------------------------------------------------------------------------------*/
    $('myTrcDel').onclick = function () {
        // 
        if ($('myTrcSel2').value === "") { return; }
        var q = confirm("選択中レイヤを削除します。")
        if (q === false) { return; }

        // 選択中レイヤを削除し全部1つ前に詰める
        var a = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        a.parentNode.removeChild(a);
        // 
        $('myTrcSel2').remove($('myTrcSel2').selectedIndex);
        for (var i = 0; i < $('myTrcSel2').length; i++) {
            $('myTrcSel2')[i].text = i + 1 + " " + $('myTrcSel2')[i].value.split(" ")[1] + " " + $('myTrcSel2')[i].value.split(" ")[2];
            if ($("myTxt" + (i + 1))) {
                $("myTxt" + (i + 1)).id = ("myTxt" + (i + 1));
            } else {
                $("myTxt" + (i + 2)).id = ("myTxt" + (i + 1));
            }
        }
        $('myTrcSel2')[0].selected = true;
    }
    /*----------------------------------------------------------------------------------------------------
    [上下中切り替え サイズにより切り替えめんどくせえ　どっか展開しといたほうがえええのか] W入ってる奴は除外？
    ----------------------------------------------------------------------------------------------------*/
    $('myTrcUSN').onclick = function () {
        if ($('myTrcSel2').value === "") { return; }
        var a = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var b = $('myTrcSel2').getElementsByTagName('option')[$('myTrcSel2').value.split(" ")[0] - 1];
        if ($('myTrcUSN').value == 'ue') {
            $('myTrcUSN').value = 'shita';
            b.text = b.text.replace(/shita/g, "ue");
            b.text = b.text.replace(/naka/g, "ue");
            switch (b.text.split(" ")[1]) {
                case "big_ue_ender_full_mincho_W17_L9":
                case "big_ue_ender_full_gothic_W17_L9":
                    a.style.top = '4px';
                    $('myTop').value = 4;
                    break;
                case "big_ue_ender_full_mincho_W18_L10_臨":
                case "big_ue_ender_full_gothic_W18_L10_臨":
                    a.style.top = '3px';
                    $('myTop').value = 3;
                    break;
                case "big_ue_ender_full_mincho_W20_L11_臨":
                case "big_ue_ender_full_gothic_W20_L11_臨":
                    a.style.top = '2px';
                    $('myTop').value = 2;
                    break;
                case "big_ue_ender_full_mincho_W22_L12_臨":
                case "big_ue_ender_full_gothic_W22_L12_臨":
                    a.style.top = '2px';
                    $('myTop').value = 2;
                    break;
                case "big_ue_ender_full_mincho_W25_L13_臨":
                case "big_ue_ender_full_gothic_W25_L13_臨":
                    a.style.top = '3px';
                    $('myTop').value = 3;
                    break;
                case "big_ue_ender_full_mincho_W29_L15_臨":
                case "big_ue_ender_full_gothic_W29_L15_臨":
                    a.style.top = '1px';
                    $('myTop').value = 1;
                    break;
                case "big_ue_ender_full_mincho_W31_L16_臨":
                case "big_ue_ender_full_gothic_W31_L16_臨":
                    a.style.top = '1px';
                    $('myTop').value = 1;
                    break;
                case "medium_ue_ender_full_mincho_W24_L14":
                case "medium_ue_ender_full_gothic_W24_L14":
                    a.style.top = '3px';
                    $('myTop').value = 3;
                    break;
                case "medium_shita_ender_full_mincho_W34_L19_臨":
                case "medium_shita_ender_full_gothic_W34_L19_臨":
                    a.style.top = '1px';
                    $('myTop').value = 1;
                    break;
                case "medium_ue_full_mincho_W40_L26":
                case "medium_ue_full_gothic_W40_L26":
                    a.style.top = '1px';
                    $('myTop').value = 1;
                    break;
                case "small_ue_ender_full_mincho_W37_L22":
                case "small_ue_ender_full_gothic_W37_L22":
                    a.style.top = '3px';
                    $('myTop').value = 3;
                    break;
            }

        } else if ($('myTrcUSN').value == 'shita') {
            $('myTrcUSN').value = 'naka';
            b.text = b.text.replace(/ue/g, "shita");
            b.text = b.text.replace(/naka/g, "shita");
            switch (b.text.split(" ")[1]) {
                case "big_shita_ender_full_mincho_W17_L9":
                case "big_shita_ender_full_gothic_W17_L9":
                    a.style.top = '-22px';
                    $('myTop').value = -22;
                    break;
                case "big_shita_ender_full_mincho_W18_L10_臨":
                case "big_shita_ender_full_gothic_W18_L10_臨":
                    a.style.top = '-46px';
                    $('myTop').value = -46;
                    break;
                case "big_shita_ender_full_mincho_W20_L11_臨":
                case "big_shita_ender_full_gothic_W20_L11_臨":
                    a.style.top = '-37px';
                    $('myTop').value = -37;
                    break;
                case "big_shita_ender_full_mincho_W22_L12_臨":
                case "big_shita_ender_full_gothic_W22_L12_臨":
                    a.style.top = '-34px';
                    $('myTop').value = -34;
                    break;
                case "big_shita_ender_full_mincho_W25_L13_臨":
                case "big_shita_ender_full_gothic_W25_L13_臨":
                    a.style.top = '-26px';
                    $('myTop').value = -26;
                    break;
                case "big_shita_ender_full_mincho_W29_L15_臨":
                case "big_shita_ender_full_gothic_W29_L15_臨":
                    a.style.top = '-25px';
                    $('myTop').value = -25;
                    break;
                case "big_shita_ender_full_mincho_W31_L16_臨":
                case "big_shita_ender_full_gothic_W31_L16_臨":
                    a.style.top = '-24px';
                    $('myTop').value = -24;
                    break;
                case "medium_shita_ender_full_mincho_W24_L14":
                case "medium_shita_ender_full_gothic_W24_L14":
                    a.style.top = '-21px';
                    $('myTop').value = -21;
                    break;
                case "medium_shita_ender_full_mincho_W34_L19_臨":
                case "medium_shita_ender_full_gothic_W34_L19_臨":
                    a.style.top = '-18px';
                    $('myTop').value = -18;
                    break;
                case "medium_shita_full_mincho_W40_L26":
                case "medium_shita_full_gothic_W40_L26":
                    a.style.top = '-7px';
                    $('myTop').value = -7;
                    break;
                case "small_shita_ender_full_mincho_W37_L22":
                case "small_shita_ender_full_gothic_W37_L22":
                    a.style.top = '-14px';
                    $('myTop').value = -14;
                    break;
            }

        } else {
            $('myTrcUSN').value = 'ue';
            b.text = b.text.replace(/ue/g, "naka");
            b.text = b.text.replace(/shita/g, "naka");
            switch (b.text.split(" ")[1]) {
                case "big_naka_ender_full_mincho_W17_L9":
                case "big_naka_ender_full_gothic_W17_L9":
                    a.style.top = '-9px';
                    $('myTop').value = -9;
                    break;
                case "big_naka_ender_full_mincho_W18_L10_臨": // これは臨界幅があるので流せない
                case "big_naka_ender_full_gothic_W18_L10_臨":
                    a.style.top = '0px';
                    $('myTop').value = 0;
                    break;
                case "big_naka_ender_full_mincho_W20_L11_臨": // これは臨界幅があるので流せない
                case "big_naka_ender_full_gothic_W20_L11_臨":
                    a.style.top = '0px';
                    $('myTop').value = 0;
                    break;
                case "big_naka_ender_full_mincho_W22_L12_臨": // これは臨界幅があるので流せない
                case "big_naka_ender_full_gothic_W22_L12_臨":
                    a.style.top = '0px';
                    $('myTop').value = 0;
                    break;
                case "big_naka_ender_full_mincho_W25_L13_臨": // これは臨界幅があるので流せない
                case "big_naka_ender_full_gothic_W25_L13_臨":
                    a.style.top = '0px';
                    $('myTop').value = 0;
                    break;
                case "big_naka_ender_full_mincho_W29_L15_臨": // これは臨界幅があるので流せない
                case "big_naka_ender_full_gothic_W29_L15_臨":
                    a.style.top = '0px';
                    $('myTop').value = 0;
                    break;
                case "big_naka_ender_full_mincho_W31_L16_臨": // これは臨界幅があるので流せない
                case "big_naka_ender_full_gothic_W31_L16_臨":
                    a.style.top = '0px';
                    $('myTop').value = 0;
                    break;
                case "medium_naka_ender_full_mincho_W24_L14":
                case "medium_naka_ender_full_gothic_W24_L14":
                    a.style.top = '-9px';
                    $('myTop').value = -9;
                    break;
                case "medium_naka_ender_full_mincho_W34_L19_臨": // これは臨界幅があるので流せない
                case "medium_naka_ender_full_gothic_W34_L19_臨":
                    a.style.top = '0px';
                    $('myTop').value = 0;
                    break;
                case "medium_naka_full_mincho_W40_L26":
                case "medium_naka_full_gothic_W40_L26":
                    a.style.top = '-3px';
                    $('myTop').value = -3;
                    break;
                case "small_naka_ender_full_mincho_W37_L22":
                case "small_naka_ender_full_gothic_W37_L22":
                    a.style.top = '-6px';
                    $('myTop').value = -6;
                    break;
            }
        }
    }
    /*----------------------------------------------------------------------------------------------------
    [追加] なんとかせい
    ----------------------------------------------------------------------------------------------------*/
    $('myTrcAdd').onclick = function () {
        var a = $('myTrcSel').value.split("_");
        var b = 1;
        // ループ回数チェック
        for (var i = 0; i < a.length; i++) {
            if (a[i].slice(0, 1) == "C") {
                b = a[i].slice(1);
            }
        }
        var m = $('myTrcSel2').length;
        var j = 0;
        var n;
        for (var i = 0; i < b; i++) {
            m = m + 1;
            var t = document.createElement("textarea");
            var myinnerTxt;
            // widht = font*w+1px
            // height = lineheight *L+2px 
            t.id = "myTxt" + m;
            myinnerTxt = '' +
                'background-color: rgba(0,0,0,0);' +
                'position:absolute;' +
                'font-weight: 400;' +
                'width: 1000px;' +
                'border: none;' +
                'z-index:4;' +
                'margin: 0;' +
                'padding: 0;' +
                'text-shadow:' +
                '1px 1px 0px rgba(0,0,0,0.2),' +
                '-1px 1px 0px rgba(0,0,0,0.2),' +
                '1px -1px 0px rgba(0,0,0,0.2),' +
                '-1px -1px 0px rgba(0,0,0,0.2),' +
                ' 1px 0px 0px rgba(0,0,0,0.2),' +
                '-1px 0px 0px rgba(0,0,0,0.2),' +
                '0px 1px 0px rgba(0,0,0,0.2),' +
                '0px -1px 0px rgba(0,0,0,0.2);' +
                '';
            switch ($('myTrcSel').value) {
                case "big_ue_ender_full_gothic_W17_L9":
                    myinnerTxt = myinnerTxt +
                        'height: 380px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 36.55px;' +
                        'line-height: 42px;' +
                        'top:4px;' +
                        'left:9px;' +
                        'width:623px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.000 , 1.010);';
                    break;
                case "big_ue_ender_full_gothic_W18_L10_臨":
                    myinnerTxt = myinnerTxt +
                        'height: 420px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 34px;' +
                        'line-height: 40px;' +
                        'top:3px;' +
                        'left:1px;' +
                        'width:640px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.020 , 1.014);';
                    break;
                case "big_ue_ender_full_gothic_W20_L11_臨":
                    myinnerTxt = myinnerTxt +
                        'height: 420px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 30px;' +
                        'line-height: 36px;' +
                        'top:2px;' +
                        'left:-1px;' +
                        'width:640px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.030 , 1.000);';
                    break;
                case "big_ue_ender_full_gothic_W22_L12_臨":
                    myinnerTxt = myinnerTxt +
                        'height: 420px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 28px;' +
                        'line-height: 33px;' +
                        'top:2px;' +
                        'left:0px;' +
                        'width:640px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.004 , 0.995);';
                    break;
                case "big_ue_ender_full_gothic_W25_L13_臨":
                    myinnerTxt = myinnerTxt +
                        'height: 420px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 25px;' +
                        'line-height: 30px;' +
                        'top:3px;' +
                        'left:2px;' +
                        'width:640px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.012 , 0.989);';
                    break;
                case "big_ue_ender_full_gothic_W29_L15_臨":
                    myinnerTxt = myinnerTxt +
                        'height: 420px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 21px;' +
                        'line-height: 26px;' +
                        'top:1px;' +
                        'left:6px;' +
                        'width:640px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.026 , 0.985);';
                    break;
                case "big_ue_ender_full_gothic_W31_L16_臨":
                    myinnerTxt = myinnerTxt +
                        'height: 420px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 20px;' +
                        'line-height: 24px;' +
                        'top:1px;' +
                        'left:-1px;' +
                        'width:640px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.030 , 0.997);';
                    break;
                case "big_ue_full_gothic_W34_L16":
                    myinnerTxt = myinnerTxt +
                        'height: 370px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 18.40px;' + // 18.40 
                        'line-height: 23px;' + // 23
                        'top:2px;' + // 2
                        'left:0px;' +
                        'width:627px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.019 , 0.973);'; // 1.019/0.973
                    break;
                case "medium_ue_ender_full_gothic_W24_L14":
                    myinnerTxt = myinnerTxt +
                        'height: 380px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 25.30px;' +
                        'line-height: 27px;' +
                        'top:3px;' +
                        'left:16px;' +
                        'width:609px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.000 , 1.003);';
                    break;
                case "medium_ue_ender_full_gothic_W34_L19_臨":
                    myinnerTxt = myinnerTxt +
                        'height: 420px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 17px;' +
                        'line-height: 20px;' +
                        'top:1px;' +
                        'left:10px;' +
                        'width:609px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.046 , 0.991);';
                    break;
                case "medium_ue_full_gothic_W40_L26":
                    myinnerTxt = myinnerTxt +
                        'height: 366px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 14px;' +
                        'line-height: 14px;' +
                        'top:1px;' +
                        'left:56px;' +
                        'width:561px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 0.938 , 1.006);';
                    break;
                case "small_ue_ender_full_gothic_W37_L21":
                    myinnerTxt = myinnerTxt +
                        'height: 338px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 16px;' +
                        'line-height: 16px;' +
                        'top:3px;' +
                        'left:8px;' +
                        'width:593px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.055 , 1.060);';
                    break;
                case "small_ue_ender_full_gothic_W37_L22":
                    myinnerTxt = myinnerTxt +
                        'height: 338px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 16px;' +
                        'line-height: 16px;' +
                        'top:3px;' +
                        'left:8px;' +
                        'width:593px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.055 , 1.060);';
                    break;
                case "small_ue_gothic_W46_L38": // 24
                    myinnerTxt = myinnerTxt +
                        'height: 382px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 10px;' + // これ以上は小さくならん模様
                        'line-height: 10px;' +
                        'top:2px;' +
                        'left:103px;' + // 206
                        'width:480px;' + // 241
                        'transform-origin: 0 0;' +
                        'transform: scale( 0.937 , 0.942);';
                    break;
                case "medium_shita_full_gothic_W50_C22":
                    n = 345 - (16.2 * (j));
                    myinnerTxt = myinnerTxt +
                        'height: 16px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 12.8px;' +
                        'line-height: 16px;' +
                        'top:' + n + 'px;' +
                        'left:14px;' +
                        'width:641px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 0.952 , 1.000);';
                    j++;
                    break;
                case "small_ue_full_gothic_W37_L2_C9":
                    n = 2 + (38.7 * (j));
                    myinnerTxt = myinnerTxt +
                        'height: 37px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 16px;' +
                        'line-height: 17px;' +
                        'top:' + n + 'px;' +
                        'left:7px;' +
                        'width:593px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.055 , 1.040);';
                    j++;
                    break;
                case "small_shita_full_gothic_W37_L2_C9":
                    n = 324 - (38.7 * (j));
                    myinnerTxt = myinnerTxt +
                        'height: 37px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 16px;' +
                        'line-height: 17px;' +
                        'top:' + n + 'px;' +
                        'left:7px;' +
                        'width:593px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 1.055 , 1.040);';
                    j++;
                    break;
                case "Tokome_small_ue_gothic_W68_L38":
                    myinnerTxt = myinnerTxt +
                        'height: 382px;' +
                        'font-family: "游ゴシック", SimHei, Arial, "ＭＳ Ｐゴシック", sans-serif;' +
                        'font-size: 10px;' +
                        'line-height: 10px;' +
                        'top:2px;' +
                        'left:0px;' +
                        'width:700px;' +
                        'transform-origin: 0 0;' +
                        'transform: scale( 0.937 , 0.942);';
                    break;
            }
            t.style.cssText = myinnerTxt;
            t.style.color = "#" + parseInt($('myTxtR').value).toString(16).replace(/^[0-9A-F]$/, "0$&") + parseInt($('myTxtG').value).toString(16).replace(/^[0-9A-F]$/, "0$&") + parseInt($('myTxtB').value).toString(16).replace(/^[0-9A-F]$/, "0$&");
            // document.getElementsByClassName('CommentRenderer')[0].before(t);
            document.getElementsByClassName('ControllerBoxContainer')[0].before(t);
            t.addEventListener("focus", myTxtSelect, false);
            $('myTrcSel2').add((new Option(m + " " + $('myTrcSel').value + " ●")));
            $('myTrcSel2')[m - 1].style.color = "#" + parseInt($('myTxtR').value).toString(16).replace(/^[0-9A-F]$/, "0$&") + parseInt($('myTxtG').value).toString(16).replace(/^[0-9A-F]$/, "0$&") + parseInt($('myTxtB').value).toString(16).replace(/^[0-9A-F]$/, "0$&");

        }
        $('myTrcSel2')[m - 1].selected = true;

        t.focus();
        $('myFontSize').value = t.style.fontSize
        $('myLineHeight').value = parseInt(t.style.lineHeight);
        $('myTop').value = parseInt(t.style.top);
        $('myLeft').value = parseInt(t.style.left);
        $('myTransX').value = t.style.transform.match(/\d+\.*\d*/g)[0];
        $('myTransY').value = t.style.transform.match(/\d+\.*\d*/g)[1];
    };
    /*----------------------------------------------------------------------------------------------------
    調整
    ----------------------------------------------------------------------------------------------------*/
    $('myFontSizeU').onclick = function () {
        if (!$('myTxt1')) { return; }
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var v = (Math.round((parseFloat($('myFontSize').value) + 0.01) * 100) / 100).toFixed(2);
        $('myFontSize').value = v;
        t.style.fontSize = v + 'px';
    };
    $('myFontSizeD').onclick = function () {
        if (!$('myTxt1')) { return; }
        if ($('myFontSize').value == '1') { return; }
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var v = (Math.round((parseFloat($('myFontSize').value) - 0.01) * 100) / 100).toFixed(2);
        $('myFontSize').value = v;
        t.style.fontSize = v + 'px';
    };
    $('myLineHeightU').onclick = function () {
        // 少数点効かない
        if (!$('myLineHeight')) { return; }
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var v = parseInt($('myLineHeight').value) + 1;
        $('myLineHeight').value = v;
        t.style.lineHeight = v + 'px';
    };
    $('myLineHeightD').onclick = function () {
        if (!$('myTxt1')) { return; }
        if ($('myLineHeight').value == '1') { return; }
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var v = parseInt($('myLineHeight').value) - 1;
        $('myLineHeight').value = v;
        t.style.lineHeight = v + 'px';
    };
    $('myTopU').onclick = function () {
        // 少数点効かない
        if (!$('myTxt1')) { return; }
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var v = parseInt($('myTop').value) + 1;
        $('myTop').value = v;
        t.style.top = v + 'px';
    };
    $('myTopD').onclick = function () {
        if (!$('myTxt1')) { return; }
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var v = parseInt($('myTop').value) - 1;
        $('myTop').value = v;
        t.style.top = v + 'px';
    };
    $('myLeftL').onclick = function () {
        if (!$('myTxt1')) { return; }
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var v = parseInt($('myLeft').value) - 1;
        $('myLeft').value = v;
        t.style.left = v + 'px';
    };
    $('myLeftR').onclick = function () {
        if (!$('myTxt1')) { return; }
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var v = parseInt($('myLeft').value) + 1;
        $('myLeft').value = v;
        t.style.left = v + 'px';
    };
    $('myTransYU').onclick = function () {
        if (!$('myTxt1')) { return; }
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var v = (Math.round((parseFloat($('myTransY').value) + 0.001) * 1000) / 1000).toFixed(3);
        $('myTransY').value = v;
        t.style.transform = 'scale(' + $('myTransX').value + ',' + v + ')'
    };
    $('myTransYD').onclick = function () {
        if (!$('myTxt1')) { return; }
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var v = (Math.round((parseFloat($('myTransY').value) - 0.001) * 1000) / 1000).toFixed(3);
        $('myTransY').value = v;
        t.style.transform = 'scale(' + $('myTransX').value + ',' + v + ')'
    };
    $('myTransXU').onclick = function () {
        if (!$('myTxt1')) { return; }
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var v = (Math.round((parseFloat($('myTransX').value) - 0.001) * 1000) / 1000).toFixed(3);
        $('myTransX').value = v;
        t.style.transform = 'scale(' + v + ',' + $('myTransY').value + ')'
    };
    $('myTransXD').onclick = function () {
        if (!$('myTxt1')) { return; }
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        var v = (Math.round((parseFloat($('myTransX').value) + 0.001) * 1000) / 1000).toFixed(3);
        $('myTransX').value = v;
        t.style.transform = 'scale(' + v + ',' + $('myTransY').value + ')'
    };

    /*----------------------------------------------------------------------------------------------------
    痴漢モード
    -------------myTrcRepMode---------------------------------------------------------------------------------------*/
    $('myTrcRepMode').onclick = function () {
        if (myRep === false) {
            myRep = true;
            $('myTrcRepMode').style.color = '#0066FF';
        } else {
            myRep = false;
            $('myTrcRepMode').style.color = '#FFFFFF';
        }
    };
    /*----------------------------------------------------------------------------------------------------
    [select2選択]
    ----------------------------------------------------------------------------------------------------*/
    $('myTrcSel2').onclick = function () {
        if ($('myTrcSel2').value === "") { return; }
        var a = $("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        a.focus();
    };
    /*----------------------------------------------------------------------------------------------------
    [text選択]
    ----------------------------------------------------------------------------------------------------*/
    function myTxtSelect() {
        a = document.activeElement;
        b = $('myTrcSel2').value.split(" ")[1].split("_")[1];// サイズ
        $('slider2').style.left = (a.style.color.match(/\d+/g)[0] - $('slider2').clientWidth / 2) + 'px';
        $('myTxtR').value = a.style.color.match(/\d+/g)[0];
        $('slider4').style.left = (a.style.color.match(/\d+/g)[1] - $('slider4').clientWidth / 2) + 'px';
        $('myTxtG').value = a.style.color.match(/\d+/g)[1];
        $('slider6').style.left = (a.style.color.match(/\d+/g)[2] - $('slider6').clientWidth / 2) + 'px';
        $('myTxtB').value = a.style.color.match(/\d+/g)[2];

        $('myFontSize').value = a.style.fontSize.match(/\d+\.*\d*/g)[0];
        $('myLineHeight').value = parseInt(a.style.lineHeight);
        $('myTop').value = parseInt(a.style.top); // ここueshitanakaで変わるから
        $('myLeft').value = parseInt(a.style.left);
        $('myTransX').value = a.style.transform.match(/\d+\.*\d*/g)[0];
        $('myTransY').value = a.style.transform.match(/\d+\.*\d*/g)[1];

        for (var i = 0; i < $('myTrcSel2').length; i++) {
            if ($("myTxt" + (i + 1)).style.zIndex == '4') {
                $("myTxt" + (i + 1)).style.zIndex = '3';
            }
        }
        if (b == "ue") {
            $('myTrcUSN').value = 'shita';
        } else if (b == "shita") {
            $('myTrcUSN').value = 'naka';
        } else {
            $('myTrcUSN').value = 'ue';
        }

        if (a.style.fontFamily.slice(0, 2) == "游ゴ") {
            $('myTrcGM').value = 'mincho';
        } else {
            $('myTrcGM').value = 'gothic';
        }

        if (a.style.zIndex == "0") {
            $('myTrcTxtDisp').value = "表示";
        } else {
            $('myTrcTxtDisp').value = "非表示";
            a.style.zIndex = '4';
        }

        $('myTrcSel2')[a.id.slice(5) - 1].selected = true;
        // ここ∞ループしとる
    }
    /*----------------------------------------------------------------------------------------------------
    Tabモード
    ----------------------------------------------------------------------------------------------------*/
    $('myTxtTabMode').onclick = function () {
        if (myTab === false) {
            myTab = true;
            $('myTxtTabMode').style.color = '#0066FF';
        } else {
            myTab = false;
            $('myTxtTabMode').style.color = '#FFFFFF';
        }
    };
    /*----------------------------------------------------------------------------------------------------
    線画モード
    ----------------------------------------------------------------------------------------------------*/
    $('myTxtLinMode').onclick = function () {
        if (myLin === false) {
            myLin = true;
            $('myTxtLinMode').style.color = '#0066FF';
        } else {
            myLin = false;
            $('myTxtLinMode').style.color = '#FFFFFF';
        }
    };
    /*----------------------------------------------------------------------------------------------------
    [出力]
    ----------------------------------------------------------------------------------------------------*/
    $('myTxtExpALL').onclick = function () {
        for (var i = 0; i < $('myTrcSel2').length; i++) {
            $('myTrcSel2')[i].selected = true;
            $('myTxtExpOne').onclick();
        }
    }
    // ---------
    $('myTxtExpOneT').onclick = function () {
        // 単発等幅
        $('myTxtExpOne').onclick(true);
    }
    $('myTxtExpOne').onclick = function (Tmode) {
        if ($('myTrcSel2').value === "") { return; }
        // $('myTxtIpt').value = ''
        // 全体
        var a = $("myTxt" + $('myTrcSel2').value.split(" ")[0]).value;

        // 半スペ、A0が含まれていたらNG
        if (a.indexOf('\u00A0') != -1) {
            alert('u00A0が' + (a.indexOf('\u00A0') + 1) + '文字目にあるので出力を停止します。')
            return;
        }
        if (a.indexOf('\u0020') != -1) {
            alert('u0020が' + (a.indexOf('\u0020') + 1) + '文字目にあるので出力を停止します。')
            return;
        }
        // 全角空白は全て2003へ
        a = a.replace(/[\u2001]/g, '\u2003');
        a = a.replace(/[\u3000]/g, '\u2003');
        a = a.replace(/[\u2000]/g, '\u2002');
        // 空白の最適化 200Aを使う
        a = a.replace(/[\u2003]/g, Array(12 + 1).join('\u200A'));
        a = a.replace(/[\u2002]/g, Array(6 + 1).join('\u200A'));
        a = a.replace(/[\u2004]/g, Array(4 + 1).join('\u200A'));
        a = a.replace(/[\u2005]/g, Array(3 + 1).join('\u200A'));
        a = a.replace(/[\u2006]/g, Array(2 + 1).join('\u200A'));
        // 戻す
        a = a.replace(/[\u200A]{12}/g, '\u2003');
        a = a.replace(/[\u200A]{6}/g, '\u2002');
        a = a.replace(/[\u200A]{4}/g, '\u2004');
        a = a.replace(/[\u200A]{3}/g, '\u2005');
        a = a.replace(/[\u200A]{2}/g, '\u2006');
        // 余りの処理　パターンは3つ
        a = a.replace(/[\u2003][\u200A]/g, '\u2002' + '\u2004' + '\u2005');
        a = a.replace(/[\u2002][\u200A]/g, '\u2004' + '\u2005');
        a = a.replace(/[\u2004][\u200A]/g, '\u2005' + '\u2006');

        var b = a.split(/[\n\r]/g);
        var c;// 調査文字
        var d = $('myTrcSel2').value.split(" ")[1].split("_")
        var w = 0; // =  // あとでWから取得するように
        var l = 0; // =  // あとでlから取得するように
        var e;// 計算用
        var f;
        var n = [];// 長さ、左空白幅格納配列
        var nd = [];// 処理用
        var z;// 出力用
        var zi;// 出力文字数
        var p;// ループ用
        var q;// ループ用
        var r;// ループスイッチ用
        var tm = false;// 等幅
        var rn = false;// 臨界幅
        // 色　20190108


        var u = ''
        if (myLin === true) {
            u = "#000001"
        } else {
            u = "#" + parseInt($("myTxt" + $('myTrcSel2').value.split(" ")[0]).style.color.match(/\d+/g)[0]).toString(16).replace(/^[0-9A-F]$/, "0$&")
                + parseInt($("myTxt" + $('myTrcSel2').value.split(" ")[0]).style.color.match(/\d+/g)[1]).toString(16).replace(/^[0-9A-F]$/, "0$&")
                + parseInt($("myTxt" + $('myTrcSel2').value.split(" ")[0]).style.color.match(/\d+/g)[2]).toString(16).replace(/^[0-9A-F]$/, "0$&");

        }

        var v = '';// コマンド
        r = true;

        // サイズチェック
        for (var i = 0; i < d.length; i++) {
            if (d[i].slice(0, 1) == "W") {
                w = d[i].slice(1) * 12;
                v += d[i] + " ";
            } else if (d[i].slice(0, 1) == "L") {
                l = d[i].slice(1);
                v += d[i] + " ";
            } else if (d[i].slice(0, 1) == "C") {
                v += d[i] + " ";
                // 
            } else if (d[i].slice(0, 1) == "臨") {
                // 
                rn = true;
                switch (w) {
                    case 216:
                        w = w + 4;
                        break;
                    case 240:
                        w = w + 8;
                        break;
                    case 264:
                        w = w + 8;
                        break;
                    case 300:
                        break;
                    case 348:
                        break;
                    case 372:
                        break;
                    case 408:
                        w = w + 8;
                        break;
                    default:

                }
            } else {
                v += d[i] + " ";
            }
        }
        v = "[" + u + " " + v.slice(0, -1) + "]";

        for (var i = 0; i < b.length; i++) {
            // 文字を分解し幅を調べて行く
            c = b[i].split("")
            p = 0; q = 0; // g= ''
            for (var m = 0; m < c.length; m++) {
                switch (c[m]) {
                    case '\u2003':
                        p += 12;
                        if (r === true) {
                            q += 12;
                            // g += Array(12+1).join('\uA003');
                        }
                        break;
                    case '\u2002':
                        p += 6;
                        if (r === true) {
                            q += 6;
                            // g += Array(6+1).join('\uA003');
                        }
                        break;
                    case '\u2004':
                        p += 4;
                        if (r === true) {
                            q += 4;
                            // g += Array(4+1).join('\uA003');
                        }
                        break;
                    case '\u2005':
                        p += 3;
                        if (r === true) {
                            q += 3;
                            // g += Array(3+1).join('\uA003');
                        }
                        break;
                    case '\u2006':
                        p += 2;
                        if (r === true) {
                            q += 2;
                            // g += Array(2+1).join('\uA003');
                        }
                        break;
                    case '\u200A':
                        p += 1;
                        if (r === true) {
                            q += 1;
                            // g += Array(2+1).join('\uA003');
                        }
                        break;
                    case '\u005F':
                    case '\u00AF':
                    case '\u2216':
                    case '\uFFE8':
                        p += 6;
                        r = false;
                        break;
                    case '\u2580':
                    case '\u2590':
                        p += 8.5;
                        r = false;
                        break;
                    case '\u2043':
                        p += 3.692307;
                        r = false;
                        break;
                    case '\u01C0':
                        p += 3.111111;
                        r = false;
                        break;
                    case '\u207B':
                    case '\u208B':
                        p += 3.466666;
                        r = false;
                        break;
                    case '\u002F':
                        p += 5.647058;
                        r = false;
                        break;
                    default:
                        // 未登録文字を検討、塗り用として割り切るか
                        p += 12;
                        r = false;
                        break;
                }
            }
            // 終わった時点でr=true;なら空白しか無い行。さよならする
            if (r !== true) {
                n[i] = {};
                n[i].LINE = i;
                // 切り上げないと臨界幅超えたら怖いが微妙なずれは発生する
                n[i].WIDTH = Math.ceil(p);
                n[i].LEFTSPACE = q;
                n[i].TEXT = b[i];
                r = true;
                // この時点でw<pなら終了
                if (p > w) {
                    alert('テンプレ幅超えてます');
                    return;
                }
            }
        }

        // 幅順ソート
        n.sort(function (x, y) {
            if (x.WIDTH > y.WIDTH) return -1;
            if (x.WIDTH < y.WIDTH) return 1;
            return 0;
        });

        // 配列なくなるまでループ
        // 等幅出力は1つリード決まればそれに従う
        while (n[0] != undefined) {
            // 出力用テンプレのセット
            for (i = 0; i < l; i++) {
                if (i == l - 1) {
                    nd[i] = '\uA001'
                } else {
                    if (i == 0 || (i % 3) == 0) {
                        nd[i] = '\uA001' + '\uA002'
                    } else {
                        nd[i] = '\uA002'
                    }
                }
            }

            // 左空白少ない順ソート
            n.sort(function (x, y) {
                if (x.LEFTSPACE < y.LEFTSPACE) return -1;
                if (x.LEFTSPACE > y.LEFTSPACE) return 1;
                return 0;
            });

            // 左空白削り
            p = n[0].LEFTSPACE;
            // 幅順ソート
            n.sort(function (x, y) {
                if (x.WIDTH > y.WIDTH) return -1;
                if (x.WIDTH < y.WIDTH) return 1;
                return 0;
            });
            // 右空白削り
            q = w - n[0].WIDTH;
            // どちらか。左の方が削れるサイズが大きければ右スペース分を削る
            if (p > q) {
                p = q;
            } else {
                // 右の方が削れるならば幅順に並べて左スペースをすべて消す
                // 2020.1.29 コメントアウトされていたが解除してみる
                n.sort(function (x, y) {
                    if (x.LEFTSPACE < y.LEFTSPACE) return -1;
                    if (x.LEFTSPACE > y.LEFTSPACE) return 1;
                    return 0;
                });
            }
            // l==0なら1行改行無しなので右に追加するしかない
            if (l == 0) {
                p = 0;
            }

            // tmなら2回目から右に追加するしかない
            if (tm == true) {
                p = 0;
            }

            // trmなら右に追加するしかない
            if (rn == true) {
                p = 0;
            }

            // すべてに対して左削り
            if (p != 0) {
                w -= p * 2;
                for (var i = 0; i < n.length; i++) {
                    if (n[i] == undefined) { break; }
                    n[i].WIDTH -= p;
                    n[i].LEFTSPACE -= p;
                    for (var m = 0; m < p; m++) {
                        // n[i].WIDTH -= 1;
                        // n[i].LEFTSPACE -= 1;
                        // 文字によって処理がことなる
                        switch (n[i].TEXT.slice(0, 1)) {
                            case '\u2003':
                                // 12-11
                                // n[i].TEXT = Array(12).join('\uA003') + n[i].TEXT.slice(1);
                                n[i].TEXT = '\u2002' + '\u2005' + '\u2006' + n[i].TEXT.slice(1);
                                break;
                            case '\u2002':
                                // 6-5
                                // n[i].TEXT = Array(6).join('\uA003') + n[i].TEXT.slice(1);
                                n[i].TEXT = '\u2005' + '\u2006' + n[i].TEXT.slice(1);
                                break;
                            case '\u2004':
                                // 4-3
                                // n[i].TEXT = Array(4).join('\uA003') + n[i].TEXT.slice(1);
                                n[i].TEXT = '\u2005' + n[i].TEXT.slice(1);
                                break;
                            case '\u2005':
                                // 3-2
                                // n[i].TEXT = Array(3).join('\uA003') + n[i].TEXT.slice(1);
                                n[i].TEXT = '\u2006' + n[i].TEXT.slice(1);
                                break;
                            case '\u2006':
                                // 2-1
                                n[i].TEXT = Array(2).join('\u200A') + n[i].TEXT.slice(1);
                                break;
                            case '\u200A':
                                n[i].TEXT = n[i].TEXT.slice(1);
                                break;
                            default:
                                break;
                        }
                    }
                    // 端数処理及び途中の空白含む再変換
                    n[i].TEXT = n[i].TEXT.replace(/[\u2003]/g, Array(12 + 1).join('\u200A'));
                    n[i].TEXT = n[i].TEXT.replace(/[\u2002]/g, Array(6 + 1).join('\u200A'));
                    n[i].TEXT = n[i].TEXT.replace(/[\u2004]/g, Array(4 + 1).join('\u200A'));
                    n[i].TEXT = n[i].TEXT.replace(/[\u2005]/g, Array(3 + 1).join('\u200A'));
                    n[i].TEXT = n[i].TEXT.replace(/[\u2006]/g, Array(2 + 1).join('\u200A'));

                    n[i].TEXT = n[i].TEXT.replace(/[\u200A]{12}/g, '\u2003');
                    n[i].TEXT = n[i].TEXT.replace(/[\u200A]{6}/g, '\u2002');
                    n[i].TEXT = n[i].TEXT.replace(/[\u200A]{4}/g, '\u2004');
                    n[i].TEXT = n[i].TEXT.replace(/[\u200A]{3}/g, '\u2005');
                    n[i].TEXT = n[i].TEXT.replace(/[\u200A]{2}/g, '\u2006');
                    // 余りの処理
                    n[i].TEXT = n[i].TEXT.replace(/[\u2003][\u200A]/g, '\u2002' + '\u2004' + '\u2005');
                    n[i].TEXT = n[i].TEXT.replace(/[\u2002][\u200A]/g, '\u2004' + '\u2005');
                    n[i].TEXT = n[i].TEXT.replace(/[\u2004][\u200A]/g, '\u2005' + '\u2006');
                    // 1pxに泣く　左の1は0にする
                    // n[i].TEXT = n[i].TEXT.replace(/[\uA003]/g,'');
                }
            }

            // 等幅なら上記の処理は1回だけ
            if (Tmode == true) {
                tm = true;
            }

            // n[0].WIDTH;は繰り上げの為qが狭くなる
            // その分リードの右が少なくなり右に寄る
            // 微調整で+1してみるかwidthを繰り下げるか
            q = w - n[0].WIDTH;

            // リードの処理の右追加　// q = w - n[0].WIDTH;
            if (q != 0) {
                n[0].WIDTH += q;
                n[0].TEXT = n[0].TEXT + Array(q + 1).join('\u200A')

                // 端数処理及び途中の空白含む再変換
                n[0].TEXT = n[0].TEXT.replace(/[\u200A]{12}/g, '\u2003');
                n[0].TEXT = n[0].TEXT.replace(/[\u200A]{6}/g, '\u2002');
                n[0].TEXT = n[0].TEXT.replace(/[\u200A]{4}/g, '\u2004');
                n[0].TEXT = n[0].TEXT.replace(/[\u200A]{3}/g, '\u2005');
                n[0].TEXT = n[0].TEXT.replace(/[\u200A]{2}/g, '\u2006');
                // 余りの処理
                n[0].TEXT = n[0].TEXT.replace(/[\u2003][\u200A]/g, '\u2002' + '\u2004' + '\u2005');
                n[0].TEXT = n[0].TEXT.replace(/[\u2002][\u200A]/g, '\u2004' + '\u2005');
                n[0].TEXT = n[0].TEXT.replace(/[\u2004][\u200A]/g, '\u2005' + '\u2006');
                // 1pxに泣く　右の1はゼロにする　なんとかしたい
                // n[0].TEXT = n[0].TEXT.replace(/[\uA003]/g,'');
            }

            // タブに置換
            if (myTab === true) {
                n[0].TEXT = n[0].TEXT.replace(/[\u2003]{2}/g, '\u0009')
                if (n[0].TEXT.slice(-1).match(/[\u0009]/)) {
                    n[0].TEXT += '\u200B'
                }
            }
            // 出力用に入れる l==0なら1コメ改行無しだが
            if (l == 0) {
                nd[n[0].LINE] = n[0].TEXT;
            } else {
                if (n[0].LINE == l - 1) {
                    nd[n[0].LINE] = n[0].TEXT;
                } else {
                    nd[n[0].LINE] = n[0].TEXT + '\uA002';
                }
            }
            n.splice(0, 1);

            // 出力チェック
            z = ""
            for (var i = 0; i < nd.length; i++) {
                z += nd[i]
            }
            zi = z.length;
            // この時点で突破してたら処理終了
            if (75 < zi) {
                alert('突破しちゃいます。' + z.length);
                return;
            }
            // リード決定後追加の処理
            while (n[0] != undefined) {
                // 左空白が無い、かつ幅が狭い順にソート
                n.sort(function (x, y) {
                    if (x.WIDTH < y.WIDTH) return -1;
                    if (x.WIDTH > y.WIDTH) return 1;
                    if (x.LEFTSPACE < y.LEFTSPACE) return -1;
                    if (x.LEFTSPACE > y.LEFTSPACE) return 1;
                    return 0;
                });

                // タブに置換
                if (myTab === true) {
                    n[0].TEXT = n[0].TEXT.replace(/[\u2003]{2}/g, '\u0009')
                }
                // 76超えないなら
                if (76 > zi + n[0].TEXT.length) {
                    if (n[0].LINE == l - 1) {
                        nd[n[0].LINE] = n[0].TEXT;
                    } else {
                        nd[n[0].LINE] = n[0].TEXT + '\uA002';
                    }
                    n.splice(0, 1);
                    z = ""
                    for (var i = 0; i < nd.length; i++) {
                        z += nd[i]
                    }
                    zi = z.length;
                } else {
                    // 超えてたらタブを戻す
                    if (myTab === true) {
                        n[0].TEXT = n[0].TEXT.replace(/[\u0009]/g, '\u2003' + '\u2003');
                    }
                    break;
                }
            }
            z = z.replace(/\uA001/g, '[A0]');
            z = z.replace(/\uA002/g, '<br>');
            z = z.replace(/\u0009/g, '[tb]');
            // z = z.replace(/\u200A/g,'[0A]');

            if (v != '') {
                z = v + z;
                v = ''
            }
            if ($('myTxtIpt').value == '') {
                $('myTxtIpt').value = z;
            } else {
                $('myTxtIpt').value += '\n' + z;
            }
            // n配列なくなるまでループ
        }
    }
    /*----------------------------------------------------------------------------------------------------
    [全行等幅]// いったん全部の幅調べる必要ある。現在は比率なのでサイズ間で幅見るにはpx使う必要あるかぁはぁ
    transform使ってるから頭痛しかない
    各幅(W*fontsize*tran)+(left*2)
    9	17*36.55*1+(9*2)=639.35
    16	34*18.4*1.019=637.4864
    14	24*25.3*1+(16*2)=639.2
    26	40*14*0.938+(56*2)=637.28
    21	37*16+1.055+(8*2)=640.56
    38	24*10+0.936+(207*2)=638.64
    各テンプレのマックスを超えると実現不可能
    ----------------------------------------------------------------------------------------------------*/
    $('myTxtExpALLT').onclick = function () {
        if ($('myTrcSel2').value === "") { return; }
        var nn = new Array();// 長さ、左空白幅格納配列
        for (var ii = 0; ii < $('myTrcSel2').length; ii++) {
            $('myTrcSel2')[ii].selected = true;
            var a = $("myTxt" + $('myTrcSel2').value.split(" ")[0]).value;
            // 半スペ、A0が含まれていたらNG
            if (a.indexOf('\u00A0') != -1) {
                alert('u00A0が' + (a.indexOf('\u00A0') + 1) + '文字目にあるので出力を停止します。')
                return;
            }
            if (a.indexOf('\u0020') != -1) {
                alert('u0020が' + (a.indexOf('\u0020') + 1) + '文字目にあるので出力を停止します。')
                return;
            }
            // 全角空白は全て2003へ
            a = a.replace(/[\u2001]/g, '\u2003');
            a = a.replace(/[\u3000]/g, '\u2003');
            a = a.replace(/[\u2000]/g, '\u2002');
            // 空白の最適化 200Aを使う
            a = a.replace(/[\u2003]/g, Array(12 + 1).join('\u200A'));
            a = a.replace(/[\u2002]/g, Array(6 + 1).join('\u200A'));
            a = a.replace(/[\u2004]/g, Array(4 + 1).join('\u200A'));
            a = a.replace(/[\u2005]/g, Array(3 + 1).join('\u200A'));
            a = a.replace(/[\u2006]/g, Array(2 + 1).join('\u200A'));
            // 戻す
            a = a.replace(/[\u200A]{12}/g, '\u2003');
            a = a.replace(/[\u200A]{6}/g, '\u2002');
            a = a.replace(/[\u200A]{4}/g, '\u2004');
            a = a.replace(/[\u200A]{3}/g, '\u2005');
            a = a.replace(/[\u200A]{2}/g, '\u2006');
            // 余りの処理　パターンは3つ
            a = a.replace(/[\u2003][\u200A]/g, '\u2002' + '\u2004' + '\u2005');
            a = a.replace(/[\u2002][\u200A]/g, '\u2004' + '\u2005');
            a = a.replace(/[\u2004][\u200A]/g, '\u2005' + '\u2006');

            var b = a.split(/[\n\r]/g);
            var c;// 調査文字
            var d = $('myTrcSel2').value.split(" ")[1].split("_")
            var w = 0; // =  // あとでWから取得するように
            var l = 0; // =  // あとでlから取得するように

            var p;// ループ用
            var q;// ループ用
            var r;// ループスイッチ用
            r = true;

            // フォントサイズとtranceの取得
            var aa = $("myTxt" + $('myTrcSel2').value.split(" ")[0])

            var f = aa.style.fontSize.match(/\d+\.*\d*/g)[0];
            var t = aa.style.transform.match(/\d+\.*\d*/g)[0];

            // サイズチェック
            for (var i = 0; i < d.length; i++) {
                if (d[i].slice(0, 1) == "W") {
                    w = d[i].slice(1) * 12;
                } else if (d[i].slice(0, 1) == "L") {
                    l = d[i].slice(1);
                } else if (d[i].slice(0, 1) == "C") {
                    // 
                }
            }

            for (var i = 0; i < b.length; i++) {
                // 文字を分解し幅を調べて行く
                c = b[i].split("")
                p = 0; q = 0; // g= ''
                for (var m = 0; m < c.length; m++) {
                    switch (c[m]) {
                        case '\u2003':
                            p += 12;
                            if (r === true) {
                                q += 12;
                            }
                            break;
                        case '\u2002':
                            p += 6;
                            if (r === true) {
                                q += 6;
                            }
                            break;
                        case '\u2004':
                            p += 4;
                            if (r === true) {
                                q += 4;
                            }
                            break;
                        case '\u2005':
                            p += 3;
                            if (r === true) {
                                q += 3;
                            }
                            break;
                        case '\u2006':
                            p += 2;
                            if (r === true) {
                                q += 2;
                            }
                            break;
                        case '\u200A':
                            p += 1;
                            if (r === true) {
                                q += 1;
                            }
                            break;
                        case '\u005F':
                        case '\u00AF':
                        case '\u2216':
                        case '\uFFE8':
                            p += 6;
                            r = false;
                            break;
                        case '\u2580':
                        case '\u2590':
                            p += 8.5;
                            r = false;
                            break;
                        case '\u2043':
                            p += 3.692307;
                            r = false;
                            break;
                        case '\u01C0':
                            p += 3.111111;
                            r = false;
                            break;
                        case '\u207B':
                        case '\u208B':
                            p += 3.466666;
                            r = false;
                            break;
                        case '\u002F':
                            p += 5.647058;
                            r = false;
                            break;
                        default:
                            // 未登録文字を検討、塗り用として割り切るか
                            p += 12;
                            r = false;
                            break;
                    }
                }
                // 終わった時点でr=true;なら空白しか無い行。さよならする
                if (r !== true) {
                    // px変換の為フォントサイズをかける
                    // p-qで純粋な文字幅
                    nn.push(((p - q) + Math.abs(q - (w - p))) / 12 * f * t);
                    r = true;
                    // この時点でw<pなら終了
                    if (p > w) {
                        alert('テンプレ幅超えてます');
                        return;
                    }
                }
            }
        }
        // 幅順ソート
        nn.sort(function (x, y) {
            if (x > y) return -1;
            if (x < y) return 1;
            return 0;
        });
        // リード幅pxこの数値にすべて調整する。左右は640px-この値
        // console.log(nn);
        // もう一度ループ
        for (var ii = 0; ii < $('myTrcSel2').length; ii++) {
            $('myTrcSel2')[ii].selected = true;
            a = $("myTxt" + $('myTrcSel2').value.split(" ")[0]).value;

            // 全角空白は全て2003へ
            a = a.replace(/[\u2001]/g, '\u2003');
            a = a.replace(/[\u3000]/g, '\u2003');
            a = a.replace(/[\u2000]/g, '\u2002');
            // 空白の最適化 200Aを使う
            a = a.replace(/[\u2003]/g, Array(12 + 1).join('\u200A'));
            a = a.replace(/[\u2002]/g, Array(6 + 1).join('\u200A'));
            a = a.replace(/[\u2004]/g, Array(4 + 1).join('\u200A'));
            a = a.replace(/[\u2005]/g, Array(3 + 1).join('\u200A'));
            a = a.replace(/[\u2006]/g, Array(2 + 1).join('\u200A'));
            // 戻す
            a = a.replace(/[\u200A]{12}/g, '\u2003');
            a = a.replace(/[\u200A]{6}/g, '\u2002');
            a = a.replace(/[\u200A]{4}/g, '\u2004');
            a = a.replace(/[\u200A]{3}/g, '\u2005');
            a = a.replace(/[\u200A]{2}/g, '\u2006');
            // 余りの処理　パターンは3つ
            a = a.replace(/[\u2003][\u200A]/g, '\u2002' + '\u2004' + '\u2005');
            a = a.replace(/[\u2002][\u200A]/g, '\u2004' + '\u2005');
            a = a.replace(/[\u2004][\u200A]/g, '\u2005' + '\u2006');

            b = a.split(/[\n\r]/g);
            d = $('myTrcSel2').value.split(" ")[1].split("_")
            var e;// 計算用
            var f;
            var n = [];// 長さ、左空白幅格納配列
            var nd = [];// 処理用
            var z;// 出力用
            var zi;// 出力文字数
            // 色
            var u = ''
            if (myLin === true) {
                u = "#000001"
            } else {
                u = "#" + parseInt($("myTxt" + $('myTrcSel2').value.split(" ")[0]).style.color.match(/\d+/g)[0]).toString(16).replace(/^[0-9A-F]$/, "0$&")
                    + parseInt($("myTxt" + $('myTrcSel2').value.split(" ")[0]).style.color.match(/\d+/g)[1]).toString(16).replace(/^[0-9A-F]$/, "0$&")
                    + parseInt($("myTxt" + $('myTrcSel2').value.split(" ")[0]).style.color.match(/\d+/g)[2]).toString(16).replace(/^[0-9A-F]$/, "0$&");

            }
            var v = '';// コマンド
            r = true;


            // サイズチェック
            for (var i = 0; i < d.length; i++) {
                if (d[i].slice(0, 1) == "W") {
                    w = d[i].slice(1) * 12;
                    // 固定値にする
                    // 削り分w→
                    // フォントサイズとtranceの取得
                    aa = $("myTxt" + $('myTrcSel2').value.split(" ")[0])

                    f = aa.style.fontSize.match(/\d+\.*\d*/g)[0];
                    t = aa.style.transform.match(/\d+\.*\d*/g)[0];

                    var ww = (w - nn[0] * 12 / (f * t)) / 2
                    // 固定ｗ
                    w = nn[0] * 12 / (f * t)
                    v += d[i] + " ";
                } else if (d[i].slice(0, 1) == "L") {
                    l = d[i].slice(1);
                    v += d[i] + " ";
                } else if (d[i].slice(0, 1) == "C") {
                    // 
                    v += d[i] + " ";
                } else {
                    v += d[i] + " ";
                }
            }
            v = "[" + u + " " + v.slice(0, -1) + "]";

            for (var i = 0; i < b.length; i++) {
                // 文字を分解し幅を調べて行く
                c = b[i].split("")
                p = 0; q = 0; // g= ''
                for (var m = 0; m < c.length; m++) {
                    switch (c[m]) {
                        case '\u2003':
                            p += 12;
                            if (r === true) {
                                q += 12;
                                // g += Array(12+1).join('\uA003');
                            }
                            break;
                        case '\u2002':
                            p += 6;
                            if (r === true) {
                                q += 6;
                                // g += Array(6+1).join('\uA003');
                            }
                            break;
                        case '\u2004':
                            p += 4;
                            if (r === true) {
                                q += 4;
                                // g += Array(4+1).join('\uA003');
                            }
                            break;
                        case '\u2005':
                            p += 3;
                            if (r === true) {
                                q += 3;
                                // g += Array(3+1).join('\uA003');
                            }
                            break;
                        case '\u2006':
                            p += 2;
                            if (r === true) {
                                q += 2;
                                // g += Array(2+1).join('\uA003');
                            }
                            break;
                        case '\u200A':
                            p += 1;
                            if (r === true) {
                                q += 1;
                                // g += Array(2+1).join('\uA003');
                            }
                            break;
                        case '\u005F':
                        case '\u00AF':
                        case '\u2216':
                        case '\uFFE8':
                            p += 6;
                            r = false;
                            break;
                        case '\u2580':
                        case '\u2590':
                            p += 8.5;
                            r = false;
                            break;
                        case '\u2043':
                            p += 3.692307;
                            r = false;
                            break;
                        case '\u01C0':
                            p += 3.111111;
                            r = false;
                            break;
                        case '\u207B':
                        case '\u208B':
                            p += 3.466666;
                            r = false;
                            break;
                        case '\u002F':
                            p += 5.647058;
                            r = false;
                            break;
                        default:
                            // 未登録文字を検討、塗り用として割り切るか
                            p += 12;
                            r = false;
                            break;
                    }
                }
                // 終わった時点でr=true;なら空白しか無い行。さよならする
                if (r !== true) {
                    n[i] = {};
                    n[i].LINE = i;
                    // 余計に削る為ｗｗを足す
                    n[i].WIDTH = Math.ceil(p);
                    n[i].LEFTSPACE = q;
                    n[i].TEXT = b[i];
                    r = true;
                    // この時点でw<pなら終了
                    if (p > w + ww * 2) {
                        alert('テンプレ幅超えてます');
                        return;
                    }
                }
            }

            // 幅順ソート
            n.sort(function (x, y) {
                if (x.WIDTH > y.WIDTH) return -1;
                if (x.WIDTH < y.WIDTH) return 1;
                return 0;
            });

            // 配列なくなるまでループ
            // 等幅出力は1つリード決まればそれに従う
            var tm = false;
            while (n[0] != undefined) {
                // 出力用テンプレのセット
                for (i = 0; i < l; i++) {
                    if (i == l - 1) {
                        nd[i] = '\uA001'
                    } else {
                        if (i == 0 || (i % 3) == 0) {
                            nd[i] = '\uA001' + '\uA002'
                        } else {
                            nd[i] = '\uA002'
                        }
                    }
                }

                // 左空白少ない順ソート
                // n.sort(function(x,y){
                // 	if(x.LEFTSPACE < y.LEFTSPACE) return -1;
                // 	if(x.LEFTSPACE > y.LEFTSPACE) return 1;
                // 	return 0;
                // });
                // 左空白削り確定値




                p = ww


                // tmなら2回目から右に追加する
                if (tm == true) {
                    p = 0;
                }

                // すべてに対して左削り
                if (p != 0) {
                    // w -= p * 2;
                    for (var i = 0; i < n.length; i++) {
                        if (n[i] == undefined) { break; }
                        n[i].WIDTH -= p;
                        n[i].LEFTSPACE -= p;
                        for (var m = 0; m < p; m++) {
                            // n[i].WIDTH -= 1;
                            // n[i].LEFTSPACE -= 1;
                            // 文字によって処理がことなる
                            switch (n[i].TEXT.slice(0, 1)) {
                                case '\u2003':
                                    // 12-11
                                    // n[i].TEXT = Array(12).join('\uA003') + n[i].TEXT.slice(1);
                                    n[i].TEXT = '\u2002' + '\u2005' + '\u2006' + n[i].TEXT.slice(1);
                                    break;
                                case '\u2002':
                                    // 6-5
                                    // n[i].TEXT = Array(6).join('\uA003') + n[i].TEXT.slice(1);
                                    n[i].TEXT = '\u2005' + '\u2006' + n[i].TEXT.slice(1);
                                    break;
                                case '\u2004':
                                    // 4-3
                                    // n[i].TEXT = Array(4).join('\uA003') + n[i].TEXT.slice(1);
                                    n[i].TEXT = '\u2005' + n[i].TEXT.slice(1);
                                    break;
                                case '\u2005':
                                    // 3-2
                                    // n[i].TEXT = Array(3).join('\uA003') + n[i].TEXT.slice(1);
                                    n[i].TEXT = '\u2006' + n[i].TEXT.slice(1);
                                    break;
                                case '\u2006':
                                    // 2-1
                                    n[i].TEXT = Array(2).join('\u200A') + n[i].TEXT.slice(1);
                                    break;
                                case '\u200A':
                                    n[i].TEXT = n[i].TEXT.slice(1);
                                    break;
                                default:
                                    break;
                            }
                        }
                        // 端数処理及び途中の空白含む再変換
                        n[i].TEXT = n[i].TEXT.replace(/[\u2003]/g, Array(12 + 1).join('\u200A'));
                        n[i].TEXT = n[i].TEXT.replace(/[\u2002]/g, Array(6 + 1).join('\u200A'));
                        n[i].TEXT = n[i].TEXT.replace(/[\u2004]/g, Array(4 + 1).join('\u200A'));
                        n[i].TEXT = n[i].TEXT.replace(/[\u2005]/g, Array(3 + 1).join('\u200A'));
                        n[i].TEXT = n[i].TEXT.replace(/[\u2006]/g, Array(2 + 1).join('\u200A'));

                        n[i].TEXT = n[i].TEXT.replace(/[\u200A]{12}/g, '\u2003');
                        n[i].TEXT = n[i].TEXT.replace(/[\u200A]{6}/g, '\u2002');
                        n[i].TEXT = n[i].TEXT.replace(/[\u200A]{4}/g, '\u2004');
                        n[i].TEXT = n[i].TEXT.replace(/[\u200A]{3}/g, '\u2005');
                        n[i].TEXT = n[i].TEXT.replace(/[\u200A]{2}/g, '\u2006');
                        // 余りの処理
                        n[i].TEXT = n[i].TEXT.replace(/[\u2003][\u200A]/g, '\u2002' + '\u2004' + '\u2005');
                        n[i].TEXT = n[i].TEXT.replace(/[\u2002][\u200A]/g, '\u2004' + '\u2005');
                        n[i].TEXT = n[i].TEXT.replace(/[\u2004][\u200A]/g, '\u2005' + '\u2006');
                        // 1pxに泣く　左の1は0にする
                        // n[i].TEXT = n[i].TEXT.replace(/[\uA003]/g,'');
                    }
                }

                // 等幅なら上記の処理は1回だけ
                tm = true;

                // n[0].WIDTH;は繰り上げの為qが狭くなる
                // その分リードの右が少なくなり右に寄る
                // 微調整で+1してみるかwidthを繰り下げるか
                q = Math.ceil(w - n[0].WIDTH);

                // リードの処理の右追加　// q = w - n[0].WIDTH;
                if (q != 0) {
                    n[0].WIDTH += q;
                    n[0].TEXT = n[0].TEXT + Array(q + 1).join('\u200A')

                    // 端数処理及び途中の空白含む再変換
                    n[0].TEXT = n[0].TEXT.replace(/[\u200A]{12}/g, '\u2003');
                    n[0].TEXT = n[0].TEXT.replace(/[\u200A]{6}/g, '\u2002');
                    n[0].TEXT = n[0].TEXT.replace(/[\u200A]{4}/g, '\u2004');
                    n[0].TEXT = n[0].TEXT.replace(/[\u200A]{3}/g, '\u2005');
                    n[0].TEXT = n[0].TEXT.replace(/[\u200A]{2}/g, '\u2006');
                    // 余りの処理
                    n[0].TEXT = n[0].TEXT.replace(/[\u2003][\u200A]/g, '\u2002' + '\u2004' + '\u2005');
                    n[0].TEXT = n[0].TEXT.replace(/[\u2002][\u200A]/g, '\u2004' + '\u2005');
                    n[0].TEXT = n[0].TEXT.replace(/[\u2004][\u200A]/g, '\u2005' + '\u2006');
                    // 1pxに泣く　右の1はゼロにする　なんとかしたい
                    // n[0].TEXT = n[0].TEXT.replace(/[\uA003]/g,'');
                }

                // タブに置換
                if (myTab === true) {
                    n[0].TEXT = n[0].TEXT.replace(/[\u2003]{2}/g, '\u0009')
                    if (n[0].TEXT.slice(-1).match(/[\u0009]/)) {
                        n[0].TEXT += '\u200B'
                    }
                }
                // 出力用に入れる l==0なら1コメ改行無しだが
                if (l == 0) {
                    nd[n[0].LINE] = n[0].TEXT;
                } else {
                    if (n[0].LINE == l - 1) {
                        nd[n[0].LINE] = n[0].TEXT;
                    } else {
                        nd[n[0].LINE] = n[0].TEXT + '\uA002';
                    }
                }
                n.splice(0, 1);

                // 出力チェック
                z = ""
                for (var i = 0; i < nd.length; i++) {
                    z += nd[i]
                }
                zi = z.length;
                // この時点で突破してたら処理終了
                if (75 < zi) {
                    alert('突破しちゃいます。' + z.length);
                    return;
                }
                // リード決定後追加の処理
                while (n[0] != undefined) {
                    // 左空白が無い、かつ幅が狭い順にソート
                    n.sort(function (x, y) {
                        if (x.WIDTH < y.WIDTH) return -1;
                        if (x.WIDTH > y.WIDTH) return 1;
                        if (x.LEFTSPACE < y.LEFTSPACE) return -1;
                        if (x.LEFTSPACE > y.LEFTSPACE) return 1;
                        return 0;
                    });

                    // タブに置換
                    if (myTab === true) {
                        n[0].TEXT = n[0].TEXT.replace(/[\u2003]{2}/g, '\u0009')
                    }
                    // 76超えないなら
                    if (76 > zi + n[0].TEXT.length) {
                        if (n[0].LINE == l - 1) {
                            nd[n[0].LINE] = n[0].TEXT;
                        } else {
                            nd[n[0].LINE] = n[0].TEXT + '\uA002';
                        }
                        n.splice(0, 1);
                        z = ""
                        for (var i = 0; i < nd.length; i++) {
                            z += nd[i]
                        }
                        zi = z.length;
                    } else {
                        // 超えてたらタブを戻す
                        if (myTab === true) {
                            n[0].TEXT = n[0].TEXT.replace(/[\u0009]/g, '\u2003' + '\u2003');
                        }
                        break;
                    }
                }
                z = z.replace(/\uA001/g, '[A0]');
                z = z.replace(/\uA002/g, '<br>');
                z = z.replace(/\u0009/g, '[tb]');
                // z = z.replace(/\u200A/g,'[0A]');

                if (v != '') {
                    z = v + z;
                    v = ''
                }
                if ($('myTxtIpt').value == '') {
                    $('myTxtIpt').value = z;
                } else {
                    $('myTxtIpt').value += '\n' + z;
                }
                // n配列なくなるまでループ
            }

        }
    }


    /*----------------------------------------------------------------------------------------------------
    [入力]　保留
    ----------------------------------------------------------------------------------------------------*/

    /*----------------------------------------------------------------------------------------------------
    
    $('myCmdBoxIpt').onclick = function(){
        // あらかじめコマンド選んでおかないとやだ。改行数調べればいけんのか。やだよ
        // そこを自動にするには出力時にLの無駄コマンドを追加しとくとか
        // まっさらな状態じゃないと読み込めないようにする
        // if ($('myTrcSel2').value === "") {return;}
        if ($('myTxtIpt').value === "") {return;}
    	
        // テキストをスプリット
        var a = $('myTxtIpt').value.replace(/\[A0\]/gi,'');
    
    // 全角空白は全て2003へ
              a = a.replace(/[\u2001]/g,'\u2003');
              a = a.replace(/[\u3000]/g,'\u2003');
              a = a.replace(/[\u2000]/g,'\u2002');
              // 空白の最適化 200Aを使う
        a = a.replace(/[\u2003]/g,Array(12+1).join('\u200A'));
        a = a.replace(/[\u2002]/g,Array(6+1).join('\u200A'));
        a = a.replace(/[\u2004]/g,Array(4+1).join('\u200A'));
        a = a.replace(/[\u2005]/g,Array(3+1).join('\u200A'));
        a = a.replace(/[\u2006]/g,Array(2+1).join('\u200A'));
        // 戻す
        a = a.replace(/[\u200A]{12}/g,'\u2003');
        a = a.replace(/[\u200A]{6}/g,'\u2002');
        a = a.replace(/[\u200A]{4}/g,'\u2004');
        a = a.replace(/[\u200A]{3}/g,'\u2005');
        a = a.replace(/[\u200A]{2}/g,'\u2006');
        // 余りの処理　パターンは3つ
        a = a.replace(/[\u2003][\u200A]/g,'\u2002'+ '\u2004'+ '\u2005');
        a = a.replace(/[\u2002][\u200A]/g,'\u2004'+ '\u2005');
        a = a.replace(/[\u2004][\u200A]/g,'\u2005'+ '\u2006');
    
        a = a.split(/[\n\r]/g);
    
        var b;
        // 各々コマンドデフォ
        var Clr = '#FFFFFF';
        var Siz = 'medium';
        var Pos = 'Naka';
        var End = '';
        var Ful = '';
        var Fnt = 'Defont';
        var W;
        var L;
        var C;
        var t;// テンプレートID
        // 
        for (var i = 0; i < a.length; i++) {
            // コマンドがあれば分割無ければ前回引継ぎ。前回なけりゃ中止
            if (a[i].indexOf("[",0) === 0) {
                if (a[i].indexOf("]",0) != -1) {
                    b = a[i].slice(1, a[i].indexOf("]",0)).split(" ");
                    a[i] =a[i].slice(a[i].indexOf("]",0) + 1);
                }
            }
            // コマンド調査
            for (var m = 0; m < b.length; m++) {
                if (b[m].indexOf("#",0) === 0) {
                    Clr = b[m];
                }else if(b[m].indexOf("W",0) === 0){
                    W = b[m].slice(1);
                }else if(b[m].indexOf("C",0) === 0){
                    C = b[m].slice(1);
                }else if(b[m].indexOf("L",0) === 0){
                    L = b[m].slice(1);
                }else{
                    switch(b[m]){
                    case 'big':
                    case 'medium':
                    case 'small':
                        Siz = b[m];
                        break;
                    case 'ue':
                    case 'shita':
                    case 'naka':
                        Pos = b[m];
                        break;
                    case 'ender':
                        End = b[m];
                        break;
                    case 'full':
                        Ful = b[m];
                        break;
                    case 'Defont':
                    case 'gothic':
                    case 'mincho':
                        Fnt = b[m];
                        break;
                    }
                }
            }
    
            if (Siz == 'big') {
                if(L == '9'){
                    t=0;
                } else if(L == '16') {
                    t=1;
                }
            } else if (Siz == 'medium') {
                if(L == '14'){
                    t=2;
                } else if(L == '26') {
                    t=3;
                } else {
                    t=6;
                }
            } else if (Siz == 'small') {
                if(L == '21'){
                    t=4;
                } else if(L == '38') {
                    t=5;
                } else if(L == '2') {
                    t=7;
                }
            }
    
            // テンプレを選択
            $('myTrcSel')[parseInt(t)].selected = true;
            $('myTrcAdd').onclick();
            // 色を変更
            $("myTxt" + $('myTrcSel2').value.split(" ")[0]).style.color = Clr;
            myTxtSelect();
            // 位置を変更
            $('myTrcUSN').value = Pos;
            $('myTrcUSN').onclick();
            // フォントを変更
            $('myTrcGM').value = Fnt;
            $('myTrcGM').onclick();
            // テキスト追加
            // <br>で分割してリード行を調べてテンプレと比較
            // $("myTxt" + $('myTrcSel2').value.split(" ")[0]).value = a[i];
            var n = [];
    
            // 文字を改行で分解
            var cc = a[i].split(/\<BR\>/gi)
            // 1文字ずつ調査
            for (var j = 0; j < cc.length; j++) {
                var ccc =cc[j].split("");
                var p = 0;
                for (var m = 0; m < ccc.length; m++) {
                    switch(ccc[m]){
                    case '\u2003':
                        p += 12;
                        break;
                    case '\u2002':
                        p += 6;
                        break;
                    case '\u2004':
                        p += 4;
                        break;
                    case '\u2005':
                        p += 3;
                        break;
                    case '\u2006':
                        p += 2;
                        break;
                    case '\u200A':
                        p += 1;
                        break;
                    case '\u005F':
                    case '\u00AF':
                    case '\u2216':
                    case '\uFFE8':
                        p += 6;
                        break;
                    case '\u2580':
                    case '\u2590':
                        p += 8.5;
                        break;
                    case '\u2043':
                        p += 3.692307;
                        break;
                    case '\u01C0':
                        p += 3.111111;
                        break;
                    case '\u207B':
                    case '\u208B':
                        p += 3.466666;
                        break;
                    case '\u002F':
                        p += 5.647058;
                        break;
                            default:
                                // 未登録文字
                                p += 12;
                                break;
                    }
                }
    
                // 終わった時点でp=0ならスルー
                n[j] = {};
                n[j].LINE = j;
                // 余計に削る為ｗｗを足す
                n[j].WIDTH = p;
                n[j].TEXT = cc[j];
                // この時点でw<pなら終了
                if(p>W*12){
                    alert('テンプレ幅超えてます');
                    return;
                }
            }
            // 幅順ソート
            n.sort(function(x,y){
                if(x.WIDTH > y.WIDTH) return -1;
                if(x.WIDTH < y.WIDTH) return 1;
                return 0;
            });
            // n[0]とテンプレ比較して幅足りない分の1/2を左に追加
            // (W*12-n[0].WIDTH)/2
            p = Math.floor((W*12-n[0].WIDTH)/2);
            // 右端のリード削除
            n[0].TEXT = n[0].TEXT.replace(/\s+$/g, "");
        	
            // ID順ソート
            n.sort(function(x,y){
                if(x.LINE > y.LINE) return 1;
                if(x.LINE < y.LINE) return -1;
                return 0;
            });
            if (p != 0){
                for (var j = 0; j < n.length; j++) {
                    if (n[j].TEXT != ""){
                        n[j].TEXT = Array(p+1).join('\u200A') + n[j].TEXT;
                        // 端数処理及び途中の空白含む再変換
                        n[j].TEXT = n[j].TEXT.replace(/[\u200A]{12}/g,'\u2003');
                        n[j].TEXT = n[j].TEXT.replace(/[\u200A]{6}/g,'\u2002');
                        n[j].TEXT = n[j].TEXT.replace(/[\u200A]{4}/g,'\u2004');
                        n[j].TEXT = n[j].TEXT.replace(/[\u200A]{3}/g,'\u2005');
                        n[j].TEXT = n[j].TEXT.replace(/[\u200A]{2}/g,'\u2006');
                        // 余りの処理
                        n[j].TEXT = n[j].TEXT.replace(/[\u2003][\u200A]/g,'\u2002'+ '\u2004'+ '\u2005');
                        n[j].TEXT = n[j].TEXT.replace(/[\u2002][\u200A]/g,'\u2004'+ '\u2005');
                        n[j].TEXT = n[j].TEXT.replace(/[\u2004][\u200A]/g,'\u2005'+ '\u2006');
                    }
                }
            }
            for (var j = 0; j < n.length; j++) {
                $("myTxt" + $('myTrcSel2').value.split(" ")[0]).value += n[j].TEXT + '\n';
            }
            $("myTxt" + $('myTrcSel2').value.split(" ")[0]).value = $("myTxt" + $('myTrcSel2').value.split(" ")[0]).value.slice(0,-1);
        	
        }
    }
    
    ----------------------------------------------------------------------------------------------------*/

    /*----------------------------------------------------------------------------------------------------
    [テキスト表示非表]
    ----------------------------------------------------------------------------------------------------*/
    $('myTrcTxtDisp').onclick = function () {
        if ($('myTrcSel2').value === "") { return; }
        var a = $("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        if (a.style.zIndex == '0') {
            a.style.zIndex = "4";
            $('myTrcTxtDisp').value = "非表示";
            $('myTrcSel2')[$('myTrcSel2').value.split(" ")[0] - 1].text = $('myTrcSel2')[$('myTrcSel2').value.split(" ")[0] - 1].text.replace(/○/g, "●")
        } else {
            a.style.zIndex = "0";
            $('myTrcTxtDisp').value = "表示";
            $('myTrcSel2')[$('myTrcSel2').value.split(" ")[0] - 1].text = $('myTrcSel2')[$('myTrcSel2').value.split(" ")[0] - 1].text.replace(/●/g, "○")
        }
    };

    $('myTrcTxtDispALL').onclick = function () {
        if ($('myTrcSel2').value === "") { return; }
        if ($('myTrcTxtDispALL').value == "一括非表示") {
            $('myTrcTxtDispALL').value = "一括表示";
            for (var i = 0; i < $('myTrcSel2').length; i++) {
                var a = $("myTxt" + (i + 1));
                a.style.zIndex = "0";
                $('myTrcSel2')[i].text = $('myTrcSel2')[i].text.replace(/●/g, "○")
            }
        } else {
            $('myTrcTxtDispALL').value = "一括非表示";
            for (var i = 0; i < $('myTrcSel2').length; i++) {
                var a = $("myTxt" + (i + 1));
                a.style.zIndex = "4";
                $('myTrcSel2')[i].text = $('myTrcSel2')[i].text.replace(/○/g, "●")
            }
        }
    };
    /*----------------------------------------------------------------------------------------------------
    [グリッド]
    ----------------------------------------------------------------------------------------------------*/
    $('myTrcGrdDisp').onclick = function () {
        if ($('myGrd').style.display === "") {
            $('myGrd').style.display = "none";
        } else {
            $('myGrd').src = myExtUrl + "img/" + $('myTrcSel2').value.split(" ")[1] + ".png";
            $('myGrd').style.display = "";
        }
    };
    /*----------------------------------------------------------------------------------------------------
    [スライダー]
    ----------------------------------------------------------------------------------------------------*/
    $('slider1').onclick = function (evt) {
        myDrg = 'R';
        document.onmousemove(evt);
        document.onmouseup();
    };
    $('slider3').onclick = function (evt) {
        myDrg = 'G';
        document.onmousemove(evt);
        document.onmouseup();
    };
    $('slider5').onclick = function (evt) {
        myDrg = 'B';
        document.onmousemove(evt);
        document.onmouseup();
    };
    $('slider2').onmousedown = function (evt) {
        myDrg = 'R';
        return false;
    };

    $('slider4').onmousedown = function (evt) {
        myDrg = 'G';
        return false;
    };

    $('slider6').onmousedown = function (evt) {
        myDrg = 'B';
        return false;
    };
    document.onmouseup = function (evt) {
        switch (myDrg) {
            case 'R':
                $('myTxtR').value = mySldVal;
                break;
            case 'G':
                $('myTxtG').value = mySldVal;
                break;
            case 'B':
                $('myTxtB').value = mySldVal;
                break;
        }
        myDrg = 'F';
    };
    document.onmousemove = function (evt) {
        if (!$('myTxt1')) { return; }
        if (myDrg == 'F') { return; }
        if (!evt) {
            evt = window.event;
        }
        var e;
        var left = evt.clientX;
        var rect;
        var width;
        var v;
        var cwidth;
        switch (myDrg) {
            case 'R':
                rect = $('slider1').getBoundingClientRect();
                e = $('slider2');
                v = $('myTxtR');
                width = e.clientWidth / 2;
                cwidth = $('slider1').clientWidth;
                break;
            case 'G':
                rect = $('slider3').getBoundingClientRect();
                e = $('slider4');
                v = $('myTxtG');
                width = e.clientWidth / 2;
                cwidth = $('slider3').clientWidth;
                break;
            case 'B':
                rect = $('slider5').getBoundingClientRect();
                e = $('slider6');
                v = $('myTxtB');
                width = e.clientWidth / 2;
                cwidth = $('slider5').clientWidth;
                break;
        }
        //  マウス座標とスライダーの位置関係で値を決める
        mySldVal = Math.round(left - rect.left - width);
        //  スライダーからはみ出したとき
        if (mySldVal < 0) {
            mySldVal = 0;
        } else if (mySldVal > cwidth) {
            mySldVal = cwidth;
        }
        e.style.left = (mySldVal - e.clientWidth / 2) + 'px';
        v.value = mySldVal;
        var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
        t.style.color = "#" + parseInt($('myTxtR').value).toString(16).replace(/^[0-9A-F]$/, "0$&") + parseInt($('myTxtG').value).toString(16).replace(/^[0-9A-F]$/, "0$&") + parseInt($('myTxtB').value).toString(16).replace(/^[0-9A-F]$/, "0$&");

        $('myTrcSel2')[$('myTrcSel2').value.split(" ")[0] - 1].style.color = "#" + parseInt($('myTxtR').value).toString(16).replace(/^[0-9A-F]$/, "0$&") + parseInt($('myTxtG').value).toString(16).replace(/^[0-9A-F]$/, "0$&") + parseInt($('myTxtB').value).toString(16).replace(/^[0-9A-F]$/, "0$&");
        return false;
    };
    /*----------------------------------------------------------------------------------------------------
    [キーアップダウン関連]
    ----------------------------------------------------------------------------------------------------*/
    document.onkeypress = function (e) {
        myKey = true;
    };

    document.onkeyup = function (e) {
        if (myRep === false) { return; }
        if (myKey === false) { return; }
        myKey = false;
        if (!e) e = window.event; //  レガシー
        //  出力テスト
        // console.log(e);
        // console.log(e.target.id);
        // console.log(e.keyCode);
        // トレース欄
        if ((e.target.id).slice(0, 5) == 'myTxt') {
            var k = e.key;
            var s;
            switch (k) {
                case ' ': s = '\u2005'; break;
                case '0': s = '\u2000'; break;
                case '1': s = '\u2001'; break;
                case '2': s = '\u2002'; break;
                case '3': s = '\u2003'; break;
                case '4': s = '\u2004'; break;
                case '5': s = '\u2005'; break;
                case '6': s = '\u2006'; break;
                default: return;
            }
            var t = $(e.target.id);
            var i = t.selectionStart;
            t.value = t.value.slice(0, i - 1) + s + t.value.slice(i);
            t.setSelectionRange(i, i);
        }
    };
    /*----------------------------------------------------------------------------------------------------
    [Cookie関連]
    ----------------------------------------------------------------------------------------------------*/
    function mySetCookie(key, val) {
        var tmp = key + "=" + escape(val) + ";";
        tmp += "expires=Fri, 31-Dec-2030 23:59:59;";
        document.cookie = tmp;
    }
    // ----------------------------------------------------------------------------------------------------
    function myGetCookie(key) {
        var tmp = document.cookie + ";";
        var tmp1 = tmp.indexOf(key, 0);
        if (tmp1 != -1) {
            tmp = tmp.substring(tmp1, tmp.length);
            var start = tmp.indexOf("=", 0);
            var end = tmp.indexOf(";", start);
            return (unescape(tmp.substring(start + 1, end)));
        }
        else return ("");
    }
    // ----------------------------------------------------------------------------------------------------
    function myDelCookie(key) {
        var expiredate = new Date();
        expiredate.setYear(expiredate.getYear() - 1);
        var tmp = key + "=;";
        tmp += "expires=" + expiredate.toGMTString();
        document.cookie = tmp;
    }

    /*----------------------------------------------------------------------------------------------------
    [スライダーの代わりの画像から色データを取得する処理]
    ----------------------------------------------------------------------------------------------------*/
    var flags = false;
    var temp_zIndex = [];
    $('myTrcColor').onclick = function () {

        if (flags == false) {
            flags = true; $('myTrcColor').value = "色確定";
            //全レイヤーを一番下に(擬似的に非表示にする)
            for (var i = 0; i < $('myTrcSel2').length; i++) {
                temp_zIndex[i] = $("myTxt" + (i + 1)).style.zIndex;
                $("myTxt" + (i + 1)).style.zIndex = '0';
            }
        } else {
            flags = false; $('myTrcColor').value = "色変更";
            //全レイヤーを一番下に(擬似的に表示にする)
            for (var i = 0; i < $('myTrcSel2').length; i++) {
                $("myTxt" + (i + 1)).style.zIndex = temp_zIndex[i];
                //$("myTxt" + (i+1)).style.zIndex = '4';
            }
        }
    }

    // RGBから#ffffff形式へ変換する
    function RGB2bgColor(r, g, b) {

        r = r.toString(16);
        if (r.length == 1) r = "0" + r;

        g = g.toString(16);
        if (g.length == 1) g = "0" + g;

        b = b.toString(16);
        if (b.length == 1) b = "0" + b;

        return '#' + r + g + b;
    }

    var canvas_color = document.getElementById("myImg");

    if (canvas_color.getContext) {
        // コンテキストの取得
        var ctx = canvas_color.getContext("2d");
    }

    canvas_color.onclick = function (evt) {
        if (flags == true) {
            //  マウス座標の取得
            var x = parseInt(evt.offsetX);
            var y = parseInt(evt.offsetY);

            //  指定座標のImageDataオブジェクトの取得
            var imagedata = ctx.getImageData(x, y, 1, 1);

            //  RGBAの取得
            var r = imagedata.data[0];
            var g = imagedata.data[1];
            var b = imagedata.data[2];
            var a = imagedata.data[3];

            r = parseInt(r).toString(16);
            if (r < 10) r = "0" + r;

            g = parseInt(g).toString(16);
            if (g < 10) g = "0" + g;

            b = parseInt(b).toString(16);
            if (b < 10) b = "0" + b;

            //console.log("Red: " + r + "  Green: " + g + "  Blue: " + b + "  Alpha: " + a);
            //alert("#"+ r + "" + g + "" + b);

            var t = document.getElementById("myTxt" + $('myTrcSel2').value.split(" ")[0]);
            t.style.color = "#" + r + "" + g + "" + b;


        }
    }




/*************************************************
----
*************************************************/









/*
俺のメモ
変数まとめて宣言
var x,y,z;
x=y=z=0;
function numOnly() {
m = String.fromCharCode(event.keyCode);
if("0123456789\b\r".indexOf(m, 0) < 0) return false;
return true;
}
サイズのチェック
body class ="is-large" is-middle
名前空間NG
//コンストラクタ
function Const(){}

//変数
var hensu;

//オブジェクト
var obj1 = {};
obj1.data = { a:1, b:2 };
var obj2 = {};

//関数
function getVal(){
console.log(hensu);
}
名前空間OK
var APP = {}; //グローバル変数はすべて大文字にする、というルールを採用

//その配下にいろいろ定義

//コンストラクタ
APP.Const = function(){};

//変数
APP.hensu = 1;

//オブジェクトの入れ物
APP.myObj = {};

//その中にオブジェクトを入れる
APP.myObj.obj1 = {};
APP.myObj.obj1.data = { a:1, b:2 };
APP.myObj.obj2 = {};
//空のコンストラクタでグローバルオブジェクトを作る
var APP = function(){};

//その配下にいろいろ定義

//プロパティ
APP.Const = function(a,b){
this.hensu = a;
this.myObj = b;
}

//メソッド
APP.Const.prototype.getVal = function(){
return this.hensu + this.myObj;
};

//実行してみる
window.onload = function(){
var a = new APP.Const( 'hello' , 'たろうさん' );
alert(a.getVal()); //helloたろうさん
}
var c = a && b;				// 変数 a が真ならば変数 b を、偽ならば変数 a を変数 c に代入
var d = a || b;				// 変数 a が偽ならば変数 b を、真ならば変数 a を変数 d に代入
*/


})
