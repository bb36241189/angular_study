/**
 * Created by shmily on 2017/3/8.
 */

app.controller('TestPermenusTree',['$scope',function ($scope) {
    $scope.treeData = [
  {
    "title": "配置模板",
    "key": "dfe828ec-ba94-11e6-b5c1-005056bc32ac",
    "folder": true,
    "children": [
      {
        "title": "配置模板查看",
        "key": "ed5bc60b-c825-11e6-b5c1-005056bc32ac",
        "folder": true,
        "selected": true
      }
    ]
  },
  {
    "title": "云主机",
    "key": "fb73c909-b6d6-11e6-b5c1-005056bc32ac",
    "folder": true,
    "children": [
      {
        "title": "云主机查看",
        "key": "4c55f5a3-c825-11e6-b5c1-005056bc32ac",
        "folder": true,
        "selected": true
      }
    ]
  },
  {
    "title": "主机组",
    "key": "00f0ebb7-b6d7-11e6-b5c1-005056bc32ac",
    "folder": true,
    "children": [
      {
        "title": "主机组查看",
        "key": "bd1e4e98-c825-11e6-b5c1-005056bc32ac",
        "folder": true,
        "selected": true
      }
    ]
  },
  {
    "title": "镜像",
    "key": "0500226f-b6d7-11e6-b5c1-005056bc32ac",
    "folder": true,
    "children": [
      {
        "title": "镜像查看",
        "key": "1abf83e6-c826-11e6-b5c1-005056bc32ac",
        "folder": true,
        "selected": false
      }
    ]
  },
  {
    "title": "网络",
    "key": "0b8e254c-b6d7-11e6-b5c1-005056bc32ac",
    "folder": true,
    "children": [
      {
        "title": "网络查看",
        "key": "2c013ae6-c826-11e6-b5c1-005056bc32ac",
        "folder": true,
        "selected": false
      }
    ]
  }
] ;

}]);