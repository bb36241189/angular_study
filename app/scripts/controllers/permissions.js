/**
 * Created by shmily on 2017/3/8.
 */

app.controller('PermissionsCollect',['$http',function ($http) {

    /*********************************dcos****************************************/
    var permissions = 'json/permissions.json';
    var roles = 'json/roles.json';
    var rolesById = 'json/rolesById.json';
    
    
    var getPermissions = function (params) {
        return $http.get(permissions,{
            params : params
        });
    };

    var getRoles = function (params) {
        return $http.get(roles,{
            params : params
        });
    };
    
    var getRolesById = function (id,params) {
        return $http.get(rolesById,{
            params : params
        })
    };
    getPermissions({
        sid:'668fac5e-4b9c-471a-968a-8479488e3e31',
        time:'1488956263703'
    }).then(function (ret) {
        console.log(ret.data);
    });
    getRoles({
        sid:'668fac5e-4b9c-471a-968a-8479488e3e31',
        time:'1488956238671'
    }).then(function (ret) {
        console.log(ret.data);
    });
    getRolesById('22486b9748234eb3990696ee25b3c41d',{
        sid : '668fac5e-4b9c-471a-968a-8479488e3e31',
        time : '1488956263772'
    }).then(function (ret) {
        console.log(ret.data);
    });

    /***********************************************ÕþÎñÔÆ*****************************************************/
    var load = 'json/load.json';
    var gcloud_role = 'json/gcloud_role.json';
    var gcloud_role_desk_By_id = 'json/gcoud_role_desk.json';
    var putGcloudRoleLink = 'json/put_gcloud_role.json';
    var getLoad = function () {
        return $http.get(load)
    };
    var getGcloudRole = function () {
        return $http.get(gcloud_role);
    };
    var getGcloudRoleDeskById = function (id,params) {
        return $http.get(gcloud_role_desk_By_id,{
            params : params
        })
    };
    var putGcloudRole = function (params) {
        return $http.put(putGcloudRoleLink,params);
    };
    getLoad().then(function (ret) {
        console.log(ret.data);
    });
    getGcloudRole().then(function (ret) {
        console.log(ret.data);
    });
    getGcloudRoleDesk('3b4fe446-db3a-4951-a12c-e63542776a7e',{
        roleType:2
    }).then(function (ret) {
        console.log(ret.data);
    });
    putGcloudRole({
        delFlag: "0",
        permission: "dfe828ec-ba94-11e6-b5c1-005056bc32ac,ed5bc60b-c825-11e6-b5c1-005056bc32ac#fb73c909-b6d6-11e6-b5c1-005056bc32ac,4c55f5a3-c825-11e6-b5c1-005056bc32ac#00f0ebb7-b6d7-11e6-b5c1-005056bc32ac,bd1e4e98-c825-11e6-b5c1-005056bc32ac",
        roleId:"3b4fe446-db3a-4951-a12c-e63542776a7e",
        roleName:"ryf",
        roleType:"2"
    }).then(function (ret) {
        console.log(ret.data);
    })
    
    
}]);