angular.module("ng").run(["$templateCache", function($templateCache) {$templateCache.put("main-page/main-page.html","<!DOCTYPE html><html lang=\"en\"><body><section class=\"main-page\"><div class=\"row\"><div class=\"home-page-text\"><span>SYSTEM MONITOROWANIA ZAMÓWIEŃ</span></div><hr class=\"intro-divider\"><div class=\"home-page-buttons\"><ul class=\"list-inline\"><li><a href data-ui-sref=\"order-overview\" class=\"main-btn btn btn-default btn-lg\"><h3>Zamówienia</h3></a></li><li><a href data-ui-sref=\"worker-overview\" class=\"main-btn btn btn-default btn-lg\"><h3>Pracownicy</h3></a></li><li><a href data-ui-sref=\"event-overview\" class=\"main-btn btn btn-default btn-lg\"><h3>Statystyki</h3></a></li></ul></div></div></section></body></html>");
$templateCache.put("book-mgmt/book-details/book-details.html","<!DOCTYPE html><html lang=\"en\"><body><section class=\"book-details\"><form name=\"bookDetailsCtrl.bookForm\" novalidate><h1>New book!</h1><!--everything is in one row--><div class=\"row\"><!--oznacza sie id np do latwiejszego testowania--><label class=\"form-label col-md-1 col-sm-3\" for=\"title\">Title:</label><input id=\"title\" name=\"titleField\" type=\"text\" data-ng-model=\"bookDetailsCtrl.book.title\" data-ng-required=\"true\" data-ng-maxlength=\"50\"> <span class=\"error-msg\" data-ng-bind=\"bookDetailsCtrl.getErrorMessageFromField(bookDetailsCtrl.bookForm.titleField)\"></span></div><div class=\"row\"><label class=\"form-label col-md-1 col-sm-3\" for=\"author\">Author:</label><input id=\"author\" name=\"authorField\" type=\"text\" data-ng-model=\"bookDetailsCtrl.book.author\" data-ng-required=\"true\" data-ng-maxlength=\"50\" pattern=\"^\\d{4}-\\d{3}-\\d{4}$\"> <span class=\"error-msg\" data-ng-bind=\"bookDetailsCtrl.getErrorMessageFromField(bookDetailsCtrl.bookForm.authorField)\"></span></div><div class=\"row\"><button type=\"submit\" class=\"btn btn-primary col-md-1 col-md-offset-1\" data-ng-click=\"bookDetailsCtrl.save()\">Save</button></div></form></section></body></html>");
$templateCache.put("book-mgmt/book-overview/book-overview.html","<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"></head><body><h1>Book Overview</h1><table class=\"table table-striped\"><tbody><tr><th>Author</th><th>Title</th><th></th></tr><tr data-ng-repeat=\"book in bookOverviewCtrl.books\"><td data-ng-bind=\"book.author\"></td><td data-ng-bind=\"book.title\"></td><td><a data-ui-sref=\"book-details({bookId : book.id})\">Details</a> <button data-ng-click=\"bookOverviewCtrl.delete(book.id)\">Delete</button></td></tr></tbody></table></body></html>");
$templateCache.put("event-mgmt/event-overview/event-overview.html","<section class=\"event-overview\"><custom-table></custom-table></section>");
$templateCache.put("order-mgmt/components-modal/components-modal.html","<div class=\"modal-header\"><h3 class=\"modal-title\">{{header}}</h3>MODALLLLLLLLLLLLLLLLLLLLLLL</div><div class=\"modal-body\"><ul><div ng-if=\"isBodyArray()\"><div ng-repeat=\"item in body\"><td>{{$index+1}}. {{ item }}</td></div></div><div ng-hide=\"isBodyArray()\">{{ body }}</div></ul></div><div class=\"modal-footer\"><button class=\"btn btn-primary\" type=\"button\" ng-click=\"ok()\">OK</button><!--<button class=\"btn btn-warning\" type=\"button\" ng-click=\"cancel()\">Cancel</button>--></div>");
$templateCache.put("order-mgmt/order-overview/order-overview.html","<section class=\"order-overview\"><!--Górna sekcja strony--><div class=\"container\"><div class=\"row\"><!--Filtracja po frazie--><div class=\"form-group col-sm-4\"><div class=\"input-group\"><div class=\"input-group-addon\"><i class=\"fa fa-search\"></i></div><input type=\"text\" class=\"form-control\" placeholder=\"Szukaj\" data-ng-model=\"orderOverviewCtrl.searchFilter\"></div></div><!--Przyciski Dodaj zamówienie/ synchronizuj--><div class=\"pull-right col-sm-2\"><button data-ng-hide=\"true\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#addWorker\">Dodaj Zamówienie</button> <button type=\"button\" class=\"btn btn-danger\" data-ng-click=\"orderOverviewCtrl.synchronize()\">Synchronizuj Zamówienia</button></div></div></div><!--Sekcja z tabela--><div class=\"container\"><h3 class=\"panel-heading\">Lista Zamówień</h3><table st-table=\"orderOverviewCtrl.orders\" class=\"table table-striped\"><!-- HEAD OF TABLE--><thead><tr><th st-sort=\"id\">Nr</th><th st-sort=\"orderId\">Zamówienie</th><th st-sort=\"birthDate\">Nazwa Klienta</th><th st-sort=\"balance\">Kolor</th><th st-sort=\"balance\">Etap produkcji</th><th st-sort=\"balance\">Rodzaj</th><th st-sort=\"balance\">Data Nadejścia</th><th></th></tr></thead><!-- BODY OF TABLE--><tbody><tr ng-repeat=\"order in orderOverviewCtrl.orders\"><td>{{order.id}}</td><td>{{order.orderId}}</td><td>{{order.customer}}</td><td>{{order.color}}</td><td>{{order.position}}</td><td>{{order.type}}</td><td>{{order.date | date}}</td><td><div class=\"dropdown btn-group inline\" ng-hide=\"editing\"><button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">Czynność <span class=\"caret\"></span></button><ul class=\"dropdown-menu\"><li><a href=\"\" ng-click=\"changeStatus(order.id)\">Zmień status</a></li><li><a href=\"\" ng-click=\"editing=true\">Edytuj</a></li><li><a href=\"\" data-target=\"#confirm-delete\" ng-click=\"setOrderToDelete(order)\" data-toggle=\"modal\">Usuń</a></li><li><a href=\"\" ng-click=\"getComponentsViewForOrder(order)\">Wyświetl elementy</a></li></ul></div><button ng-show=\"editing\" class=\"btn btn-success custom-width\" ng-click=\"changesConfirmed(entry)\">Zatwierdź</button> <button ng-show=\"editing\" class=\"btn btn-danger custom-width\" ng-click=\"editing=false\">Anuluj</button></td></tr></tbody></table><div class=\"pull-left\">Ilość elementów na stronie<select ng-model=\"viewby\" ng-change=\"setItemsPerPage(viewby)\"><option>10</option><option>20</option><option selected=\"selected\">50</option><option>100</option><option>150</option><option>200</option></select></div><div align=\"left\"><pagination total-items=\"totalItems\" ng-model=\"currentPage\" max-size=\"maxSize\" class=\"pagination-sm pull-left\" boundary-links=\"true\" rotate=\"false\" num-pages=\"numPages\" items-per-page=\"itemsPerPage\"></pagination></div></div><div class=\"modal fade\" id=\"confirm-delete\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button><h4 class=\"modal-title\" id=\"myModalLabel\">Usuwanie</h4></div><div class=\"modal-body\"><p>Jesteś pewien, że chcesz usunąć dane zamówienie z listy?</p><p class=\"debug-url\"></p></div><div class=\"modal-footer\"><a class=\"btn btn-danger btn-ok\" ng-click=\"deleteOrder()\" data-dismiss=\"modal\">Usuń</a> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Powrót</button></div></div></div></div><div class=\"modal fade\" id=\"addWorker\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\"><div class=\"modal-content\"><form name=\"orderForm\" ng-submit=\"submit(newOrderForm)\" novalidate><div class=\"modal-header\"><button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button><h4 class=\"modal-title\">Dodawanie nowego zamówienia</h4></div><div class=\"modal-body\"><div class=\"row form-group\" ng-class=\"{ \'has-error\' : orderForm.order_id.$invalid && !orderForm.order_id.$pristine }\"><div class=\"col-sm-6 edit-locale-label\"><strong>Numer zamówienia:</strong></div><div class=\"col-sm-6\"><input type=\"text\" name=\"order_id\" class=\"form-control\" ng-model=\"newOrder.order_id\" ng-minlength=\"3\" required><p ng-show=\"orderForm.order_id.$invalid && !orderForm.order_id.$pristine\" class=\"help-block\">Wprowadzony numer zamówienia jest za krótki.</p></div></div><div class=\"row form-group\" ng-class=\"{ \'has-error\' : orderForm.customer.$invalid && !orderForm.customer.$pristine }\"><div class=\"col-sm-6 edit-locale-label\"><strong>Nazwa Klient:</strong></div><div class=\"col-sm-6\"><input type=\"text\" name=\"customer\" class=\"form-control\" ng-model=\"newOrder.customer\" ng-minlength=\"3\" required><p ng-show=\"orderForm.surname.$invalid && !orderForm.customer.$pristine\" class=\"help-block\">Wprowadzona nazwa klienta jest za krótka.</p></div></div><div class=\"row form-group\" ng-class=\"{ \'has-error\' : orderForm.color.$invalid && !orderForm.color.$pristine }\"><div class=\"col-sm-6 edit-locale-label\"><strong>Kolor:</strong></div><div class=\"col-sm-6\"><input type=\"text\" name=\"color\" class=\"form-control\" ng-model=\"newOrder.color\" ng-minlength=\"3\" required><p ng-show=\"orderForm.color.$invalid && !orderForm.color.$pristine\" class=\"help-block\">Wprowadzona nazwa koloru jest za krótka</p></div></div><div class=\"row form-group\" ng-class=\"{ \'has-error\' : orderForm.express.$invalid }\"><div class=\"col-sm-6 edit-locale-label\"><strong>Express:</strong></div><div class=\"col-sm-6\"><select class=\"form-control\" name=\"\" size=\"1\" ng-model=\"newOrder.express\" ng-init=\"newOrder.express=yesNo[0]\" ng-options=\"option for option in yesNo\" required></select><span ng-show=\"orderForm.express.$error.required\">Przypisz pozycję dla pracownika.</span></div></div></div><div class=\"modal-footer\" style=\"margin-top:  0px\"><button type=\"button\" class=\"btn btn-default pull-left\" data-dismiss=\"modal\"><span class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\" data-dismiss=\"modal\"></span> Powrót</button> <button class=\"btn btn-success pull-right\" type=\"submit\" ng-click=\"addWorker(newOrder)\" data-dismiss=\"modal\" ng-disabled=\"orderForm.$invalid\"><span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span> Dodaj</button></div></form></div></div></div></section>");
$templateCache.put("worker-mgmt/worker-overview/worker-overview.html","<section class=\"worker-overview\"><div class=\"container\"><h3 class=\"panel-heading\">Lista Pracowników</h3><table st-table=\"workerOverviewCtrl.worker\" class=\"table table-striped\"><thead><tr><td colspan=\"2\"><div class=\"text-left table-length\"><span>Pokaż</span><select ng-init=\"pagSize = 5\" ng-model=\"pagSize\" ng-change=\"workerOverviewCtrl.updatePagination(pagSize)\" ng-options=\"x for x in workerOverviewCtrl.paginationSizes\"></select><span>pozycji</span></div></td><td colspan=\"3\"><input type=\"text\" class=\"pull-right form-control table-filter\" placeholder=\"Szukaj\" st-search=\"\"></td></tr><tr><th st-sort=\"code\">Kod pracownika</th><th st-sort=\"firstName\">Imię</th><th st-sort=\"surname\">Nazwisko</th><th st-sort=\"position\">Pozycja</th><th></th></tr></thead><tbody><tr ng-repeat=\"worker in workerOverviewCtrl.worker\"><td>{{worker.code}}</td><td>{{worker.firstName}}</td><td>{{worker.surname}}</td><td>{{worker.position}}</td><td><div class=\"dropdown btn-group inline\" ng-hide=\"editing\"><button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"><i class=\"fa fa-cog\" aria-hidden=\"true\"></i></button><ul class=\"dropdown-menu\"><li><a href=\"\" ng-click=\"getComponentsViewForOrder(order)\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i> Wyświetl statystki</a></li><li><a href=\"\" ng-click=\"editing=true\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> Edytuj</a></li><li><a href=\"\" data-target=\"#confirm-delete\" ng-click=\"setOrderToDelete(order)\" data-toggle=\"modal\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> Usuń</a></li></ul></div></td></tr></tbody><tfoot><tr><td colspan=\"5\" class=\"text-right\"><div st-pagination=\"\" st-items-by-page=\"workerOverviewCtrl.itemsByPage\" st-template=\"../../table/pagination.html\"></div></td></tr></tfoot></table></div></section>");
$templateCache.put("general/directives/custom-table/custom-table.directive.html","dyrektywa");}]);