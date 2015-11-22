<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="java.util.List" %>
<!DOCTYPE html ng-app>
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
    <button type="button" ng-click="ctrl.add(u.id)" class="btn btn-primary custom-width">Dodaj
        Pracownika
    </button>
</div>
<br><br>
<div class="row">

    <div class="panel panel-default filterable">
        <div class="panel-heading">
            <h3 class="panel-title panel-default custom-element">Pracownicy</h3>
        </div>
        <table class="table test">
            <thead>
            <tr class="filters">
                <th><input type="text" class="form-control" placeholder="Imie" disabled></th>
                <th><input type="text" class="form-control" placeholder="Nazwisko" disabled></th>
                <th><input type="text" class="form-control" placeholder="Pozycja" disabled></th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${workers}" var="worker">
                <tr>
                    <td>${worker.name}</td>
                    <td>${worker.surname}</td>
                    <td>${worker.position}</td>
                    <td>
                        <button type="button" ng-click="ctrl.edit(u.id)" class="btn btn-success custom-width">Edytuj
                        </button>
                        <button type="button" ng-click="ctrl.remove(u.id)" class="btn btn-danger custom-width">Usuń
                        </button>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>
</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="/resources/js/table.js"></script>


</body>
