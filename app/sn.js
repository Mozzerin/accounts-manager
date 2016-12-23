var app = angular.module ('sn-directives', []);

app.directive ("companiesAddAccount", function () {
    return {
        restrict:     "E",
        templateUrl:  "companies-addAccount.html",
        controller:   function () {
            this.account = {};

            this.addAccount = function (company) {
                this.account.photo='img/man1.png'; //hardcoded photo
                company.accounts.push(this.account);

                this.account = {};
            };
        },
        controllerAs: "addAccCtrl"
    };
});

app.directive("companiesDivider", function () {
    return {
        restrict: "E",
        templateUrl: "companies-accountsDivider.html"
    };
});

app.directive("companiesAccounts", function () {
    return {
        restrict: "E",
        templateUrl: "companies-accounts.html"
    };
});

app.directive("companiesNavigation", function () {
    return {
        restrict: "E",
        templateUrl: "companies-navigation.html",
        controller: function () {
            this.tab = 'Google';

            this.isSet = function (checkTab) {
                return this.tab === checkTab;
            };

            this.setTab = function (activeTab) {
                this.tab = activeTab;
            };
        },
        controllerAs: "tabCtrl"
    };
});

app.directive("companiesAccountView", function () {
    return {
        restrict: "E",
        templateUrl: "companies-accountView.html"
    };
});
