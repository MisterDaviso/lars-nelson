import React from 'react';
import { Document, Page } from 'react-pdf'

const Resume = props => {
    return (
        <div>
            <Document file="../files/LarsNelsonResume.pdf" />
        </div>
    )
}

export default Resume