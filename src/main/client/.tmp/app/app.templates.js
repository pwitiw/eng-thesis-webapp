angular.module("ng").run(["$templateCache", function($templateCache) {$templateCache.put("main-page/main-page.html","<!DOCTYPE html><html lang=\"en\"><body><section class=\"main-page\"><div class=\"row\"><div class=\"home-page-text\"><span>SYSTEM MONITOROWANIA ZAMÓWIEŃ</span></div><hr class=\"intro-divider\"><div class=\"home-page-buttons\"><ul class=\"list-inline\"><li><a href data-ui-sref=\"order-overview\" class=\"main-btn btn btn-default btn-lg\"><h3>Zamówienia</h3></a></li><li><a href data-ui-sref=\"worker-overview\" class=\"main-btn btn btn-default btn-lg\"><h3>Pracownicy</h3></a></li><li><a href data-ui-sref=\"event-overview\" class=\"main-btn btn btn-default btn-lg\"><h3>Statystyki</h3></a></li></ul></div></div></section></body></html>");
$templateCache.put("book-mgmt/book-details/book-details.html","<!DOCTYPE html><html lang=\"en\"><body><section class=\"book-details\"><form name=\"bookDetailsCtrl.bookForm\" novalidate><h1>New book!</h1><!--everything is in one row--><div class=\"row\"><!--oznacza sie id np do latwiejszego testowania--><label class=\"form-label col-md-1 col-sm-3\" for=\"title\">Title:</label><input id=\"title\" name=\"titleField\" type=\"text\" data-ng-model=\"bookDetailsCtrl.book.title\" data-ng-required=\"true\" data-ng-maxlength=\"50\"> <span class=\"error-msg\" data-ng-bind=\"bookDetailsCtrl.getErrorMessageFromField(bookDetailsCtrl.bookForm.titleField)\"></span></div><div class=\"row\"><label class=\"form-label col-md-1 col-sm-3\" for=\"author\">Author:</label><input id=\"author\" name=\"authorField\" type=\"text\" data-ng-model=\"bookDetailsCtrl.book.author\" data-ng-required=\"true\" data-ng-maxlength=\"50\" pattern=\"^\\d{4}-\\d{3}-\\d{4}$\"> <span class=\"error-msg\" data-ng-bind=\"bookDetailsCtrl.getErrorMessageFromField(bookDetailsCtrl.bookForm.authorField)\"></span></div><div class=\"row\"><button type=\"submit\" class=\"btn btn-primary col-md-1 col-md-offset-1\" data-ng-click=\"bookDetailsCtrl.save()\">Save</button></div></form></section></body></html>");
$templateCache.put("book-mgmt/book-overview/book-overview.html","<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"></head><body><h1>Book Overview</h1><table class=\"table table-striped\"><tbody><tr><th>Author</th><th>Title</th><th></th></tr><tr data-ng-repeat=\"book in bookOverviewCtrl.books\"><td data-ng-bind=\"book.author\"></td><td data-ng-bind=\"book.title\"></td><td><a data-ui-sref=\"book-details({bookId : book.id})\">Details</a> <button data-ng-click=\"bookOverviewCtrl.delete(book.id)\">Delete</button></td></tr></tbody></table></body></html>");
$templateCache.put("event-mgmt/event-overview/event-overview.html","<section class=\"event-overview\"><div class=\"container\"><div class=\"table-options\"><span>Statystyki</span></div><table st-table=\"eventOverviewCtrl.displayed\" st-safe-src=\"eventOverviewCtrl.events\" class=\"table table-striped\"><thead><tr><td colspan=\"2\"><div class=\"text-left table-length\"><span>Pokaż</span><select ng-init=\"pagSize = 5\" ng-model=\"pagSize\" ng-change=\"eventOverviewCtrl.updatePagination(pagSize)\" ng-options=\"x for x in eventOverviewCtrl.paginationSizes\"></select><span>pozycji</span></div></td><td colspan=\"5\"><input type=\"text\" class=\"pull-right form-control table-filter\" placeholder=\"Szukaj\" ng-model=\"eventOverviewCtrl.workerCode\" st-search=\"worker.code\"></td></tr><tr><th st-sort=\"id\">Id</th><th st-sort=\"orderNumber\">Numer zamówienia</th><th st-sort=\"orderStage\">Etap</th><th st-sort=\"worker.code\">Kod pracownika</th><th st-sort=\"element\">Brakujące elementy</th><th st-sort=\"date\">Data wystawienia</th><th></th></tr></thead><tbody><tr ng-repeat=\"event in eventOverviewCtrl.displayed\"><td>{{event.id}}</td><td>{{event.orderNumber}}</td><td>{{event.orderStage}}</td><td>{{event.worker.code}} <a uib-popover=\"{{event.worker.firstName}} {{event.worker.surname}} - {{event.worker.position}}\" popover-title=\"Pracownik\" popover-trigger=\"\'mouseenter\'\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i></a></td><td>{{event.element}}</td><td>{{event.date}}</td><td><div class=\"dropdown btn-group inline\" ng-hide=\"editing\"><button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></button><ul class=\"dropdown-menu\"><li><a href=\"\" data-target=\"#confirm-delete\" ng-click=\"eventOverviewCtrl.delete(event.id)\" data-toggle=\"modal\"><i uib-popover=\"sdds\" popover-title=\"title\" class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Usuń</a></li></ul></div></td></tr></tbody><tfoot><tr><td colspan=\"5\" class=\"text-right\"><div st-pagination=\"\" st-items-by-page=\"eventOverviewCtrl.itemsByPage\" st-template=\"../../table/pagination.html\"></div></td></tr></tfoot></table></div></section>");
$templateCache.put("order-mgmt/components-modal/components-modal.html","<div class=\"modal-header\"><span>Lista elementów</span> <a ng-show=\"!componentsModalCtrl.editMode\" href=\"\" ng-click=\"componentsModalCtrl.cancel()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a></div><div class=\"modal-body\"><section ng-show=\"!componentsModalCtrl.editMode\"><table st-table=\"componentsModalCtrl.displayed\" st-safe-src=\"componentsModalCtrl.components\" class=\"table table-striped\"><thead><tr><td colspan=\"7\"><input type=\"text\" class=\"pull-right form-control table-filter\" placeholder=\"Szukaj\" st-search=\"\"></td></tr><tr><th st-sort=\"id\">Id</th><th st-sort=\"width\">Szerokość</th><th st-sort=\"height\">Wysokość</th><th st-sort=\"amount\">Ilość elementów</th><th st-sort=\"missing\">Ilość brakujących elementów</th><th st-sort=\"comment\">Komentarz</th><th></th></tr></thead><tbody><tr ng-repeat=\"component in componentsModalCtrl.displayed\"><td>{{component.id}}</td><td><div contenteditable=\"true\" data-ng-click=\"editComponent\">{{component.width}}</div></td><td>{{component.height}}</td><td>{{component.amount}}</td><td>{{component.missing}}</td><td>{{component.comment}}</td><td><div class=\"dropdown btn-group inline\" ng-hide=\"editing\"><button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></button><ul class=\"dropdown-menu\"><li><a href=\"\" ng-click=\"componentsModalCtrl.editComponent(component)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edytuj</a></li><li><a href=\"\" data-target=\"#confirm-delete\" ng-click=\"componentsModalCtrl.delete(component)\" data-toggle=\"modal\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Usuń</a></li></ul></div></td></tr></tbody><tfoot><tr><td colspan=\"9\" class=\"text-right\"><div st-pagination=\"\" st-items-by-page=\"5\" st-template=\"../../table/pagination.html\"></div></td></tr></tfoot></table></section><section ng-show=\"componentsModalCtrl.editMode\"><form class=\"form-horizontal\" name=\"newComponentForm\" novalidate><!-- width --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newComponentForm.width.$invalid && !newComponentForm.width.$pristine }\"><label class=\"control-label col-sm-3\">Szerokość</label><div class=\"col-sm-9\"><input type=\"number\" name=\"width\" class=\"form-control\" ng-model=\"componentsModalCtrl.component.width\" required><p ng-show=\"newComponentForm.width.$invalid && !newComponentForm.width.$pristine\" class=\"help-block\">Zamówienie jest wymagane.</p></div></div><!-- height --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newComponentForm.height.$invalid && !newComponentForm.height.$pristine }\"><label class=\"control-label col-sm-3\">Wysokość</label><div class=\"col-sm-9\"><input type=\"number\" name=\"height\" class=\"form-control\" ng-model=\"componentsModalCtrl.component.height\" required><p ng-show=\"newComponentForm.height.$invalid && !newComponentForm.height.$pristine\" class=\"help-block\">Nazwa klienta jest wymagana.</p></div></div><!-- amount --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newComponentForm.amount.$invalid && !newComponentForm.amount.$pristine }\"><label class=\"control-label col-sm-3\">Ilość elementów</label><div class=\"col-sm-9\"><input type=\"number\" name=\"amount\" class=\"form-control\" ng-model=\"componentsModalCtrl.component.amount\" required><p ng-show=\"newComponentForm.amount.$invalid && !newComponentForm.amount.$pristine\" class=\"help-block\">Etap produkcji jest wymagany.</p></div></div><!-- missing --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newComponentForm.missing.$invalid && !newComponentForm.missing.$pristine }\"><label class=\"control-label col-sm-3\">Ilość brakujących elementów</label><div class=\"col-sm-9\"><input type=\"number\" name=\"missing\" class=\"form-control\" ng-model=\"componentsModalCtrl.component.missing\" required><p ng-show=\"newComponentForm.missing.$invalid && !newComponentForm.missing.$pristine\" class=\"help-block\">Etap produkcji jest wymagany.</p></div></div><!-- comment --><div class=\"form-group\"><label class=\"control-label col-sm-3\">Komentarz</label><div class=\"col-sm-9\"><input type=\"text\" name=\"comment\" class=\"form-control\" ng-model=\"componentsModalCtrl.component.comment\"></div></div></form></section></div><div class=\"modal-footer\"><button ng-show=\"!componentsModalCtrl.editMode\" class=\"btn btn-primary\" ng-click=\"componentsModalCtrl.add()\">Dodaj element</button> <button ng-show=\"!componentsModalCtrl.editMode\" class=\"btn btn-primary\" ng-click=\"componentsModalCtrl.ok()\">Aktualizuj</button> <button ng-show=\"componentsModalCtrl.editMode\" class=\"btn btn-primary\" ng-click=\"componentsModalCtrl.back()\">Cofnij</button> <button ng-show=\"componentsModalCtrl.editMode\" type=\"submit\" class=\"btn btn-primary\" ng-click=\"componentsModalCtrl.save(componentsModalCtrl.component)\">Zapisz</button></div>");
$templateCache.put("order-mgmt/components-modal/order-modal.html","<div class=\"modal-header\"><span>Dodaj nowe zamówienie</span> <a href=\"\" ng-click=\"orderModalCtrl.cancel()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a></div><div class=\"modal-body order-modal-body\"><section><form class=\"form-horizontal\" name=\"newOrderForm\" novalidate><!-- ORDER --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newOrderForm.name.$invalid && !newOrderForm.name.$pristine }\"><label class=\"control-label col-sm-3\">Zamówienie</label><div class=\"col-sm-9\"><input type=\"text\" name=\"name\" class=\"form-control\" ng-model=\"orderModalCtrl.order.name\" required><p ng-show=\"newOrderForm.name.$invalid && !newOrderForm.name.$pristine\" class=\"help-block\">Zamówienie jest wymagane.</p></div></div><!-- CLIENT --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newOrderForm.customer.$invalid && !newOrderForm.customer.$pristine }\"><label class=\"control-label col-sm-3\">Nazwa klienta</label><div class=\"col-sm-9\"><input type=\"text\" name=\"customer\" class=\"form-control\" ng-model=\"orderModalCtrl.order.customer\" required><p ng-show=\"newOrderForm.customer.$invalid && !newOrderForm.customer.$pristine\" class=\"help-block\">Nazwa klienta jest wymagana.</p></div></div><!-- POSITION --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newOrderForm.position.$invalid && !newOrderForm.position.$pristine }\"><label class=\"control-label col-sm-3\">Etap produkcji</label><div class=\"col-sm-9\"><select name=\"position\" class=\"form-control\" ng-model=\"orderModalCtrl.order.position\" required><option ng-repeat=\"x in orderModalCtrl.positions\" value=\"{{x.name}}\">{{x.name}}</option></select><p ng-show=\"newOrderForm.position.$invalid && !newOrderForm.position.$pristine\" class=\"help-block\">Etap produkcji jest wymagany.</p></div></div><!-- TYPE --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newOrderForm.express.$invalid && !newOrderForm.express.$pristine }\"><label class=\"control-label col-sm-3\">Rodzaj</label><div class=\"col-sm-9\"><select name=\"express\" class=\"form-control\" ng-model=\"orderModalCtrl.order.express\" required><option value=\"1\">express</option><option value=\"0\">normalny</option></select><p ng-show=\"newOrderForm.express.$invalid && !newOrderForm.express.$pristine\" class=\"help-block\">Rodzaj jest wymagany.</p></div></div><!-- STATUS --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newOrderForm.active.$invalid && !newOrderForm.active.$pristine }\"><label class=\"control-label col-sm-3\">Status</label><div class=\"col-sm-9\"><select name=\"active\" class=\"form-control\" ng-model=\"orderModalCtrl.order.active\" required><option value=\"1\">Aktywny</option><option value=\"0\">Nieaktywny</option></select><p ng-show=\"newOrderForm.active.$invalid && !newOrderForm.active.$pristine\" class=\"help-block\">Rodzaj jest wymagany.</p></div></div><!-- DATE --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newOrderForm.date.$invalid && !newOrderForm.date.$pristine }\"><label class=\"control-label col-sm-3\">Data</label><div class=\"col-sm-9\"><input type=\"date\" name=\"date\" class=\"form-control\" ng-model=\"orderModalCtrl.order.date\" required><p ng-show=\"newOrderForm.date.$invalid && !newOrderForm.date.$pristine\" class=\"help-block\">Data jest wymagana.</p></div></div></form></section></div><div class=\"modal-footer\"><button type=\"submit\" class=\"btn btn-primary\" ng-click=\"orderModalCtrl.ok(orderModalCtrl.order)\" ng-disabled=\"newOrderForm.$invalid\">Zapisz</button></div>");
$templateCache.put("order-mgmt/order-overview/order-overview.html","<section class=\"order-overview\"><div class=\"container\"><div class=\"table-options\"><span>Lista Zamówień </span><button class=\"btn btn-success\" ng-click=\"\">Synchronizuj</button></div><table st-table=\"orderOverviewCtrl.displayed\" st-safe-src=\"orderOverviewCtrl.orders\" class=\"table table-striped\"><thead><tr><td colspan=\"2\"><div class=\"text-left table-length\"><span>Pokaż</span><select ng-init=\"pagSize = 5\" ng-model=\"pagSize\" ng-change=\"orderOverviewCtrl.updatePagination(pagSize)\" ng-options=\"x for x in orderOverviewCtrl.paginationSizes\"></select><span>pozycji</span></div></td><td colspan=\"7\"><input type=\"text\" class=\"pull-right form-control table-filter\" placeholder=\"Szukaj\" st-search=\"\"></td></tr><tr><th st-sort=\"id\">Id</th><th st-sort=\"name\">Zamówienie</th><th st-sort=\"customer\">Nazwa klienta</th><th st-sort=\"position\">Etap produkcji</th><th st-sort=\"express\">Rodzaj</th><th st-sort=\"active\">Status</th><th st-sort=\"date\">Data nadejścia</th><th></th></tr></thead><tbody><tr ng-repeat=\"order in orderOverviewCtrl.displayed\"><td>{{order.id}}</td><td>{{order.name}}</td><td>{{order.customer}}</td><td>{{order.position}}</td><td>{{order.express ? \'EXPRESS\' : \'NORMALNY\'}}</td><td>{{order.active ? \'Aktywny\' : \'Nieaktywny\'}}</td><td>{{order.date | date: \'yyyy-MM-dd\'}}</td><td><div class=\"dropdown btn-group inline\" ng-hide=\"editing\"><button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></button><ul class=\"dropdown-menu\"><li><a href=\"\" ng-click=\"orderOverviewCtrl.openComponents(order.id)\"><i class=\"fa fa-list\" aria-hidden=\"true\"></i> Elementy</a></li><li><a href=\"\" ng-click=\"orderOverviewCtrl.changeType(order.id)\"><i class=\"fa fa-exchange\" aria-hidden=\"true\"></i> Zmień status</a></li><li><a href=\"\" ng-click=\"orderOverviewCtrl.editOrder(order.id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edytuj</a></li><li><a href=\"\" data-target=\"#confirm-delete\" ng-click=\"orderOverviewCtrl.delete(order.id)\" data-toggle=\"modal\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Usuń</a></li></ul></div></td></tr></tbody><tfoot><tr><td colspan=\"9\" class=\"text-right\"><div st-pagination=\"\" st-items-by-page=\"orderOverviewCtrl.itemsByPage\" st-template=\"../../table/pagination.html\"></div></td></tr></tfoot></table></div></section>");
$templateCache.put("worker-mgmt/components-modal/worker-modal.html","<div class=\"modal-header\"><span>Dodaj nowego pracownika</span> <a href=\"\" ng-click=\"workerModalCtrl.cancel()\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a></div><div class=\"modal-body\"><form name=\"newUserForm\" novalidate><!-- CODE --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newUserForm.code.$invalid && !newUserForm.code.$pristine }\"><label>Kod pracownika</label><input type=\"number\" name=\"code\" class=\"form-control\" ng-maxlength=\"3\" ng-minlength=\"3\" ng-model=\"workerModalCtrl.user.code\" required><p ng-show=\"newUserForm.name.$invalid && !newUserForm.name.$pristine\" class=\"help-block\">Kod jest wymagany. Kod musi składać się z 3 znaków.</p></div><!-- NAME --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newUserForm.name.$invalid && !newUserForm.name.$pristine }\"><label>Imię</label><input type=\"text\" name=\"name\" class=\"form-control\" ng-model=\"workerModalCtrl.user.name\" required><p ng-show=\"newUserForm.name.$invalid && !newUserForm.name.$pristine\" class=\"help-block\">Imię jest wymagane.</p></div><!-- USERNAME --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newUserForm.surname.$invalid && !newUserForm.surname.$pristine }\"><label>Nazwisko</label><input type=\"text\" name=\"surname\" class=\"form-control\" ng-model=\"workerModalCtrl.user.surname\" required><p ng-show=\"newUserForm.surname.$invalid && !newUserForm.surname.$pristine\" class=\"help-block\">Nazwisko jest wymagane.</p></div><!-- POSITION --><div class=\"form-group\" ng-class=\"{ \'has-error\' : newUserForm.position.$invalid && !newUserForm.position.$pristine }\"><label>Pozycja</label><select name=\"position\" class=\"form-control\" ng-model=\"workerModalCtrl.user.position\" required><option ng-repeat=\"x in workerModalCtrl.positions\" value=\"{{x.name}}\">{{x.name}}</option></select><p ng-show=\"newUserForm.position.$invalid && !newUserForm.position.$pristine\" class=\"help-block\">Pozycja jest wymagana.</p></div></form></div><div class=\"modal-footer\"><button type=\"submit\" class=\"btn btn-primary\" ng-click=\"workerModalCtrl.ok(workerModalCtrl.user.code, workerModalCtrl.user.name, workerModalCtrl.user.surname, workerModalCtrl.user.position)\" ng-disabled=\"newUserForm.$invalid\">Dodaj</button></div>");
$templateCache.put("worker-mgmt/worker-overview/worker-overview.html","<section class=\"worker-overview\"><div class=\"container\"><div class=\"table-options\"><span>Lista Pracowników </span><button class=\"btn btn-success\" ng-click=\"workerOverviewCtrl.addUser()\"><!--ng-click=\"workerOverviewCtrl.add(\'178\', \'Adam\', \'Kot\', \'Pakowacz\')\"--> Dodaj pracownika</button></div><table st-table=\"workerOverviewCtrl.displayed\" st-safe-src=\"workerOverviewCtrl.worker\" class=\"table table-striped\"><thead><tr><td colspan=\"2\"><div class=\"text-left table-length\"><span>Pokaż</span><select ng-init=\"pagSize = 5\" ng-model=\"pagSize\" ng-change=\"workerOverviewCtrl.updatePagination(pagSize)\" ng-options=\"x for x in workerOverviewCtrl.paginationSizes\"></select><span>pozycji</span></div></td><td colspan=\"4\"><input type=\"text\" class=\"pull-right form-control table-filter\" placeholder=\"Szukaj\" st-search=\"\"></td></tr><tr><th st-sort=\"id\">Id</th><th st-sort=\"code\">Kod pracownika</th><th st-sort=\"name\">Imię</th><th st-sort=\"surname\">Nazwisko</th><th st-sort=\"position\">Pozycja</th><th></th></tr></thead><tbody><tr ng-repeat=\"worker in workerOverviewCtrl.displayed\"><td>{{worker.id}}</td><td>{{worker.code}}</td><td>{{worker.name}}</td><td>{{worker.surname}}</td><td>{{worker.position}}</td><td><div class=\"dropdown btn-group inline\" ng-hide=\"editing\"><button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></button><ul class=\"dropdown-menu\"><li><a href=\"\" ng-click=\"\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i> Wyświetl statystki</a></li><li><a href=\"\" ng-click=\"workerOverviewCtrl.editUser(worker.id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edytuj</a></li><li><a href=\"\" data-target=\"#confirm-delete\" ng-click=\"workerOverviewCtrl.delete(worker.id)\" data-toggle=\"modal\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Usuń</a></li></ul></div></td></tr></tbody><tfoot><tr><td colspan=\"5\" class=\"text-right\"><div st-pagination=\"\" st-items-by-page=\"workerOverviewCtrl.itemsByPage\" st-template=\"../../table/pagination.html\"></div></td></tr></tfoot></table></div></section>");
$templateCache.put("general/directives/custom-table/custom-table.directive.html","dyrektywa");}]);