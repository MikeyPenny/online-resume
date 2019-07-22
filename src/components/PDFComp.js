import React, { Component } from 'react';
import "./Resume.css";

import PDF from 'react-pdf-js';

class Resume extends Component {
    
    state = {};

    onDocumentComplete = (pages) => {
        this.setState({ page: 1, pages });
    }

    handlePreviuos = () => {
        this.setState({ page: this.state.page - 1 });
    }

    handleNext = () => {
        this.setState({ page: this.state.page + 1 });
    }

    renderPagination = () => {
        return (
            <>
                <button onClick={this.handlePrevious}>Prev</button>
                <button onClick={this.handleNext}>Next</button>
            </>
        );
    }

    render() { 

        let pagination = null;

        if (this.state.pages > 1) {
            pagination = this.renderPagination();
        }

        return (
            <div className="resume-container">
                <div className="title-container">
                    <h1>Resume works!</h1>
                </div>
                <div className="pdf-container">
                    <PDF
                        file='test.pdf'
                        page={this.state.page}
                        onDocumentComplete={this.onDocumentComplete}
                    />
                    {pagination}
                </div>
                
            </div>
        );
    }
}
 
export default Resume;