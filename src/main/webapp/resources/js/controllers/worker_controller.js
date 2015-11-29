'use strict';

App.controller('WorkerController', [ 'WorkerService', function(WorkerService) {
    var self = this;
    self.user={id:null,username:'',address:'',email:''};
    self.users=[];
    this.hello = "cos";

    this.navigate = function(arg){
        alert("Cos");
    }



}]);