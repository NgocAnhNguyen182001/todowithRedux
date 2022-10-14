import React, { createContext, useState } from "react";
const listContext = createContext();

function ListTodosProvider({children}) {
    <listContext.Provider >
        {children}
    </listContext.Provider>

}

export {listContext, ListTodosProvider}