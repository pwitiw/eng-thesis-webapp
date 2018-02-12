package com.frontwit.app.migration;

import com.frontwit.app.entities.*;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

/**
 * Created by Patryk on 09.03.2017.
 */
public class OrderMapper {

    boolean isNewParser;
    TZamowieniaEntity z;
    Customer c;
    Map<Long, TDictionaryEntity> dictionaryMap;

    public OrderMapper(TZamowieniaEntity z, Customer c, Map<Long, TDictionaryEntity> dictionaryMap) {
        this.z = z;
        this.c = c;
        this.dictionaryMap = dictionaryMap;
    }

    public Order create() {
        //todo zoptymalizowac synchro tutaj jakby dac jeden warunek dla wszystkich
        setParsingMethod();
        Order o = parseOrder();
        o.addToComponent(getComponents());
        if (o.getComponents() == null)
            return null;
        o.setCustomer(c);
        if (o.getCustomer() == null)
            return null;
        o.setColor(getColor());

        return o;
    }

    private Order parseOrder() {
        Order o = new Order();
        o.setId(z.getId());
        o.setName(z.getNumer());
        o.setDate(z.getData_z());
        o.setLastUpdate(new Date());
        o.setDbId(z.getId());
        o.setPosition(new Position());
        o.getPosition().setId(1L);
        o.setComment(z.getOpis());
        return o;
    }

    private List<Component> getComponents() {
        List<Component> components = new ArrayList<>();
        JSONArray jsonArray;
        if (isNewParser) {
            try {
                jsonArray = new JSONArray(z.getPozycje());
                for (int i = 0; i < jsonArray.length(); i++) {
                    Component c = createComponentFromJson(jsonArray.getJSONObject(i));
                    components.add(c);
                }
            } catch (JSONException ex) {
                if (z.getPozycje().toCharArray()[0] == '[')
                    return null;
                JSONObject json = new JSONObject(z.getPozycje());
                for (int i = 0; i < json.length(); i++) {
                    try {
                        Component c = createComponentFromJson(json.getJSONObject(Integer.toString(i)));
                        components.add(c);
                    } catch (JSONException e) {
                        return null;
                    }
                }
            }
        } else {
            components = null;
        }
        return components;
    }

    public Component createComponentFromJson(JSONObject json) throws JSONException {
        Component c = new Component();
        c.setWidth(json.getInt("w"));
        c.setHeight(json.getInt("l"));
        c.setAmount(json.getInt("q"));
//        JSONObject jsonCechy = json.getJSONObject("cechy");
        StringBuilder commentBuilder = new StringBuilder();
        //comment
        commentBuilder.append(json.getString("com") + " ");
        //size
        commentBuilder.append(dictionaryMap.get(json.getLong("si")).getName() + " ");
        //side
        commentBuilder.append("str." + json.getInt("do") + " ");
        //cutter
        commentBuilder.append(dictionaryMap.get(json.getLong("cu")).getName() + " ");
        c.setComment(commentBuilder.toString());
        return c;
    }

    private String getColor() {
        String color;
        if (isNewParser)
            color = dictionaryMap.get(new JSONObject(z.getCechy()).getLong("co")).getName();
        else {
            color = "";
//            String[] cechy = z.getCechy().split("~");
//            color = cechy.length == 7 ? cechy[6] : "";
        }
        return color;
    }

    private void setParsingMethod() {
        isNewParser = !((z.getPozycje().indexOf('~') != -1) || z.getPozycje().equals(""));
    }

}

