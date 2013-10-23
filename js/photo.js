$(document).ready( function() {
    //weida
    $("span#p_weida.people").hover(
        function(){
            $("div.bounding-box").removeClass("active");
            $("div#box_weida.bounding-box").addClass("active");
            $(this).addClass("active");
            console.log("weida in");
        },
        function(){
            $("div#box_weida.bounding-box").removeClass("active");
            $(this).removeClass("active");
            console.log("weida out");
        }
    );

    //ruobing
    $("span#p_ruobing.people").hover(
        function(){
            $("div.bounding-box").removeClass("active");
            $("div#box_ruobing.bounding-box").addClass("active");
            $(this).addClass("active");
            console.log("ruobing in");
        },
        function(){
            $("div#box_ruobing.bounding-box").removeClass("active");
            $(this).removeClass("active");
            console.log("ruobing out");
        }
    );

    //sirui
    $("span#p_sirui.people").hover(
        function(){
            $("div.bounding-box").removeClass("active");
            $("div#box_sirui.bounding-box").addClass("active");
            $(this).addClass("active");
            console.log("sirui in");
        },
        function(){
            $("div#box_sirui.bounding-box").removeClass("active");
            $(this).removeClass("active");
            console.log("sirui out");
        }
    );

    //zhijing
    $("span#p_zhijing.people").hover(
        function(){
            $("div.bounding-box").removeClass("active");
            $("div#box_zhijing.bounding-box").addClass("active");
            $(this).addClass("active");
            console.log("zhijing in");
        },
        function(){
            $("div#box_zhijing.bounding-box").removeClass("active");
            $(this).removeClass("active");
            console.log("zhijing out");
        }
    );

    //yuwei
    $("span#p_yuwei.people").hover(
        function(){
            $("div.bounding-box").removeClass("active");
            $("div#box_yuwei.bounding-box").addClass("active");
            $(this).addClass("active");
            console.log("yuwei in");
        },
        function(){
            $("div#box_yuwei.bounding-box").removeClass("active");
            $(this).removeClass("active");
            console.log("yuwei out");
        }
    );

    //xuhui
    $("span#p_xuhui.people").hover(
        function(){
            $("div.bounding-box").removeClass("active");
            $("div#box_xuhui.bounding-box").addClass("active");
            $(this).addClass("active");
            console.log("xuhui in");
        },
        function(){
            $("div#box_xuhui.bounding-box").removeClass("active");
            $(this).removeClass("active");
            console.log("xuhui out");
        }
    );

    //xiaolong
    $("span#p_xiaolong.people").hover(
        function(){
            $("div.bounding-box").removeClass("active");
            $("div#box_xiaolong.bounding-box").addClass("active");
            $(this).addClass("active");
            console.log("xiaolong in");
        },
        function(){
            $("div#box_xiaolong.bounding-box").removeClass("active");
            $(this).removeClass("active");
            console.log("xiaolong out");
        }
    );
});