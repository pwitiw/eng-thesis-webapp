<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page language="java" pageEncoding="UTF-8" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<br><br>

<h3>WPROWADŹ INFORMACJE O ZAMÓWIENIU:</h3><br>

<form data-toggle="validator" action="/orders/add" method="POST" role="form" id="signInForm" class="form-horizontal"
      accept-charset="UTF-8"
      data-remote="true">
    <div class="form-group">
        <label class="control-label col-xs-1">ID Zamówienia</label>

        <div class="col-xs-3">
            <input type="text" class="form-control" id="order_id" name="order_id" placeholder="ID Zamówienia"
                   required>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-1">Nazwa Klienta</label>

        <div class="col-xs-3">
            <input type="text" class="form-control" id="customer" name="customer" placeholder="Nazwa Klienta"
                   required>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-1">Ilość Elementów</label>

        <div class="col-xs-3">
            <input type="number" min="1" class="form-control" id="amount" name="amount"
                   placeholder="Ilość Elementów"
                   required>
        </div>
    </div>

    <div class="form-group">
        <label class="control-label col-xs-1">Kolor</label>

        <div class="col-xs-3">
            <input type="text" class="form-control" id="color" name="color" placeholder="Kolor"
                   required>
        </div>
    </div>
    <div class="form-group">
        <label class="control-label col-xs-1">Express</label>

        <div class="col-xs-3">
            <input type="number" min="0" max="1" class="form-control" id="express" name="express"
                   placeholder="Express"
                   required>
        </div>
    </div>
    <div class="form-group">
        <div class="col-xs-1"></div>
        <div class="col-xs-offset-2 col-xs-10">
            <button type="submit" class="btn btn-default">Dodaj</button>

        </div>

    </div>
</form>
