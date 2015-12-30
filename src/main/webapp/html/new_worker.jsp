<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<br><br>

<h3>WPROWADŹ DANE PRACOWNIKA:</h3><br>

<form data-toggle="validator" action="add" method="POST" role="form" id="signInForm" class="form-horizontal" accept-charset="UTF-8"
      data-remote="true">
    <div class="form-group">
        <label class="control-label col-xs-1">Imie</label>

        <div class="col-xs-3">
            <input type="text" class="form-control" id="name" name="name" placeholder="Imię"
                   required>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-1">Nazwisko</label>

        <div class="col-xs-3">
            <input type="text" class="form-control" id="surname" name="surname" placeholder="Nazwisko"
                   required>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-1">Pozycja</label>

        <div class="col-xs-3">
            <input type="number" min="1" max="6" class="form-control" id="position" name="position" placeholder="Pozycja"
                   required>
        </div>
    </div>

    <div class="form-group">
        <label class="control-label col-xs-1">Identyfikator</label>

        <div class="col-xs-3">
            <input type="number" min="100" max="999"class="form-control" id="id" name="id" placeholder="Identyfikator"
                   required>
        </div>
    </div>
    <div class="form-group">
        <div class="col-xs-1" ></div>
            <div class="col-xs-offset-2 col-xs-10">
                <button type="submit" class="btn btn-default">Dodaj</button>

        </div>

    </div>
</form>