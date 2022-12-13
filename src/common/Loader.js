import React from 'react';

const Loader = () => <div className="loader" style={{ width: "50px", height: "40px", backgroundColor: '#fff', position: "absolute", top: "40%", left: "48%" }}>
    <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
</div>;

export default Loader;
