import React from 'react';

const IdContext = React.createContext(null);

export const IdProvider = IdContext.Provider;
export const IdConsumer = IdContext.Consumer;

export default IdContext; 