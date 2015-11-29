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
</head>
<body>
<div class="pull-right">
    <button type="button" class="btn btn-primary custom-width" onclick="window.location.href='new'">Dodaj
        Pracownika
    </button>
</div>
<br><br>

<div class="row">

    <div class="panel panel-default filterable">
        <div class="panel-heading">
            <h3 class="panel-title panel-default custom-font-weight">Pracownicy</h3>
        </div>
        <table class="table table-striped test">
            <thead>
            <tr class="filters ">
                <th><input type="text" class="form-control custom-element" placeholder="Kod pracownika" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Imie" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Nazwisko" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Pozycja" disabled></th>
                <th><input type="text" class="form-control custom-element" placeholder="Identyfikator" disabled></th>
            </tr>
            </thead>
            <tbody>
            <c:forEach items="${workers}" var="worker">
                <tr class="workers">
                    <td class="code">${worker.code}</td>
                    <td>${worker.name}</td>
                    <td>${worker.surname}</td>
                    <td>${worker.position}</td>
                    <td>${worker.id}</td>
                    <td>

                        <a href="edit?code=${worker.code}" class="btn btn-success">Edytuj</a>
                        <button role="button" class="btn btn-danger custom-width" name="remove-worker"
                                onclick="deleteWorker(${worker.code})">Usuń
                        </button>
                    </td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>
</div>
</body>
