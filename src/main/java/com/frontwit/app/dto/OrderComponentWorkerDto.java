package com.frontwit.app.dto;

/**
 * Created by Patryk on 17.01.2017.
 */
public class OrderComponentWorkerDto {

    OrderComponentDto orderComponentDto;
    WorkerDto workerDto;

    public OrderComponentDto getOrderComponentDto() {
        return orderComponentDto;
    }

    public void setOrderComponentDto(OrderComponentDto orderComponentDto) {
        this.orderComponentDto = orderComponentDto;
    }

    public WorkerDto getWorkerDto() {
        return workerDto;
    }

    public void setWorkerDto(WorkerDto workerDto) {
        this.workerDto = workerDto;
    }
}
