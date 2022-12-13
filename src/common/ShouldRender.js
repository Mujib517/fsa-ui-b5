import React from 'react';

const ShouldRender = ({ cond, children }) => {
    return cond ? children : null;
};

export default ShouldRender;