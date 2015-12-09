<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page import="java.util.List" %>
<!DOCTYPE html>
<body lang="en">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<head>
</head>
<body>
<div class="pull-right">
    <button type="button" class="btn btn-primary " onclick="window.location.href='new'">Dodaj
        Zamówienie
    </button>
</div>
<br><br>

<div class="row">
    <div class="panel panel-default filterable">
        <div class="panel-heading ">
            <h3 class="panel-title custom-font-weight">Lista zamówień</h3>

            <div class="pull-right">
                <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span>
                    Filter
                </button>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
            <tr class="filters">
                <th><input type="text" class="form-control custom-element" placeholder="Nr Zamówienia" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Nazwa Klienta" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Kolor" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Ilość Sztuk" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Etap Produkcji" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Express" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Ostatnia operacja" disabled>
                </th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${orders}" var="order">
                <tr>
                    <td>${order.id} - ${order.order_id}</td>
                    <td>${order.customer}</td>
                    <td>${order.color}</td>
                    <td>${order.amount}</td>
                    <td>${order.stage}</td>
                    <td>${order.express == 1 ? 'TAK': '-'}</td>
                    <td>${fn:substring((order.last_update),0 , 16)}</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>
</div>
</body>
