import React from 'react';
import Design from './Form-components/Design';
import Fill from './Form-components/Fill';
import Share from './Form-components/Share';
import Collapsable from './Form-components/Collapsable';
import collapsableApi from '../api/collapsableApi.json';
import '../stylesheets/Sass-components/Form.scss';
import PropTypes from 'prop-types';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsable: collapsableApi
        };
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
    }
    render() {
        const data = this.state.collapsable;

        return (
            <form onSubmit={this.handleSubmit} className="form">

                <Collapsable icons={data[0].icon} names={data[0].name}>
                    <Design
                        palettesData={this.props.palettesData}
                        handlePalette={this.props.handlePalette} />
                </Collapsable>

                <Collapsable icons={data[1].icon} names={data[1].name} >
                    <Fill
                        handleInput={this.props.handleInput} file={this.props.file}
                        formData={this.props.formData} />
                </Collapsable>

                <Collapsable icons={data[2].icon} names={data[2].name} >
                    <Share
                        isValidated={this.props.isValidated} generateUrl={this.props.generateUrl} url={this.props.formData.url} />
                </Collapsable>
            </form >
        );
    }
}

Form.propTypes = {
    palettesData: PropTypes.string,
    handlePalette: PropTypes.func,
    handleInput: PropTypes.func,
    formData: PropTypes.object,
    file: PropTypes.string,
    isValidated: PropTypes.bool,
    generateUrl: PropTypes.func,
    url: PropTypes.string,
};

export default Form;