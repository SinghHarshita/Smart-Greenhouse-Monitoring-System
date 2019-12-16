import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { injectIntl} from 'react-intl';
import {
  Row,
  Card,
  CardBody,
  NavItem,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Badge,
  Collapse,
  ButtonDropdown,
  CustomInput,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import Select from "react-select";
import CustomSelectInput from "Components/CustomSelectInput";

import { Colxx, Separator } from "Components/CustomBootstrap";
import { BreadcrumbItems } from "Components/BreadcrumbContainer";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import ApplicationMenu from "Components/ApplicationMenu";

import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import {
  getTodoList,
  getTodoListWithFilter,
  getTodoListWithOrder,
  getTodoListSearch,
  addTodoItem,
  selectedTodoItemsChange
} from "Redux/actions";

class TodoApplication extends Component {
  constructor(props) {
    super(props);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleDisplayOptions = this.toggleDisplayOptions.bind(this);

    this.state = {
      dropdownSplitOpen: false,
      modalOpen: false,
      lastChecked: null,

      title: "",
      detail: "",
      label: {},
      category: {},
      status: "PENDING",
      displayOptionsIsOpen:false
    };
  }

  componentDidMount() {
    this.props.getTodoList();
  }

  toggleDisplayOptions() {
    this.setState({ displayOptionsIsOpen: !this.state.displayOptionsIsOpen });
  }

  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  toggleSplit() {
    this.setState(prevState => ({
      dropdownSplitOpen: !prevState.dropdownSplitOpen
    }));
  }

  addFilter(column, value) {
    this.props.getTodoListWithFilter(column, value);
  }
  changeOrderBy(column) {
    this.props.getTodoListWithOrder(column);
  }
  addNetItem() {
    const newItem = {
      title: this.state.title,
      detail: this.state.detail,
      label: this.state.label.value,
      labelColor: this.state.label.color,
      category: this.state.category.value,
      status: this.state.status
    };
    this.props.addTodoItem(newItem);
    this.toggleModal();
    this.setState({
      title: "",
      detail: "",
      label: {},
      category: {},
      status: "PENDING"
    });
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.getTodoListSearch(e.target.value);
    }
  }

  handleCheckChange(event, id) {
    if (this.state.lastChecked == null) {
      this.setState({
        lastChecked: id
      });
    }

    let selectedItems = Object.assign([], this.props.todoApp.selectedItems);
    if (selectedItems.includes(id)) {
      selectedItems = selectedItems.filter(x => x !== id);
    } else {
      selectedItems.push(id);
    }
    this.props.selectedTodoItemsChange(selectedItems);

    if (event.shiftKey) {
      var items = this.props.todoApp.todoItems;
      var start = this.getIndex(id, items, "id");
      var end = this.getIndex(this.state.lastChecked, items, "id");
      items = items.slice(Math.min(start, end), Math.max(start, end) + 1);
      selectedItems.push(
        ...items.map(item => {
          return item.id;
        })
      );
      selectedItems = Array.from(new Set(selectedItems));
      this.props.selectedTodoItemsChange(selectedItems);
    }
    return;
  }
  handleChangeSelectAll() {
    if (this.props.todoApp.loading) {
      if (
        this.props.todoApp.selectedItems.length >=
        this.props.todoApp.todoItems.length
      ) {
        this.props.selectedTodoItemsChange([]);
      } else {
        this.props.selectedTodoItemsChange(
          this.props.todoApp.todoItems.map(x => x.id)
        );
      }
    }
  }

  getIndex(value, arr, prop) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][prop] === value) {
        return i;
      }
    }
    return -1;
  }
  render() {
    const {
      allTodoItems,
      todoItems,
      error,
      filter,
      searchKeyword,
      loading,
      orderColumn,
      labels,
      orderColumns,
      categories,
      selectedItems
    } = this.props.todoApp;
    const {messages} = this.props.intl;
    return (
      <Fragment>
        <Row className="app-row survey-app">
          <Colxx xxs="12">
            <div className="mb-2">
              <h1>
                <IntlMessages id="menu.todo" />
              </h1>

              <div className="float-sm-right">
                <Button
                  color="primary"
                  size="lg"
                  className="top-right-button"
                  onClick={this.toggleModal}
                >
                  <IntlMessages id="todo.add-new" />
                </Button>
                <Modal
                  isOpen={this.state.modalOpen}
                  toggle={this.toggleModal}
                  wrapClassName="modal-right"
                  backdrop="static"
                >
                  <ModalHeader toggle={this.toggleModal}>
                    <IntlMessages id="todo.add-new-title" />
                  </ModalHeader>
                  <ModalBody>
                    <Label className="mt-4">
                      <IntlMessages id="todo.title" />
                    </Label>
                    <Input
                      type="text"
                      defaultValue={this.state.title}
                      onChange={event => {
                        this.setState({ title: event.target.value });
                      }}
                    />
                    <Label className="mt-4">
                      <IntlMessages id="todo.detail" />
                    </Label>
                    <Input
                      type="textarea"
                      defaultValue={this.state.detail}
                      onChange={event => {
                        this.setState({ detail: event.target.value });
                      }}
                    />

                    <Label className="mt-4">
                      <IntlMessages id="todo.category" />
                    </Label>
                    <Select
                    components={{ Input:  CustomSelectInput}}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      options={categories.map((x, i) => {
                        return { label: x, value: x, key: i };
                      })}
                      value={this.state.category}
                      onChange={val => {
                        this.setState({ category: val });
                      }}
                    />
                    <Label className="mt-4">
                      <IntlMessages id="todo.label" />
                    </Label>
                    <Select
                    components={{ Input:  CustomSelectInput}}
                      className="react-select"
                      classNamePrefix="react-select"
                      name="form-field-name"
                      options={labels.map((x, i) => {
                        return {
                          label: x.label,
                          value: x.label,
                          key: i,
                          color: x.color
                        };
                      })}
                      value={this.state.label}
                      onChange={val => {
                        this.setState({ label: val });
                      }}
                    />

                    <Label className="mt-4">
                      <IntlMessages id="todo.status" />
                    </Label>
                    <CustomInput
                      type="radio"
                      id="exCustomRadio"
                      name="customRadio"
                      label="COMPLETED"
                      checked={this.state.status === "COMPLETED"}
                      onChange={event => {
                        this.setState({
                          status:
                            event.target.value == "on" ? "COMPLETED" : "PENDING"
                        });
                      }}
                    />
                    <CustomInput
                      type="radio"
                      id="exCustomRadio2"
                      name="customRadio2"
                      label="PENDING"
                      checked={this.state.status === "PENDING"}
                      onChange={event => {
                        this.setState({
                          status:
                            event.target.value != "on" ? "COMPLETED" : "PENDING"
                        });
                      }}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      color="secondary"
                      outline
                      onClick={this.toggleModal}
                    >
                      <IntlMessages id="todo.cancel" />
                    </Button>
                    <Button color="primary" onClick={() => this.addNetItem()}>
                      <IntlMessages id="todo.submit" />
                    </Button>{" "}
                  </ModalFooter>
                </Modal>{" "}
                <ButtonDropdown
                  isOpen={this.state.dropdownSplitOpen}
                  toggle={this.toggleSplit}
                >
                  <div className="btn btn-primary pl-4 pr-0 check-button">
                    <Label
                      for="checkAll"
                      className="custom-control custom-checkbox mb-0 d-inline-block"
                    >
                      <Input
                        className="custom-control-input"
                        type="checkbox"
                        id="checkAll"
                        checked={
                          loading
                            ? selectedItems.length >= todoItems.length
                            : false
                        }
                        onClick={() => this.handleChangeSelectAll()}
                      />
                      <span
                        className={`custom-control-label ${
                          loading &&
                          selectedItems.length > 0 &&
                          selectedItems.length < todoItems.length
                            ? "indeterminate"
                            : ""
                        }`}
                      />
                    </Label>
                  </div>
                  <DropdownToggle
                    caret
                    color="primary"
                    className="dropdown-toggle-split pl-2 pr-2"
                  />
                  <DropdownMenu right>
                    <DropdownItem>
                      <IntlMessages id="todo.action" />
                    </DropdownItem>
                    <DropdownItem>
                      <IntlMessages id="todo.another-action" />
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </div>
              <BreadcrumbItems match={this.props.match} />
            </div>

            <div className="mb-2">
              <Button
                color="empty"
                id="displayOptions"
                className="pt-0 pl-0 d-inline-block d-md-none"
                onClick={this.toggleDisplayOptions}
              >
                <IntlMessages id="todo.display-options" />{" "}
                <i className="simple-icon-arrow-down align-middle" />
              </Button>
              <Collapse
                className="d-md-block"
                isOpen={this.state.displayOptionsIsOpen}
              >
                <div className="d-block mb-2 d-md-inline-block">
                  <UncontrolledDropdown className="mr-1 float-md-left btn-group mb-1">
                    <DropdownToggle caret color="outline-dark" size="xs">
                      <IntlMessages id="todo.orderby" />
                      {orderColumn ? orderColumn.label : ""}
                    </DropdownToggle>
                    <DropdownMenu>
                      {orderColumns.map((o, index) => {
                        return (
                          <DropdownItem
                            key={index}
                            onClick={() => this.changeOrderBy(o.column)}
                          >
                            {o.label}
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <div className="search-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                  <input
                      type="text"
                      name="keyword"
                      id="search"
                      placeholder={messages["menu.search"]}
                      defaultValue={searchKeyword}
                      onKeyPress={e => this.handleKeyPress(e)}
                    />
                  </div>
                </div>
              </Collapse>
            </div>
            <Separator className="mb-5" />
            <Row>
              {loading ? (
                todoItems.map((item, index) => {
                  return (
                    <Colxx xxs="12" key={index}>
                      <Card className="card d-flex mb-3">
                        <div className="d-flex flex-grow-1 min-width-zero">
                          <CardBody className="align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                            <NavLink
                              to="#"
                              id={`toggler${item.id}`}
                              className="list-item-heading mb-0 truncate w-40 w-xs-100  mb-1 mt-1"
                            >
                              <i
                                className={`${
                                  item.status === "COMPLETED"
                                    ? "simple-icon-check heading-icon"
                                    : "simple-icon-refresh heading-icon"
                                }`}
                              />
                              <span className="align-middle d-inline-block">{item.title}</span>
                            </NavLink>
                            <p className="mb-1 text-muted text-small w-15 w-xs-100">
                              {item.category}
                            </p>
                            <p className="mb-1 text-muted text-small w-15 w-xs-100">
                              {item.createDate}
                            </p>
                            <div className="w-15 w-xs-100">
                              <Badge color={item.labelColor} pill>
                                {item.label}
                              </Badge>
                            </div>
                          </CardBody>
                          <div className="custom-control custom-checkbox pl-1 align-self-center pr-4">
                            <CustomInput
                              className="itemCheck mb-0"
                              type="checkbox"
                              id={`check_${item.id}`}
                              checked={
                                loading
                                  ? selectedItems.includes(item.id)
                                  : false
                              }
                              onClick={event =>
                                this.handleCheckChange(event, item.id)
                              }
                              label=""
                            />
                          </div>
                        </div>
                          <div className="card-body pt-1">
                            <p className="mb-0">{item.detail}</p>
                          </div>
                        
                      </Card>
                      
                    </Colxx>
                  );
                })
              ) : (
                <div className="loading" />
              )}
            </Row>
          </Colxx>
        </Row>

        <ApplicationMenu>
          <PerfectScrollbar
            option={{ suppressScrollX: true, wheelPropagation: false }}
          >
            <div className="p-4">
              <p className="text-muted text-small">
                <IntlMessages id="todo.status" />
              </p>
              <ul className="list-unstyled mb-5">
                <NavItem className={classnames({ active: !filter })}>
                  <NavLink to="#" onClick={e => this.addFilter("", "")}>
                    <i className="simple-icon-reload" />
                    <IntlMessages id="todo.all-tasks" />
                    <span className="float-right">
                      {loading && allTodoItems.length}
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem
                  className={classnames({
                    active:
                      filter &&
                      filter.column === "status" &&
                      filter.value === "PENDING"
                  })}
                >
                  <NavLink
                    to="#"
                    onClick={e => this.addFilter("status", "PENDING")}
                  >
                    <i className="simple-icon-refresh" />
                    <IntlMessages id="todo.pending-tasks" />
                    <span className="float-right">
                      {loading &&
                        todoItems.filter(x => x.status === "PENDING").length}
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem
                  className={classnames({
                    active:
                      filter &&
                      filter.column === "status" &&
                      filter.value === "COMPLETED"
                  })}
                >
                  <NavLink
                    to="#"
                    onClick={e => this.addFilter("status", "COMPLETED")}
                  >
                    <i className="simple-icon-check" />
                    <IntlMessages id="todo.completed-tasks" />
                    <span className="float-right">
                      {loading &&
                        todoItems.filter(x => x.status === "COMPLETED").length}
                    </span>
                  </NavLink>
                </NavItem>
              </ul>
              <p className="text-muted text-small">
                <IntlMessages id="todo.categories" />
              </p>
              <ul className="list-unstyled mb-5">
                {categories.map((c, index) => {
                  return (
                    <NavItem key={index}>
                      <div
                        onClick={e => this.addFilter("category", c)}
                      >
                        <div className="custom-control custom-radio">
                          <input
                            type="radio"
                            className="custom-control-input"
                            defaultChecked={
                              filter &&
                              filter.column === "category" &&
                              filter.value === c
                            }
                          />
                          <label className="custom-control-label">{c}</label>
                        </div>
                      </div>
                    </NavItem>
                  );
                })}
              </ul>
              <p className="text-muted text-small">
                <IntlMessages id="todo.labels" />
              </p>
              <div>
                {labels.map((l, index) => {
                  return (
                    <p className="d-sm-inline-block mb-1" key={index}>
                      <NavLink
                        to="#"
                        onClick={e => this.addFilter("label", l.label)}
                      >
                        <Badge
                          className="mb-1"
                          color={`${
                            filter &&
                            filter.column === "label" &&
                            filter.value === l.label
                              ? l.color
                              : "outline-" + l.color
                          }`}
                          pill
                        >
                          {l.label}
                        </Badge>
                      </NavLink>
                    </p>
                  );
                })}
              </div>
            </div>
          </PerfectScrollbar>
        </ApplicationMenu>
      </Fragment>
    );
  }
}
const mapStateToProps = ({ todoApp }) => {
  return {
    todoApp
  };
};
export default injectIntl(connect(
  mapStateToProps,
  {
    getTodoList,
    getTodoListWithFilter,
    getTodoListWithOrder,
    getTodoListSearch,
    addTodoItem,
    selectedTodoItemsChange
  }
)(TodoApplication));
