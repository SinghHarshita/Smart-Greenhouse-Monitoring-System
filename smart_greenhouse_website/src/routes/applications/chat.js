import React, { Component, Fragment } from "react";
import IntlMessages from "Util/IntlMessages";
import { injectIntl} from 'react-intl';
import {
  Row,
  Card,
  CardBody,
  Nav,
  Input,
  Button,
  TabContent,
  TabPane,
  CardHeader,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { Colxx } from "Components/CustomBootstrap";
import ApplicationMenu from "Components/ApplicationMenu";
import PerfectScrollbar from "react-perfect-scrollbar";
import { connect } from "react-redux";
import {
  getContacts,
  getConversations,
  changeConversation,
  addMessageToConversation,
  createConversation,
  searchContact
} from "Redux/actions";
import classnames from "classnames";

class ChatApplication extends Component {
  constructor(props) {
    super(props);
    this.toggleAppMenu = this.toggleAppMenu.bind(this);
    this.state = {
      menuActiveTab: "messages",
      messageInput: '',
      searchKey:''
    };
  }

  toggleAppMenu(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        menuActiveTab: tab
      });
    }
    if(tab==='messages')
    {
      this.handleSearchContact('')
    }
  }

  componentDidMount() {
    const currentUserId = 0;
    this.props.getContacts();
    this.props.getConversations(currentUserId);
  }

  componentDidUpdate() {
    if (this._scrollBarRef) {
      this._scrollBarRef._ps.element.scrollTop = this._scrollBarRef._ps.contentHeight;
    }
  }

  handleConversationClick(e, selectedUserId) {
    this.props.changeConversation(selectedUserId);
    this.handleSearchContact('')
  }

  handleSearchContact(keyword) {
    this.setState({
      searchKey: keyword
    })
    if (keyword.length > 0) {
      if (this.state.menuActiveTab !== "contacts") {
        this.setState({
          menuActiveTab: "contacts"
        })
      }
      this.props.searchContact(keyword);
    }else {
      this.props.searchContact('');
    }
  }

  handleChatInputChange(e) {
    this.setState({
      messageInput: e.target.value
    })
  }

  handleChatInputPress(e) {
    if (e.key === "Enter") {
      if (this.state.messageInput.length > 0) {
        this.props.addMessageToConversation(this.props.chatApp.currentUser.id, this.props.chatApp.selectedUser.id, this.state.messageInput, this.props.chatApp.conversations);
        this.setState({
          messageInput: '',
          menuActiveTab: 'messages',
        })
      }
    }
  }

  handleSendButtonClick() {
    if (this.state.messageInput.length > 0) {
      this.props.addMessageToConversation(this.props.chatApp.currentUser.id, this.props.chatApp.selectedUser.id, this.state.messageInput, this.props.chatApp.conversations);
      this.setState({
        messageInput: '',
        menuActiveTab: 'messages',
        searchKey: ''
      })
    }
  }

  handleContactClick(userId) {
    if (this.state.menuActiveTab !== "messages") {
      this.setState({
        menuActiveTab: "messages",
      })
      this.props.searchContact('');
    }

    const { conversations, currentUser } = this.props.chatApp;
    const conversation = conversations.find(x => x.users.includes(currentUser.id) && x.users.includes(userId))
    if (conversation) {
      this.props.changeConversation(userId);
    } else {
      this.props.createConversation(currentUser.id, userId, conversations)
    }
  }

  render() {
    const {
      contacts,
      allContacts,
      conversations,
      error,
      loadingConversations,
      loadingContacts,
      currentUser,
      selectedUser
    } = this.props.chatApp;
    const {messages} = this.props.intl;

    const selectedConversation = (loadingConversations && loadingContacts && selectedUser) ?
      conversations.find(x => x.users.includes(currentUser.id) && x.users.includes(selectedUser.id)) :
      null;
    return (

      (loadingConversations && loadingContacts) ?
        <Fragment>
          <Row className="app-row">
            <Colxx xxs="12" className="chat-app">
              {(loadingConversations && selectedUser) &&
                <div className="d-flex flex-row chat-heading">
                  <div className="d-flex">
                    <img
                      alt={selectedUser.name}
                      src={selectedUser.thumb}
                      className="img-thumbnail border-0 rounded-circle ml-0 mr-4 list-thumbnail align-self-center small"
                    />
                  </div>
                  <div className=" d-flex min-width-zero">
                    <div className="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                      <div className="min-width-zero">
                        <div>
                          <p className="list-item-heading mb-1 truncate ">{selectedUser.name}</p>
                        </div>
                        <p className="mb-0 text-muted text-small">{selectedUser.lastSeenDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              }
              <div className="separator mb-5" />

              {selectedConversation &&
                <PerfectScrollbar
                  ref={ref => {
                    this._scrollBarRef = ref;
                  }}
                  containerRef={ref => { }}
                  option={{ suppressScrollX: true, wheelPropagation: false }}
                >
                  {
                    selectedConversation.messages.map((item, index) => {
                      const sender = allContacts.find(x => x.id == item.sender);
                      return (
                        <Fragment key={index}>
                          <Card className={`d-inline-block mb-3 float-${item.sender != currentUser.id ? 'left' : 'right'}`}>
                            <div className="position-absolute  pt-1 pr-2 r-0">
                              <span className="text-extra-small text-muted">{item.time}</span>
                            </div>
                            <CardBody>
                              <div className="d-flex flex-row pb-1">
                                <img
                                  alt={sender.name}
                                  src={sender.thumb}
                                  className="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
                                />
                                <div className=" d-flex flex-grow-1 min-width-zero">
                                  <div className="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                    <div className="min-width-zero">
                                      <p className="mb-0 truncate list-item-heading">{sender.name}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="chat-text-left">
                                <p className="mb-0 text-semi-muted">{item.text}</p>
                              </div>
                            </CardBody>
                          </Card>
                          <div className="clearfix" />
                        </Fragment>
                      );
                    })}
                </PerfectScrollbar>
              }
            </Colxx>
          </Row>

          <div className="chat-input-container d-flex justify-content-between align-items-center">
            <Input
              className="form-control flex-grow-1"
              type="text"
              placeholder={messages["chat.saysomething"]}
              value={this.state.messageInput}
              onKeyPress={(e) => this.handleChatInputPress(e)}
              onChange={(e) => this.handleChatInputChange(e)}

            />
            <div>
              <Button
                outline
                color={"primary"}
                className="icon-button large ml-1"
              >
                <i className="simple-icon-paper-clip" />
              </Button>

              <Button color={"primary"} className="icon-button large ml-1" onClick={() => this.handleSendButtonClick()}>
                <i className="simple-icon-arrow-right" />
              </Button>
            </div>
          </div>

          <ApplicationMenu>
            <CardHeader className="pl-0 pr-0">
              <Nav tabs className="card-header-tabs ml-0 mr-0">
                <NavItem className="w-50 text-center">
                  <NavLink
                    className={classnames({
                      active: this.state.menuActiveTab === "messages",
                      "nav-link": true
                    })}
                    onClick={() => {
                      this.toggleAppMenu("messages");
                    }}
                    to="#"
                  >
                    <IntlMessages id="chat.messages" />
                </NavLink>
                </NavItem>
                <NavItem className="w-50 text-center">
                  <NavLink
                    className={classnames({
                      active: this.state.menuActiveTab === "contacts",
                      "nav-link": true
                    })}
                    onClick={() => {
                      this.toggleAppMenu("contacts");
                    }}
                    to="#"
                  >
                    <IntlMessages id="chat.contacts" />
                </NavLink>
                </NavItem>
              </Nav>
            </CardHeader>

            <div className="pt-4 pr-4 pl-4 pb-0">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control rounded"
                  placeholder={messages["menu.search"]}
                  value={this.state.searchKey}
                  onChange={(e) => this.handleSearchContact(e.target.value)}
                />
              </div>
            </div>

            <TabContent
              activeTab={this.state.menuActiveTab}
              className="chat-app-tab-content"
            >
              <TabPane tabId="messages" className="chat-app-tab-pane">
                <PerfectScrollbar
                  option={{ suppressScrollX: true, wheelPropagation: false }}
                >
                  <div className="pt-2 pr-4 pl-4 pb-2">
                    {(loadingContacts && loadingConversations) && conversations.map((item, index) => {
                      const otherUser = allContacts.find(u => u.id === item.users.find(x => x !== currentUser.id))
                      return (
                        <div
                          key={index}
                          className="d-flex flex-row mb-1 border-bottom pb-3 mb-3"
                        >
                          <NavLink className="d-flex" to="#" onClick={(e) => this.handleConversationClick(e, otherUser.id)}>
                            <img
                              alt={otherUser.name}
                              src={otherUser.thumb}
                              className="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
                            />
                            <div className="d-flex flex-grow-1 min-width-zero">
                              <div className="pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <div className="min-width-zero">
                                  <p className=" mb-0 truncate">{otherUser.name}</p>
                                  <p className="mb-1 text-muted text-small">
                                    {item.lastMessageTime}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </NavLink>

                        </div>
                      );
                    })}
                  </div>
                </PerfectScrollbar>
              </TabPane>
              <TabPane tabId="contacts" className="chat-app-tab-pane">
                <PerfectScrollbar
                  option={{ suppressScrollX: true, wheelPropagation: false }}
                >
                  <div className="pt-2 pr-4 pl-4 pb-2">
                    {loadingContacts && contacts.filter(x => x.id != currentUser.id).map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="d-flex flex-row mb-3 border-bottom pb-3"
                        >
                          <NavLink className="d-flex" to="#" onClick={() => this.handleContactClick(item.id)}>
                            <img
                              alt={item.name}
                              src={item.thumb}
                              className="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
                            />
                            <div className="d-flex flex-grow-1 min-width-zero">
                              <div className="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero">
                                <div className="min-width-zero">
                                  <p className="mb-0 truncate">{item.name}</p>
                                </div>
                              </div>
                            </div>
                          </NavLink>
                        </div>
                      );
                    })}
                  </div>
                </PerfectScrollbar>
              </TabPane>
            </TabContent>
          </ApplicationMenu>
        </Fragment>
        : <div className="loading"></div>
    );
  }
}

const mapStateToProps = ({ chatApp }) => {

  return { chatApp };
};
export default injectIntl(connect(
  mapStateToProps,
  {
    getContacts,
    getConversations,
    changeConversation,
    addMessageToConversation,
    createConversation,
    searchContact
  }
)(ChatApplication));
