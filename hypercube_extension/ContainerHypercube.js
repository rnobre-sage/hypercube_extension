import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ViewHypercube from './ViewHypercube';
import {
    listPerson
} from './ActionHypercube';

class ContainerHypercube extends Component {
    render(){
        return <ViewHypercube />
    }
}

const mapStateToProps = state => ({
    listPerson: state.HypercubePerson.list,
    currentPage: state.HypercubePerson.currentPage,
    pageCount: state.HypercubePerson.pageCount,
    pageSize: state.HypercubePerson.pageSize,
    rowCount: state.HypercubePerson.rowCount,
    firstRowOnPage: state.HypercubePerson.firstRowOnPage,
    lastRowOnPage: state.HypercubePerson.lastRowOnPage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    listPerson
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ContainerHypercube);