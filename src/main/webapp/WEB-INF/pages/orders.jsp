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
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css">
</head>
<body>

<div class="row">
    <div class="panel panel-success filterable">
        <div class="panel-heading">
            <h3 class="panel-title">Lista zamówień</h3>

            <div class="pull-right">
                <button class="btn btn-default btn-xs btn-filter"><span class="glyphicon glyphicon-filter"></span>
                    Filter
                </button>
            </div>
        </div>
        <table class="table">
            <thead>
            <tr class="filters">
                <th><input type="text" class="form-control" placeholder="ID" disabled></th>
                <th><input type="text" class="form-control" placeholder="Nazwa Klienta" disabled></th>
                <th><input type="text" class="form-control" placeholder="Etap Produkcji" disabled></th>
                <th><input type="text" class="form-control" placeholder="Username" disabled></th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${orders}" var="order">
                <tr>
                    <td>${order.id}</td>
                    <td>${order.id}</td>
                    <td>${order.id}</td>
                    <td>${order.id}</td>
                    <td>${order.id}</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>
</div>
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
</body>
