/**
 * Created by Administrator on 2018/1/10.
 * form by �úú�����
 * email 1570302023@qq.com
 *
 *
 *
 */

$(function(){
    $('.bot-img ul li').click(function(){
        var _this=$(this);
        _this.addClass('active').siblings('li').removeClass('active');
        var int=_this.index();
        $('.activeimg').animate({left:int*-725},"slow");
    });
    var list=$('.bot-img ul li').length;
    $('.activeimg').css({
        width:list*725,
    });
    $('.rights').click(function(){
        next(list)
    })
    $('.lefts').click(function(){
        prev(list)
    });

    //�Զ����� 2�벥��һ�� ����ѭ��
    var timer='';
    var num=0;
    timer=setInterval(function(){ //�򿪶�ʱ��
        num++;
        if(num>parseFloat(list)-1){
            num=0;
            $('.activeimg').animate({left:num*-725},"slow");
        }else{
            $('.activeimg').animate({left:num*-725},"slow");
        }
        // ������
        $('.bot-img ul li').eq(num).addClass('active').siblings('li').removeClass('active')
    },3000);
})
var index=0;
//��һ��
function next(list){
    if(index<list-1){
        index++;
        $('.activeimg').animate({left:index*-725},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }else{
        index=0;
        // $('.activeimg').animate({left:index*-522},"slow");
        $('.activeimg').animate({left:index*-725},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }
}
//        ��һ��
function prev(list){
    index--;
    if(index<0){
        index=list-1;
        $('.activeimg').animate({left:index*-725},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }else{
        $('.activeimg').animate({left:index*-725},"slow");
        $('.bot-img ul li').eq(index).addClass('active').siblings('li').removeClass('active')
    }
}


