import * as React from "react";
// IMPORT ANY NEEDED COMPONENTS HERE
import { createDataSet } from "./data/dataset";
import "./App.css";
import { Instructions } from "./components/Instructions/Instructions.jsx";
import { Header } from "./components/Header/Header.jsx";
import { DataSource } from "./components/DataSource/DataSource.jsx";
import { MenuDisplay } from "./components/MenuDisplay/MenuDisplay.jsx";
import { CategoriesColumn } from "./components/CategoriesColumn/CategoriesColumn.jsx";
import { RestaurantsRow } from "./components/RestaurantsRow/RestaurantsRow.jsx";
import { useState } from "react";

// don't move this!
export const appInfo = {
    title: `Fast Food Feud 🍔!`,
    tagline: `Folks' Favorite Friendly Fuel Finder For Food Facts`,
    description: `Finding healthy food is hard. Sometimes we just settle for what's available. That doesn't mean we shouldn't know what's going into our bodies! Fast Food Feud is here to arm the public with all the nutritional facts needed to make informed decisions about fast food consumption.`,
    dataSource: `All data pulled from the MenuStat.org interactive online database.`,
    instructions: {
        start: `Start by clicking on a food category on the left and a fast food joint from the list above. Afterwards, you'll be able to choose from a list of menu items and see their nutritional content.`,
        onlyCategory: `Now select a fast food restaurant from the list above!`,
        onlyRestaurant: `Now select a category from the list on the left!`,
        noSelectedItem: `Almost there! Choose a menu item and you'll have the fast food facts right at your fingertips!`,
        allSelected: `Great choice! Amazing what a little knowledge can do!`,
    },
};
// or this!
const { data, categories, restaurants } = createDataSet();



export function App() {
    const [category, setCategory] = useState(null);
    const categoryClick = (e) => {
        setCategory(category == e ? null : e);
        setSelectedMenuItem(null);
    };

    const [rest, setRest] = useState(null);
    const restClick = (e) => {
        setRest(rest == e ? null : e);
        setSelectedMenuItem(null);
    };

    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const selectedClick = (e) => {
        setSelectedMenuItem(selectedMenuItem == e ? null : e);
    };

    let currentMenuItems = data.filter((e) => {
        if (category === e.food_category && rest === e.restaurant) {
            return e;
        }
    });

    function changeInstruction() {
        if (category && rest && selectedMenuItem) return appInfo.instructions["allSelected"];
        if (category && rest) return appInfo.instructions["noSelectedItem"];
        if (category) return appInfo.instructions["onlyCategory"];
        if (rest) return appInfo.instructions["onlyRestaurant"];
        return appInfo.instructions["start"];
    }
    
    changeInstruction();
    return (
        <main className="App">
            {/* CATEGORIES COLUMN */}
            <CategoriesColumn
                categories={categories}
                category={category}
                categoryClick={categoryClick}
            />
            {/* MAIN COLUMN */}
            <div className="container">
                <Header
                    title={appInfo.title}
                    tagline={appInfo.tagline}
                    description={appInfo.description}
                />
                {/* HEADER GOES HERE */}
                {/* RESTAURANTS ROW */}
                <RestaurantsRow
                    restaurants={restaurants}
                    rest={rest}
                    restClick={restClick}
                    setRest={setRest}
                />
                {/* INSTRUCTIONS GO HERE */}
                <Instructions instructions={changeInstruction()} />
                {/* MENU DISPLAY */}
                <MenuDisplay
                    currentMenuItems={currentMenuItems}
                    selectedMenuItem={selectedMenuItem}
                    selectedClick={selectedClick}
                    setSelectedMenuItem={setSelectedMenuItem}
                />
                <DataSource appInfo={appInfo} />
            </div>
        </main>
    );
}

export default App;
