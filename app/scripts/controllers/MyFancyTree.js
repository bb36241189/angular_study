/**
 * Created by shmily on 2017/3/13.
 */

app.controller('MyFancyTree',[function () {
    
}]).factory('RolesClassFactory',[function () {
     var TreeNode,Tree;
     (TreeNode = function TreeNode(nodeData) {
            angular.extend(this, nodeData);
         this.linkedNodeObj = {};
     }).prototype = {};
     Object.defineProperties(TreeNode.prototype,{
        key : {
            get : function () {
                return this.id;
            }
        },
        title : {
            get : function () {
                return this.description;
            }
        },
         folder : {
             get : function(){
                 return this.child && this.child.length > 0
             }
         },
         children : {
             get : function () {
                 var i,ret=[];
                 if(this.child && !this.__children){
                     for(i = 0;i<this.child.length ;i++){
                         ret.push(n = new TreeNode(this.child[i]));
                     }
                     this.__children = ret;
                     return ret;
                 }else {
                     return this.__children;
                 }
             }
         }
    });


     (Tree = function Tree(treeDatas) {
         this.treeNode = new TreeNode({child : treeDatas});
         this.tree = this.treeNode.children;
         this.selectedTreeNodes = [];
     }).prototype = {
         setTree : function (treeNodes) {
             this.tree = array;
         },
         selectTreeNode : function (treeNodes) {
             this.selectedTreeNodes = treeNodes;
         },
         getTree : function(){
             return this.tree;
         },
         line : '------',
         _getTreeNodesWithSelectedStatus : function (treeNodes,selected) {
             var i,line=this.line;
             for(i = 0;i<treeNodes.length ;i++){
                 console.log('开始处理节点:'+line+ treeNodes[i].title+"("+treeNodes[i].key+")");
                 if(exist(treeNodes[i],selected)){
                     treeNodes[i].selected = true;
                     console.log('selected');
                 }
                 if(treeNodes[i].children && treeNodes[i].children.length > 0){
                     this.line += '-----';
                     this._getTreeNodesWithSelectedStatus(treeNodes[i].children,selected);
                     this.line = this.line.substring(0,this.line.length-5);
                 }
                 //console.log('结束处理节点:'+line+ treeNodes[i].title);
             }

             function exist(treeNode,selected){
                 var i,ret = false;
                 if(!selected){
                     return false;
                 }else{
                     for(i = 0 ;i<selected.length;i++){
                         if(treeNode.key == selected[i].key){
                             ret = true;
                             break;
                         }else{
                             ret = exist(treeNode,selected[i].children);
                             if(ret)break;
                         }
                     }
                 }

                 return ret;
             }
             return treeNodes;
         },
         getTreeWithSeletedStatus : function () {
             return this._treeWithSelectedStatus;
         },
         /**
          * 获取节点简单信息
          * @param outerNodes
          * @param strict 严格模式需要检查节点选择状态
          * @returns {Array}
          */
         getSelectedNodesSimple : function (outerNodes,strict) {
             var nodesSimple = [];
             function get(nodes){
                 var i;
                 if(!nodes){
                     return;
                 }
                 for(i = 0 ;i<nodes.length;i++){
                     if(strict && nodes[i].selected || !strict){
                         nodesSimple.push({ id : nodes[i].key,is_special : nodes[i].data.is_special});
                     }
                     if(!outerNodes){
                         get(nodes[i].children);
                     }
                 }
             }
             get.call(this,outerNodes || this.getTreeWithSeletedStatus());
             return nodesSimple;
         },
         getSelectedNodeKeys : function (outerNodes) {
             var keys = [];
             function get(nodes){
                 var i;
                 if(!nodes){
                     return;
                 }
                 for(i = 0 ;i<nodes.length;i++){
                     if(nodes[i].selected){
                         keys.push(nodes[i].key);
                     }
                     if(!outerNodes){
                         get(nodes[i].children);
                     }
                 }
             }
             get(outerNodes || this.getTreeWithSeletedStatus());
             return keys;
         }
     };

     Object.defineProperties(Tree.prototype,{
         _treeWithSelectedStatus : {
             get : function () {
                 return this._getTreeNodesWithSelectedStatus(this.tree,this.selectedTreeNodes);
             }
         }
     });
     /************************************/

     return {
         TreeNode : TreeNode,
         Tree : Tree
     }
 }]).factory('TreeNodeUtil', function () {
     return {
          /**
          * 判断一个节点是否在数组里面
          * @param node
          * @param nodes2
          * @returns {boolean}
          */
         inside : function(node,nodes2){
             var j;ret = false;
             for(j = 0 ;j < nodes2.length ;j ++){
                 if(node.key == nodes2[j].key){
                     ret = true;
                     break
                 }
             }
             return ret;
         },

         /**
          * 合并两个节点列表
          * @param nodes1
          * @param nodes2
          */
         mergeRepeatNodes : function(nodes1,nodes2){
             var i,nodeArray1 = nodes1,nodeArray2 = nodes2;
             for(i = 0 ;i < nodeArray1.length ;i++){
                 if(!this.inside(nodeArray1[i],nodeArray2)){
                     nodeArray2.push(nodeArray1[i])
                 }
             }
             return nodes2;
         },

         /**
          * 获取所有选择节点以及他们的祖先节点
          * @param nodes
          */
         getSelectedNodesContainParent : function(nodes){
             var self = this;
             return nodes.reduce(function (prev,n) {
                 return self.mergeRepeatNodes(prev,self.getAncestorsByNode(n));
             },[]);
         },
         /**
          * 获取节点的所有祖先节点
          * @param node
          * @returns {Array.<T>}
          */
         getAncestorsByNode : function(node){
             var self = [node],ancestor = [];
             if(node.parent && node.parent.title != 'root'){
                 ancestor = this.getAncestorsByNode(node.parent);
             }
             return Array.prototype.concat(self,ancestor);
         }
     };
 }).directive("permenusTree", ['$timeout','TreeNodeUtil',function($timeout,TreeNodeUtil){
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
                            scope.select = TreeNodeUtil.getSelectedNodesContainParent(data.tree.getSelectedNodes());
                        },
                        select: function(event, data) {
                            scope.select = TreeNodeUtil.getSelectedNodesContainParent(data.tree.getSelectedNodes());
                            scope.$apply();
                        }
                    });
                }
            });

        }
    };
}]);