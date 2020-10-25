import React from 'react';
import '../assets/styles/components/bg-wraper-container.css';

function BgWraperContainer({ children }) {
    return (
        <div className="contact-details">
            {children}
        </div>
    );
}

export default BgWraperContainer;