/**
 * Created by shmily on 2017/3/8.
 */

app.directive("permenusTree", ['$timeout',function($timeout){
    return{
        restrict:"A",
        scope:{
            permenusTree:"=",
            select:"="
        },
        link:function(scope,ele,attrs,ctl){
            var selectMode = $(ele).attr('selectMode');
            scope.$watch("permenusTree",function(nv){
                if(nv){
                     $(ele).html('<div class="permenusInner"></div>');
                    $(ele).find('.permenusInner').fancytree({
                        checkbox: true,
                        selectMode: parseInt(selectMode),
                        source:nv,
                        init:function(event, data){
                            scope.select = (data.tree.getRootNode());
                        },
                        select: function(event, data) {
                            scope.select = (data.tree.getRootNode());
                            scope.$apply();
                        }
                    });
                }
            });

        }
    };
}]);