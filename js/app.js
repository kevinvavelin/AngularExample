      var app = angular.module("Chat", ["firebase"]);

      app.controller("ChatController", ["$scope", "$firebaseArray",
        function($scope, $firebaseArray) {

          var ref = new Firebase("VOTRE_ADRESSE_FIREBASE");

          $scope.messages = $firebaseArray(ref);

          $scope.addMessage = function(e) {

            if (e.keyCode === 13 && $scope.msg) {

              var name = $scope.name || "Anonyme";

              $scope.messages.$add({
                from: name,
                body: $scope.msg
              });

              $scope.msg = "";
            }
          }
        }
      ]);