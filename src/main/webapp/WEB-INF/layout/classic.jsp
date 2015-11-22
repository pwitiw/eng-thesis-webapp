<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<!DOCTYPE html>
<html>
<head>
    <link rel="icon" type="image/gif" href="/resources/static/icon.png">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js"></script>
    <link href="<c:url value="/resources/css/bootstrap.css" />" rel="stylesheet">
    <link rel="stylesheet"
          href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

    <link rel="stylesheet"
          href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

    <link rel="stylesheet" type="text/css" href="/resources/css/table.css">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title><tiles:getAsString name="title"/></title>
</head>
<body>

<tilesx:useAttribute name="current"/>
<div class="center-children">
    </centered><img src="/resources/static/logo.jpg"/>
</div>

<div >

    <!-- Static navbar -->
    <div class="navbar navbar-inverse" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="<spring:url value="/" />">FRONTWIT</a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                    <li class="${current == 'home' ? 'active' : ''}"><a href='<spring:url value="/" />'>Strona Główna</a>
                    </li>

                    <li class="${current == 'orders' ? 'active' : ''}"><a href="<spring:url value="/orders/list" />">Zamówienia</a>
                    </li>
                    <li class="${current == 'workers' ? 'active' : ''}"><a
                            href="<spring:url value="/workers/all" />">Pracownicy</a>
                    </li>
                    <li class="${current == 'worker_statistic' ? 'active' : ''}"><a
                            href="<spring:url value="/workers/statistic" />">Statystyki Pracowników</a>
                    </li>
                    <%-- <li class="${current == 'login' ? 'active' : ''}"><a
                             href="<spring:url value="/login.html" />">Login</a></li>
                       <li class="${current == 'account' ? 'active' : ''}"><a href="<spring:url value="/account.html" />">My account</a></li>
                       <li><a href="<spring:url value="/logout" />">Logout</a></li>--%>
                </ul>
            </div>
        </div>
    </div>

<div class="container">
    <tiles:insertAttribute name="body"/>
</div>
    <br>
    <br>
    <center>
        <tiles:insertAttribute name="footer"/>
    </center>

</div>

<script src="<c:url value="/resources/js/table.js" />"></script>

<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>

<script type="text/javascript"
        src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.min.js"></script>

<script
        src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>

</body>
</html>