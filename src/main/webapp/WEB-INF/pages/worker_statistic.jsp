<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="java.util.List" %>
<!DOCTYPE html>
<body lang="en">
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="">
<meta name="author" content="">
<head>

    <script>
        var myApp = angular.module('myApp', [require('angular-ui-router')]);
    </script>
</head>
<body>

<div class="row">
    <div class="panel panel-default filterable">
        <div class="panel-heading ">
            <h3 class="panel-title custom-element">Lista zamówień</h3>
            <div class="pull-right">
                <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span>
                    Filter
                </button>
            </div>
        </div>
        <table class="table">
            <thead>
            <tr class="filters">
                <th><input type="text" class="form-control" placeholder="Nr zamówienia" disabled></th>
                <th><input type="text" class="form-control" placeholder="Etap" disabled></th>
                <th><input type="text" class="form-control" placeholder="Pracownik" disabled></th>
                <th><input type="text" class="form-control" placeholder="Brakujące elementy" disabled></th>
                <th><input type="text" class="form-control" placeholder="Data wykonania" disabled></th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${events}" var="event">
                <tr>
                    <td>${event.prim.order_id}</td>
                    <td>${event.prim.stage}</td>
                    <td>${event.worker}</td>
                    <td>${event.missing}</td>
                    <td>${event.date}</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>
</div>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
</body>