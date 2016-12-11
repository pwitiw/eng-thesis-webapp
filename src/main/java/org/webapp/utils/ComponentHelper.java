package org.webapp.utils;

import org.webapp.entities.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Patryk on 09.04.2016.
 */
public class ComponentHelper {

    public static List<Component> parseComponents(String data) {
        data = data.substring(2);
        String[] splittedData = data.split("~");
        if (splittedData.length == 5 && splittedData[0].equals(""))
            return null;
        List<Component> components = new ArrayList();
        Component component = new Component();
        for (int i = 0; i < splittedData.length; i++) {
            if (i % 5 == 0)
                component.setHeight(Integer.parseInt(splittedData[i]));
            else if (i % 5 == 1)
                component.setWidth(Integer.parseInt(splittedData[i]));
            else if (i % 5 == 2)
                component.setAmount(Integer.parseInt(splittedData[i]));
            else if (i % 5 == 3)
                component.setComment(splittedData[i++]); //double incrementation (for the future)
        }
        return components;
    }
}
